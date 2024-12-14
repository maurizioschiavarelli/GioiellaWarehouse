import React from 'react';
import { useGLTF } from '@react-three/drei';

const Cs = ({ position }) => {
  const { scene } = useGLTF('./assets/cs.glb');
  return <primitive object={scene} scale={[3, 3, 3]} position={position} />;
};

export default Cs;
