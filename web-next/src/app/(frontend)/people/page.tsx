import React from 'react'

export default function PeoplePage() {
  return (
    <>
      {/* HERO */}
<section className="svc-hero">
  <div className="svc-hero-glow"></div>
  <div className="wrap">
    <nav className="breadcrumb" aria-label="Miga de pan">
      <a href="lo-que-hacemos.html">Lo que hacemos</a>
      <span aria-hidden="true">/</span>
      <span>People</span>
    </nav>
    <span className="svc-tag-hero">SELECCIÓN</span>
    <h1>Las personas correctas, en el rol correcto.</h1>
    <p className="svc-hero-lead">Acompañamos el proceso de incorporación de talento con rigor metodológico y foco en el fit cultural. Sin atajos.</p>
    <div className="svc-hero-cta">
      <a href="https://wa.me/5493794398385" className="btn btn-violet">Quiero contratar <span className="arr">→</span></a>
      <a href="/postulate" className="btn btn-ghost on-dark">Quiero postularme</a>
    </div>
  </div>
</section>

{/* CONTENIDO */}
<section className="svc-block svc-body">
  <div className="wrap">
    <h2>Cómo seleccionamos</h2>
    <p>Un proceso de selección bien hecho es la inversión de talento más rentable que puede hacer una empresa. Nos involucramos desde el perfil hasta la incorporación.</p>
    <div className="areas-grid">
      <div className="area-card reveal" data-d="1">
        <div className="svc-ico" style={{ marginBottom: '16px' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
        </div>
        <h4>Nuestro proceso</h4>
        <p>Un proceso claro y metodológico, de punta a punta: desde la definición del perfil hasta la presentación de los candidatos finales.</p>
      </div>
      <div className="area-card reveal" data-d="2">
        <div className="svc-ico" style={{ marginBottom: '16px' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
        </div>
        <h4>Evaluación integral</h4>
        <p>Evaluamos a cada candidato con entrevistas por competencias y evaluaciones técnicas antes de presentártelo.</p>
      </div>
      <div className="area-card reveal" data-d="3">
        <div className="svc-ico" style={{ marginBottom: '16px' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h4>Servicio con garantía</h4>
        <p>Acompañamos a tu candidato durante 60 días, con seguimiento activo de su desempeño en el puesto.</p>
      </div>
      <div className="area-card reveal" data-d="4">
        <div className="svc-ico" style={{ marginBottom: '16px' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        </div>
        <h4>Headhunting</h4>
        <p>Hacemos headhunting: salimos a buscar directamente al profesional calificado para tu puesto clave o directivo, en lugar de esperar a que se postule por su cuenta.</p>
      </div>
    </div>
  </div>
</section>



{/* CTA */}
<section className="final">
  <div className="wrap">
    <div className="final-card reveal">
      <img className="foco-watermark" src="assets/foco-blanco.png" alt="" />
      <h2>Te invitamos un café y hablamos de tu equipo.</h2>
      <p>Contanos qué perfil estás buscando, sin compromiso. Empezamos por entender la cultura de tu empresa y el talento que necesitás para crecer.</p>
      <div className="final-cta">
        <a href="https://wa.me/5493794398385" className="btn btn-violet">Quiero una reunión gratuita <span className="arr">→</span></a>
        <a href="https://instagram.com/trabajo_4people" target="_blank" rel="noopener noreferrer" className="btn btn-ghost on-dark">Seguinos en nuestras redes</a>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
