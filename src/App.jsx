import { Canvas, useFrame } from '@react-three/fiber'
import { MapControls, Text, useGLTF } from '@react-three/drei'
import WarehouseModel from './WarehouseModel'
import { items as initialItems } from './data'
import { useRef, useState, Suspense } from 'react'
import { EffectComposer, Bloom, DepthOfField, SSAO, FXAA } from '@react-three/postprocessing'
import * as THREE from 'three' // Import di THREE per accedere a tutte le costanti e funzionalità

// Componente per caricare il modello 3D personalizzato
const CustomModel = ({ position, name, rotation, onClick }) => {
  const { scene } = useGLTF('./assets/cs.glb') // Percorso del tuo modello GLTF
  const clonedScene = scene.clone() // Clona il modello per ogni istanza

  const [hovered, setHovered] = useState(false)

  return (
    <group position={position} rotation={rotation}>
      {/* Caricamento e visualizzazione del modello */}
      <primitive object={clonedScene} scale={1.13} castShadow receiveShadow />

      {/* Posiziona il testo sopra il modello */}
      <Text
        position={[0, 1.1, 3.3]} // Posizione del testo sopra il modello (modifica le coordinate)
        fontSize={0.4}
        color="black"
        anchorX="center"
        anchorY="middle"
        onClick={onClick} // Aggiungi evento onClick
        style={{ cursor: 'pointer' }} // Cambia il cursore al passaggio del mouse
      >
        {name}
      </Text>
    </group>
  )
}

// Componente che controlla la telecamera e ne limita il movimento
const CameraControls = () => {
  const camera = useRef(null)

  // Usa useFrame per aggiornare la posizione della telecamera ogni frame
  useFrame(() => {
    if (camera.current) {
      // Limita la posizione Y della telecamera per evitare che scenda sotto il pavimento
      if (camera.current.position.y < 1) {
        camera.current.position.y = 1
      }
    }
  })

  return null
}

const App = () => {
  const [items, setItems] = useState(initialItems) // Stato per gestire gli oggetti

  // Funzione per modificare il nome
  const handleNameChange = id => {
    const newName = window.prompt('Inserisci il nuovo nome:')
    if (newName) {
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, name: newName } : item
        )
      )
    }
  }

  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [0, 10, 20], zoom: 2, near: 0.1, far: 300 }}
      
      shadows
    >
      {/* Griglia di sfondo */}
      <gridHelper args={[100, 90]} />

      {/* Illuminazione avanzata */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
      <spotLight position={[15, 20, 5]} angle={0.3} intensity={2} castShadow />

      {/* Skybox per lo sfondo */}
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial side={THREE.BackSide} />
      </mesh>

      {/* Effetti di post-processing */}
      <EffectComposer>
        <Bloom intensity={1.5} width={300} height={300} />
        <DepthOfField focalLength={1} bokehScale={1} height={480} />
        <SSAO samples={30} radius={20} intensity={30} />
        <FXAA />
      </EffectComposer>

      {/* Modello 3D del magazzino */}
      <WarehouseModel />

      {/* Controlli Touch/Desktop */}
      <MapControls maxPolarAngle={Math.PI / 2 - 0.1} />

      {/* Creazione dei modelli personalizzati */}
      <Suspense fallback={null}>
        {items.map(item => (
          <CustomModel
            key={item.id}
            position={item.position}
            name={item.name}
            rotation={item.rotation} // Passa la rotazione
            onClick={() => handleNameChange(item.id)} // Aggiungi evento clic
          />
        ))}
      </Suspense>

      {/* Telecamera con limitazioni */}
      <CameraControls />
    </Canvas>
  )
}

export default App
