"use client"

import { Suspense, useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from "three";
import { gsap } from "gsap";


function Iphone16() {
    const result = useLoader(GLTFLoader, "/iphone_16/scene.gltf")
    const meshRef = useRef<THREE.Group>(null);
    const [isAnimated, setIsAnimated] = useState(false);

    // useFrame(() => {
    //     if (meshRef.current) {
    //         meshRef.current.rotation.y += 0.001; // Adjust the speed of rotation
    //     }
    // });

    result.scene.position.set(6.2, 0, 0) // Start position to the right
    result.scene.rotation.set(0, Math.PI, 0) // Rotate back to face the camera
    result.scene.scale.set(0.25, 0.25, 0.25)

    useEffect(() => {
        if (meshRef.current && !isAnimated) {
            setIsAnimated(true); // Set the animated state to true
            // Create a GSAP timeline for sequential animations
            const timeline = gsap.timeline();

            // Step 1: Move the object from the right while rotating on the Y-axis
            timeline.to(meshRef.current.position, {
                x: 0, // Move to the center (origin)
                duration: 2.5,
                ease: "power1.inOut",
            }, 0); // Start at the same time as the rotation

            timeline.to(meshRef.current.rotation, {
                y: Math.PI * 2, // Rotate 360 degrees (2π radians)
                duration: 2.5,
                ease: "power1.inOut",
            }, 0); // Start at the same time as the position animation

            // Step 2: Zoom in after reaching the middle
            timeline.to(meshRef.current.scale, {
                x: 0.5,
                y: 0.5,
                z: 0.5,
                duration: 2,
                ease: "power1.inOut",
            }, 3); // Start after the position animation is complete
        }
        
        // MP4 Video Texture 
        const video = document.createElement("video");
        video.src = "/video.mp4"; // in public file
        video.crossOrigin = "Anonymous";
        video.loop = true;
        video.muted = true;
        video.play();

        const videoTexture = new THREE.VideoTexture(video);
        videoTexture.flipY = false;

  

        // "Object_18" is the name of the object that is the scene part of the model
        result.scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh && child.name === "Object_18") {
                (child as THREE.Mesh).material = new THREE.MeshBasicMaterial({
                    map: videoTexture,
                });
            }
        });
    }, []);


    return <primitive ref={meshRef} object={result.scene} />
}

export default function Module01() {
    return (
        <div className="w-full">
            {/* <h1>Module01</h1> */}
            <div className="flex items-center justify-end space-x-10">
                <div className="w-1/3 space-y-8">
                    <div className="w-full py-4 px-2 space-y-3.5">
                        <p className="text-xl">Mobile Apps</p>
                        <p className="text-[15px] text-gray-300">
                            Mobile development involves creating applications
                             for mobile devices, focusing on user experience,
                              performance, and platform-specific features.
                        </p>
                        <div className="flex space-x-3">
                            <Image src="/app-store.png" alt="ios" width={35} height={35}  />
                            <Image src="/google-play.png" alt="ios" width={35} height={35}  />
                        </div>
                    </div>
                    <div className="w-full py-4 px-2 space-y-3.5">
                        <p className="text-xl">AI Entegration</p>
                        <p className="text-[15px] text-gray-300">
                            AI integration enhances applications with intelligent features,
                             improving user experience and automating tasks.
                        </p>
                    </div>
                </div>
                <div className="w-1/2 h-[60vh]">
                    <Canvas>
                        <mesh>
                            <ambientLight intensity={1} />
                            <directionalLight position={[0, 0, 5]} intensity={0.5} />
                            <Suspense fallback={null}>
                                <Iphone16 />
                            </Suspense>
                        </mesh>  
                    </Canvas>
                </div>
            </div>
        </div>
    )
}