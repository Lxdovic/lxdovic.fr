import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { useTranslations } from 'next-intl'
import { cn } from '@/utilities/cn'
import { HTMLProps, lazy } from 'react'
import Safari from '@/components/ui/safari'

import zoidberg from '@/assets/images/zoidberg.png'

const KingScene = lazy(() => import('@/components/ui/scenes/king-scene'))

const Tag = ({ children, className, ...props }: HTMLProps<HTMLSpanElement>) => (
  <span className={cn('px-2 py-1 rounded-full border text-sm', className)} {...props}>
    {children}
  </span>
)

export const Projects = () => {
  const t = useTranslations('landing')

  return (
    <section className="min-h-screen container py-20" id="projects">
      <BentoGrid className="grid-cols-10">
        <BentoCard className="relative flex-row p-6 col-span-10 lg:col-span-6 xl:col-span-7 bg-foreground/5 hover:bg-foreground/[7%] transition duration-500 border hover:scale-[102%]">
          <div className="w-full xl:w-1/2 flex-shrink-0 z-20 flex flex-col gap-6">
            <h3 className="text-3xl font-semibold italic font-serif">{t('projects.0.name')}</h3>

            <p className="text-justify">{t('projects.0.description')}</p>

            <div className="flex gap-4 mt-auto flex-wrap">
              <Tag className="border-pink-500/50 text-pink-500">{t('projects.0.tags.0')}</Tag>
              <Tag className="border-sky-500/50 text-sky-500">{t('projects.0.tags.1')}</Tag>
              <Tag className="border-indigo-500/50 text-indigo-500">{t('projects.0.tags.2')}</Tag>
              <Tag className="border-amber-500/50 text-amber-500">{t('projects.0.tags.3')}</Tag>
              <Tag className="border-emerald-500/50 text-emerald-500">{t('projects.0.tags.4')}</Tag>
              <Tag className="border-red-500/50 text-red-500">{t('projects.0.tags.5')}</Tag>
            </div>
          </div>

          <div className="absolute hidden xl:flex -bottom-4 z-0 right-0 h-full w-1/2">
            <KingScene />
          </div>

          <div className="absolute top-0 left-0 size-full bg-gradient-to-b from-transparent z-10 via-transparent to-card/50" />
        </BentoCard>
        <BentoCard className="relative p-6 col-span-10 md:col-span-5 lg:col-span-4 xl:col-span-3 bg-foreground/5 hover:bg-foreground/[7%] transition duration-500 border hover:scale-[102%]">
          <div className="z-20 flex flex-col gap-6 h-full">
            <h3 className="text-3xl font-semibold italic font-serif">{t('projects.1.name')}</h3>

            <p className="text-justify">{t('projects.1.description')}</p>

            <div className="flex gap-4 mt-auto flex-wrap">
              <Tag className="border-pink-500/50 text-pink-500">{t('projects.1.tags.0')}</Tag>
              <Tag className="border-sky-500/50 text-sky-500">{t('projects.1.tags.1')}</Tag>
              <Tag className="border-indigo-500/50 text-indigo-500">{t('projects.1.tags.2')}</Tag>
              <Tag className="border-amber-500/50 text-amber-500">{t('projects.1.tags.3')}</Tag>
            </div>
          </div>

          <div className="absolute top-0 left-0 size-full bg-gradient-to-b from-transparent z-10 via-transparent to-card/50" />
        </BentoCard>
        <BentoCard className="relative p-6 col-span-10 md:col-span-5 lg:col-span-4 xl:col-span-3 bg-foreground/5 hover:bg-foreground/[7%] transition duration-500 border hover:scale-[102%]">
          <div className="z-20 flex flex-col gap-6 h-full">
            <h3 className="text-3xl font-semibold italic font-serif">{t('projects.2.name')}</h3>

            <p className="text-justify">{t('projects.2.description')}</p>

            <div className="flex gap-4 mt-auto flex-wrap">
              <Tag className="border-pink-500/50 text-pink-500">{t('projects.2.tags.0')}</Tag>
              <Tag className="border-sky-500/50 text-sky-500">{t('projects.2.tags.1')}</Tag>
              <Tag className="border-indigo-500/50 text-indigo-500">{t('projects.2.tags.2')}</Tag>
            </div>
          </div>

          <div className="absolute top-0 left-0 size-full bg-gradient-to-b from-transparent z-10 via-transparent to-card/50" />
        </BentoCard>
        <BentoCard className="relative flex-row col-span-10 lg:col-span-6 xl:col-span-7 bg-foreground/5 hover:bg-foreground/[7%] transition duration-500 border hover:scale-[102%]">
          <div className="w-full xl:w-1/2 flex-shrink-0 p-6 z-20 flex flex-col gap-6">
            <h3 className="text-3xl font-semibold italic font-serif">{t('projects.3.name')}</h3>

            <p className="text-justify">{t('projects.3.description')}</p>

            <div className="flex gap-4 mt-auto flex-wrap">
              <Tag className="border-pink-500/50 text-pink-500">{t('projects.3.tags.0')}</Tag>
              <Tag className="border-sky-500/50 text-sky-500">{t('projects.3.tags.1')}</Tag>
              <Tag className="border-indigo-500/50 text-indigo-500">{t('projects.3.tags.2')}</Tag>
              <Tag className="border-amber-500/50 text-amber-500">{t('projects.3.tags.3')}</Tag>
            </div>
          </div>

          <div className="relative hidden xl:flex w-1/2 h-full p-10">
            <Safari
              imageSrc={zoidberg.src}
              className="z-0 group-hover:translate-y-6 transition h-max duration-500 translate-y-12 absolute bottom-0 right-0 w-full"
            />
          </div>

          <div className="absolute top-0 left-0 size-full bg-gradient-to-b from-transparent z-10 via-transparent to-card/50" />
        </BentoCard>
      </BentoGrid>
    </section>
  )
}
