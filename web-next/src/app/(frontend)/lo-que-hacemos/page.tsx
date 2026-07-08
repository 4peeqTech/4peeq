import React from 'react'

export default function LoquehacemosPage() {
  return (
    <>
      {/* HERO */}
<section className="svc-hero">
  <div className="svc-hero-glow"></div>
  <div className="wrap">
    <h1>Lo que hacemos</h1>
    <p className="hub-hero-lead">Seis unidades especializadas, un solo objetivo: que tu empresa ordene, optimice y crezca.</p>
  </div>
</section>

{/* HUB GRID */}
<section className="sec svc-body">
  <div className="wrap">
    <div className="hub-grid">

      <a href="consultoria.html" className="hub-card reveal" data-d="1">
        <div className="hub-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h3>Consultoría</h3>
        <span className="tag">ACOMPAÑAMIENTO</span>
        <p>Profesionalización y optimización de las áreas de tu organización: administración, RRHH, comercial y operaciones.</p>
        <span className="svc-link">Ver programa <span className="arr">→</span></span>
      </a>

      <a href="academy.html" className="hub-card reveal" data-d="2">
        <div className="hub-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>
        <h3>Academy</h3>
        <span className="tag">FORMACIÓN</span>
        <p>Programas de formación y capacitación para que tus equipos alcancen los objetivos y resultados esperados.</p>
        <span className="svc-link">Ver programa <span className="arr">→</span></span>
      </a>

      <a href="people.html" className="hub-card reveal" data-d="3">
        <div className="hub-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/></svg></div>
        <h3>People</h3>
        <span className="tag">SELECCIÓN</span>
        <p>Encontramos a las personas correctas para tu equipo. Proceso riguroso, ágil y con foco en el fit cultural.</p>
        <span className="svc-link">Ver programa <span className="arr">→</span></span>
      </a>

      <a href="tech.html" className="hub-card reveal" data-d="1">
        <div className="hub-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M6 8l2 2-2 2M11 12h4"/></svg></div>
        <h3>Tech</h3>
        <span className="tag">TECNOLOGÍA</span>
        <p>Soluciones para pymes que quieren crecer con datos: dashboards, automatizaciones y sistemas para decidir mejor.</p>
        <span className="svc-link">Ver programa <span className="arr">→</span></span>
      </a>

      <a href="/club" className="hub-card reveal" data-d="2">
        <div className="hub-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
        <h3>Club</h3>
        <span className="tag">COMUNIDAD</span>
        <p>Experiencias donde empresas y líderes se conectan, aprenden y crecen juntos: Pymeton, 4Peeq Cup y 4Peeqneta.</p>
        <span className="svc-link">Ver programa <span className="arr">→</span></span>
      </a>

      <a href="makers.html" className="hub-card reveal" data-d="3">
        <div className="hub-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 4a2 2 0 1 0-4 0v3H4a2 2 0 1 0 0 4h3v3a2 2 0 1 0 4 0M13 7h3a2 2 0 1 1 0 4h-3v3a2 2 0 1 0 4 0"/><path d="M11 4v16"/></svg></div>
        <h3>Makers</h3>
        <span className="tag">EQUIPO</span>
        <p>Jornadas de team building, día de la familia, maratones, competencias y experiencias a medida.</p>
        <span className="svc-link">Ver programa <span className="arr">→</span></span>
      </a>

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
