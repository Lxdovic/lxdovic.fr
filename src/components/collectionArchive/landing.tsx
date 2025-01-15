import { cn } from 'src/utilities/cn'
import React from 'react'

import { Card, CardPostData } from 'src/components/card'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchiveLanding: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className={cn('container')}>
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4">
        {posts?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <div className="col-span-4 border-x border-foreground/20" key={index}>
                <Card className="h-full !border-0" doc={result} relationTo="posts" showCategories />
              </div>
            )
          }

          return null
        })}
      </div>
    </div>
  )
}
