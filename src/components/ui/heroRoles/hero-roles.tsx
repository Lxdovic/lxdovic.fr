import { useMemo } from 'react'
import { useTranslations } from 'next-intl'

export const HeroRoles = () => {
  const t = useTranslations()
  const roles = useMemo(() => [t('roles.0'), t('roles.1'), t('roles.2'), t('roles.3')], [t])

  return (
    <div className="w-80">
      {roles.map((role, index) => (
        <div className="relative p-5 flex flex-col border-b border-foreground/20 gap-6" key={index}>
          <h2 className="text-xl font-light text-black/90 dark:text-white/90">{role}</h2>
        </div>
      ))}
    </div>
  )
}
