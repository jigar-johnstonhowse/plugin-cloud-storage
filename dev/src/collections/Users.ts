import type { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'organization',
      label: 'Organization',
      type: 'text',
    },
    {
      name: 'background',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export default Users
