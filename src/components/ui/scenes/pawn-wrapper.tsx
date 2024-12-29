'use client'

import { Canvas } from '@react-three/offscreen'
import React, { lazy } from 'react'

const PawnScene = lazy(() => import('@/components/ui/scenes/pawn-scene'))

const pawnWorker = new Worker(new URL('@/components/ui/scenes/pawn-worker.tsx', import.meta.url), {
  type: 'module',
})

export const PawnWrapper = () => {
  return (
    <Canvas
      worker={pawnWorker}
      fallback={<PawnScene />}
      camera={{
        position: [-0.3, 0.3, -0.3],
      }}
    />
  )
}
