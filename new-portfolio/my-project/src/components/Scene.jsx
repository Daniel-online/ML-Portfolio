import { useEffect } from 'react';
// import { render } from 'sass';
// import { computer } from './../assets/objects/scene.gltf'
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';


function init() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x= 800;
    camera.position.y= 100;
    camera.position.z= 1000;

    const hlight = new THREE.AmbientLight(0x404040, 100);

    scene.add(hlight);

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    let loader = new THREE.GLTFLoader();
    loader.load('./../assets/objects/scene.gltf', (gltf) => {
        let computer = gltf.scene.children[0];
        computer.scale.set(0.5,0.5,0.5);
        scene.add(gltf.scene);
        renderer.render(scene, camera);
        animate();
    });

    return () => {
        document.body.removeChild(renderer.domElement);
    };

}

const Scene = () => {
    useEffect(() => {

        const cleanup = init(); // Init the scene and return the cleanup function
        return cleanup; // Cleanup when the component is unmounted
    }
    )
};

export default Scene;
