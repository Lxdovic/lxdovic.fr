'use client'

import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import MorphingText from '@/components/ui/morphing-text'

export const RotatingCatchPhrase = () => {
  const t = useTranslations()
  const catchPhrases = useMemo(
    () => [t('catchPhrases.0'), t('catchPhrases.1'), t('catchPhrases.2')],
    [t],
  )

  return <MorphingText className="text-left w-full text-5xl lg:text-8xl" texts={catchPhrases} />
}
