
import { useGLTF } from "@react-three/drei";

const WarehouseModel = () => {
  
  const { scene } = useGLTF("assets/GioiellaWarehouse.glb");
  return <primitive object={scene} />;
};


export default WarehouseModel
