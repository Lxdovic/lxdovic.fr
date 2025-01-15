import { Aurora } from '@/components/ui/aurora/aurora'
import React from 'react'
import { TypedLocale } from 'payload'
import { Hero } from '@/sections/hero/hero'

type Args = {
  params: Promise<{
    locale: TypedLocale
  }>
}

export default async function LandingPage({ params }: Args) {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Aurora />
      <Hero />
    </main>
  )
}
