import { useEffect } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import PropTypes from 'prop-types'; // Import PropTypes


const IconReact =  ({ containerRef }) => {
    useEffect(() => {
        const scene = new THREE.Scene();
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        if(containerRef.current){ 
        
            containerRef.current.appendChild(renderer.domElement);
        //defined FOV, aspect ratio,close & far props
       
            renderer.setSize(containerRef.current.innerWidth, containerRef.current.innerHeight); // 80% of window size
        }
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);

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

        const loadModel = (path, position) => {
        const loader = new GLTFLoader();
        loader.load(path,// endereco do modelo 3d
            (gltf) =>{
                scene.add(gltf.scene);
                scene.position.set(...position);
            },// funcao pos carregamento do modelo

           (xhr)=> {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },// Loading
            (error)=>{
                console.log('An error happened',error);
            }// error
        );
    }

    //set the object
    loadModel('/models/scene.gltf', [2, 0, -3]);
        function animate() {
            scene.rotation.x += 0.02;
            scene.rotation.y += 0.02;
            renderer.render(scene, camera);

        }
        renderer.setAnimationLoop(animate);
        //adapt canvas size to screen
        const handleResize = () => {
            renderer.setSize(containerRef.current.innerWidth, containerRef.current.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };


        //
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
