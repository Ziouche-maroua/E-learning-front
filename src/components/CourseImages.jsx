// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const CourseImage = () => {
//     const containerRef = useRef();

//     useEffect(() => {
//         // Place the provided visualization script code here

//         // Example: Initialize Three.js scene and render it in the containerRef.current
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, containerRef.current.offsetWidth / containerRef.current.offsetHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer();
//         renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
//         containerRef.current.appendChild(renderer.domElement);

//         const geometry = new THREE.BoxGeometry();
//         const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//         const cube = new THREE.Mesh(geometry, material);
//         scene.add(cube);

//         camera.position.z = 5;

//         const animate = function () {
//             requestAnimationFrame(animate);

//             cube.rotation.x += 0.01;
//             cube.rotation.y += 0.01;

//             renderer.render(scene, camera);
//         };

//         animate();

//         return () => {
//             // Cleanup code if needed
//         };
//     }, []);

//     return <div ref={containerRef} />;
// };

// export default CourseImage;
