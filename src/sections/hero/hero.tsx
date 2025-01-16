import { lazy } from 'react'
import { useTranslations } from 'next-intl'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'
import { ArrowRightIcon } from 'lucide-react'
import { cn } from '@/utilities/cn'
import Link from 'next/link'

const KnightScene = lazy(() => import('@/components/ui/scenes/knight-scene'))

export const Hero = () => {
  const t = useTranslations('landing')

  return (
    <section className="relative h-screen" id="home">
      <div className="flex gap-10 flex-col justify-center size-full container">
        <div className="w-full opacity-60 -z-20 h-full absolute top-0 left-0">
          <KnightScene />
        </div>

        <div className="flex gap-10 items-center">
          <div className="flex flex-col items-left flex-shrink-0">
            <h1 className="flex text-8xl gap-4">{t('hero.name')}</h1>
            <h2 className="text-8xl italic tracking-tighter font-serif">{t('hero.role')}</h2>
          </div>

          <p className="text-xl leading-relaxed tracking-wide">{t('hero.description')}</p>
        </div>

        <div className="group rounded-full w-max border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
          <Link href="#projects">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>{t('hero.cta')}</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>
        </div>

        <div className="h-1/4 -z-10 w-full absolute top-0 bg-gradient-to-b from-background via-transparent to-transparent" />
        <div className="h-1/4 -z-10 w-full absolute bottom-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
    </section>
  )
}
