'use client'

import { Environment } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'
import { useRef } from 'react'

export default function KingScene() {
  return (
    <Canvas camera={{ position: [-0.3, 0.3, -0.3] }}>
      <King />
    </Canvas>
  )
}

const King = () => {
  const gltf = useLoader(GLTFLoader, '/chess_king.glb')
  const groupRef = useRef<THREE.Mesh>(null)

  gltf.scene.scale.set(0.22, 0.22, 0.22)
  gltf.scene.position.set(0, 0.2, 0)

  gltf.scene.traverse((child: THREE.Mesh) => {
    child.material = new THREE.MeshStandardMaterial({
      color: 0x000000,
      metalness: 0.1,
      roughness: 0.2,
    })
  })

  useFrame((state) => {
    if (!groupRef.current) return

    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime / 200) * 100
    groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime / 200) * 100
    groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime / 200) * 100
  })

  return (
    <>
      <Environment preset="dawn" />
      <group ref={groupRef}>
        <primitive object={gltf.scene} />
      </group>
    </>
  )
}
