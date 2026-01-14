import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function GLBModel({ modelPath }) {
  const gltf = useGLTF(modelPath);
  return <primitive object={gltf.scene} scale={[2.2, 2.2, 2.2]} position={[0, 0.6, 0]} />;
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#AA367C" wireframe />
    </mesh>
  );
}

export const Model3D = ({ modelPath }) => {
  return (
    <Canvas 
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ 
        antialias: false, 
        alpha: true, 
        powerPreference: 'high-performance',
        stencil: false,
        depth: true
      }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 10, 5]} intensity={1.5} />
      
      <Suspense fallback={<Loader />}>
        <GLBModel modelPath={modelPath} />
      </Suspense>
      
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={2}
        enableZoom={true}
        minDistance={3}
        maxDistance={12}
        enableDamping
        dampingFactor={0.05}
      />
    </Canvas>
  );
};

// Preload the model
useGLTF.preload('/static/media/contact-model.glb');
