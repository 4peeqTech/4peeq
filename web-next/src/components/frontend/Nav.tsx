import React from 'react'
import Link from 'next/link'

export const Nav: React.FC = () => {
  return (
    <>
      <header className="nav" id="nav">
        <div className="wrap nav-inner">
          <Link href="/" className="brand" aria-label="4Peeq inicio">
            <img className="logo-blanco" src="/assets/logo-blanco.png" alt="4Peeq · Personas & Equipos" />
            <img className="logo-color" src="/assets/logo-color.png" alt="4Peeq · Personas & Equipos" />
          </Link>
          <nav className="nav-links">
            <div className="nav-dd-wrap">
              <button className="nav-dd-btn" aria-expanded="false" aria-controls="nav-dd" aria-haspopup="true">
                Lo que hacemos
                <svg className="chev" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg>
              </button>
              <div className="nav-dd" id="nav-dd" role="menu">
                <Link href="/consultoria" role="menuitem">Consultoría</Link>
                <Link href="/academy" role="menuitem">Academy</Link>
                <Link href="/people" role="menuitem">People</Link>
                <Link href="/tech" role="menuitem">Tech</Link>
                <Link href="/club" role="menuitem">Club</Link>
                <Link href="/makers" role="menuitem">Makers</Link>
                <Link href="/lo-que-hacemos" role="menuitem" className="dd-all">Ver todo →</Link>
              </div>
            </div>
            <Link href="/#proceso">Cómo trabajamos</Link>
            <Link href="/#clientes">Clientes</Link>
            <Link href="/#equipo">Equipo</Link>
          </nav>
          <div className="nav-cta">
            <a href="https://wa.me/5493794398385" className="btn btn-violet" target="_blank" rel="noopener noreferrer">Tomemos un café <span className="arr">→</span></a>
            <button className="burger" id="burger" aria-label="Menú"><span></span><span></span><span></span></button>
          </div>
        </div>
      </header>
      <nav className="mobile-menu" id="mobileMenu" aria-label="Menú móvil">
        <div className="mob-dd-wrap">
          <button className="mob-dd-btn" id="mobDdBtn" aria-expanded="false">
            Lo que hacemos
            <svg className="chev" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg>
          </button>
          <div className="mob-dd" id="mobDd">
            <Link href="/consultoria">Consultoría</Link>
            <Link href="/academy">Academy</Link>
            <Link href="/people">People</Link>
            <Link href="/tech">Tech</Link>
            <Link href="/club">Club</Link>
            <Link href="/makers">Makers</Link>
            <Link href="/lo-que-hacemos" className="mob-dd-all">Ver todo →</Link>
          </div>
        </div>
        <Link href="/#proceso">Cómo trabajamos</Link>
        <Link href="/#clientes">Clientes</Link>
        <Link href="/#equipo">Equipo</Link>
        <a href="https://wa.me/5493794398385" className="btn btn-violet" target="_blank" rel="noopener noreferrer">Tomemos un café ☕</a>
      </nav>
    </>
  )
}
