import React from 'react'

export default function MakersPage() {
  return (
    <>
      {/* HERO */}
<section className="svc-hero">
  <div className="svc-hero-glow"></div>
  <div className="wrap">
    <nav className="breadcrumb" aria-label="Miga de pan">
      <a href="lo-que-hacemos.html">Lo que hacemos</a>
      <span aria-hidden="true">/</span>
      <span>Makers</span>
    </nav>
    <span className="svc-tag-hero">EQUIPO</span>
    <h1>Experiencias que construyen equipo de verdad.</h1>
    <p className="svc-hero-lead">Diseñamos jornadas y actividades que van más allá del "team building" estándar: experiencias que la gente recuerda y que dejan algo.</p>
    <div className="svc-hero-cta">
      <a href="https://wa.me/5493794398385" className="btn btn-violet">Quiero una propuesta <span className="arr">→</span></a>
      <a href="lo-que-hacemos.html" className="btn btn-ghost on-dark">Ver todo lo que hacemos</a>
    </div>
  </div>
</section>

{/* CONTENIDO */}
<section className="svc-block svc-body">
  <div className="wrap">
    <h2>Qué organizamos</h2>
    <p>Cada actividad parte de un objetivo concreto: integración, reconocimiento, motivación, o simplemente parar y disfrutar juntos. No vendemos eventos genéricos.</p>
    <div className="areas-grid">
      <div className="area-card reveal" data-d="1">
        <h4>Team Building</h4>
        <p>Jornadas de integración diseñadas para fortalecer la confianza, la comunicación y la colaboración dentro del equipo.</p>
      </div>
      <div className="area-card reveal" data-d="2">
        <h4>Día de la Familia</h4>
        <p>Eventos para que el equipo comparta con sus familias. Un reconocimiento concreto que genera pertenencia duradera.</p>
      </div>
      <div className="area-card reveal" data-d="3">
        <h4>Maratones y competencias</h4>
        <p>Desafíos deportivos y competencias interáreas o interempresas. El juego sano como herramienta de cohesión.</p>
      </div>
      <div className="area-card reveal" data-d="4">
        <h4>Experiencias a medida</h4>
        <p>Si tenés una idea o una fecha especial, la diseñamos desde cero para que tenga el impacto que buscás.</p>
      </div>
    </div>
  </div>
</section>

{/* PROCESO */}
<section className="sec process">
  <img className="foco-watermark" src="assets/foco-blanco.png" alt="" />
  <div className="hero-glow v" style={{ opacity: .5, top: 'auto', bottom: '-200px', right: '10%' }}></div>
  <div className="wrap">
    <div className="sec-head reveal">
      <h2 style={{ color: '#fff' }}>Cuatro pasos para <em style={{ color: 'var(--violet-lt)', fontStyle: 'italic' }}>transformar</em> tu empresa</h2>
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

{/* CTA */}
<section className="final">
  <div className="wrap">
    <div className="final-card reveal">
      <img className="foco-watermark" src="assets/foco-blanco.png" alt="" />
      <h2>Te invitamos un café y hablamos de tu idea.</h2>
      <p>Contanos tu desafío, sin compromiso. Empezamos por entender tu empresa y dónde está hoy.</p>
      <div className="final-cta">
        <a href="https://wa.me/5493794398385" className="btn btn-violet">Quiero una reunión gratuita <span className="arr">→</span></a>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
