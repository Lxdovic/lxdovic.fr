import { getTranslations } from 'next-intl/server'
import { generateMetadata } from './[slug]/page'
import { Aurora } from '@/components/ui/aurora/aurora'
import BlurIn from '@/components/ui/blur-in'
import React, { lazy } from 'react'
import { HeroRoles } from '@/components/ui/heroRoles/hero-roles'
import { VerticalGradientBorder } from '@/components/ui/border/vertical-gradient'
import { SlideUp } from '@/components/ui/slideUp/side-up'
import Link from 'next/link'
import { SquareArrowOutUpRight } from 'lucide-react'
import { HorizontalGradientBorder } from '@/components/ui/border/horizontal-gradient'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import configPromise from '@payload-config'
import { getPayload, TypedLocale } from 'payload'
import { CollectionArchive } from '@/components/CollectionArchive'
import { Button } from '@/components/ui/button'

const KnightScene = lazy(() => import('@/components/ui/scenes/knight-scene'))
const PawnScene = lazy(() => import('@/components/ui/scenes/pawn-scene'))

type Args = {
  params: Promise<{
    locale: TypedLocale
  }>
}

export default async function LandingPage({ params }: Args) {
  const t = await getTranslations()

  const { locale = 'en' } = await params
  const payload = await getPayload({ config: configPromise })

  const lastPosts = await payload.find({
    collection: 'posts',
    locale,
    depth: 1,
    limit: 3,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <main className="flex flex-col overflow-x-hidden">
      <Aurora />
      <div className="absolute top-0 h-screen w-4/5 right-0">
        <KnightScene />
      </div>
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
        <div className="container flex pt-40 px-0 h-full">
          <div className="w-96 flex flex-col flex-shrink-0">
            <h2 className="px-10 text-4xl mb-10">{t('about.experiences.title')}</h2>

            <Card className="rounded-none w-full border-x-0 bg-transparent border-foreground/20">
              <CardHeader>
                <CardTitle className="font-normal">{t('about.experiences.0.title')}</CardTitle>
                <CardDescription>{t('about.experiences.0.content')}</CardDescription>
              </CardHeader>
              <CardContent>{t('about.experiences.0.date')}</CardContent>
            </Card>

            <Card className="rounded-none w-full border-x-0 border-t-0 bg-transparent border-foreground/20">
              <CardHeader>
                <CardTitle className="font-normal">{t('about.experiences.1.title')}</CardTitle>
                <CardDescription>{t('about.experiences.1.content')}</CardDescription>
              </CardHeader>
              <CardContent>{t('about.experiences.1.date')}</CardContent>
            </Card>
          </div>

          <div className="relative flex flex-col w-full h-full px-16">
            <div className="relative w-full h-max flex flex-col gap-10 pb-10">
              <h2 className="text-6xl text-right font-bold">{t('about.title')}</h2>

              <p className="text-xl text-justify text-foreground/80">{t('about.content')}</p>

              <HorizontalGradientBorder className="w-screen bottom-0" />
            </div>

            <div className="w-full h-full ">
              <PawnScene />
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen h-max">
        <div className="container flex flex-col gap-10 py-40">
          <div className="ml-96 flex flex-col gap-10">
            <h2 className="text-6xl font-bold">{t('blog.title')}</h2>

            <p className="text-xl text-foreground/80">{t('blog.content')}</p>
          </div>
          <div className="flex gap-10 z-10">
            <CollectionArchive posts={lastPosts.docs} />
          </div>

          <Link href="/posts">
            <Button variant="outline" className="rounded-none">
              <p>{t('blog.more')}</p>
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export { generateMetadata }
