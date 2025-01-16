'use client'

import { Environment } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function KnightScene() {
  return (
    <Canvas camera={{ position: [-0.3, 0.3, -0.3], near: 0.00001, fov: 35 }}>
      <Knight />
      <Environment preset="dawn" />
    </Canvas>
  )
}

const Knight = () => {
  const gltf = useLoader(GLTFLoader, '/chess_knight.glb')
  const { theme } = useTheme()

  gltf.scene.scale.set(0.08, 0.08, 0.08)

  useEffect(() => {
    gltf.scene.traverse((child: THREE.Mesh) => {
      child.material = new THREE.MeshStandardMaterial({
        color: theme === 'light' ? 0xffffff : 0x000000,
        metalness: 0.8,
        roughness: 0.15,
      })
    })
  }, [gltf.scene, theme])

  useFrame((state) => {
    gltf.scene.rotation.y = Math.sin(state.clock.elapsedTime / 200) * 30
    gltf.scene.rotation.x = 0.65
    gltf.scene.rotation.z = 0.15
  })

  return <primitive object={gltf.scene} />
}
