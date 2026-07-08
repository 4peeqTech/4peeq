import type { GlobalConfig } from 'payload'

export const AcademyPage: GlobalConfig = {
  slug: 'academyPage',
  label: 'Página de Academy',
  admin: {
    group: 'Páginas',
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'tag', type: 'text', label: 'Etiqueta superior', defaultValue: 'FORMACIÓN', required: true },
        { name: 'title', type: 'text', label: 'Título principal', required: true, defaultValue: 'Formamos equipos que alcanzan resultados.' },
        { name: 'lead', type: 'textarea', label: 'Texto descriptivo', required: true, defaultValue: 'Diseñamos programas de capacitación a medida para que tu gente desarrolle las habilidades que tu empresa necesita hoy.' },
        {
          name: 'cta',
          type: 'group',
          label: 'Call to Action (Botón)',
          fields: [
            { name: 'text', type: 'text', label: 'Texto del botón', defaultValue: 'Quiero empezar', required: true },
            { name: 'link', type: 'text', label: 'Link de WhatsApp o página', defaultValue: 'https://wa.me/5493794398385', required: true },
          ],
        },
      ],
    },
    {
      name: 'coursesSection',
      type: 'group',
      label: 'Sección de Cursos (Qué incluye / Cursos abiertos)',
      fields: [
        { name: 'title', type: 'text', label: 'Título', defaultValue: 'Qué incluye', required: true },
        { name: 'description', type: 'textarea', label: 'Descripción', defaultValue: 'Cada programa se diseña en función del diagnóstico previo: qué necesita aprender tu equipo, en qué formato y con qué objetivo concreto.' },
      ],
    },
    {
      name: 'process',
      type: 'group',
      label: 'Sección Proceso (4 pasos)',
      fields: [
        { name: 'title', type: 'text', label: 'Título', defaultValue: 'Cuatro pasos para transformar tu empresa', required: true },
      ],
    },
    {
      name: 'finalCta',
      type: 'group',
      label: 'CTA Final',
      fields: [
        { name: 'title', type: 'text', label: 'Título', defaultValue: 'Te invitamos un café y hablamos de tu idea.', required: true },
        { name: 'description', type: 'textarea', label: 'Descripción', defaultValue: 'Contanos tu desafío, sin compromiso. Empezamos por entender tu empresa y dónde está hoy.' },
        {
          name: 'button',
          type: 'group',
          fields: [
            { name: 'text', type: 'text', label: 'Texto del botón', defaultValue: 'Quiero una reunión gratuita', required: true },
            { name: 'link', type: 'text', label: 'Link de WhatsApp', defaultValue: 'https://wa.me/5493794398385', required: true },
          ],
        },
      ],
    },
  ],
}
