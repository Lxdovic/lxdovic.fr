'use client'

import { Environment } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, scrollTrigger)

export default function KnightScene() {
  return (
    <div className="w-full absolute -z-20 h-full top-0 left-0">
      <Canvas camera={{ position: [-0.55, 0, 0], fov: 35 }}>
        <Knight />
        <Environment preset="dawn" />
      </Canvas>
    </div>
  )
}

const Knight = () => {
  const knight = useLoader(GLTFLoader, '/chess_knight.glb')
  const pawn = useLoader(GLTFLoader, '/chess_pawn.glb')
  const king = useLoader(GLTFLoader, '/chess_king.glb')
  const light = useRef<THREE.PointLight>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()

  const ease = (current: number, target: number, factor: number) => {
    return current + ((target - current) * factor) / 4
  }

  useFrame((state) => {
    if (!light.current) return

    const targetKnightX = 0.35 + (cursor.y * Math.PI) / 30
    const targetKnightY = Math.PI / 1.2 + (cursor.x * Math.PI) / 20

    const targetPawnX = -0.45 + (cursor.y * Math.PI) / 30
    const targetPawnY = Math.PI / 1.2 + (cursor.x * Math.PI) / 20

    const targetKingX = 0.65 + (cursor.y * Math.PI) / 30
    const targetKingY = Math.PI / 1.2 + (cursor.x * Math.PI) / 20

    knight.scene.scale.set(0.08, 0.08, 0.08)
    king.scene.scale.set(0.16, 0.16, 0.16)
    pawn.scene.scale.set(0.04, 0.04, 0.04)

    knight.scene.rotation.x = ease(knight.scene.rotation.x, targetKnightX, 0.1)
    knight.scene.rotation.y = ease(knight.scene.rotation.y, targetKnightY, 0.1)

    pawn.scene.rotation.x = ease(pawn.scene.rotation.x, targetPawnX, 0.1)
    pawn.scene.rotation.y = ease(pawn.scene.rotation.y, targetPawnY, 0.1)

    king.scene.rotation.x = ease(king.scene.rotation.x, targetKingX, 0.1)
    king.scene.rotation.y = ease(king.scene.rotation.y, targetKingY, 0.1)

    light.current.position.x = 0.1
    light.current.position.y = ease(light.current.position.y, cursor.y / 20, 0.1)
    light.current.position.z = ease(light.current.position.z, cursor.x / 5, 0.1)

    state.camera.position.y = ease(state.camera.position.y, -cursor.y / 30, 0.1)
    state.camera.position.z = ease(state.camera.position.z, cursor.x / 30, 0.1)
    state.camera.lookAt(0, state.camera.position.y / 2, state.camera.position.z / 2)
  })

  useEffect(() => {
    knight.scene.traverse((child: THREE.Mesh) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: theme === 'light' ? 0xffffff : 0x000000,
          metalness: 0.8,
          roughness: 0.15,
        })
      }
    })

    pawn.scene.traverse((child: THREE.Mesh) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: theme === 'light' ? 0xffffff : 0x000000,
          metalness: 0.8,
          roughness: 0.15,
        })
      }
    })

    king.scene.traverse((child: THREE.Mesh) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: theme === 'light' ? 0xffffff : 0x000000,
          metalness: 0.8,
          roughness: 0.15,
        })
      }
    })

    knight.scene.rotation.y = Math.PI / 1.2
    knight.scene.rotation.x = 0.35

    pawn.scene.rotation.y = Math.PI / 1.2
    pawn.scene.rotation.x = -0.45
    pawn.scene.position.x = 0.1
    pawn.scene.position.y = -0.1
    pawn.scene.position.z = -0.2

    king.scene.rotation.y = Math.PI / 1.2
    king.scene.rotation.x = 0.65
    king.scene.position.x = 0.1
    king.scene.position.y = -0.15
    king.scene.position.z = 0.15

    window.addEventListener('mousemove', (e) => {
      setCursor({
        x: e.clientX / (window.innerWidth / 2) - 1,
        y: e.clientY / (window.innerHeight / 2) - 1,
      })
    })

    return () => window.removeEventListener('mousemove', () => {})
  }, [king.scene, knight.scene, pawn.scene, theme])

  return (
    <>
      <primitive object={knight.scene} />
      <primitive object={king.scene} />
      <primitive object={pawn.scene} />
      <pointLight ref={light} color="hotpink" intensity={1} decay={10} />
    </>
  )
}
