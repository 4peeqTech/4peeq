import React from 'react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="foot">
        <div className="wrap">
          <div className="foot-top">
            <div>
              <img className="foot-logo" src="/assets/logo-blanco.png" alt="4Peeq · Personas & Equipos" />
              <p className="foot-blurb">Personas &amp; Equipos®. Iluminamos el camino de las organizaciones: ordenamos ideas y transformamos el potencial en estructura y resultados.</p>
            </div>
            <div className="foot-col">
              <h5>SOLUCIONES</h5>
              <Link href="/consultoria">Consultoría</Link>
              <Link href="/academy">Academy</Link>
              <Link href="/people">People</Link>
              <Link href="/lo-que-hacemos">Tech · Club · Makers</Link>
            </div>
            <div className="foot-col">
              <h5>EMPRESA</h5>
              <Link href="/#proceso">Cómo trabajamos</Link>
              <Link href="/club">Club</Link>
              <Link href="/postulate">¡Postulate!</Link>
            </div>
            <div className="foot-col">
              <h5>CONTACTO</h5>
              <a href="https://www.google.com/maps/search/?api=1&query=Mendoza+947" target="_blank" rel="noopener noreferrer">Mendoza 947, Corrientes</a>
              <a href="mailto:4peeq.ok@gmail.com">4peeq.ok@gmail.com</a>
              <a href="https://wa.me/+543794872576" target="_blank" rel="noopener noreferrer">+54 3794 872576</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 4Peeq · Personas &amp; Equipos® — Todos los derechos reservados.</span>
            <div className="foot-socials">
              <a href="https://www.instagram.com/4peeq.ok" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
              <a href="https://wa.me/+543794872576" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-5.6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2a.4.4 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1c0 1.2.9 2.4 1 2.6s1.8 2.8 4.4 3.9c1.6.7 2.2.7 3 .6a2.5 2.5 0 0 0 1.7-1.2 2 2 0 0 0 .1-1.1c0-.2-.2-.2-.4-.3z"/></svg></a>
              <a href="mailto:4peeq.ok@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></a>
            </div>
          </div>
        </div>
      </footer>
      <a className="wa" href="https://wa.me/+543794872576?text=¡Hola%204Peeq!%20Quiero%20hacer%20una%20consulta." aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-5.6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2a.4.4 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1c0 1.2.9 2.4 1 2.6s1.8 2.8 4.4 3.9c1.6.7 2.2.7 3 .6a2.5 2.5 0 0 0 1.7-1.2 2 2 0 0 0 .1-1.1c0-.2-.2-.2-.4-.3z"/></svg>
        <span className="wa-txt">Escribinos por WhatsApp</span>
      </a>
    </>
  )
}
