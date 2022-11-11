import React from 'react';
import './App.css';
// import { useLoader } from '@react-three/fiber';
// import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import { Canvas } from '@react-three/fiber';
// import Box from './BoxSample';

const App: React.FC = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
