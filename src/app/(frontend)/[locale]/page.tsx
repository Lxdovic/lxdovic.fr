import { getTranslations } from 'next-intl/server'
import { generateMetadata } from './[slug]/page'
import { Aurora } from '@/components/ui/aurora/aurora'
import BlurIn from '@/components/ui/blur-in'
import React from 'react'
import { HeroRoles } from '@/components/ui/heroRoles/hero-roles'
import { VerticalGradientBorder } from '@/components/ui/border/vertical-gradient'
import { Scene } from '@/components/ui/scene/scene'
import { SlideUp } from '@/components/ui/slideUp/side-up'
import Link from 'next/link'
import { SquareArrowOutUpRight } from 'lucide-react'
import { HorizontalGradientBorder } from '@/components/ui/border/horizontal-gradient'

export default async function LandingPage() {
  const t = await getTranslations()

  return (
    <main className="flex flex-col overflow-x-hidden">
      <Aurora />
      <Scene />
      <section className="relative h-screen">
        <div className="relative container flex h-full px-0">
          <VerticalGradientBorder className="left-0 h-[300vh] z-10" />
          <VerticalGradientBorder className="right-0 h-[300vh] z-10" />
          <div className="relative flex justify-center flex-col w-96 h-full">
            <div className="relative h-64 flex flex-col gap-6 border-b border-foreground/20">
              <BlurIn
                word={t('hero.title')}
                className="!text-8xl text-left font-bold text-black dark:text-white"
              />
            </div>

            <HeroRoles />

            <VerticalGradientBorder className="right-0 h-[300vh] z-10" />
          </div>

          <div className="absolute bottom-0 flex right-0 w-96 border-t border-l border-foreground/20">
            <Link href="https://github.com/lxdovic" className="w-full">
              <SlideUp className="border-r border-foreground/20">
                <span className="flex justify-between">
                  {t('hero.github')}
                  <SquareArrowOutUpRight />
                </span>
              </SlideUp>
            </Link>
            <Link href="/posts" className="w-full">
              <SlideUp>
                <span className="flex justify-between">
                  {t('hero.blog')}
                  <SquareArrowOutUpRight />
                </span>
              </SlideUp>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative h-screen bg-background/50 border-y border-foreground/20">
        <div className="container flex py-40 px-0">
          <div className="w-96 flex-shrink-0"></div>
          <div className="relative flex flex-col gap-10 w-full h-max pb-10 px-16">
            <h2 className="text-6xl text-right font-bold">{t('about.title')}</h2>

            <p className="text-xl text-justify text-foreground/80">{t('about.content')}</p>

            <HorizontalGradientBorder className="w-screen bottom-0" />
          </div>
        </div>
      </section>

      <section className="relative h-screen">
        <div className="container flex flex-col gap-10 py-40">
          <h2 className="text-6xl text-right font-bold">Blog</h2>
        </div>
      </section>
    </main>
  )
}

export { generateMetadata }
