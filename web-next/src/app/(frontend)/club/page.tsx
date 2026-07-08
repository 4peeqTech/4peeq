import React from 'react'

export default function ClubPage() {
  return (
    <>
      {/* HERO */}
<section className="svc-hero">
  <div className="svc-hero-glow"></div>
  <div className="wrap">
    <nav className="breadcrumb" aria-label="Miga de pan">
      <a href="lo-que-hacemos.html">Lo que hacemos</a>
      <span aria-hidden="true">/</span>
      <span>Club</span>
    </nav>
    <span className="svc-tag-hero">4PEEQ CLUB · COMUNIDAD DE DUEÑOS</span>
    <h1>Nadie construye algo importante solo.</h1>
    <p className="svc-hero-lead">Comunidad, experiencias y conexiones para dueños de pymes que quieren crecer acompañados.</p>
    <div className="svc-hero-cta">
      <a href="postulate.html" className="btn btn-violet">Quiero ser parte <span className="arr">→</span></a>
      <a href="https://wa.me/5493794398385" className="btn btn-ghost on-dark">Quiero ser sponsor</a>
      <a href="#calendario" className="btn btn-ghost on-dark">Ver próximos eventos</a>
    </div>
  </div>
</section>

{/* QUÉ ES */}
<section className="svc-block svc-body">
  <div className="wrap">
    <h2>¿Qué es 4Peeq Club?</h2>
    <p>Un espacio diseñado exclusivamente para dueños de pymes. Acá pasan cosas reales: conexiones genuinas, aprendizajes concretos y oportunidades que solo existen cuando estás en la sala.</p>
    <div className="areas-grid">
      <div className="area-card reveal" data-d="1">
        <h4>🤝 Te conectás con otros dueños</h4>
        <p>Personas que entienden los mismos desafíos que vos, sin filtros y sin intermediarios.</p>
      </div>
      <div className="area-card reveal" data-d="2">
        <h4>⭐ Aprendés desde experiencias reales</h4>
        <p>Nada de teoría vacía. Todo desde el campo de juego, con quienes ya lo vivieron.</p>
      </div>
      <div className="area-card reveal" data-d="3">
        <h4>💡 Generás oportunidades concretas</h4>
        <p>Negocios, alianzas, clientes. El Club multiplica tu red con intención y calidad.</p>
      </div>
      <div className="area-card reveal" data-d="4">
        <h4>🚀 Crecés acompañado</h4>
        <p>Emprender no debería ser en soledad. Acá encontrás tu comunidad de referencia.</p>
      </div>
    </div>
  </div>
</section>

{/* STATS */}
<section className="stats stats-4">
  <div className="stats-inner">
    <div className="stat reveal"><span className="n">+150</span><span className="l">dueños activos en la comunidad</span></div>
    <div className="stat reveal" data-d="1"><span className="n">4</span><span className="l">formatos de eventos diseñados para conectar</span></div>
    <div className="stat reveal" data-d="2"><span className="n">+3</span><span className="l">años construyendo comunidad en el NEA</span></div>
    <div className="stat reveal" data-d="3"><span className="n">∞</span><span className="l">conexiones posibles cuando estás en la sala</span></div>
  </div>
</section>

{/* EXPERIENCIAS */}
<section className="sec">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="kicker">EXPERIENCIAS</span>
      <h2>Viví la experiencia 4Peeq</h2>
      <p>Cuatro formatos, un mismo propósito: que los vínculos se conviertan en oportunidades reales.</p>
    </div>
    <div className="svc-grid svc-grid-2x2">

      <div className="svc reveal" data-d="1">
        <div className="svc-top">
          <div className="svc-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
        </div>
        <h3>4Peeqneta</h3>
        <div className="tag">NETWORKING</div>
        <p>Encuentros informales de networking. Donde las conversaciones sin agenda rígida se vuelven las oportunidades más importantes.</p>
        <a href="https://wa.me/5493794398385" className="svc-link">Reservar lugar <span className="arr">→</span></a>
      </div>

      <div className="svc reveal" data-d="2">
        <div className="svc-top">
          <div className="svc-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>
          </div>
        </div>
        <h3>4Peeq Cup</h3>
        <div className="tag">COMPETENCIA</div>
        <p>Torneo interempresas. Competencia sana que genera vínculos profundos y una excusa perfecta para conocer otras organizaciones.</p>
        <a href="https://wa.me/5493794398385" className="svc-link">Reservar lugar <span className="arr">→</span></a>
      </div>

      <a className="svc svc-clickable reveal" data-d="3" href="/pymeton">
        <div className="svc-top">
          <div className="svc-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
          </div>
        </div>
        <h3>Pymeton</h3>
        <div className="tag">CICLO DE CHARLAS</div>
        <p>Visitas a empresas de la región. Aprendizaje in situ de los que ya recorrieron el camino y están dispuestos a compartirlo.</p>
        <span className="svc-link">Ver los capítulos <span className="arr">→</span></span>
      </a>

      <div className="svc reveal" data-d="1">
        <div className="svc-top">
          <div className="svc-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>
          </div>
        </div>
        <h3>4Peeq Talks</h3>
        <div className="tag">INSPIRACIÓN</div>
        <p>Charlas que inspiran, ideas que transforman. Speakers con experiencia real compartiendo lo que funciona y lo que no.</p>
        <a href="https://wa.me/5493794398385" className="svc-link">Reservar lugar <span className="arr">→</span></a>
      </div>

    </div>
  </div>
</section>

{/* GALERÍA */}
<section className="sec club-gallery">
  <div className="wrap">
    <div className="sec-head center reveal">
      <h2>Momentos de 4Peeq Club</h2>
      <p>Comunidad real, conexiones genuinas, experiencias que dejan huella.</p>
    </div>
    <div className="team-grid reveal" data-d="1" id="clubGallery">
      <div className="ph-img big" data-slot="0"><span className="pin">COMUNIDAD REAL</span></div>
      <div className="ph-img" data-slot="1"></div>
      <div className="ph-img" data-slot="2"></div>
      <div className="ph-img" data-slot="3"></div>
      <div className="ph-img" data-slot="4"></div>
    </div>
  </div>
</section>

{/* ¿ES PARA VOS? */}
<section className="svc-block svc-body club-criteria-sec">
  <div className="wrap">
    <div className="club-criteria-layout">
      {/* Left: criteria */}
      <div className="club-criteria-left">
        <h2>¿Es para vos?</h2>
        <p>El Club está diseñado para un perfil muy específico. Si te reconocés acá, ya sos parte.</p>
        <ul className="club-criteria">
          <li className="criteria-item reveal" data-d="1">
            <span className="ci-num">01</span>
            <span className="ci-text">Sos dueño o socio de una pyme en crecimiento</span>
          </li>
          <li className="criteria-item reveal" data-d="2">
            <span className="ci-num">02</span>
            <span className="ci-text">Querés rodearte de personas que piensan como vos</span>
          </li>
          <li className="criteria-item reveal" data-d="3">
            <span className="ci-num">03</span>
            <span className="ci-text">Buscás expandir tu red con intención y calidad</span>
          </li>
          <li className="criteria-item reveal" data-d="4">
            <span className="ci-num">04</span>
            <span className="ci-text">Valorás el aprendizaje desde la experiencia real</span>
          </li>
          <li className="criteria-item reveal" data-d="5">
            <span className="ci-num">05</span>
            <span className="ci-text">Entendés que los grandes negocios nacen de los vínculos</span>
          </li>
        </ul>
      </div>
      {/* Right: testimonial */}
      <div className="club-testimonial reveal" data-d="2">
        <div className="club-testimonial-inner">
          <div className="ct-quote-mark">"</div>
          <p className="ct-text">Si estás construyendo algo importante... ya no tenés por qué hacerlo solo.</p>
          <div className="ct-footer">
            <div className="ct-avatar">4P</div>
            <div>
              <p className="ct-name">4Peeq Club</p>
              <p className="ct-role">Comunidad de dueños de pyme</p>
            </div>
          </div>
          <a href="postulate.html" className="btn btn-violet ct-cta">Quiero ser parte <span className="arr">→</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* SPONSORS */}
<section className="svc-block club-sponsor-sec">
  <div className="wrap">
    <div className="club-sponsor-inner">
      <div className="club-sponsor-copy">
        <span className="tag">SPONSORS</span>
        <h2>Oportunidad para Sponsors</h2>
        <p>Conectá tu marca con el perfil exacto que estás buscando. Comunidad calificada, alta intención y contexto de confianza.</p>
        <div className="club-sponsor-stats">
          <div className="club-sponsor-stat reveal" data-d="1"><span className="n">+150</span><span className="l">dueños activos</span></div>
          <div className="club-sponsor-stat reveal" data-d="2"><span className="n">4</span><span className="l">formatos de eventos</span></div>
          <div className="club-sponsor-stat reveal" data-d="3"><span className="n">+3</span><span className="l">años de comunidad</span></div>
        </div>
        <a href="https://wa.me/5493794398385" className="btn btn-violet">Quiero ser sponsor <span className="arr">→</span></a>
      </div>
    </div>
  </div>
</section>

{/* CALENDARIO */}
<section className="sec" id="calendario">
  <div className="wrap">
    <div className="sec-head reveal">
      <span className="kicker">CALENDARIO</span>
      <h2>Próximos eventos</h2>
      <p>Reservá tu lugar. Los cupos son limitados para mantener la calidad de las conexiones.</p>
    </div>
  </div>

  {/* Scrollytelling: rail con furgoneta + fecha gigante + countdown.
       Rail, escenas y datos se generan desde EVENTOS en app.js. */}
  <div className="cal-scrolly">
    <div className="cal-stage">
      <div className="cal-bg" aria-hidden="true"></div>
      <div className="cal-road" aria-hidden="true"></div>
      <div className="cal-scenes"></div>
      <div className="cal-bar" aria-hidden="true"></div>
      <div className="cal-hint" aria-hidden="true">Scrolleá para ver la ruta</div>
    </div>
  </div>
</section>

{/* CTA FINAL */}
<section className="final">
  <div className="wrap">
    <div className="final-card reveal">
      <img className="foco-watermark" src="assets/foco-blanco.png" alt="" />
      <h2>Si estás construyendo algo importante...</h2>
      <p>Ya no tenés por qué hacerlo solo. Sumate a la comunidad de dueños que está transformando el NEA.</p>
      <div className="final-cta">
        <a href="postulate.html" className="btn btn-violet">Sumarme al Club <span className="arr">→</span></a>
        <span className="or">o</span>
        <a href="https://wa.me/5493794398385" className="btn btn-ghost on-dark">Hablar por WhatsApp</a>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
