import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Usuario',
    plural: 'Usuarios',
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Administrador', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
    },
    {
      name: 'modules',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Academy', value: 'academy' },
        { label: 'Club', value: 'club' },
        { label: 'Consultoría', value: 'consultoria' },
        { label: 'People', value: 'people' },
        { label: 'Tech', value: 'tech' },
        { label: 'Makers', value: 'makers' },
        { label: 'Contenido General (Home, etc.)', value: 'general' },
      ],
    },
  ],
  versions: false,
}
