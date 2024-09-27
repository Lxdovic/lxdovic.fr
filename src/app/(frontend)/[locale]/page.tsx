import { getTranslations } from 'next-intl/server'
import { generateMetadata } from './[slug]/page'
import { Aurora } from '@/components/ui/aurora/aurora'
import { RotatingCatchPhrase } from '@/components/ui/rotatingCatchPhrase/rotating-catchphrase'

export default async function LandingPage() {
  const t = await getTranslations()

  return (
    <div className="container h-screen flex py-20">
      <RotatingCatchPhrase />
      <Aurora />
    </div>
  )
}

export { generateMetadata }
