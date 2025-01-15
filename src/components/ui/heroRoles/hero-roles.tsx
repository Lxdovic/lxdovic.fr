'use client'

import { useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { SlideUp } from '../slideUp/side-up'

export const HeroRoles = () => {
  const t = useTranslations()
  const roles = useMemo(() => [t('roles.0'), t('roles.1'), t('roles.2')], [t])

  return (
    <div className="w-full">
      {roles.map((role, index) => (
        <SlideUp className="border-b border-foreground/20" key={index}>
          {role}
        </SlideUp>
      ))}
    </div>
  )
}
