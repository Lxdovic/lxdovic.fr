'use client'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'

export const Scene = () => {
  return (
    <div className="absolute top-0 h-screen w-4/5 right-0">
      <Canvas
        camera={{
          position: [-0.3, 0.3, -0.3],
        }}
      >
        <Environment preset="dawn" />
        <Knight />
      </Canvas>
    </div>
  )
}

const Knight = () => {
  const gltf = useLoader(GLTFLoader, '/chess_knight.glb')

  gltf.scene.scale.set(0.08, 0.08, 0.08)

  gltf.scene.traverse((child: THREE.Mesh) => {
    child.material = new THREE.MeshStandardMaterial({
      color: 0x000000,
      metalness: 0.1,
      roughness: 0.2,
    })
  })

  useFrame((state) => {
    gltf.scene.rotation.y = Math.sin(state.clock.elapsedTime / 200) * 100
    gltf.scene.rotation.x = Math.cos(state.clock.elapsedTime / 200) * 100
    gltf.scene.rotation.z = Math.sin(state.clock.elapsedTime / 200) * 100
  })

  return <primitive object={gltf.scene} />
}
