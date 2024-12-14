import React from 'react';
import { useGLTF } from '@react-three/drei';

const Gioiella = ({ position }) => {
  const { scene } = useGLTF('./assets/GioiellaWarehouse.glb');
  return <primitive object={scene} position={position} />;
};

export default Gioiella;