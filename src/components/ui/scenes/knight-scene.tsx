'use client'

import { Environment } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

export default function KnightScene() {
  return (
    <Canvas camera={{ position: [-0.55, 0, 0], near: 0.00001, fov: 35 }}>
      <Knight />
      <Environment preset="dawn" />
    </Canvas>
  )
}

const Knight = () => {
  const gltf = useLoader(GLTFLoader, '/chess_knight.glb')
  const light = useRef<THREE.PointLight>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()

  const ease = (current: number, target: number, factor: number) => {
    return current + ((target - current) * factor) / 4
  }

  useFrame(() => {
    if (!light.current) return

    const targetX = 0.45 + (cursor.y * Math.PI) / 30
    const targetY = Math.PI / 1.2 + (cursor.x * Math.PI) / 20

    gltf.scene.rotation.x = ease(gltf.scene.rotation.x, targetX, 0.1)
    gltf.scene.rotation.y = ease(gltf.scene.rotation.y, targetY, 0.1)
    light.current.position.x = 0.1
    light.current.position.y = ease(light.current.position.y, cursor.y / 20, 0.1)
    light.current.position.z = ease(light.current.position.z, cursor.x / 5, 0.1)
  })

  useEffect(() => {
    gltf.scene.traverse((child: THREE.Mesh) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: theme === 'light' ? 0xffffff : 0x000000,
          metalness: 0.8,
          roughness: 0.15,
        })
      }
    })

    gltf.scene.scale.set(0.08, 0.08, 0.08)
    gltf.scene.rotation.y = Math.PI / 1.2
    gltf.scene.rotation.x = 0.45

    window.addEventListener('mousemove', (e) => {
      setCursor({
        x: e.clientX / (window.innerWidth / 2) - 1,
        y: e.clientY / (window.innerHeight / 2) - 1,
      })
    })

    return () => window.removeEventListener('mousemove', () => {})
  }, [gltf.scene, theme])

  return (
    <>
      <primitive object={gltf.scene} />
      <pointLight ref={light} color="hotpink" intensity={1} decay={10} />
    </>
  )
}
