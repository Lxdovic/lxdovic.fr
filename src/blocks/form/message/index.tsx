import RichText from 'src/components/richText'
import React from 'react'

import { Width } from '../width'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export const Message: React.FC = ({ message }: { message: SerializedEditorState }) => {
  return (
    <Width className="my-12" width="100">
      {message && <RichText data={message} />}
    </Width>
  )
}
