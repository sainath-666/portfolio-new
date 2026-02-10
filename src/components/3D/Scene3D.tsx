import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ParticleField from "./ParticleField";
import FloatingGeometry from "./FloatingGeometry";
import { Suspense } from "react";

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Suspense fallback={null}>
        <Canvas
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 15]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          {/* Ambient lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color="#06b6d4"
          />

          {/* Particle field */}
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>

          {/* Floating geometric shapes */}
          <Suspense fallback={null}>
            <FloatingGeometry
              position={[-8, 2, -5]}
              geometry="icosahedron"
              color="#06b6d4"
              speed={0.8}
            />
            <FloatingGeometry
              position={[8, -2, -8]}
              geometry="octahedron"
              color="#8b5cf6"
              speed={1.2}
            />
            <FloatingGeometry
              position={[0, 4, -10]}
              geometry="torus"
              color="#3b82f6"
              speed={0.6}
            />
            <FloatingGeometry
              position={[-6, -3, -6]}
              geometry="sphere"
              color="#a855f7"
              speed={1}
            />
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  );
}
