import { useEffect } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { useRef } from 'react';
// import dragMe from "./../../assets/images/dragMe.gif";

const MultiObjects = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        if (!containerRef.current) return;
        const scene = new THREE.Scene();

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        containerRef.current.appendChild(renderer.domElement);
        //defined FOV, aspect ratio,close & far props
        const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 500);
        const aspect = 0.7;
        renderer.setSize(containerRef.current.clientWidth * aspect, containerRef.current.clientHeight * aspect); // 80% of window size


        //set camera position
        camera.position.set(0, 0, 4);
        //set background as transparent
        renderer.setClearColor(0x000000, 0); // 0 is full transparency
        scene.background = null;

        // //set omnidirectional light
        // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Color and intensity
        // scene.add(ambientLight);
        //set directional light

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Sunlight-like effect
        directionalLight.position.set(5, 10, 7.5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        // const pointLight = new THREE.PointLight(0xffffff, 0.5, 50); // Focused light source
        // pointLight.position.set(5, 10, 7.5);
        // scene.add(pointLight);

        // const spotLight = new THREE.SpotLight(0xffffff, 1); // Color and intensity
        // spotLight.position.set(5, 10, 5);
        // spotLight.castShadow = true; // Enable shadows
        // scene.add(spotLight);

        //instatiated control for interactions and loader to import 3D models
        const controls = new OrbitControls(camera, renderer.domElement);

        const loadModel = (path, position) => {
            const loader = new GLTFLoader();

            loader.load(path,// endereco do modelo 3d
                (gltf) => {
                    scene.add(gltf.scene);
                    gltf.scene.position.set(...position);
                },// funcao pos carregamento do modelo

                (xhr) => {
                    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                },// Loading
                (error) => {
                    console.log('An error happened', error);
                }// error
            );
        }
        // Load multiple models with different positions
        // loadModel('/models/retro_computer/oldpc.gltf', [0, 0, 0]); // Model 1 at origin
        loadModel('/models/scene.gltf', [0, 0, 0]); // Model 2 offset

        ///
        function animate() {
            controls.update();
            scene.rotation.z += 0.03;
            scene.rotation.y += 0.02;
            scene.rotation.x += 0.02;
            renderer.render(scene, camera);

        }
        renderer.setAnimationLoop(animate);

        return () => {
            renderer.setAnimationLoop(null); // Stop animation loop
            containerRef.current.removeChild(renderer.domElement); // Remove renderer from DOM
        };
    }, []);


    return (
        // <div className='flex-col items-center'>
            <div ref={containerRef} style={{ width: '100%', height: '100%' }} className="mt-2 flex flex-col w-fit h-fit">

            </div>
            /* <br></br>
            <br></br>
            <img className="mr-2 mb-2 h-1/2 w-1/2" src={dragMe} alt="logo" /> */
        // </div>
    )
}

export default MultiObjects
