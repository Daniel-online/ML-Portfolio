import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Cube = () => {

    const containerRef = useRef(null);
    useEffect(() => {
        // Check if the containerRef is available
        if (!containerRef.current) return;
        // Set up the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        // Set the size of the renderer and append it to the DOM
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;

        containerRef.current.appendChild(containerWidth, containerHeight);

        // Create a cube
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Update the camera aspect ratio and projection matrix based on the container's size
        camera.aspect = containerWidth / containerHeight;
        camera.updateProjectionMatrix();    
        // Position the camera
        camera.position.z = 5;

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();

        // Cleanup when the component is unmounted
        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div id="three-js-container">
            {/* This div can be used for any other content or styling purposes */}
        </div>
    );
};

export default Cube;
