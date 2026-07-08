import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'

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

                    {course.link && (
                      <a href={course.link} className="btn btn-ghost" style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
                        Inscribirme <span className="arr">→</span>
                      </a>
                    )}
                  </div>
                )
              })
            ) : (
              <p>No hay cursos abiertos en este momento.</p>
            )}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="sec process">
        <img className="foco-watermark" src="/assets/foco-blanco.png" alt="" />
        <div className="hero-glow v" style={{ opacity: .5, top: 'auto', bottom: '-200px', right: '10%' }}></div>
        <div className="wrap">
          <div className="sec-head reveal">
            <h2 style={{ color: '#fff' }}>
              {globalData?.process?.title || 'Cuatro pasos para transformar tu empresa'}
            </h2>
          </div>
          <div className="steps">
            <div className="step reveal" data-d="1">
              <div className="idx">01<svg className="arrow" viewBox="0 0 40 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M2 9h32M28 3l8 6-8 6"/></svg></div>
              <div className="ph">PRIMER CONTACTO</div>
              <h4>Tomamos un café</h4>
              <p>Nos contás tu desafío, sin compromiso. El 80% de nuestros clientes empieza así.</p>
            </div>
            <div className="step reveal" data-d="2">
              <div className="idx">02<svg className="arrow" viewBox="0 0 40 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M2 9h32M28 3l8 6-8 6"/></svg></div>
              <div className="ph">DIAGNÓSTICO</div>
              <h4>Hallamos tu punto de dolor</h4>
              <p>Escuchamos, preguntamos y detectamos tus oportunidades de mejora.</p>
            </div>
            <div className="step reveal" data-d="3">
              <div className="idx">03<svg className="arrow" viewBox="0 0 40 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M2 9h32M28 3l8 6-8 6"/></svg></div>
              <div className="ph">PROPUESTA</div>
              <h4>Te enviamos el plan</h4>
              <p>Una propuesta clara, con objetivos medibles y tiempos concretos. Sin letra chica.</p>
            </div>
            <div className="step reveal" data-d="4">
              <div className="idx">04</div>
              <div className="ph">IMPLEMENTACIÓN</div>
              <h4>Trabajamos juntos</h4>
              <p>Acompañamiento de nuestro equipo durante todo el proyecto para cumplir los objetivos.</p>
            </div>
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
