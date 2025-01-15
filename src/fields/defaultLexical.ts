import { Config } from 'payload'
import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
  lexicalEditor,
  UnderlineFeature,
  AlignFeature,
  ChecklistFeature,
  BlockquoteFeature,
  BlocksFeature,
} from '@payloadcms/richtext-lexical'
import { CallToAction } from '@/blocks/callToAction/config'
import { Banner } from '@/blocks/banner/config'

export const defaultLexical: Config['editor'] = lexicalEditor({
  features: ({ defaultFeatures, rootFeatures }) => {
    return [
      ...rootFeatures,
      ...defaultFeatures,
      ParagraphFeature(),
      UnderlineFeature(),
      BoldFeature(),
      ItalicFeature(),
      AlignFeature(),
      ChecklistFeature(),
      ItalicFeature(),
      BlockquoteFeature(),
      BlocksFeature({
        blocks: [Banner, CallToAction],
      }),
      LinkFeature({
        enabledCollections: ['pages', 'posts'],
        fields: ({ defaultFields }) => {
          const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
            if ('name' in field && field.name === 'url') return false
            return true
          })

          return [
            ...defaultFieldsWithoutUrl,
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: ({ linkType }) => linkType !== 'internal',
              },
              label: ({ t }) => t('fields:enterURL'),
              required: true,
            },
          ]
        },
      }),
    ]
  },
})
