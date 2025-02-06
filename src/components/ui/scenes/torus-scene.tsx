'use client'

import { Environment, Lightformer, MeshTransmissionMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Vector3 } from 'three'

export default function TorusScene() {
  return (
    <Canvas camera={{ position: [0, 0, 1.3] }}>
      <Environment preset="dawn" resolution={4000}></Environment>

      <Torus position={new Vector3(0.5, -0.5, 0)} />
      <Torus position={new Vector3(-1.5, 0.8, 0)} />
    </Canvas>
  )
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
        thickness={0.6}
        backside
        chromaticAberration={5}
        anisotropicBlur={20}
        distortion={1}
        distortionScale={0.7}
        backsideResolution={20}
        color="#333"
      />
    </mesh>
  )
}
