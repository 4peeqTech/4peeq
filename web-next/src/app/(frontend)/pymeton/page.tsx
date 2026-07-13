"use client"
import React, { useState, useRef } from 'react'

function YouTubeVideo({ id, title }: { id: string; title: string }) {
  const [showIframe, setShowIframe] = useState(false)

  return (
    <div className="pym-thumb" onClick={() => setShowIframe(true)}>
      {!showIframe ? (
        <>
          <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} onError={(e) => { e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg` }} alt="" loading="lazy" />
          <button className="pym-play" aria-label="Reproducir video">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}

export default function PymetonPage() {
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  const vidRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (!vidRef.current) return
    if (playing) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
    setPlaying(!playing)
  }

  const toggleMute = () => {
    if (!vidRef.current) return
    vidRef.current.muted = !vidRef.current.muted
    setMuted(!muted)
  }

  return (
    <>
      {/* HERO */}
      <section className="pym-hero pym-hero--video">
        <div className="pym-hero-glow" aria-hidden="true"></div>
        <div className="pym-hero-mark" aria-hidden="true"><img src="/assets/pymeton/pymeton.svg" alt="" /></div>
        <div className="wrap">
          <nav className="breadcrumb pym-breadcrumb" aria-label="Miga de pan">
            <a href="/club">Club</a>
            <span aria-hidden="true">/</span>
            <span>Pymeton</span>
          </nav>
          <h1 className="sr-only">Pymeton</h1>
          <img className="pym-wordmark" src="/assets/pymeton/logopymeton.svg" alt="Pymeton" />
          <span className="pym-streaming-badge">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/><path d="M7.8 8.2a6 6 0 0 0 0 7.6M16.2 8.2a6 6 0 0 1 0 7.6M4.9 5.3a10 10 0 0 0 0 13.4M19.1 5.3a10 10 0 0 1 0 13.4"/></svg>
            <b>El programa de streaming de 4peeqClub</b>
          </span>
          <p className="pym-hero-lead">Experiencias y aprendizajes reales de consultores y dueños pymes que ya recorrieron el camino.</p>

          <div className="pym-intro" data-pym-intro>
            <p className="pym-airtime">
              <span>Todos los viernes de 18 a 20hs por el canal de YouTube de</span>
              <img className="pym-airtime-logo" src="/assets/ziestatv.PNG" alt="ziestaTV" />
            </p>
            <video ref={vidRef} className="pym-intro-vid" autoPlay muted loop playsInline preload="metadata" poster="/assets/pymeton/pymeton-intro-poster.jpg">
              <source src="/assets/pymeton/pymeton-intro.mp4" type="video/mp4" />
            </video>
            <div className="pym-intro-ctrls">
              <button className="pym-intro-btn" onClick={togglePlay} aria-label={playing ? "Pausar" : "Reproducir"}>
                {playing ? '⏸' : '▶'}
              </button>
              <button className={`pym-intro-btn ${muted ? 'pym-intro-unmute' : ''}`} onClick={toggleMute} aria-label={muted ? "Activar sonido" : "Silenciar"}>
                {muted ? '🔊 Activá el sonido' : '🔇 Silenciar'}
              </button>
            </div>
          </div>

          <div className="pym-intro-nav">
            <a href="#segunda-edicion" className="btn btn-violet">Mirá la segunda edición <span className="arr">→</span></a>
            <a href="#primera-edicion" className="btn btn-ghost">Mirá la primera edición <span className="arr">→</span></a>
            <a href="https://www.instagram.com/pymeton/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Mirá los momentos más importantes <span className="arr">→</span></a>
          </div>
        </div>
      </section>

      {/* SEGUNDA EDICIÓN */}
      <section className="sec pym-edition" id="segunda-edicion">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Segunda edición</h2>
            <span className="pym-edition-year">2026</span>
          </div>
          <div className="pym-grid">
            <article className="pym-video reveal" data-d="1">
              <span className="pym-edition-tag">2da edición</span>
              <YouTubeVideo id="2pKAP68d5zE" title="El desafío del empresario: construir una empresa que no dependa de él" />
              <div className="pym-video-body">
                <span className="pym-chapter-badge">Capítulo 2</span>
                <h3>El desafío del empresario: construir una empresa que no dependa de él</h3>
                <p className="pym-video-hook">¿Por qué tantos dueños quedan atrapados en la operación?</p>
                <details className="pym-video-toggle">
                  <summary>Enterate de qué se trata el capítulo <span className="arr">→</span></summary>
                  <p className="pym-video-text">Crear una empresa requiere compromiso, esfuerzo y dedicación. Pero llega un momento en que ese mismo esfuerzo que impulsó el crecimiento puede convertirse en una barrera. En este episodio de PYMETON hablamos sobre liderazgo, delegación y transformación empresarial: por qué tantos dueños quedan atrapados en la operación, qué cuesta realmente soltar y cómo pasar de hacer todo a liderar mejor. Una conversación sobre el cambio más importante del empresario: dejar de ser indispensable para convertirse en líder.</p>
                </details>
              </div>
            </article>
            <article className="pym-video reveal" data-d="2">
              <span className="pym-edition-tag">2da edición</span>
              <YouTubeVideo id="hCsZaRby2OY" title="Adaptarse o Desaparecer" />
              <div className="pym-video-body">
                <span className="pym-chapter-badge">Capítulo 1</span>
                <h3>Adaptarse o Desaparecer: La nueva realidad que las Pymes argentinas ya no pueden ignorar</h3>
                <p className="pym-video-hook">¿Sentís que el mercado cambió por completo y las fórmulas que antes te funcionaban hoy ya no alcanzan?</p>
                <details className="pym-video-toggle">
                  <summary>Enterate de qué se trata el capítulo <span className="arr">→</span></summary>
                  <p className="pym-video-text">El contexto actual no da tregua, y la brecha entre las empresas que se adaptan y las que se quedan estancadas es cada vez más grande. Muchos dueños de PyMEs se encuentran atrapados en el esfuerzo diario, viendo cómo las urgencias del entorno amenazan con dejar afuera a sus negocios. En este episodio de PYMETON, analizamos a fondo este dolor. Nos sentamos con empresarios reales (de Pepe Café, Sada y Ñande Roga Pinturas) para entender qué los obligó a profesionalizarse y cómo lograron transformar sus organizaciones desde adentro. Junto al equipo de 4Peeq, te traemos las herramientas estratégicas clave para tomar decisiones rápidas, adaptarte a la nueva realidad y asegurar el futuro de tu PyME. ¡El momento de actuar es ahora, el mercado no espera!</p>
                </details>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PRIMERA EDICIÓN */}
      <section className="sec pym-edition" id="primera-edicion">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Primera edición</h2>
            <span className="pym-edition-year">2025</span>
          </div>
          <div className="pym-grid">
            <article className="pym-video reveal" data-d="1">
              <span className="pym-edition-tag">1ra edición</span>
              <YouTubeVideo id="ryqcCF9kf6U" title="Plan de Negocios" />
              <div className="pym-video-body">
                <span className="pym-chapter-badge">Capítulo 4</span>
                <h3>Plan de Negocios</h3>
                <p className="pym-video-hook">¿Sientes que trabajás todo el día apagando incendios pero tu empresa no avanza hacia ningún lado?</p>
                <details className="pym-video-toggle">
                  <summary>Enterate de qué se trata el capítulo <span className="arr">→</span></summary>
                  <p className="pym-video-text">Vivir en el día a día sin una hoja de ruta clara es el error número uno que estanca a las PyMEs. Trabajar sin un plan de negocios estructurado te obliga a improvisar en cada decisión, perdiendo tiempo, recursos y oportunidades frente a una competencia que sí sabe a dónde va. En este episodio de PYMETON, resolvemos este problema de raíz. Te explicamos de forma práctica cómo armar un Plan de Negocios estratégico y real, diseñado para ordenar tu empresa, trazar objetivos claros y definir el camino exacto para escalar tu facturación de manera sostenible. ¡Dejá de improvisar el futuro de tu negocio y empezá a planificarlo! Mirá el capítulo completo acá.</p>
                </details>
              </div>
            </article>
            <article className="pym-video reveal" data-d="2">
              <span className="pym-edition-tag">1ra edición</span>
              <YouTubeVideo id="MX1bQ753Un0" title="Ordená tus Números" />
              <div className="pym-video-body">
                <span className="pym-chapter-badge">Capítulo 3</span>
                <h3>Ordená tus Números</h3>
                <p className="pym-video-hook">¿Llega el fin de mes y no sabes realmente cuánto dinero ganó (o perdió) tu empresa?</p>
                <details className="pym-video-toggle">
                  <summary>Enterate de qué se trata el capítulo <span className="arr">→</span></summary>
                  <p className="pym-video-text">Muchos dueños de PyMEs viven con la constante incertidumbre de facturar bien, pero tener la caja vacía. El desorden financiero, mezclar las finanzas personales con las del negocio y la falta de control sobre los costos reales son los peores enemigos del crecimiento. En este episodio de PYMETON, atacamos uno de los dolores más comunes y peligrosos: la gestión financiera. Te mostramos cómo ordenar tus números, implementar herramientas de control simples y tomar decisiones basadas en datos reales para que tu negocio sea verdaderamente rentable y predecible. ¡Tomá el control de tus finanzas antes de que ellas te controlen a vos! Mirá el capítulo completo acá.</p>
                </details>
              </div>
            </article>
            <article className="pym-video reveal" data-d="3">
              <span className="pym-edition-tag">1ra edición</span>
              <YouTubeVideo id="kTLBvnyLkTA" title="Diferenciate y Vendé Mejor" />
              <div className="pym-video-body">
                <span className="pym-chapter-badge">Capítulo 2</span>
                <h3>Diferenciate y Vendé Mejor</h3>
                <p className="pym-video-hook">¿Sientes que para vender tenés que terminar bajando tus precios y regalando tu margen?</p>
                <details className="pym-video-toggle">
                  <summary>Enterate de qué se trata el capítulo <span className="arr">→</span></summary>
                  <p className="pym-video-text">Competir en un mercado saturado donde todos ofrecen "lo mismo" es una batalla desgastante. El verdadero problema no es tu producto, sino cómo te estás comunicando y diferenciando de la competencia. En este nuevo episodio de PYMETON, nos enfocamos en el dolor de cabeza de muchos empresarios: cómo dejar de ser invisibles y empezar a vender mejor. Analizamos estrategias comerciales reales, cómo construir una propuesta de valor única y qué pasos dar para que el cliente te elija por lo que vales, no por ser el más barato. ¡No te quedes atrás en la era de la transformación pyme! Mirá el capítulo completo acá.</p>
                </details>
              </div>
            </article>
            <article className="pym-video reveal" data-d="4">
              <span className="pym-edition-tag">1ra edición</span>
              <YouTubeVideo id="AlNeS5zKgG4" title="Profesionalizá tu PyME" />
              <div className="pym-video-body">
                <span className="pym-chapter-badge">Capítulo 1</span>
                <h3>Profesionalizá tu PyME</h3>
                <p className="pym-video-hook">¿Tu empresa está creciendo pero sientes que el día a día te desborda?</p>
                <details className="pym-video-toggle">
                  <summary>Enterate de qué se trata el capítulo <span className="arr">→</span></summary>
                  <p className="pym-video-text">En este episodio de PYMETON, nos sentamos con empresarios que están viviendo la nueva realidad corporativa en carne propia. Analizamos por qué el contexto actual exige decisiones estratégicas que no pueden esperar y qué herramientas concretas tienen las PyMEs para profesionalizarse, organizarse y dar el siguiente salto sin morir en el intento. ¡Mirá el video completo y empezá a transform tu gestión hoy mismo!</p>
                </details>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final">
        <div className="wrap">
          <div className="final-card reveal">
            <img className="foco-watermark" src="/assets/foco-blanco.png" alt="" />
            <h2 className="pym-cta-heading">¿Querés ser parte de<br/>
              <img className="pym-cta-wordmark" src="/assets/pymeton/pymeton.svg" alt="PYMETON" />?
            </h2>
            <div className="final-cta pym-cta-3">
              <a href="https://wa.me/5493794398385?text=¡Hola%204Peeq!%20Quiero%20ser%20sponsor%20de%20PYMETON" className="btn btn-violet">Quiero ser sponsor</a>
              <a href="https://wa.me/5493794398385?text=¡Hola%204Peeq!%20Quiero%20ser%20panelista%20de%20PYMETON" className="btn btn-violet">Quiero ser panelista</a>
              <a href="/club" className="btn btn-ghost on-dark">Conocer 4peeqClub</a>
            </div>
          </div>
        </div>
      </section>

      <div className="pym-buddy" data-pym-buddy aria-hidden="true">
        <div className="pym-buddy-bubble" data-pym-bubble></div>
        <div className="pym-buddy-char" data-pym-char>
          <img src="/assets/pymeton/pelado-lego.png" alt="" aria-hidden="true" />
          <span className="pym-buddy-ig" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </span>
        </div>
      </div>
    </>
  )
}
