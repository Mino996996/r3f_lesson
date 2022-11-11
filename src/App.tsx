import React from 'react';
import './App.css';
// import { useLoader } from '@react-three/fiber';
// import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import { Canvas } from '@react-three/fiber';
// import Box from './BoxSample';
import { Cube } from './Cube';

const App: React.FC = () => {
  return (
    <div
      className="App"
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1,
          position: [0, 0, 5],
        }}
      >
        <Cube />
        <ambientLight args={[0xffffff]} intensity={0.2} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
      </Canvas>
    </div>
  );
};

export default App;
