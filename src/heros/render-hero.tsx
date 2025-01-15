import React from 'react'

import { HighImpactHero } from 'src/heros/high-impact'
import { LowImpactHero } from 'src/heros/low-impact'
import { MediumImpactHero } from 'src/heros/medium-impact'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

export const RenderHero = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
