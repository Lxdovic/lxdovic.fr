import { getTranslations } from 'next-intl/server'
import { generateMetadata } from './[slug]/page'
import { Aurora } from '@/components/ui/aurora/aurora'
import BlurIn from '@/components/ui/blur-in'
import React from 'react'
import { HeroRoles } from '@/components/ui/heroRoles/hero-roles'
import { VerticalGradientBorder } from '@/components/ui/border/vertical-gradient'
import { HorizontalGradientBorder } from '@/components/ui/border/horizontal-gradient'

export default async function LandingPage() {
  const t = await getTranslations()

  return (
    <main className="flex flex-col">
      <section className="relative h-[calc(100vh+10rem)] border-b">
        <Aurora />

        <div className="relative container h-full px-0">
          <VerticalGradientBorder className="left-0" />
          <VerticalGradientBorder className="right-0" />
          <div className="relative flex justify-center flex-col w-80 h-full">
            <div className="relative h-64 flex flex-col gap-6 border-b border-foreground/20">
              <BlurIn
                word={t('hero.title')}
                className="!text-8xl text-left font-bold w-96 text-black dark:text-white"
              />
            </div>

            <HeroRoles />

            <VerticalGradientBorder className="right-0" />
          </div>
        </div>
      </section>

      <section className="relative h-[calc(100vh+10rem)]">
        <div className="container flex flex-col gap-10 py-40"></div>
      </section>
    </main>
  )
}

export { generateMetadata }
