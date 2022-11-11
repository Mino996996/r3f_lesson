import React, { FC, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';

export const Cube: FC = () => {
  const cubeRef = useRef<Mesh>(null);
  useFrame(() => {
    const cube = cubeRef.current;
    if (cube == null) return;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  });
  return (
    <mesh ref={cubeRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color="aqua" />
      <OrbitControls />
    </mesh>
  );
};
