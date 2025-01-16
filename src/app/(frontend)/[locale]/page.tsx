import { generateMetadata } from './[slug]/page'
import React from 'react'
import { Hero } from '@/sections/hero/hero'

export default async function LandingPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Hero />
    </main>
  )
}

export { generateMetadata }
