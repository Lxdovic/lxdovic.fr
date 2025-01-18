'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState, useEffect } from 'react'
import { useDebounce } from '@/utilities/useDebounce'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

type Args = {
  route: string
}

export const Search = ({ route }: Args) => {
  const [value, setValue] = useState('')
  const router = useRouter()
  const t = useTranslations('common')

  const debouncedValue = useDebounce(value)

  useEffect(() => {
    router.push(`/${route}${debouncedValue ? `?q=${debouncedValue}` : ''}`)
  }, [debouncedValue, route, router])

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <Input
          id="search"
          className="rounded-full"
          onChange={(event) => {
            setValue(event.target.value)
          }}
          placeholder={t('search')}
        />
        <button type="submit" className="sr-only">
          {t('submit')}
        </button>
      </form>
    </div>
  )
}
