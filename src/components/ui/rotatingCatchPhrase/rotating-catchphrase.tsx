'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'

export const RotatingCatchPhrase = () => {
  const t = useTranslations()
  const catchPhrases = useMemo(
    () => [t('catchPhrases.0'), t('catchPhrases.1'), t('catchPhrases.2')],
    [t],
  )
  const [currentCatchPhrase, setCurrentCatchPhrase] = useState(catchPhrases[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCatchPhrase((prev) => {
        const currentIndex = catchPhrases.indexOf(prev)
        const nextIndex = (currentIndex + 1) % catchPhrases.length
        return catchPhrases[nextIndex]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [catchPhrases])

  return <div className="text-7xl">{currentCatchPhrase}</div>
}
