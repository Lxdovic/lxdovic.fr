'use client'

import React, { useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import scrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, scrollTrigger)

export function Footer() {
  // const container = useRef<HTMLDivElement>(null)
  //
  // useGSAP(
  //   () => {
  //     const text = new SplitType('p.letter-pullup', { types: 'chars' })
  //
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: container.current,
  //           start: 'top 50%',
  //           end: 'bottom bottom',
  //           // markers: true,
  //           scrub: 2,
  //         },
  //       })
  //       .from(text.chars, {
  //         duration: 1,
  //         y: '-100%',
  //         opacity: 0,
  //         rotation: -15,
  //         stagger: 0.2,
  //       })
  //   },
  //   { scope: container },
  // )

  return null

  // return (
  //   <footer ref={container} className="h-screen w-screen overflow-hidden">
  //     <p className="text-foreground/20 letter-pullup w-full text-[23.5vw] uppercase tracking-tighter font-bold leading-[18vw]">
  //       Ludovic
  //     </p>
  //   </footer>
  // )
}
