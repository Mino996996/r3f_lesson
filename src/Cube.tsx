import React, { FC, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Mesh } from 'three';

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
    </mesh>
  );
};
