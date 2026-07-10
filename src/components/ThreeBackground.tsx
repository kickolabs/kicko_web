import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial, MeshWobbleMaterial, Torus } from '@react-three/drei';
import * as THREE from 'three';

const FloatingParticles = ({ count = 2000 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        p[i * 3] = (Math.random() - 0.5) * 40;
        p[i * 3 + 1] = (Math.random() - 0.5) * 40;
        p[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.003;
    ref.current.rotation.x = time * 0.001;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22D3EE"
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.15}
      />
    </Points>
  );
};

const InteractiveShape = ({ position, color, distort }: { position: [number, number, number], color: string, distort: number }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 2) / 8;
    meshRef.current.rotation.y = Math.cos(time / 2) / 8;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} position={position}>
      <Sphere
        ref={meshRef}
        args={[1, 64, 64]}
        scale={hovered ? 1.1 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={distort}
          radius={1}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.4}
        />
      </Sphere>
    </Float>
  );
};

const LuxuryCrystal = ({ position, color, args }: { position: [number, number, number], color: string, args: any }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4) / 8;
    meshRef.current.rotation.y = time / 6;
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5} position={position}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={args} />
        <meshStandardMaterial
          color={color}
          metalness={1}
          roughness={0.1}
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const GeometricObjects = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(time / 15) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <LuxuryCrystal position={[-10, 5, -15]} color="#2563EB" args={[1.5, 0]} />
      <LuxuryCrystal position={[10, -6, -12]} color="#7C3AED" args={[2, 0]} />
      <LuxuryCrystal position={[-5, -10, -18]} color="#22D3EE" args={[1, 0]} />
      <LuxuryCrystal position={[12, 8, -20]} color="#7C3AED" args={[1.8, 0]} />
      
      <InteractiveShape position={[-4, 2, -10]} color="#2563EB" distort={0.2} />
      <InteractiveShape position={[6, 0, -15]} color="#7C3AED" distort={0.3} />
      
      <Float speed={0.3} rotationIntensity={0.5} floatIntensity={0.3} position={[0, 0, -15]}>
        <Torus args={[15, 0.002, 16, 120]}>
          <meshBasicMaterial color="#22D3EE" transparent opacity={0.05} />
        </Torus>
      </Float>
    </group>
  );
};

export const ThreeBackground = () => {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setCanRender(supported);
    } catch {
      setCanRender(false);
    }
  }, []);

  if (!canRender) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-1000">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.4} />
        <spotLight position={[20, 20, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-15, -15, -5]} color="#7C3AED" intensity={0.5} />
        <FloatingParticles />
        <GeometricObjects />
      </Canvas>
    </div>
  );
};
