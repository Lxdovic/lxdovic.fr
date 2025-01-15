import { postgresAdapter } from '@payloadcms/db-postgres'

import sharp from 'sharp'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/categories'
import { Media } from './collections/media'
import { Posts } from './collections/posts'
import { Users } from './collections/users'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { en } from '@payloadcms/translations/languages/en'
import { fr } from '@payloadcms/translations/languages/fr'
import localization from '@/i18n/localization'
import { getServerSideURL } from './utilities/getURL'

// import favicon from '@/../public/favicon.ico'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  i18n: {
    fallbackLanguage: 'en',
    supportedLanguages: { en, fr },
  },
  localization,
  admin: {
    meta: {
      titleSuffix: 'Lxdovic',
      title: 'Lxdovic Admin',
      // icons: [
      //   {
      //     url: favicon.src,
      //     sizes: '16x16',
      //     type: 'image/x-icon',
      //   },
      // ],
    },
    components: {
      graphics: {
        Logo: '/components/logo/logo.tsx#Logo',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  collections: [Posts, Media, Categories, Users],
  cors: [getServerSideURL()].filter(Boolean),
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
