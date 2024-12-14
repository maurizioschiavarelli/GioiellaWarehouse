import React from 'react';
import { useGLTF } from '@react-three/drei';

const Pallet = ({ position }) => {
  const { scene } = useGLTF('./assets/pallet.glb');
  return <primitive object={scene} position={position} />;
};

export default Pallet;
