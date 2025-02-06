'use client'

import { Environment, MeshTransmissionMaterial } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useState } from 'react'
import { Vector3 } from 'three'

export default function TorusScene() {
  return (
    <Canvas camera={{ position: [0, 0, 1.5] }}>
      <Torus position={new Vector3(0.5, -0.5, 0)} />
      <Torus position={new Vector3(-1.5, 0.8, 0)} />
      <RotatingEnvironment />
    </Canvas>
  )
}

const RotatingEnvironment = () => {
  const [rot, setRot] = useState(0)

  useFrame((_state, delta) => {
    setRot((r) => r + delta * 0.1)
  })

  return <Environment environmentRotation={[0, 0, rot]} preset="dawn" resolution={4000} />
}

type TorusProps = {
  position: Vector3
}

const Torus = (props: TorusProps) => {
  return (
    <mesh {...props}>
      <torusGeometry args={[1, 0.2, 16, 100]} />
      <MeshTransmissionMaterial
        transmission={1}
        thickness={10}
        backside
        chromaticAberration={5}
        anisotropicBlur={20}
        distortion={1}
        distortionScale={0.7}
        roughness={0}
        samples={20}
        backsideResolution={20}
        color="#550044"
      />
    </mesh>
  )
}
