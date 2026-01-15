'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

interface Model3DViewerProps {
  modelUrl?: string
  fallbackImage?: string
}

function LoadingBox() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#8b5cf6" wireframe />
    </mesh>
  )
}

function GLBModel({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={1.5} />
}

function VoxelLotus() {
  // Simplified voxel lotus representation
  const petals = []
  const petalCount = 8
  
  for (let i = 0; i < petalCount; i++) {
    const angle = (i / petalCount) * Math.PI * 2
    const x = Math.cos(angle) * 1.5
    const z = Math.sin(angle) * 1.5
    
    petals.push(
      <mesh key={i} position={[x, 0.5, z]} rotation={[0, angle, Math.PI / 6]}>
        <boxGeometry args={[0.8, 1.5, 0.3]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>
    )
  }
  
  return (
    <group>
      {/* Center */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 8]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
      
      {/* Petals */}
      {petals}
      
      {/* Stem */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 8]} />
        <meshStandardMaterial color="#10b981" />
      </mesh>
    </group>
  )
}

export function Model3DViewer({ modelUrl, fallbackImage }: Model3DViewerProps) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg overflow-hidden border-4 border-purple-700 relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          minDistance={3}
          maxDistance={10}
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        
        <Suspense fallback={<LoadingBox />}>
          {modelUrl ? (
            <GLBModel url={modelUrl} />
          ) : (
            <VoxelLotus />
          )}
        </Suspense>
        
        <Environment preset="sunset" />
        
        {/* Grid floor */}
        <gridHelper args={[10, 10, '#8b5cf6', '#4c1d95']} position={[0, -2, 0]} />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 pixel-text text-xs text-purple-300 bg-black/50 px-3 py-2 rounded">
        DRAG TO ROTATE • SCROLL TO ZOOM
      </div>
    </div>
  )
}
