import type { CollectionConfig } from 'payload'
import { IconOrImage } from '../fields/IconOrImage'

export const Courses: CollectionConfig = {
  slug: 'courses',
  labels: {
    singular: 'Curso',
    plural: 'Cursos',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Contenido',
    defaultColumns: ['title', 'status', 'dates'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título del curso',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción corta',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      label: 'Estado',
      options: [
        { label: 'Abierto (Visible)', value: 'abierto' },
        { label: 'Cerrado (Oculto)', value: 'cerrado' },
      ],
      defaultValue: 'abierto',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'dates',
      type: 'text',
      label: 'Fechas o Duración (ej: "Octubre 2026" o "4 semanas")',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'quotas',
      type: 'text',
      label: 'Cupos (ej: "20 lugares" o "Limitados")',
      admin: {
        position: 'sidebar',
      },
    },
    IconOrImage,
    {
      name: 'link',
      type: 'text',
      label: 'Link de inscripción (WhatsApp o Formulario)',
      required: true,
      defaultValue: 'https://wa.me/5493794398385',
    },
  ],
}
