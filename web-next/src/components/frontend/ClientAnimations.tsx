'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const ClientAnimations = () => {
  const pathname = usePathname()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    /* ---- sticky nav ---- */
    const nav = document.getElementById('nav')
    const onScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 16)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    /* ---- mobile menu ---- */
    const burger = document.getElementById('burger')
    const menu = document.getElementById('mobileMenu')
    const toggle = (force?: boolean) => {
      if (!menu || !burger) return
      const open = force !== undefined ? force : !menu.classList.contains('open')
      menu.classList.toggle('open', open)
      burger.classList.toggle('open', open)
      document.body.style.overflow = open ? 'hidden' : ''
    }
    
    if (burger) {
      // Remover event listeners anteriores para evitar duplicados
      const newBurger = burger.cloneNode(true)
      burger.parentNode?.replaceChild(newBurger, burger)
      newBurger.addEventListener('click', () => toggle())
    }

    if (menu) {
      menu.querySelectorAll('a').forEach((a) => {
        const newA = a.cloneNode(true)
        a.parentNode?.replaceChild(newA, a)
        newA.addEventListener('click', () => toggle(false))
      })
    }

    /* ---- scroll reveal ---- */
    const reveals = document.querySelectorAll('.reveal')
    const reveal = (el: Element) => el.classList.add('in')
    const sweep = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      reveals.forEach((el) => { 
        if (!el.classList.contains('in') && el.getBoundingClientRect().top < vh * 0.92) reveal(el) 
      })
    }
    
    let io: IntersectionObserver | null = null
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { 
          if (e.isIntersecting) { 
            reveal(e.target)
            if (io) io.unobserve(e.target) 
          } 
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
      reveals.forEach((el) => io!.observe(el))
    }
    sweep()
    window.addEventListener('scroll', sweep, { passive: true })
    const timeout = setTimeout(() => reveals.forEach(reveal), 1600)

    /* ---- spotlight ---- */
    document.querySelectorAll('.hero, .final-card').forEach((stage) => {
      const sp = stage.querySelector('.spotlight') as HTMLElement
      if (!sp) return
      
      const onMove = (e: Event) => {
        const ev = e as PointerEvent
        const r = stage.getBoundingClientRect()
        sp.style.setProperty('--mx', ((ev.clientX - r.left) / r.width * 100) + '%')
        sp.style.setProperty('--my', ((ev.clientY - r.top) / r.height * 100) + '%')
      }
      
      const onLeave = () => {
        sp.style.setProperty('--mx', '50%')
        sp.style.setProperty('--my', '35%')
      }

      stage.addEventListener('pointermove', onMove)
      stage.addEventListener('pointerleave', onLeave)
    })

    /* ---- invitation cards carousel: loop infinito, se frena y centra la card en hover, tipeo del hook ---- */
    const invCleanups: Array<() => void> = []
    const marquee = document.querySelector('.inv-marquee') as HTMLElement | null
    const track = marquee?.querySelector('.inv-track') as HTMLElement | null
    const hoverCapable = window.matchMedia('(hover: hover)').matches

    if (marquee && track && hoverCapable) {
      const cells = Array.from(track.querySelectorAll('.inv-cell')) as HTMLElement[]
      const BASE_SPEED = 0.6
      const CENTER_EASE = 0.18
      const LOCK_MS = 380 // tras activar una card, ignora el hit-test del mouse hasta que termine de centrarse:
      // evita que el desplazamiento del contenido (no un movimiento real del cursor) "seleccione" a la vecina

      let x = 0
      let activeCell: HTMLElement | null = null
      let lockUntil = 0
      let rafId = 0
      const typeTimers = new Map<HTMLElement, ReturnType<typeof setInterval>>()

      // con reduced-motion seguimos permitiendo abrir cards con el mouse (accesible),
      // pero sin tipeo animado ni scroll automático del track
      if (!reduce) {
        track.style.animation = 'none'
        track.style.willChange = 'transform'
      }

      const startTyping = (cell: HTMLElement, instant: boolean) => {
        const card = cell.querySelector('.inv-card') as HTMLElement | null
        const typedEl = cell.querySelector('.inv-hook-typed') as HTMLElement | null
        const reveal = cell.querySelector('.inv-reveal') as HTMLElement | null
        if (!card || !typedEl) return
        const text = card.dataset.hook || ''
        const prevTimer = typeTimers.get(cell)
        if (prevTimer) clearInterval(prevTimer)
        reveal?.classList.remove('is-revealed')
        if (instant || reduce) {
          typedEl.textContent = text
          reveal?.classList.add('is-revealed')
          return
        }
        let i = 0
        typedEl.textContent = ''
        const timer = setInterval(() => {
          i++
          typedEl.textContent = text.slice(0, i)
          if (i >= text.length) {
            clearInterval(timer)
            typeTimers.delete(cell)
            reveal?.classList.add('is-revealed')
          }
        }, 22)
        typeTimers.set(cell, timer)
      }

      const stopTyping = (cell: HTMLElement) => {
        const timer = typeTimers.get(cell)
        if (timer) { clearInterval(timer); typeTimers.delete(cell) }
        const typedEl = cell.querySelector('.inv-hook-typed') as HTMLElement | null
        const reveal = cell.querySelector('.inv-reveal') as HTMLElement | null
        if (typedEl) typedEl.textContent = ''
        reveal?.classList.remove('is-revealed')
      }

      const setActive = (cell: HTMLElement | null, instant = false) => {
        if (activeCell === cell) return
        if (activeCell) { activeCell.classList.remove('is-active'); stopTyping(activeCell) }
        activeCell = cell
        if (activeCell) {
          activeCell.classList.add('is-active')
          startTyping(activeCell, instant)
          lockUntil = performance.now() + LOCK_MS
        }
      }

      const onMarqueeMove = (e: Event) => {
        if (performance.now() < lockUntil) return
        const ev = e as PointerEvent
        const cell = (ev.target as HTMLElement)?.closest('.inv-cell') as HTMLElement | null
        setActive(cell)
      }

      const onMarqueeLeave = () => setActive(null)

      const onFocusIn = (e: Event) => {
        const cell = (e.target as HTMLElement)?.closest('.inv-cell') as HTMLElement | null
        if (cell) setActive(cell, true)
      }
      const onFocusOut = (e: Event) => {
        const fe = e as FocusEvent
        const cell = (fe.target as HTMLElement)?.closest('.inv-cell') as HTMLElement | null
        if (cell && !cell.contains(fe.relatedTarget as Node)) setActive(null)
      }

      marquee.addEventListener('pointermove', onMarqueeMove)
      marquee.addEventListener('pointerleave', onMarqueeLeave)
      track.addEventListener('focusin', onFocusIn)
      track.addEventListener('focusout', onFocusOut)

      const wrap = () => {
        if (activeCell) return
        const half = track.scrollWidth / 2
        if (half <= 0) return
        if (x <= -half) x += half
        if (x > 0) x -= half
      }

      const tick = () => {
        if (activeCell) {
          // se frena: sólo corrige hacia el centro exacto del carrusel, no sigue avanzando
          const mRect = marquee.getBoundingClientRect()
          const cRect = activeCell.getBoundingClientRect()
          const delta = (mRect.left + mRect.width / 2) - (cRect.left + cRect.width / 2)
          x += delta * CENTER_EASE
        } else {
          // sin card activa: el carrusel sigue scrolleando lento, en loop infinito
          x -= BASE_SPEED
        }
        wrap()
        track.style.transform = `translate3d(${x}px,0,0)`
        rafId = requestAnimationFrame(tick)
      }
      if (!reduce) rafId = requestAnimationFrame(tick)

      invCleanups.push(() => {
        cancelAnimationFrame(rafId)
        marquee.removeEventListener('pointermove', onMarqueeMove)
        marquee.removeEventListener('pointerleave', onMarqueeLeave)
        track.removeEventListener('focusin', onFocusIn)
        track.removeEventListener('focusout', onFocusOut)
        typeTimers.forEach((timer) => clearInterval(timer))
        cells.forEach((c) => c.classList.remove('is-active'))
      })
    }

    /* Cleanup function */
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', sweep)
      clearTimeout(timeout)
      if (io) io.disconnect()
      invCleanups.forEach((fn) => fn())
    }
  }, [pathname]) // Re-run effect when path changes

  return null
}
