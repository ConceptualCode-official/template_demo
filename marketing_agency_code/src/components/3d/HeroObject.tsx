import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

export const HeroObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Slower, smoother rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Icosahedron args={[1, 0]} ref={meshRef} scale={isMobile ? 1.5 : 2.5}>
        {isMobile ? (
          // MOBILE: High-performance Standard Material (Looks premium, costs 0 GPU)
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.1}
            metalness={0.9}
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        ) : (
          // DESKTOP: Full Refractive Glass
          <MeshTransmissionMaterial
            backside
            samples={6} // Reduced from 10 for better average desktop performance
            resolution={510}
            transmission={1}
            roughness={0.1}
            thickness={1.5}
            ior={1.5}
            chromaticAberration={0.06}
            anisotropy={0.1}
            distortion={0.5}
            distortionScale={0.3}
            temporalDistortion={0.5}
            color="#ffffff"
            background={new THREE.Color('#050505')}
          />
        )}
      </Icosahedron>
    </Float>
  );
};
