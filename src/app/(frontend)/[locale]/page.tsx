import { getTranslations } from 'next-intl/server'
import { generateMetadata } from './[slug]/page'

export default async function LandingPage() {
  const t = await getTranslations();

  return (
    <div className="container h-screen flex">
      <h1 className="text-7xl py-20">{t("catchPhrase")}</h1>
    </div>
  )
}

export { generateMetadata }
