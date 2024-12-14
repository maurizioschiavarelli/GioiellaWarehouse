import { Canvas } from '@react-three/fiber'
import WarehouseModel from './WarehouseModel'
import { OrbitControls} from '@react-three/drei'

const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>

      <ambientLight intensity={2} />
      <directionalLight position={[20, 30, 30]} />
      <OrbitControls />
      <WarehouseModel />

    </Canvas>
  )
}

export default App
