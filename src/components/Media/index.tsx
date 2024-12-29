import React, { Fragment } from 'react'

import type { Props } from './types'

import { ImageMedia } from './ImageMedia'
import { VideoMedia } from './VideoMedia'

export const Media: React.FC<Props> = (props) => {
  const { className, htmlElement, resource } = props

  const isVideo = typeof resource === 'object' && resource?.mimeType?.includes('video')
  const Tag = htmlElement || 'div'

  return htmlElement ? (
    React.createElement(
      Tag,
      { className },
      isVideo ? <VideoMedia {...props} /> : <ImageMedia {...props} />,
    )
  ) : (
    <>{isVideo ? <VideoMedia {...props} /> : <ImageMedia {...props} />}</>
  )
}
