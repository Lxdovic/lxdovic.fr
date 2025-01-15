import React, { lazy } from 'react'
import { HeroTitle } from '@/sections/hero/title'

const KnightScene = lazy(() => import('@/components/ui/scenes/knight-scene'))

export const Hero = () => {
  return (
    <section className="h-screen container flex flex-col lg:flex-row items-center">
      <HeroTitle />

      <div className="border-red-500 border w-full h-full relative">
        <KnightScene />
      </div>
    </section>
  )
}
