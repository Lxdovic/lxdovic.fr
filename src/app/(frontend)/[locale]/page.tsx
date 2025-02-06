import { generateMetadata } from './[slug]/page'
import React from 'react'
import { Hero } from '@/sections/hero'
import { Projects } from '@/sections/projects'
import { About } from '@/sections/about'

export default async function LandingPage() {
  return (
    <main className="flex flex-col gap-52 overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export { generateMetadata }
