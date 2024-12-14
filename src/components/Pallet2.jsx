import React from 'react';
import { useGLTF } from '@react-three/drei';

const Pallet2 = ({ position }) => {
  const { scene } = useGLTF('./assets/pallet2.glb');
  return <primitive object={scene} position={position} />;
};

export default Pallet2;
