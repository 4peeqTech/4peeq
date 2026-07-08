import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function seed() {
  const payload = await getPayload({ config: configPromise })

  console.log('Seeding AcademyPage...')
  await payload.updateGlobal({
    slug: 'academyPage',
    data: {
      hero: {
        tag: 'FORMACIÓN',
        title: 'Formamos equipos que alcanzan resultados.',
        lead: 'Diseñamos programas de capacitación a medida para que tu gente desarrolle las habilidades que tu empresa necesita hoy.',
        cta: {
          text: 'Quiero empezar',
          link: 'https://wa.me/5493794398385',
        },
      },
      coursesSection: {
        title: 'Qué incluye',
        description: 'Cada programa se diseña en función del diagnóstico previo: qué necesita aprender tu equipo, en qué formato y con qué objetivo concreto.',
      },
      process: {
        title: 'Cuatro pasos para transformar tu empresa',
      },
      finalCta: {
        title: 'Te invitamos un café y hablamos de tu idea.',
        description: 'Contanos tu desafío, sin compromiso. Empezamos por entender tu empresa y dónde está hoy.',
        button: {
          text: 'Quiero una reunión gratuita',
          link: 'https://wa.me/5493794398385',
        },
      },
    },
  })

  console.log('Seeding Courses...')
  // Eliminar cursos anteriores si se quiere empezar de cero (opcional)
  const existingCourses = await payload.find({ collection: 'courses' })
  for (const course of existingCourses.docs) {
    await payload.delete({ collection: 'courses', id: course.id })
  }

  const coursesToSeed = [
    {
      title: 'Programas a medida',
      description: 'Diseñamos el contenido en función del contexto real de tu empresa. No formaciones genéricas de catálogo.',
      status: 'abierto',
      mediaType: { type: 'icon', icon: 'custom-program' },
      link: 'https://wa.me/5493794398385',
    },
    {
      title: 'Liderazgo y gestión',
      description: 'Desarrollo de líderes intermedios, mandos medios y equipos de conducción para mejorar la gestión del día a día.',
      status: 'abierto',
      mediaType: { type: 'icon', icon: 'leadership' },
      link: 'https://wa.me/5493794398385',
    },
    {
      title: 'Habilidades comerciales',
      description: 'Formación en venta consultiva, manejo de objeciones y cierre para equipos comerciales de pymes.',
      status: 'abierto',
      mediaType: { type: 'icon', icon: 'sales' },
      link: 'https://wa.me/5493794398385',
    },
    {
      title: 'Cultura y trabajo en equipo',
      description: 'Talleres y dinámicas para fortalecer la cohesión, la comunicación y el sentido de pertenencia al equipo.',
      status: 'abierto',
      mediaType: { type: 'icon', icon: 'culture' },
      link: 'https://wa.me/5493794398385',
    },
  ]

  for (const course of coursesToSeed) {
    await payload.create({
      collection: 'courses',
      data: course as any,
    })
  }

  console.log('¡Seeding completado con éxito!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
