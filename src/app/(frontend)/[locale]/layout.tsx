import type { Metadata } from 'next'

import { cn } from '@/utilities/cn'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/adminBar/admin-bar'
import { Footer } from '@/footer/Component'
import { Header } from '@/header/Component'
import { Providers } from '@/providers'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import { getServerSideURL } from '@/utilities/getURL'

import { NextIntlClientProvider } from 'next-intl'
import { TypedLocale } from 'payload'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { getMessages, setRequestLocale } from 'next-intl/server'
import './globals.css'

type Args = {
  children: React.ReactNode
  params: Promise<{
    locale: TypedLocale
  }>
}

export default async function RootLayout({ children, params }: Args) {
  const { locale } = await params

  if (!routing.locales.includes(locale)) {
    notFound()
  }
  setRequestLocale(locale)

  const { isEnabled } = await draftMode()
  const messages = await getMessages()

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable, 'no-scrollbar')}
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: 'smooth' }}
    >
      <head>
        <link href="/favicon.png" rel="icon" sizes="32x32" />
        <link href="/favicon.png" rel="icon" type="image/svg+xml" />
        <meta name="description" content="Ludovic Debever, Software Engineer" />
        <title>Lxdovic</title>
      </head>
      <body className="no-scrollbar">
        <Providers
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <AdminBar
              adminBarProps={{
                preview: isEnabled,
              }}
            />

            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  description: 'Lxdovic.fr',
  twitter: {
    card: 'summary_large_image',
    creator: '@lxdovic_',
  },
}
