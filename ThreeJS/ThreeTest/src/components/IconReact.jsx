import { useEffect } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import PropTypes from 'prop-types'; // Import PropTypes


const IconReact =  ({ containerRef }) => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const loader = new GLTFLoader();
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        containerRef.current.appendChild(renderer.domElement);
        //defined FOV, aspect ratio,close & far props
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
        const aspect = 0.5;
        renderer.setSize(window.innerWidth * aspect, window.innerHeight * aspect); // 80% of window size


        //set camera position
        camera.position.set(0, 0, 5);
        //set background as transparent
        renderer.setClearColor(0x000000, 0); // 0 is full transparency
        scene.background = null;

        //set omnidirectional light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Color and intensity
        scene.add(ambientLight);
        //instatiated control for interactions and loader to import 3D models
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        loader.load('./models/scene.gltf',// endereco do modelo 3d
            function (gltf) {
                scene.add(gltf.scene);
                gltf.animations; // Array<THREE.AnimationClip>
                gltf.scene; // THREE.Group
                gltf.scenes; // Array<THREE.Group>
                gltf.cameras; // Array<THREE.Camera>
                gltf.asset; // Object
            },// funcao pos carregamento do modelo

            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },// Loading
            function () {
                console.log('An error happened');
            }// error
        );
        function animate() {
            scene.rotation.x += 0.02;
            scene.rotation.y += 0.02;
            renderer.render(scene, camera);

        }
        renderer.setAnimationLoop(animate);
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
          };
          window.addEventListener('resize', handleResize);
        return () => {
            renderer.setAnimationLoop(null); // Stop animation loop
            containerRef.current.removeChild(renderer.domElement); // Remove renderer from DOM
        };
    }, [containerRef]);

    return null;
}
IconReact.propTypes = {
    containerRef: PropTypes.shape({
        current: PropTypes.instanceOf(Element),
    }).isRequired,
};
export default IconReact;
