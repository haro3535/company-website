"use client"

import { Suspense, useRef } from "react";
import Image from "next/image";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from "three";

function Iphone16() {
    const result = useLoader(GLTFLoader, "/iphone_16/scene.gltf")
    const meshRef = useRef<THREE.Group>(null);

    // useFrame(() => {
    //     if (meshRef.current) {
    //         meshRef.current.rotation.y += 0.001; // Adjust the speed of rotation
    //     }
    // });

    result.scene.position.set(0, 0, -10)


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
                            <ambientLight intensity={0.1} />
                            <directionalLight position={[0, 0, 5]} intensity={1} />
                            <pointLight position={[10, 10, 10]} intensity={1} />
                            <pointLight position={[-10, -10, -10]} intensity={1} />
                            <Suspense fallback={null}>
                                <Iphone16 />
                            </Suspense>
                            <OrbitControls />
                        </mesh>
                    </Canvas>
                </div>
            </div>
        </div>
    )
}