import { useEffect } from "react"
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//instatiated important classes as PerspectiveCamera, Scene and WbGlRenderer

function Cube() {
    useEffect(() => {
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer();
        document.body.appendChild(renderer.domElement);

        //defined FOV, aspect ratio,close & far props
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        //create sphere to be rendered
        const geometry = new THREE.BoxGeometry(50, 50, 50);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        //set camera position
        camera.position.set(0, 20, 100);
        //instatiated control for interactions and loader to import 3D models
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();
        // const loader = new GLTFLoader();
        function animate() {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);

        }
        renderer.setAnimationLoop(animate);

        return () => {
            renderer.setAnimationLoop(null); // Stop animation loop
            document.body.removeChild(renderer.domElement); // Remove renderer from DOM
        };
    }, []);
    return (
        <>
        </>
    )
}

export default Cube;