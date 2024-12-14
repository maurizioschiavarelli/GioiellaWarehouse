import React, { useEffect } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { Plane, MapControls } from '@react-three/drei'
import { TextureLoader } from 'three'
import * as THREE from 'three'
import { OrbitControls, useGLTF } from "@react-three/drei";

import Gioiella from './components/Gioiella'

const WarehouseModel = () => {
  
  const { scene } = useGLTF("assets/GioiellaWarehouse.glb");
  return <primitive object={scene} />;
};


export default WarehouseModel
