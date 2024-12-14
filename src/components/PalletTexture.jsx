import React from 'react';
import { useGLTF } from '@react-three/drei';

const PalletTexture = ({ position }) => {
  const { scene } = useGLTF('./assets/palletTexture.glb');
  return <primitive object={scene} scale={[3, 3, 3]} position={position} />;
};

export default PalletTexture;
