import { useTranslations } from 'next-intl'

export const About = () => {
  const t = useTranslations('landing')

  return (
    <section
      className="relative min-h-screen z-10 p-20 bg-background parallax-container"
      id="about"
    >
      <div className="flex gap-10 flex-col justify-center size-full container">
        <div className="w-full sm:w-[555px] text-justify lg:text-left md:w-[740px] lg:w-[985px] flex gap-40 justify-between items-center self-center">
          <div className="block">
            <h2 className="text-8xl italic font-serif">{t('about.titles.imagine')}</h2>
            <h2 className="text-8xl italic font-serif">{t('about.titles.create')}</h2>
            <h2 className="text-8xl italic font-serif">{t('about.titles.learn')}</h2>
          </div>

          <p className="text-xl text-justify">
            I love building all sorts of things. I&#39;m a software engineer by profession, but I
            also enjoy art and design. I went to art school, studied graphic design and came out as
            a software developer.
          </p>
        </div>

        <div className="w-full sm:w-[555px] text-justify lg:text-left md:w-[740px] lg:w-[985px] flex gap-40 justify-between self-center"></div>
      </div>
    </section>
  )
}
