'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const About = () => {
  useEffect(() => {
    gsap.to('.parallax', {
      yPercent: -25,
      opacity: 0.9,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-container',
        start: 'top bottom',
        end: 'bottom center',
        scrub: 2,
      },
    })

    if (document && typeof document !== 'undefined') {
      const video = document.querySelector('video')
      if (video) video.playbackRate = 3.0
    }
  }, [])

  return (
    <section
      className="relative min-h-screen z-10 p-20 bg-background parallax-container"
      id="about"
    >
      <div className="w-full h-full absolute top-0 -z-10 left-0 opacity-0 parallax">
        <div className="relative h-full w-full">
          <video
            width="1920"
            autoPlay
            muted
            loop
            height="1080"
            preload="auto"
            className="object-cover absolute top-0 left-0 h-full w-full"
          >
            <source src={'/torus.webm'} type="video/webm" />
          </video>

          <div className="h-1/3 w-full absolute top-0 bg-gradient-to-b from-background via-transparent to-transparent" />
          <div className="h-1/3 w-full absolute bottom-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>
      </div>
      <div className="flex gap-10 flex-col justify-center size-full container">
        <div className="w-full sm:w-[555px] text-justify lg:text-left md:w-[740px] lg:w-[985px] flex gap-40 justify-between self-center">
          <div className="block">
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
