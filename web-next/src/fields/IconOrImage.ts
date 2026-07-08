import type { Field } from 'payload'

export const IconOrImage: Field = {
  name: 'mediaType',
  type: 'group',
  label: 'Icono o Imagen',
  fields: [
    {
      name: 'type',
      type: 'radio',
      label: 'Tipo de recurso',
      options: [
        { label: 'Ícono SVG', value: 'icon' },
        { label: 'Imagen subida', value: 'image' },
      ],
      defaultValue: 'icon',
      required: true,
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'icon',
      type: 'select',
      label: 'Ícono SVG',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'icon',
      },
      options: [
        // Aquí listaremos los SVGs más comunes usados en el sitio
        { label: 'Programas a medida', value: 'custom-program' },
        { label: 'Liderazgo y gestión', value: 'leadership' },
        { label: 'Habilidades comerciales', value: 'sales' },
        { label: 'Cultura y trabajo', value: 'culture' },
        { label: 'Chat', value: 'chat' },
        { label: 'Target', value: 'target' },
        { label: 'Heart', value: 'heart' },
        { label: 'Star', value: 'star' },
        { label: 'Check', value: 'check' },
        { label: 'Book', value: 'book' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'image',
      },
    },
  ],
}
