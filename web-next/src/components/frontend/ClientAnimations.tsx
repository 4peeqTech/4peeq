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

    /* Cleanup function */
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', sweep)
      clearTimeout(timeout)
      if (io) io.disconnect()
    }
  }, [pathname]) // Re-run effect when path changes

  return null
}
