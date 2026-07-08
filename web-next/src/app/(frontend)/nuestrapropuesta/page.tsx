import React from 'react'

export default function NuestrapropuestaPage() {
  return (
    <>
      {/* logo flotante (se desvanece al entrar en el contenido) */}
<header className="pnav theme-dark" id="pnav">
  <a href="/" className="brand" aria-label="4Peeq inicio">
    <img className="logo-blanco" src="assets/logo-blanco.png" alt="4Peeq · Personas & Equipos" />
    <img className="logo-color" src="assets/logo-color.png" alt="4Peeq · Personas & Equipos" />
  </a>
</header>

<main id="scrolly-deck">

{/* ============ 1 · PORTADA ============ */}
<section className="slide dark cover stage" id="s1" data-label="Inicio">
  <div className="spotlight"></div>
  <div className="s-dots"></div>
  <div className="s-glow a"></div>
  <div className="s-glow b"></div>
  <svg className="spark-f" style={{ top: '18%', left: '14%', width: '34px', height: '34px' }} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z"/></svg>
  <svg className="spark-f" style={{ top: '70%', right: '16%', width: '22px', height: '22px', animationDelay: '1.2s' }} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z"/></svg>
  <svg className="spark-f" style={{ top: '30%', right: '24%', width: '16px', height: '16px', animationDelay: '.6s' }} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z"/></svg>

  <div className="wrap">
    <div className="foco-spin"><img src="assets/foco-color.png" alt="4Peeq" /></div>
    <span className="eyebrow s1-text"><span className="dot"></span>Consultora Organizacional · Corrientes</span>
    <h1 className="s1-text">Ponemos en orden, optimizamos y hacemos
      <span className="hl">crecer<svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true"><path d="M3 17 C 70 6, 150 6, 210 12 S 280 20, 297 9"/></svg></span>
      tu empresa.</h1>
    <div className="cover-meta s1-text" style={{ fontSize: '24px', padding: '18px 36px', borderWidth: '2px', marginTop: '40px', background: 'rgba(255,255,255,.08)' }}><span className="pip" style={{ width: '12px', height: '12px' }}></span>Más de <b style={{ fontSize: '26px' }}>70 empresas</b> confían en nosotros</div>
  </div>
  <div className="cue">Deslizá para empezar<div className="mouse"></div></div>
</section>


{/* ============ 2 · DOLORES ============ */}
<section className="slide dark stage" id="s2" data-label="El problema">
  <div className="spotlight"></div>
  <div className="s-glow a"></div>
  <div className="wrap">
    <div className="reveal" data-d="1">
      <span className="eyebrow"><span className="dot"></span>El punto de partida</span>
      <h2 className="s-title">¿Te está pasando esto?</h2>
      <p className="s-lead">La mayoría de las pymes que acompañamos llegan sintiendo lo mismo. Identificar el problema es el primer paso para resolverlo.</p>
    </div>

    <div className="pain-grid reveal" data-d="2">
      <article className="pain" data-n="01" style={{ textAlign: 'center', alignItems: 'center' }}>
        <div className="p-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
        <p>No sabés si <b>ganás o perdés dinero</b> realmente.</p>
      </article>
      <article className="pain" data-n="02" style={{ textAlign: 'center', alignItems: 'center' }}>
        <div className="p-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M6 6l1.5 9M18 6l-1.5 9M8 21l2-6M16 21l-2-6M9 15h6"/></svg></div>
        <p>Sentís <b>desorden</b>, procesos que no funcionan y caos diario.</p>
      </article>
      <article className="pain" data-n="03" style={{ textAlign: 'center', alignItems: 'center' }}>
        <div className="p-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 8l2 2 3.5-3.5"/></svg></div>
        <p>Tu equipo <b>no responde</b> o no está alineado con los objetivos.</p>
      </article>
      <article className="pain" data-n="04" style={{ textAlign: 'center', alignItems: 'center' }}>
        <div className="p-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l3-4 3 2 5-7" strokeDasharray="3 3"/><circle cx="7" cy="14" r="0.6" fill="currentColor"/></svg></div>
        <p>Tomás decisiones <b>sin información confiable</b>.</p>
      </article>
      <article className="pain" data-n="05" style={{ textAlign: 'center', alignItems: 'center' }}>
        <div className="p-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6M12 8a5 5 0 0 0-5 5c0 4 5 9 5 9s5-5 5-9a5 5 0 0 0-5-5zM9 21h6"/></svg></div>
        <p>Trabajás mucho, pero <b>tu empresa no crece</b>.</p>
      </article>
    </div>

    <p className="pain-foot reveal" data-d="3">Si te identificás con esto, <em>no estás solo</em> — y tiene solución.</p>
  </div>
</section>


{/* ============ 3 · PUENTE ============ */}
<section className="slide dark bridge stage" id="s3" data-label="La solución">
  <div className="spotlight"></div>
  <div className="s-glow a"></div>
  <div className="wrap">
    <div className="reveal" data-d="1">
      <span className="eyebrow"><span className="dot"></span>Nuestra forma de trabajar</span>
      <h2 className="s-title">Primero entender.<br />Después transformar.</h2>
      <p className="s-lead">No vendemos recetas genéricas. Te proponemos un camino ordenado: diagnosticamos a fondo, intervenimos donde más impacto hay e implementamos junto a tu equipo.</p>
    </div>
    <div className="bridge-steps reveal" data-d="2">
      <div className="bstep">
        <div className="bn">1</div>
        <div><h4>Diagnóstico</h4><p>Una mirada integral y honesta de tu empresa para saber exactamente dónde estás parado hoy.</p></div>
      </div>
      <div className="bstep">
        <div className="bn">2</div>
        <div><h4>Intervención</h4><p>Trabajamos sobre el área de mayor oportunidad, con objetivos medibles y tiempos concretos.</p></div>
      </div>
      <div className="bstep">
        <div className="bn">3</div>
        <div><h4>Implementación</h4><p>Acompañamos la ejecución para que los cambios se sostengan y se traduzcan en resultados.</p></div>
      </div>
    </div>
  </div>
</section>




{/* ============ 6 · ÁREAS ============ */}
<section className="slide dark stage" id="s6" data-label="Áreas">
  <div className="spotlight"></div>
  <div className="s-glow a"></div>
  <div className="wrap">

    {/* Title */}
    <div className="reveal" data-d="1">
      <span className="eyebrow"><span className="dot"></span>Dónde intervenimos</span>
      <h2 className="areas-title">El equipo detrás de la transformación.</h2>
    </div>

    {/* Professions scattered */}
    <div className="prof-scatter reveal" data-d="2" aria-label="Nuestros profesionales">
      <div className="prof-tag" style={{ left: '0%', top: '10px', transform: 'rotate(-1deg)' }}>Lic. en Administración de Empresas</div>
      <div className="prof-tag" style={{ left: '21%', top: '92px', transform: 'rotate(.6deg)' }}>Desarrolladores de Software</div>
      <div className="prof-tag" style={{ left: '39%', top: '8px', transform: 'rotate(-.8deg)' }}>Analistas de Datos</div>
      <div className="prof-tag" style={{ left: '57%', top: '108px', transform: 'rotate(.5deg)' }}>Contadores Públicos</div>
      <div className="prof-tag" style={{ left: '49%', top: '52px', transform: 'rotate(-.4deg)' }}>Esp. en RRHH y Rel. Laborales</div>
      <div className="prof-tag" style={{ left: '5%', top: '128px', transform: 'rotate(.9deg)' }}>Lic. en Psicología Laboral</div>
      <div className="prof-tag" style={{ left: '67%', top: '10px', transform: 'rotate(-1.2deg)' }}>Coaches Organizacionales</div>
      <div className="prof-tag" style={{ left: '27%', top: '50px', transform: 'rotate(.7deg)' }}>Especialistas en Marketing</div>
      <div className="prof-tag" style={{ left: '78%', top: '72px', transform: 'rotate(-.5deg)' }}>Ingenieros de Procesos</div>
    </div>

    {/* SVG connector: JS draws lines from each tag; static: node + 6 arrows to areas */}
    <div className="areas-connector reveal" data-d="3" aria-hidden="true">
      <svg id="s6-svg" viewBox="0 0 1000 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="visible">
        <defs>
          <marker id="arrv" markerWidth="7" markerHeight="7" refX="3.5" refY="6" orient="auto">
            <polygon points="0 0, 7 0, 3.5 7" fill="rgba(154,134,207,0.65)" />
          </marker>
        </defs>
        {/* Dynamic source lines injected by JS */}
        {/* Central node: 4Peeq foquito (HTML badge overlaid below) */}
        {/* 6 arrows fanning down to 3-col × 2-row area grid */}
        <path d="M 500,58 C 500,70 115,72 115,80"  stroke="rgba(154,134,207,0.52)" strokeWidth="1.3" strokeDasharray="4 3" marker-end="url(#arrv)"/>
        <path d="M 500,58 C 500,70 218,72 218,80"  stroke="rgba(154,134,207,0.52)" strokeWidth="1.3" strokeDasharray="4 3" marker-end="url(#arrv)"/>
        <path d="M 500,58 C 500,70 455,72 455,80"  stroke="rgba(154,134,207,0.55)" strokeWidth="1.4" strokeDasharray="4 3" marker-end="url(#arrv)"/>
        <path d="M 500,58 C 500,70 545,72 545,80"  stroke="rgba(154,134,207,0.55)" strokeWidth="1.4" strokeDasharray="4 3" marker-end="url(#arrv)"/>
        <path d="M 500,58 C 500,70 782,72 782,80"  stroke="rgba(154,134,207,0.52)" strokeWidth="1.3" strokeDasharray="4 3" marker-end="url(#arrv)"/>
        <path d="M 500,58 C 500,70 885,72 885,80"  stroke="rgba(154,134,207,0.52)" strokeWidth="1.3" strokeDasharray="4 3" marker-end="url(#arrv)"/>
      </svg>
      {/* Foquito 4Peeq en la intersección: todo converge en 4Peeq */}
      <div className="areas-node-logo"><img src="assets/foco-color.png" alt="4Peeq" /></div>
    </div>

    {/* 6 area cards in 3-col × 2-row grid */}
    <div className="area-col-grid reveal" data-d="4">
      <article className="areax">
        <div className="ax-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14h2M8 17h6"/></svg></div>
        <h4>Administración y Finanzas</h4>
      </article>
      <article className="areax">
        <div className="ax-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 2 5-6"/><path d="M16 7h4v4"/></svg></div>
        <h4>Marketing y Comercial</h4>
      </article>
      <article className="areax">
        <div className="ax-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3.2"/><path d="M2 21a7 7 0 0 1 14 0M17 7a3 3 0 0 1 0 6M19 21a5 5 0 0 0-3-4.6"/></svg></div>
        <h4>Recursos Humanos</h4>
      </article>
      <article className="areax">
        <div className="ax-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h13v13H1zM14 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="17.5" cy="18.5" r="2"/></svg></div>
        <h4>Operaciones y Logística</h4>
      </article>
      <article className="areax">
        <div className="ax-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></div>
        <h4>Experiencia de Cliente</h4>
      </article>
      <article className="areax">
        <div className="ax-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg></div>
        <h4>Profesionalización y Procesos</h4>
      </article>
    </div>

  </div>
</section>


{/* ============ 7 · CAPACIDAD DE EJECUCIÓN ============ */}
<section className="slide dark stage" id="s7" data-label="Ejecución">
  <div className="spotlight"></div>
  <div className="s-glow a"></div>
  <div className="wrap">
    <div className="reveal" data-d="1" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
      <span className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot"></span>Si en el camino...</span>
      <h2 className="s-title" style={{ marginBottom: 0 }}>Identificamos que:</h2>
      
      {/* Flechas conectando titulo con cards (ocultas en mobile) */}
      <svg className="branch-arrows" style={{ position: 'absolute', left: 0, width: '100%', height: '40px', top: '100%', zIndex: -1, opacity: 0.7, pointerEvents: 'none', overflow: 'visible' }} viewBox="0 0 1000 40" preserveAspectRatio="none">
        <defs>
          <marker id="arr-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--violet-lt)" />
          </marker>
        </defs>
        <path d="M 500 -10 C 350 20, 166 10, 166 35" fill="none" stroke="var(--violet-lt)" strokeWidth="2" strokeDasharray="6 6" vector-effect="non-scaling-stroke" marker-end="url(#arr-head)" />
        <path d="M 500 -10 L 500 35" fill="none" stroke="var(--violet-lt)" strokeWidth="2" strokeDasharray="6 6" vector-effect="non-scaling-stroke" marker-end="url(#arr-head)" />
        <path d="M 500 -10 C 650 20, 833 10, 833 35" fill="none" stroke="var(--violet-lt)" strokeWidth="2" strokeDasharray="6 6" vector-effect="non-scaling-stroke" marker-end="url(#arr-head)" />
      </svg>
      <style>
        .mob-arrow { display: none; }
        @media (max-width: 1080px) {
          .branch-arrows { display: none; }
          .mob-arrow { display: block; margin: 0 auto 12px; }
        }
      </style>
    </div>

    <div className="exec-grid reveal" data-d="2">
      <article className="exec" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
        <svg className="mob-arrow" style={{ width: '24px', height: '24px', color: 'var(--violet-lt)', opacity: 0.8 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: '700', color: '#fff', lineHeight: 1.3, margin: '0 0 24px 0' }}>Necesitás fortalecer a tu equipo</p>
        <div className="ex-ico" style={{ marginBottom: '16px' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>
        <h3 style={{ margin: 0 }}>Academy</h3>
        <p style={{ marginTop: '10px' }}>Capacitamos y desarrollamos a tus equipos para que alcancen los objetivos y sostengan los cambios.</p>
      </article>
      <article className="exec" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
        <svg className="mob-arrow" style={{ width: '24px', height: '24px', color: 'var(--violet-lt)', opacity: 0.8 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: '700', color: '#fff', lineHeight: 1.3, margin: '0 0 24px 0' }}>Te falta incorporar soluciones digitales</p>
        <div className="ex-ico" style={{ marginBottom: '16px' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M6 8l2 2-2 2M11 12h4"/></svg></div>
        <h3 style={{ margin: 0 }}>Tech</h3>
        <p style={{ marginTop: '10px' }}>Dashboards, automatizaciones y sistemas para que decidas con datos confiables, no con intuición.</p>
      </article>
      <article className="exec" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
        <svg className="mob-arrow" style={{ width: '24px', height: '24px', color: 'var(--violet-lt)', opacity: 0.8 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: '700', color: '#fff', lineHeight: 1.3, margin: '0 0 24px 0' }}>Precisás atraer nuevos talentos</p>
        <div className="ex-ico" style={{ marginBottom: '16px' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/></svg></div>
        <h3 style={{ margin: 0 }}>People</h3>
        <p style={{ marginTop: '10px' }}>Incorporamos a las personas correctas para tu equipo, con foco en el fit cultural.</p>
      </article>
    </div>
  </div>
</section>


{/* ============ 8 · METODOLOGÍA / TIMELINE ============ */}
<section className="slide dark stage" id="s8" data-label="Metodología">
  <div className="spotlight"></div>
  <div className="s-glow b"></div>
  <div className="wrap">
    <div className="reveal" data-d="1">
      <span className="eyebrow"><span className="dot"></span>Cómo seguimos</span>
      <h2 className="s-title">Los próximos pasos</h2>
      <p className="s-lead">Una hoja de ruta directa desde que aceptás nuestra propuesta hasta que empezamos a transformar tu empresa desde adentro.</p>
    </div>

    <div className="tl reveal" id="tl" data-d="2">
      <div className="tl-track"><div className="tl-fill"></div></div>
      <div className="tl-phases" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="tl-phase">
          <span className="tl-node"></span>
          <div className="tl-card">
            <span className="tl-months">Paso 1</span>
            <h4>Reunión de inicio</h4>
            <p>Nos reunimos para alinear expectativas, establecer objetivos y acordar la forma de trabajo.</p>
          </div>
        </div>
        <div className="tl-phase">
          <span className="tl-node"></span>
          <div className="tl-card">
            <span className="tl-months">Paso 2</span>
            <h4>Presentación del equipo</h4>
            <p>Te presentamos a los especialistas que te acompañarán durante todo el proceso.</p>
          </div>
        </div>
        <div className="tl-phase">
          <span className="tl-node"></span>
          <div className="tl-card">
            <span className="tl-months">Paso 3</span>
            <h4>Presentación del plan</h4>
            <p>Compartimos la hoja de ruta detallada con las estrategias y acciones concretas a implementar.</p>
          </div>
        </div>
        <div className="tl-phase">
          <span className="tl-node"></span>
          <div className="tl-card">
            <span className="tl-months">Paso 4</span>
            <h4>Inicio de proyecto</h4>
            <p>Ponemos manos a la obra, ejecutando el plan para empezar a ordenar y transformar tu empresa.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* ============ 9 · RESULTADOS ============ */}
<section className="slide dark stage" id="s9" data-label="Resultados">
  <div className="spotlight"></div>
  <div className="s-glow b"></div>
  <div className="wrap">
    <div className="reveal" data-d="1">
      <span className="eyebrow"><span className="dot"></span>A dónde llegamos</span>
      <h2 className="s-title">Lo que vas a conseguir</h2>
      <p className="s-lead">El orden no es un fin en sí mismo: es el camino hacia una empresa más rentable, clara y que crece.</p>

      <div className="res-grid">
        <article className="res">
          <div className="r-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          <h4>Mayor rentabilidad</h4>
        </article>
        <article className="res">
          <div className="r-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/></svg></div>
          <h4>Claridad y control</h4>
        </article>
        <article className="res">
          <div className="r-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h12M3 18h7"/></svg></div>
          <h4>Orden y eficiencia</h4>
        </article>
        <article className="res">
          <div className="r-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 3h4v4"/></svg></div>
          <h4>Crecimiento sostenible</h4>
        </article>
      </div>
    </div>

    <div className="res-stats reveal" data-d="2">
      <div className="res-stat"><div className="n" data-count data-final="+70">--</div><div className="l">empresas acompañadas en su transformación</div></div>
      <div className="res-stat"><div className="n" data-count data-final="+3">--</div><div className="l">años acompañando organizaciones de la región</div></div>
      <div className="res-stat"><div className="n" data-count data-final="+90%">--</div><div className="l">de clientes que nos vuelven a elegir</div></div>
    </div>
  </div>
</section>


{/* ============ 9.5 · CLIENTES BIG BANG ============ */}
<section className="slide lavender stage" id="s-clientes" data-label="Clientes">
  <div className="spotlight"></div>
  <div className="wrap" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="sec-head" style={{ position: 'absolute', top: '15vh', left: 0, right: 0, textAlign: 'center', zIndex: 20 }}>
      <span className="eyebrow s-cl-reveal"><span className="dot"></span>Quiénes nos eligen</span>
      <h2 className="s-title s-cl-reveal">Más de 70 empresas confían en nosotros</h2>
    </div>
    <div className="clientes-universe" id="clientesUniverse">
      <div className="c-logo-wrap"><img src="assets/clientes/1.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/2.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/3.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/4.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/5.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/6.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/7.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/8.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/9.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/10.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/11.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/12.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/13.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/14.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/15.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/16.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/17.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/18.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/19.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/20.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/21.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/22.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/23.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/24.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/25.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/26.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/27.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/28.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/29.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/30.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/31.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/32.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/33.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/34.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/35.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/36.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/37.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/38.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/39.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/40.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/41.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/42.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/43.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/44.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/45.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/46.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/47.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/48.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/49.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/50.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/51.svg" className="c-logo inv" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/52.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/53.svg" className="c-logo" loading="lazy" /></div>
      <div className="c-logo-wrap"><img src="assets/clientes/54.svg" className="c-logo inv" loading="lazy" /></div>
    </div>
  </div>
</section>

{/* ============ 9b · 4PEEQ CLUB ============ */}
<section className="slide plum stage" id="s-club" data-label="Comunidad">
  <div className="spotlight"></div>
  <div className="wrap" style={{ alignItems: 'center', textAlign: 'center' }}>
    <div className="sec-head reveal">
      <span className="kicker">MÁS ALLÁ DEL DIAGNÓSTICO</span>
      <h2>Además, sos parte de 4Peeq Club.</h2>
      <p className="s-lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Comunidad, experiencias y conexiones para dueños de pymes que quieren crecer acompañados.</p>
    </div>
  </div>
</section>

{/* ============ 9c · CLUB: 4Peeqneta ============ */}
<section className="slide plum stage" id="s-club-1">
  <div className="spotlight"></div>
  <div className="club-collage">
    <figure className="cphoto hero" style={{ '--x': '50%', '--y': '30%', '--w': '40%', '--rot': '-2deg', '--z': '10' } as React.CSSProperties}>
      <img src="assets/club/4peeq (202).webp" alt="4Peeqneta" loading="lazy" />
    </figure>
    <figure className="cphoto hero" style={{ '--x': '18%', '--y': '26%', '--w': '26%', '--rot': '5deg', '--z': '6' } as React.CSSProperties}>
      <img src="assets/club/4peeq (7).webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '52%', '--y': '22%', '--w': '22%', '--rot': '-3deg', '--z': '4' } as React.CSSProperties}>
      <img src="assets/club/4peeq-213.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '22%', '--y': '46%', '--w': '22%', '--rot': '4deg', '--z': '3' } as React.CSSProperties}>
      <img src="assets/club/4peeq-289.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '80%', '--y': '48%', '--w': '18%', '--rot': '7deg', '--z': '2' } as React.CSSProperties}>
      <img src="assets/club/4peeq-182.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '38%', '--y': '50%', '--w': '16%', '--rot': '-5deg', '--z': '1' } as React.CSSProperties}>
      <img src="assets/club/4peeq-291.webp" alt="" loading="lazy" />
    </figure>
    <div className="club-text reveal" data-d="1">
      <h3>4Peeqneta</h3>
      <p>Encuentros informales de networking. Donde las conversaciones sin agenda rígida se vuelven las oportunidades más importantes.</p>
    </div>
  </div>
</section>

{/* ============ 9d · CLUB: Cup ============ */}
<section className="slide plum stage" id="s-club-2">
  <div className="spotlight"></div>
  <div className="club-collage">
    <figure className="cphoto hero" style={{ '--x': '48%', '--y': '33%', '--w': '46%', '--rot': '0deg', '--z': '11' } as React.CSSProperties}>
      <img src="assets/club/DSC01365.webp" alt="4Peeq Cup" loading="lazy" style={{ objectPosition: 'bottom' }} />
    </figure>
    <figure className="cphoto hero" style={{ '--x': '68%', '--y': '36%', '--w': '26%', '--rot': '4deg', '--z': '10' } as React.CSSProperties}>
      <img src="assets/club/645-DSC01371.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto hero" style={{ '--x': '18%', '--y': '30%', '--w': '28%', '--rot': '4deg', '--z': '7' } as React.CSSProperties}>
      <img src="assets/club/DSC04100_v2.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto hero" style={{ '--x': '78%', '--y': '36%', '--w': '26%', '--rot': '-4deg', '--z': '6' } as React.CSSProperties}>
      <img src="assets/club/1107-DSC02066.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '16%', '--y': '48%', '--w': '22%', '--rot': '3deg', '--z': '5' } as React.CSSProperties}>
      <img src="assets/club/_DSC5713_v2.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '34%', '--y': '20%', '--w': '20%', '--rot': '-5deg', '--z': '4' } as React.CSSProperties}>
      <img src="assets/club/_DSC5059.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '62%', '--y': '18%', '--w': '18%', '--rot': '-6deg', '--z': '3' } as React.CSSProperties}>
      <img src="assets/club/_DSC5914.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '84%', '--y': '48%', '--w': '16%', '--rot': '5deg', '--z': '2' } as React.CSSProperties}>
      <img src="assets/club/_DSC5941.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '32%', '--y': '50%', '--w': '16%', '--rot': '-4deg', '--z': '2' } as React.CSSProperties}>
      <img src="assets/club/1062-DSC01997.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '10%', '--y': '22%', '--w': '16%', '--rot': '-6deg', '--z': '2' } as React.CSSProperties}>
      <img src="assets/club/DSC04063_v1.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '84%', '--y': '20%', '--w': '16%', '--rot': '6deg', '--z': '2' } as React.CSSProperties}>
      <img src="assets/club/_DSC5657.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '56%', '--y': '50%', '--w': '14%', '--rot': '8deg', '--z': '1' } as React.CSSProperties}>
      <img src="assets/club/20251121_223727.webp" alt="" loading="lazy" />
    </figure>
    <div className="club-text reveal" data-d="1">
      <h3>4Peeq Cup</h3>
      <p>Torneo interempresas. Competencia sana que genera vínculos profundos y una excusa perfecta para conocer otras organizaciones.</p>
    </div>
  </div>
</section>

{/* ============ 9e · CLUB: Pymeton ============ */}
<section className="slide plum stage" id="s-club-3">
  <div className="spotlight"></div>
  <div className="club-collage">
    <figure className="cphoto hero" style={{ '--x': '25%', '--y': '25%', '--w': '30%', '--rot': '-3deg', '--z': '9' } as React.CSSProperties}>
      <img src="assets/club/IMG_6827.webp" alt="Pymeton" loading="lazy" />
    </figure>
    <figure className="cphoto hero" style={{ '--x': '50%', '--y': '32%', '--w': '44%', '--rot': '0deg', '--z': '15' } as React.CSSProperties}>
      <img src="assets/club/Screenshot_20251105_212939_YouTube.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto hero" style={{ '--x': '18%', '--y': '45%', '--w': '26%', '--rot': '5deg', '--z': '6' } as React.CSSProperties}>
      <img src="assets/club/IMG-20251203-WA0085.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto" style={{ '--x': '72%', '--y': '20%', '--w': '22%', '--rot': '-5deg', '--z': '4' } as React.CSSProperties}>
      <img src="assets/club/IMG-20251015-WA0095.webp" alt="" loading="lazy" />
    </figure>
    <figure className="cphoto hero" style={{ '--x': '72%', '--y': '45%', '--w': '32%', '--rot': '2deg', '--z': '10' } as React.CSSProperties}>
      <img src="assets/club/IMG-20251125-WA0220.webp" alt="" loading="lazy" />
    </figure>
    <div className="club-text reveal" data-d="1">
      <h3>Pymeton</h3>
      <p>Visitas a empresas de la región. Aprendizaje in situ de los que ya recorrieron el camino y están dispuestos a compartirlo.</p>
    </div>
  </div>
</section>

{/* ============ 9f · CLUB: Talks ============ */}
<section className="slide plum stage" id="s-club-4">
  <div className="spotlight"></div>
  <div className="s-glow a"></div>
  <div className="club-soon reveal" data-d="1">
    <span className="soon-badge">PRÓXIMAMENTE</span>
    <h3>4Peeq Talks</h3>
    <p>Algo grande se está cocinando. Charlas que van a mover la aguja… muy pronto.</p>
    <svg className="soon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="8" y1="22" x2="16" y2="22"/>
    </svg>
  </div>
</section>

{/* ============ 10 · CIERRE ============ */}
<section className="slide dark close stage" id="s10" data-label="Cierre">
  <div className="spotlight"></div>
  <div className="s-dots"></div>
  <div className="s-glow a"></div>
  <div className="s-glow b"></div>
  <div className="wrap">
    <div className="foco-spin"><img src="assets/foco-color.png" alt="4Peeq" /></div>
    <h2>Ordenemos hoy lo que hará
      <span className="hl">crecer<svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true"><path d="M3 17 C 70 6, 150 6, 210 12 S 280 20, 297 9"/></svg></span>
      tu empresa mañana.</h2>
    <p className="close-sub">Gracias por tomarte el tiempo de conocernos. Cuando quieras, damos el primer paso juntos.</p>
    <div className="close-brand">
      <img src="assets/logo-blanco.png" alt="4Peeq · Personas & Equipos" />
      <div className="close-contact">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>Mendoza 947, Corrientes</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>4peeq.ok@gmail.com</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>+54 3794 872576</span>
      </div>
    </div>
  </div>
</section>

</main>

{/* GSAP Core & ScrollTrigger */}
    </>
  )
}
