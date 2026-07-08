import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'

const ACADEMY_FORM_URL = 'https://forms.gle/PENDIENTE'

const invitationPrograms = [
  {
    index: '01',
    title: 'Mejora Continua',
    hook: 'Tus costos crecen. Tus márgenes, ¿no?',
    bodyHtml: 'En toda operación hay plata que se escapa en <strong class="inv-kw">desperdicios que nadie ve</strong>. Con la filosofía que llevó a Toyota a ser el líder mundial que es hoy, tu equipo entrena el ojo para detectar esas oportunidades dentro de tu proceso actual y resolverlas con un método rápido y concreto. No se trata de invertir más, sino de <strong class="inv-kw">hacer rendir lo que ya tenés</strong>.',
    bodyText: 'En toda operación hay plata que se escapa en desperdicios que nadie ve. Con la filosofía que llevó a Toyota a ser el líder mundial que es hoy, tu equipo entrena el ojo para detectar esas oportunidades dentro de tu proceso actual y resolverlas con un método rápido y concreto. No se trata de invertir más, sino de hacer rendir lo que ya tenés.',
    close: 'Recuperá margen sin gastar de más.',
    icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  },
  {
    index: '02',
    title: 'Liderazgo',
    hook: 'Tu empresa creció. ¿Y tu liderazgo?',
    bodyHtml: 'Cuando el negocio escala más rápido que la forma de conducir, <strong class="inv-kw">aparece la ambigüedad</strong>: nadie tiene claro qué se espera y todo termina dependiendo de la dirección. Definimos el modelo de liderazgo que tu empresa necesita hoy y formamos a tus líderes para que <strong class="inv-kw">sostengan el crecimiento sin que todo pase por vos</strong>.',
    bodyText: 'Cuando el negocio escala más rápido que la forma de conducir, aparece la ambigüedad: nadie tiene claro qué se espera y todo termina dependiendo de la dirección. Definimos el modelo de liderazgo que tu empresa necesita hoy y formamos a tus líderes para que sostengan el crecimiento sin que todo pase por vos.',
    close: 'Profesionalizá tu conducción.',
    icon: <><path d="M5 3v18" /><path d="M5 4h11l-2 4 2 4H5" /></>,
  },
  {
    index: '03',
    title: 'Gestión de Equipos',
    hook: 'Tenés un grupo de personas. No un equipo.',
    bodyHtml: 'Se llevan bien, pero no rinden al máximo: reprocesos, roles difusos y fricción que frena los resultados. Trabajamos la diferencia entre <strong class="inv-kw">estar juntos y estar alineados</strong> para convertir ese grupo en un equipo que <strong class="inv-kw">decide rápido y rinde bajo presión</strong>.',
    bodyText: 'Se llevan bien, pero no rinden al máximo: reprocesos, roles difusos y fricción que frena los resultados. Trabajamos la diferencia entre estar juntos y estar alineados para convertir ese grupo en un equipo que coordina, decide rápido y rinde bajo presión.',
    close: 'Pasá de la buena onda al alto rendimiento.',
    icon: <><circle cx="9" cy="8" r="3" /><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" /><circle cx="17" cy="9" r="2.4" /><path d="M16 14.2c2.6.4 4.5 2.3 5 5.8" /></>,
  },
  {
    index: '04',
    title: 'Higiene y Seguridad',
    hook: 'Un accidente cuesta mucho más que prevenirlo.',
    bodyHtml: 'Cuidar a tu gente y cumplir con la normativa <strong class="inv-kw">no es opcional</strong>. Formamos a tu equipo en prevención de riesgos, uso de EPP, manejo de extintores y evacuación, con teoría y práctica real. <strong class="inv-kw">Menos exposición, más tranquilidad</strong> y la operación protegida.',
    bodyText: 'Cuidar a tu gente y cumplir con la normativa no es opcional. Formamos a tu equipo en prevención de riesgos, uso de EPP, manejo de extintores y evacuación, con teoría y práctica real. Menos exposición, más tranquilidad y la operación protegida.',
    close: 'Protegé a tu equipo y cumplí la norma.',
    icon: <><path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></>,
  },
  {
    index: '05',
    title: 'Capacitaciones Express',
    hook: 'Formación corta. Resultados que se notan ya.',
    bodyHtml: 'Talleres puntuales para resolver lo urgente <strong class="inv-kw">sin frenar la operación</strong>: atención al cliente en gastronomía, vínculos que fidelizan y técnicas de venta efectivas. <strong class="inv-kw">Bajo compromiso, alto impacto</strong> y la puerta de entrada ideal para empezar a formar a tu equipo.',
    bodyText: 'Talleres puntuales para resolver lo urgente sin frenar la operación: atención al cliente en gastronomía, vínculos que fidelizan y técnicas de venta efectivas. Bajo compromiso, alto impacto y la puerta de entrada ideal para empezar a formar a tu equipo.',
    close: 'Empezá simple, mejorá rápido.',
    icon: <><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" /></>,
  },
  {
    index: '06',
    title: 'Escuela de Emprendedores',
    hook: '¿Tenés un negocio o tenés un hobby?',
    bodyHtml: 'Muchos emprendedores empiezan haciendo lo que les gusta, y eso está muy bien. Pero si ese negocio crece, demanda <strong class="inv-kw">otros conocimientos, herramientas y más responsabilidad</strong>. En este curso vas a aprender las cuestiones básicas de un negocio: cómo hacerlo <strong class="inv-kw">rentable y sostenible</strong>.',
    bodyText: 'Muchos emprendedores empiezan haciendo lo que les gusta, y eso está muy bien. Pero si ese negocio crece, demanda otros conocimientos, herramientas y más responsabilidad. En este curso vas a aprender las cuestiones básicas de un negocio: cómo hacerlo rentable y sostenible.',
    close: 'Entendé tu negocio hoy.',
    icon: <><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0 0 12 2z" /></>,
  },
]

export default async function AcademyPage() {
  const payload = await getPayload({ config: configPromise })
  
  // Opcional: Tipar usando generados (si existen) o any si aún no se generaron
  const globalData = await payload.findGlobal({ slug: 'academyPage' }) as any
  const coursesData = await payload.find({ collection: 'courses', where: { status: { equals: 'abierto' } } })
  const courses = coursesData.docs as any[]

  return (
    <>
      {/* HERO */}
      <section className="svc-hero">
        <div className="svc-hero-glow"></div>
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Miga de pan">
            <a href="/lo-que-hacemos">Lo que hacemos</a>
            <span aria-hidden="true">/</span>
            <span>Academy</span>
          </nav>
          <span className="svc-tag-hero">{globalData?.hero?.tag || 'FORMACIÓN'}</span>
          <h1>{globalData?.hero?.title || 'Formamos equipos que alcanzan resultados.'}</h1>
          <p className="svc-hero-lead">{globalData?.hero?.lead || 'Diseñamos programas de capacitación a medida para que tu gente desarrolle las habilidades que tu empresa necesita hoy.'}</p>
          <div className="svc-hero-cta">
            <a href={globalData?.hero?.cta?.link || 'https://wa.me/5493794398385'} className="btn btn-violet">
              {globalData?.hero?.cta?.text || 'Quiero empezar'} <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTENIDO (CURSOS DINÁMICOS) */}
      <section className="svc-block svc-body">
        <div className="wrap">
          <h2>{globalData?.coursesSection?.title || 'Qué incluye / Cursos abiertos'}</h2>
          <p>{globalData?.coursesSection?.description || 'Nuestros programas de formación activos.'}</p>
          <div className="areas-grid">
            {courses && courses.length > 0 ? (
              courses.map((course, i) => {
                // Renderizamos el ícono si es SVG, o la imagen si se subió
                let MediaElement = null
                if (course.mediaType?.type === 'icon') {
                  // Mapeo básico de íconos o renderizar un placeholder. 
                  // Usamos el diseño que tenían las cards anteriores.
                  MediaElement = <div className="svc-ico" style={{ marginBottom: '1rem', color: 'var(--violet-lt)' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>
                } else if (course.mediaType?.type === 'image' && course.mediaType.image?.url) {
                  MediaElement = <img src={course.mediaType.image.url} alt={course.title} style={{ width: '48px', height: '48px', marginBottom: '1rem', borderRadius: '4px' }} />
                }

                return (
                  <div className="area-card reveal" data-d={i + 1} key={course.id}>
                    {MediaElement}
                    <h4>{course.title}</h4>
                    <p>{course.description}</p>
                    
                    {/* Detalles adicionales del curso */}
                    <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--gray-300)' }}>
                      {course.dates && <div style={{ marginBottom: '0.5rem' }}><strong>📅 Fechas:</strong> {course.dates}</div>}
                      {course.quotas && <div style={{ marginBottom: '0.5rem' }}><strong>👥 Cupos:</strong> {course.quotas}</div>}
                    </div>

                    {/* course.link button removed as requested */}
                  </div>
                )
              })
            ) : (
              <p>No hay cursos abiertos en este momento.</p>
            )}
          </div>
        </div>
      </section>

      {/* INVITACIÓN A PROGRAMAS (carrusel que centra y agranda la card en hover) */}
      <section className="inv-section">
        <div className="wrap">
          <div className="sec-head center reveal">
            <h2>Próximos programas de <em className="hl" style={{ color: 'var(--violet-lt)', fontStyle: 'italic' }}>formación<svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true"><path d="M3 17 C 70 6, 150 6, 210 12 S 280 20, 297 9"/></svg></em></h2>
            <p style={{ color: '#fff' }}>Pasá el mouse por cada card para conocer el programa.</p>
          </div>
        </div>

        <div className="inv-marquee reveal" data-d="1">
          <div className="inv-track">
            {/* Duplicamos las cards para el loop infinito; la mitad duplicada se oculta de lectores de pantalla */}
            {[...invitationPrograms, ...invitationPrograms].map((p, i) => {
              const isDup = i >= invitationPrograms.length
              const fullText = `${p.hook} ${p.bodyText} ${p.close}`
              return (
                <div className="inv-cell" key={`${p.title}-${i}`} aria-hidden={isDup || undefined}>
                  <div className="inv-frame" aria-hidden="true"></div>
                  <article className="inv-card" data-hook={p.hook}>
                    <div className="inv-main">
                      <div className="inv-head">
                        <span className="inv-index">{p.index}</span>
                        <h3 className="inv-title">{p.title}</h3>
                      </div>
                      <div className="inv-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{p.icon}</svg>
                      </div>
                      <a className="inv-btn btn btn-violet" href={ACADEMY_FORM_URL} target="_blank" rel="noopener" tabIndex={isDup ? -1 : undefined}>
                        Inscribirme <span className="arr">→</span>
                      </a>
                    </div>
                    <div className="inv-reveal" aria-hidden="true">
                      <p className="inv-hook"><span className="inv-hook-typed"></span><span className="inv-caret"></span></p>
                      <p className="inv-body" dangerouslySetInnerHTML={{ __html: p.bodyHtml }} />
                      <p className="inv-close">{p.close}</p>
                    </div>
                    <p className="inv-full sr-only">{fullText}</p>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final">
        <div className="wrap">
          <div className="final-card reveal">
            <img className="foco-watermark" src="/assets/foco-blanco.png" alt="" />
            <h2>{globalData?.finalCta?.title || 'Te invitamos un café y hablamos de tu idea.'}</h2>
            <p>{globalData?.finalCta?.description || 'Contanos tu desafío, sin compromiso. Empezamos por entender tu empresa y dónde está hoy.'}</p>
            <div className="final-cta">
              <a href={globalData?.finalCta?.button?.link || 'https://wa.me/5493794398385'} className="btn btn-violet">
                {globalData?.finalCta?.button?.text || 'Quiero una reunión gratuita'} <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
