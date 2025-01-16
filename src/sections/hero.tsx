import { lazy } from 'react'
import { useTranslations } from 'next-intl'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'
import { ArrowRightIcon } from 'lucide-react'
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

        <div className="flex text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex-col self-center w-max">
          <h1 className="flex w-full gap-4">{t('hero.name')}</h1>
          <h2 className="italic w-full tracking-tighter font-serif">{t('hero.role')}</h2>
        </div>

        <div className="w-[370px] sm:w-[465px] text-justify lg:text-left md:w-[555px] lg:w-[740px] flex flex-col gap-10 self-center">
          <p className="text-xl w-full leading-relaxed tracking-wide">{t('hero.description')}</p>

          <div className="group rounded-full w-max border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <Link href="/#projects">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>{t('hero.cta')}</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </Link>
          </div>
        </div>

        <div className="h-1/4 -z-10 w-full absolute top-0 bg-gradient-to-b from-background via-transparent to-transparent" />
        <div className="h-1/4 -z-10 w-full absolute bottom-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
    </section>
  )
}
