'use client'

import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@/providers/Theme'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const [isServer, setServer] = useState(true)
  useEffect(() => setServer(false), [])

  const { theme } = useTheme()
  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  const clientTheme =
    theme || !isServer ? document.documentElement.getAttribute('data-theme') : undefined

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Lxdovic Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
      src={isServer || clientTheme === 'dark' ? '/logo.png' : '/logo-light.png'}
    />
  )
}
