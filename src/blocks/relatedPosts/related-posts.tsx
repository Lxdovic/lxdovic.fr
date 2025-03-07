import clsx from 'clsx'
import React from 'react'
import RichText from 'src/components/richText'

import type { Post } from '@/payload-types'

import { Card } from 'src/components/card'

export type RelatedPostsProps = {
  className?: string
  docs?: Post[]
  introContent?: any
}

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { className, docs, introContent } = props

  return (
    <div className={clsx('lg:container', className)}>
      {introContent && <RichText data={introContent} enableGutter={false} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
        {docs?.map((doc, index) => <Card key={index} doc={doc} relationTo="posts" showCategories />)}
      </div>
    </div>
  )
}
