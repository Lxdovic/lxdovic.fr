import type { CollectionConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { hasOneOfRoles } from '@/access/hasRoles'
import { Role } from 'src/collections/users'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: (args) => hasOneOfRoles(args, [Role.Admin, Role.Editor]),
    delete: (args) => hasOneOfRoles(args, [Role.Admin, Role.Editor]),
    read: anyone,
    update: (args) => hasOneOfRoles(args, [Role.Admin, Role.Editor]),
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
