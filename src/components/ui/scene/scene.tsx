'use client'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'
import { useRef } from 'react'

export const Scene = () => {
  const canvasRef = useRef<HTMLDivElement>(null)
  const boundsRef = useRef<HTMLDivElement>(null)

  return (
    <div className="absolute top-0 h-screen w-4/5 right-0">
      <div className="relative w-full h-full" ref={canvasRef}>
        <Canvas
          camera={{
            position: [-0.3, 0.3, -0.3],
          }}
        >
          <Environment preset="dawn" />
          <Knight boundsRef={boundsRef} canvasRef={canvasRef} />
          <OrbitControls />
        </Canvas>
        <div
          ref={boundsRef}
          className="absolute top-0 left-0 w-full h-full border group border-[#7424ff88] transition hover:border-[#7424ff] z-20"
        >
          <span className="text-sm font-light p-1 bg-[#7424ff88] group-hover:bg-[#7424ff] transition text-background">
            knight.glb
          </span>
        </div>
      </div>
    </div>
  )
}

const Knight = ({ boundsRef, canvasRef }) => {
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
    let leftMost = Infinity
    let rightMost = -Infinity
    let topMost = -Infinity
    let bottomMost = Infinity

    gltf.scene.traverse((child: THREE.Mesh) => {
      if (child.isMesh) {
        for (let i = 0; i < child.geometry.attributes.position.array.length; i += 3) {
          const position = new THREE.Vector3(
            child.geometry.attributes.position.array[i],
            child.geometry.attributes.position.array[i + 1],
            child.geometry.attributes.position.array[i + 2],
          )
          const projectedPosition = position.applyMatrix4(child.matrixWorld).project(state.camera)

          if (projectedPosition.x < leftMost) leftMost = projectedPosition.x
          if (projectedPosition.x > rightMost) rightMost = projectedPosition.x
          if (projectedPosition.y > topMost) topMost = projectedPosition.y
          if (projectedPosition.y < bottomMost) bottomMost = projectedPosition.y
        }
      }
    })

    const canvasBounds = canvasRef.current.getBoundingClientRect()

    const left = (leftMost + 1) * 0.5 * canvasBounds.width
    const right = (rightMost + 1) * 0.5 * canvasBounds.width
    const top = (-topMost + 1) * 0.5 * canvasBounds.height
    const bottom = (-bottomMost + 1) * 0.5 * canvasBounds.height

    boundsRef.current.style.left = `${left - 10}px`
    boundsRef.current.style.top = `${top - 10}px`
    boundsRef.current.style.width = `${right - left + 20}px`
    boundsRef.current.style.height = `${bottom - top + 20}px`

    gltf.scene.rotation.y = Math.sin(state.clock.elapsedTime / 200) * 100
    gltf.scene.rotation.x = Math.cos(state.clock.elapsedTime / 200) * 100
    gltf.scene.rotation.z = Math.sin(state.clock.elapsedTime / 200) * 100
  })

  return <primitive object={gltf.scene} />
}
