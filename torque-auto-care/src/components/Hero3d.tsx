"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function CarModel() {
    const { scene } = useGLTF("/models/car.glb");
    return <primitive object={scene} scale={0.03} position={[0, -2, 0]} />;
}

export default function Hero3D() {
    return (
        <div className="h-[400px] w-full">
            <Canvas camera={{ position: [0, 2, 15], fov: 50 }}>
                <ambientLight intensity={2} />
                <directionalLight position={[2, 5, 2]} intensity={3} />

                <CarModel />

                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={1.5}
                />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}