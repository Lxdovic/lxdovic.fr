'use client'

import React from 'react'
import { LineShadowText } from '@/components/ui/line-shadow-text'

export const HeroTitle = () => {
  return (
    <h1 className="text-6xl font-bold flex-shrink-0 w-96 bg-red-500">
      Ludovic
      <LineShadowText className="italic">Debever</LineShadowText>
    </h1>
  )
}
