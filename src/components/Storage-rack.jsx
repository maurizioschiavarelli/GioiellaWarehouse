import React from 'react';
import { useGLTF } from '@react-three/drei';

const StorageRack = ({ position }) => {
  const { scene } = useGLTF('./assets/storage-rack.glb');
  return <primitive object={scene} scale={[6, 6, 6]} position={position} />;
};

export default StorageRack;
