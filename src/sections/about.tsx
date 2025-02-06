'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import torus from '@/../public/torus.png'

gsap.registerPlugin(ScrollTrigger)

export const About = () => {
  useEffect(() => {
    gsap.to('.parallax', {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-container',
        start: 'top bottom', // when the top of the trigger hits the bottom of the viewport
        end: 'bottom top', // when the bottom of the trigger hits the top of the viewport
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    })
  }, [])

  return (
    <section
      className="relative min-h-screen z-10 p-20 bg-background parallax-container"
      id="about"
    >
      <div className="w-full h-full absolute top-0 left-0 parallax">
        <div className="relative h-full w-full">
          <Image
            src={torus.src}
            height={torus.height}
            width={torus.width}
            alt="torus"
            className="object-cover absolute top-0 left-0 -z-10 h-full w-full"
          />
          <div className="h-1/4 -z-10 w-full absolute top-0 bg-gradient-to-b from-background via-transparent to-transparent" />
          <div className="h-1/4 -z-10 w-full absolute bottom-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>
      </div>
      <div className="flex gap-10 flex-col justify-center size-full container">
        <div className="w-full sm:w-[555px] text-justify lg:text-left md:w-[740px] lg:w-[985px] flex gap-40 justify-between self-center">
          <div className="block z-10">
            <h2 className="text-8xl italic font-serif">imagine</h2>
            <h2 className="text-8xl italic font-serif">create</h2>
            <h2 className="text-8xl italic font-serif">learn</h2>
          </div>

          <p className="self-end h-max text-xl text-justify">
            I love building all sorts of things. I&#39;m a software engineer by profession, but I
            also enjoy art and design. I went to art school, studied graphic design and came out as
            a software developer.
          </p>
        </div>

        <div className="w-full sm:w-[555px] text-justify lg:text-left md:w-[740px] lg:w-[985px] flex gap-40 justify-between self-center"></div>
      </div>
    </section>
  )
}
