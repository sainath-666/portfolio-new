import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingGeometryProps {
  position: [number, number, number];
  geometry: "sphere" | "torus" | "octahedron" | "icosahedron";
  color: string;
  speed?: number;
}

export default function FloatingGeometry({
  position,
  geometry,
  color,
  speed = 1,
}: FloatingGeometryProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "sphere":
        return <sphereGeometry args={[1, 32, 32]} />;
      case "torus":
        return <torusGeometry args={[1, 0.4, 16, 100]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {renderGeometry()}
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}
