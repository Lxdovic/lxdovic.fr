import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'
import { hasOneOfRoles } from '@/access/hasRoles'

export enum Role {
  Admin = "admin",
  Editor = "editor",
  User = "user"
}

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: (args) => hasOneOfRoles(args, [Role.Admin]),
    read: authenticated,
    update: (args) => hasOneOfRoles(args, [Role.Admin]),
    delete: (args) => hasOneOfRoles(args, [Role.Admin]),
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: Role.Admin },
        { label: 'Editor', value: Role.Editor },
        { label: 'User', value: Role.User },
      ],
      required: true,
      defaultValue: 'user',
    },
  ],
  timestamps: true,
}
