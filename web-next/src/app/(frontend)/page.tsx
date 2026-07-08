import React from 'react'

export default function HomePage() {
  return (
    <>
      {/* ============ NAV ============ */}



<a id="top"></a>
{/* ============ HERO ============ */}
<section className="hero" id="hero">
  <div className="hero-glow v" data-par="0.05"></div>
  <div className="hero-glow p" data-par="0.03"></div>
  <div className="spotlight"></div>

  <div className="wrap hero-inner">
    <div className="hero-copy">
      <span className="kicker on-dark up">
        <svg className="spark" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z"/></svg>
        Consultora Organizacional · Corrientes
      </span>
      <h1 className="up" data-d="1">Ponemos en orden, optimizamos y hacemos
        <span className="hl">crecer<svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true"><path d="M3 17 C 70 6, 150 6, 210 12 S 280 20, 297 9"/></svg></span>
        tu empresa.</h1>
      <p className="hero-lead up" data-d="2">Somos 4Peeq. Ordenamos empresas, desarrollamos equipos, incorporamos talento, potenciamos con tecnología y generamos comunidad.</p>
      <div className="hero-cta up" data-d="3">
        <a href="https://wa.me/5493794398385" className="btn btn-violet">Tomemos un café ☕</a>
      </div>
      <div className="hero-meta up" data-d="4">
        <span>+70 empresas ya confiaron en nosotros</span>
      </div>
    </div>

    <div className="hero-art up" data-d="3">
      <div className="foco-chip"><img src="assets/foco-color.png" alt="4Peeq" /></div>
      <div className="block"></div>
      <div className="photo">
        <img src="public/home/opt/IMG-20260227-WA0045.webp" alt="Equipo 4Peeq celebrando" loading="eager" />
      </div>
      <div className="badge">
        <div className="n">+90%</div>
        <div className="t">nos vuelven<br />a elegir</div>
      </div>
    </div>
  </div>
</section>

{/* ============ STATS ============ */}
<section className="stats">
  <div className="wrap stats-inner">
    <div className="stat reveal"><span className="n" data-count>+70</span><span className="l">empresas acompañadas en su transformación</span></div>
    <div className="stat reveal" data-d="1"><span className="n" data-count>+3</span><span className="l">años acompañando organizaciones de la región</span></div>
    <div className="stat reveal" data-d="2"><span className="n" data-count>+90%</span><span className="l">de clientes que nos vuelven a elegir</span></div>
  </div>
</section>

{/* ============ LO QUE HACEMOS ============ */}
<section className="sec services" id="servicios">
  <div className="wrap">
    <div className="sec-head reveal">
      <h2>Una solución para cada <em>etapa</em> de tu empresa</h2>
      <p>No somos una consultora genérica. Cada unidad de 4Peeq está diseñada para resolver un problema concreto de tu organización.</p>
    </div>
    <div className="svc-grid">

      <a href="consultoria.html" className="svc svc-featured reveal" data-d="1">
        <div className="svc-top">
          <div className="svc-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        </div>
        <h3>Consultoría</h3>
        <div className="tag">ACOMPAÑAMIENTO</div>
        <p>Profesionalización y optimización de las áreas de tu organización.</p>
        <div className="areas">Administración · RRHH · Comercial y ventas · Logística y operaciones</div>
      </a>

      <a href="academy.html" className="svc reveal" data-d="2">
        <div className="svc-top">
          <div className="svc-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>
        </div>
        <h3>Academy</h3>
        <div className="tag">FORMACIÓN</div>
        <p>Programas de formación y capacitación para que tus equipos alcancen los objetivos y resultados esperados.</p>
      </a>

      <a href="people.html" className="svc reveal" data-d="3">
        <div className="svc-top">
          <div className="svc-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/></svg></div>
        </div>
        <h3>People</h3>
        <div className="tag">SELECCIÓN</div>
        <p>Encontramos a las personas correctas para tu equipo. Proceso riguroso, ágil y con foco en el fit cultural.</p>
      </a>

      <a href="tech.html" className="svc reveal" data-d="1">
        <div className="svc-top">
          <div className="svc-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M6 8l2 2-2 2M11 12h4"/></svg></div>
        </div>
        <h3>Tech</h3>
        <div className="tag">TECNOLOGÍA</div>
        <p>Soluciones para pymes que quieren crecer con datos: dashboards, automatizaciones y sistemas para decidir mejor.</p>
      </a>

      <a href="/club" className="svc reveal" data-d="2">
        <div className="svc-top">
          <div className="svc-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
        </div>
        <h3>Club</h3>
        <div className="tag">COMUNIDAD</div>
        <p>Experiencias donde empresas y líderes se conectan, aprenden y crecen juntos: Pymeton, 4Peeq Cup y 4Peeqneta.</p>
      </a>

      <a href="makers.html" className="svc reveal" data-d="3">
        <div className="svc-top">
          <div className="svc-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 4a2 2 0 1 0-4 0v3H4a2 2 0 1 0 0 4h3v3a2 2 0 1 0 4 0M13 7h3a2 2 0 1 1 0 4h-3v3a2 2 0 1 0 4 0"/><path d="M11 4v16"/></svg></div>
        </div>
        <h3>Makers</h3>
        <div className="tag">EQUIPO</div>
        <p>Jornadas de team building, día de la familia, maratones, competencias y experiencias a medida.</p>
      </a>

    </div>
  </div>
</section>

{/* ============ PROCESS ============ */}
<section className="sec process" id="proceso">
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

{/* ============ CLIENTES ============ */}
<section className="sec proof" id="clientes">
  <div className="wrap">
    <div className="sec-head center reveal">
      <h2>Más de 70 empresas ya confiaron en <span className="logo-inline"><img src="assets/logo-color-notext.png" alt="4Peeq" /><svg className="ul" viewBox="0 0 200 24" preserveAspectRatio="none" aria-hidden="true"><path d="M3 15 C 50 8, 150 8, 197 14"/></svg></span></h2>
      <p>De Corrientes y toda la región, en su camino de orden, optimización y crecimiento.</p>
    </div>
  </div>
  <div className="marquee reveal" data-d="1">
    <div className="marquee-track" id="track">
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/1.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/2.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/3.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/4.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/5.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/6.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/7.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/8.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/9.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/10.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/11.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/12.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/13.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/14.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/15.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/16.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/17.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/18.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/19.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/20.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/21.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/22.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/23.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/24.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/25.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/26.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/27.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/28.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/29.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/30.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/31.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/32.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/33.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/34.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/35.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/36.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/37.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/38.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/39.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/40.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/41.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/42.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/43.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/44.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/45.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/46.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/47.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/48.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/49.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/50.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/51.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/52.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/53.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/54.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/1.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/2.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/3.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/4.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/5.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/6.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/7.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/8.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/9.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/10.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/11.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/12.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/13.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/14.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/15.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/16.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/17.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/18.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/19.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/20.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/21.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/22.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/23.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/24.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/25.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/26.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/27.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/28.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/29.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/30.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/31.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/32.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/33.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/34.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/35.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/36.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/37.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/38.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/39.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/40.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/41.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/42.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/43.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/44.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/45.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/46.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/47.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/48.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/49.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/50.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/51.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/52.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/53.svg" alt="Cliente" loading="lazy" /></div>
      <div className="logo-cell" aria-label="Cliente"><img src="assets/clientes/54.svg" alt="Cliente" loading="lazy" /></div>
    </div>
  </div>
</section>

{/* ============ EQUIPO ============ */}
<section className="sec" id="equipo">
  <div className="wrap">
    <div className="sec-head reveal">
      <h2>4Peeq <em>en acción</em></h2>
      <p>El equipo trabajando junto a nuestros clientes, en el campo, todos los días.</p>
    </div>
    <div className="team-grid">
      <figure className="ph-img big reveal" data-d="1">
        <img src="public/clientes/opt/IMG-20250704-WA0045.webp" alt="Taller de diagnóstico con cliente" loading="lazy" />
        <span className="pin">EN EL CAMPO</span>
        <figcaption className="ph-cap">Taller de diagnóstico</figcaption>
      </figure>
      <figure className="ph-img reveal" data-d="2">
        <img src="public/home/opt/156-DSC00745.webp" alt="4Peeq Cup" loading="lazy" />
        <figcaption className="ph-cap">4Peeq Cup</figcaption>
      </figure>
      <figure className="ph-img reveal" data-d="3">
        <img src="public/home/opt/20250516_235045.webp" alt="Afteroffice 4Peeq" loading="lazy" />
        <figcaption className="ph-cap">Afteroffice</figcaption>
      </figure>
      <figure className="ph-img reveal" data-d="4">
        <img src="public/clientes/opt/IMG-20250428-WA0047.webp" alt="Workshop en coworking" loading="lazy" />
        <figcaption className="ph-cap">Workshop</figcaption>
      </figure>
      <figure className="ph-img reveal" data-d="5">
        <img src="public/clientes/opt/20250612_144946.webp" alt="Reunión con cliente" loading="lazy" />
        <figcaption className="ph-cap">Reunión con cliente</figcaption>
      </figure>
      <figure className="ph-img reveal" data-d="6">
        <img src="public/clientes/opt/20250724_174526.webp" alt="Evento 4Peeq" loading="lazy" />
        <figcaption className="ph-cap">Eventos</figcaption>
      </figure>
      <figure className="ph-img wide reveal" data-d="7">
        <img src="public/clientes/opt/IMG-20251230-WA0265(1).webp" alt="El equipo en rooftop" loading="lazy" />
        <figcaption className="ph-cap">El equipo</figcaption>
      </figure>
    </div>
  </div>
</section>

{/* ============ FINAL CTA ============ */}
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

{/* ============ FOOTER ============ */}
    </>
  )
}
