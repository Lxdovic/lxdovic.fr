import { getTranslations } from 'next-intl/server'
import { generateMetadata } from './[slug]/page'
import { Aurora } from '@/components/ui/aurora/aurora'

export default async function LandingPage() {
  const t = await getTranslations()

  return (
    <div className="container h-screen flex">
      <h1 className="text-7xl py-20">{t('catchPhrase')}</h1>
      <Aurora />
    </div>
  )
}

export { generateMetadata }
