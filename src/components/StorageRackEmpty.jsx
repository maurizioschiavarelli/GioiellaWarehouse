import React from 'react';
import { useGLTF } from '@react-three/drei';

const StorageRackEmpty = ({ position }) => {
  const { scene } = useGLTF('./assets/storage-rack-empty.glb');
  return <primitive object={scene} scale={[6, 6, 6]} position={position} />;
};

export default StorageRackEmpty;