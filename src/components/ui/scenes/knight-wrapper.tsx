'use client'

import { Canvas } from '@react-three/offscreen'
import React, { lazy } from 'react'

const KnightScene = lazy(() => import('@/components/ui/scenes/knight-scene'))

const knightWorker = new Worker(
  new URL('@/components/ui/scenes/knight-worker.tsx', import.meta.url),
  {
    type: 'module',
  },
)

export const KnightWrapper = () => {
  return (
    <Canvas
      worker={knightWorker}
      fallback={<KnightScene />}
      camera={{
        position: [-0.3, 0.3, -0.3],
      }}
    />
  )
}
