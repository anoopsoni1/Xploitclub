"use client";

import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function RotatingCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.y = t * 0.28;
  });

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#9fd8ff",
        metalness: 0.45,
        roughness: 0.2,
        emissive: new THREE.Color("#5ca8ff"),
        emissiveIntensity: 0.25,
        wireframe: true,
      }),
    [],
  );

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.1}>
      <mesh ref={meshRef} material={material}>
        <icosahedronGeometry args={[1.25, 1]} />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#060606"]} />
        <fog attach="fog" args={["#060606", 5, 10]} />
        <ambientLight intensity={0.35} />
        <pointLight position={[2, 2, 2]} intensity={35} color="#7cc8ff" />
        <pointLight position={[-2, -1, 1]} intensity={18} color="#68ffc5" />
        {!shouldReduceMotion ? (
          <Sparkles
            count={70}
            scale={[7, 5, 4]}
            size={2}
            speed={0.35}
            color="#89cfff"
            opacity={0.6}
          />
        ) : null}
        <RotatingCore />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!shouldReduceMotion}
          autoRotateSpeed={0.3}
          minPolarAngle={Math.PI / 2.25}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,transparent_0%,rgba(6,6,6,0.72)_55%,rgba(6,6,6,0.94)_100%)]" />
    </div>
  );
}
