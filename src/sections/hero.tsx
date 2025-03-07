import { lazy } from 'react'
import { useTranslations } from 'next-intl'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { AuroraBackground } from '@/components/ui/aurora-bg'

const KnightScene = lazy(() => import('@/components/ui/scenes/knight-scene'))

export const Hero = () => {
  const t = useTranslations('landing')

  return (
    <section className="relative h-screen" id="home">
      <AuroraBackground />
      <div className="flex gap-10 flex-col justify-center size-full container">
        <KnightScene />

        <div className="mix-blend-difference flex text-4xl sm:text-7xl md:text-8xl lg:text-9xl flex-col self-center w-max">
          <h1 className="flex w-full gap-4">{t('hero.name')}</h1>
          <h2 className="italic w-full tracking-tighter font-serif">{t('hero.role')}</h2>
        </div>

        <div className="w-full sm:w-[555px] text-justify lg:text-left md:w-[740px] lg:w-[985px] flex flex-col gap-10 self-center">
          <p className="mix-blend-difference text-xl w-full leading-relaxed tracking-wide">
            {t('hero.description')}
          </p>

          <div className="group rounded-full w-max border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <Link href="/#projects">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>{t('hero.cta')}</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-1/4 -z-10 w-full absolute top-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      <div className="h-1/4 -z-10 w-full absolute bottom-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </section>
  )
}
