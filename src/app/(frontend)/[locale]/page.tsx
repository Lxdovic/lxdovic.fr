import { getTranslations } from 'next-intl/server'
import { generateMetadata } from './[slug]/page'
import { Aurora } from '@/components/ui/aurora/aurora'
import { RotatingCatchPhrase } from '@/components/ui/rotatingCatchPhrase/rotating-catchphrase'

export default async function LandingPage() {
  const t = await getTranslations()

  return (
    <div className="container h-screen flex flex-col gap-10 py-40">
      <Aurora />
      <RotatingCatchPhrase />
      <div className="w-1/2 flex flex-col gap-6 text-foreground/60">
        <h1 className="text-4xl font-semibold">{t('hero.title')}</h1>
        <p className="text-lg">{t('hero.subtitle')}</p>
      </div>
    </div>
  )
}

export { generateMetadata }
