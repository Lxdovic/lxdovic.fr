'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import scrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, scrollTrigger)

export function Footer() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const text = new SplitType('p.letter-pullup', { types: 'chars' })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 2,
          },
        })
        .from(text.chars, {
          duration: 1,
          y: '-100%',
          opacity: 0,
          rotation: -15,
          stagger: 0.2,
        })
    },
    { scope: container },
  )

  return (
    <footer ref={container} className="h-screen w-screen overflow-hidden">
      <p className="text-foreground/20 letter-pullup w-full text-[23.5vw] uppercase tracking-tighter font-bold leading-[18vw]">
        Ludovic
      </p>
    </footer>
  )
}
