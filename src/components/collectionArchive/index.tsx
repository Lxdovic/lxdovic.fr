import { cn } from 'src/utilities/cn'
import React from 'react'

import { Card, CardPostData } from 'src/components/card'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-2 gap-x-2 lg:gap-y-4 lg:gap-x-4 xl:gap-x-4">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              {
                /*<div className={'relative w-96 h-96 bg-red-500 [mask-image:url(/noise.svg)]'}></div>*/
              }
              return (
                <div className="col-span-4" key={index}>
                  <Card className="h-full" doc={result} relationTo="posts" showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
