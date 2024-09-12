'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, {useTransition } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import localization from '@/i18n/localization'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLocale } from 'next-intl'

import { usePathname, useRouter } from '@/i18n/routing'
import { TypedLocale } from 'payload'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const locale = useLocale()
  const router = useRouter()
  const [, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(value: TypedLocale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value },
      )
    })
  }

  return (
    <header className="z-20 container m-auto bg-gray-200/25 backdrop-blur-xl rounded-full sticky top-4 ring-1 ring-background/30">
      <div className="px-8 py-4 flex gap-6">
        <Link href="/">
          <Logo loading="eager" priority="high" />
        </Link>
        <Select onValueChange={onSelectChange} value={locale}>
          <SelectTrigger className="ml-auto w-auto bg-transparent text-sm gap-2 pl-0 md:pl-3 border-none">
            <SelectValue placeholder="Locale" />
          </SelectTrigger>
          <SelectContent>
            {localization.locales
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((locale) => (
                <SelectItem value={locale.code} key={locale.code}>
                  {locale.label}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
