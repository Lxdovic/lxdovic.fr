import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/collectionArchive'
import { PageRange } from '@/components/pageRange'
import { Pagination } from '@/components/pagination'
import configPromise from '@payload-config'
import { getPayload, TypedLocale } from 'payload'
import React from 'react'
import { getTranslations } from 'next-intl/server'
import { Search } from './search'
import { CardPostData } from '@/components/card'

export const revalidate = 600

type Args = {
  params: Promise<{ locale: TypedLocale }>
  searchParams: Promise<{ q: string }>
}

export default async function Page({ params, searchParams }: Args) {
  const { q: query } = await searchParams
  const { locale } = await params

  const t = await getTranslations('common')
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'search',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    locale,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
    ...(query
      ? {
          where: {
            or: [
              {
                title: {
                  like: query,
                },
              },
              {
                'meta.description': {
                  like: query,
                },
              },
              {
                'meta.title': {
                  like: query,
                },
              },
              {
                slug: {
                  like: query,
                },
              },
            ],
          },
        }
      : {}),
  })

  return (
    <div className="pt-24 pb-24">
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>{t('posts')}</h1>
        </div>
      </div>

      <div className="container flex mb-8 items-center justify-between">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />

        <Search route="posts" />
      </div>

      {posts.totalDocs > 0 ? (
        <CollectionArchive posts={posts.docs as CardPostData[]} />
      ) : (
        <div className="container">No results found.</div>
      )}

      <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Lxdovic Posts`,
  }
}
