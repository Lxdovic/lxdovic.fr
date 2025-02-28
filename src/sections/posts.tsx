import { CollectionArchive } from '@/components/collectionArchive'
import { getPayload, TypedLocale } from 'payload'
import configPromise from '@payload-config'
import { CardPostData } from '@/components/card'

type Args = {
  locale: TypedLocale
}

export const Posts = async ({ locale }: Args) => {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 3,
    overrideAccess: false,
    locale,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })
  console.log(posts)

  if (posts.totalDocs <= 0) return

  return (
    <section className="min-h-screen z-10 bg-background py-20" id="projects">
      <CollectionArchive posts={posts.docs as CardPostData[]} />
    </section>
  )
}
