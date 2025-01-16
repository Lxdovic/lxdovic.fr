import { generateMetadata } from './[slug]/page'
import React from 'react'
import { Hero } from '@/sections/hero'
import { Projects } from '@/sections/projects'

export default async function LandingPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Hero />
      <Projects />
    </main>
  )
}

export { generateMetadata }
