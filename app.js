/* 4Peeq landing — interactions (vanilla, no deps) */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- sticky nav ---- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 16);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- mobile menu ---- */
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  const toggle = (force) => {
    const open = force !== undefined ? force : !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => toggle());
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggle(false)));

  /* ---- scroll reveal (robust: IO + sync sweep + scroll + safety net) ---- */
  const reveals = document.querySelectorAll('.reveal');
  const reveal = (el) => el.classList.add('in');
  const sweep = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    reveals.forEach((el) => { if (!el.classList.contains('in') && el.getBoundingClientRect().top < vh * 0.92) reveal(el); });
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach((el) => io.observe(el));
  }
  sweep();
  window.addEventListener('scroll', sweep, { passive: true });
  window.addEventListener('load', sweep);
  setTimeout(() => reveals.forEach(reveal), 1600); // guarantee nothing stays hidden

  /* ---- spotlight: follow cursor inside any .hero / .final-card ---- */
  document.querySelectorAll('.hero, .final-card').forEach((stage) => {
    const sp = stage.querySelector('.spotlight');
    if (!sp) return;
    stage.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      sp.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      sp.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
    stage.addEventListener('pointerleave', () => {
      sp.style.setProperty('--mx', '50%');
      sp.style.setProperty('--my', '35%');
    });
  });

  /* ---- hero glow parallax (mouse + scroll) ---- */
  const pars = [...document.querySelectorAll('.hero [data-par]')];
  if (!reduce && pars.length) {
    const hero = document.getElementById('hero');
    let mx = 0, my = 0, tx = 0, ty = 0, sy = 0;
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    });
    hero.addEventListener('pointerleave', () => { mx = 0; my = 0; });
    window.addEventListener('scroll', () => { sy = window.scrollY; }, { passive: true });
    const raf = () => {
      tx += (mx - tx) * 0.07; ty += (my - ty) * 0.07;
      pars.forEach((l) => {
        const d = parseFloat(l.dataset.par) || 0.04;
        l.style.transform = `translate3d(${-tx * d * 700}px, ${-ty * d * 700 + sy * d * 1.2}px, 0)`;
      });
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  /* ---- service card glow follow ---- */
  document.querySelectorAll('.svc').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });

  /* ---- count-up stats ---- */
  const animateCount = (el) => {
    const raw = el.dataset.final || el.textContent.trim();
    el.dataset.final = raw;
    const prefix = (raw.match(/^\D*/) || [''])[0];
    const suffix = (raw.match(/\D*$/) || [''])[0];
    const target = parseInt(raw.replace(/\D/g, ''), 10) || 0;
    const dur = 2800, t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const nums = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    const sio = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { animateCount(e.target); sio.unobserve(e.target); } });
    }, { threshold: 0.7 });
    nums.forEach((n) => sio.observe(n));
  }

  /* ---- duplicate marquee track for seamless loop ---- */
  const track = document.getElementById('track');
  if (track) track.innerHTML += track.innerHTML;
})();

/* ---- nav dropdown (desktop) ---- */
(function () {
  const ddBtn = document.querySelector('.nav-dd-btn');
  const dd = document.getElementById('nav-dd');
  if (!ddBtn || !dd) return;

  const setOpen = (v) => {
    ddBtn.setAttribute('aria-expanded', String(v));
    dd.classList.toggle('open', v);
  };

  ddBtn.addEventListener('click', (e) => { e.stopPropagation(); setOpen(ddBtn.getAttribute('aria-expanded') !== 'true'); });
  document.addEventListener('click', () => setOpen(false));
  dd.addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && dd.classList.contains('open')) { setOpen(false); ddBtn.focus(); } });

  const links = [...dd.querySelectorAll('a')];
  links.forEach((a, i) => {
    a.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); links[Math.min(i + 1, links.length - 1)].focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); if (i === 0) { setOpen(false); ddBtn.focus(); } else links[i - 1].focus(); }
    });
  });
})();

/* ---- mobile submenu ---- */
(function () {
  const btn = document.getElementById('mobDdBtn');
  const panel = document.getElementById('mobDd');
  if (!btn || !panel) return;
  btn.addEventListener('click', () => {
    const open = !panel.classList.contains('open');
    btn.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('open', open);
  });
})();

/* ---- active nav state ---- */
(function () {
  const file = location.pathname.split('/').pop() || 'index.html';
  const svcPages = ['consultoria.html', 'academy.html', 'people.html', 'tech.html', 'club.html', 'makers.html'];

  document.querySelectorAll('.nav-links > a').forEach((a) => {
    const href = (a.getAttribute('href') || '').split('#')[0].split('/').pop();
    if (href === file || (file === '' && href === 'index.html')) a.classList.add('active');
  });

  if (svcPages.includes(file)) {
    document.querySelector('.nav-dd-btn')?.classList.add('active');
  }

  document.querySelectorAll('.nav-dd a').forEach((a) => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === file) a.classList.add('active');
  });
})();

/* ---- PeeqRoadmap interactivo ---- */
(function () {
  'use strict';
  var rm = document.querySelector('.peeq-roadmap');
  if (!rm) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var HITOS = [
    {
      fecha: '15 DE ABRIL DE 2026',
      categoria: 'NETWORKING',
      titulo: '4Peeqneta',
      desc: 'Encuentros informales de networking. Donde las conversaciones sin agenda rígida se vuelven las oportunidades más importantes.',
      meta: ['Networking', 'Cupos limitados', 'Dueños de pymes'],
      cta: { texto: 'Reservar lugar', href: 'https://wa.me/5493794398385' }
    },
    {
      fecha: '23 DE MAYO DE 2026',
      categoria: 'COMPETENCIA · TORNEO',
      titulo: '4Peeq Cup · Pádel',
      desc: 'Torneo de pádel interempresas. Una tarde para competir, conocer otros dueños y transformar saques en alianzas.',
      meta: ['Interempresas', 'Cupos limitados', 'Dueños de pymes'],
      cta: { texto: 'Reservar mi lugar', href: 'https://wa.me/5493794398385' }
    },
    {
      fecha: '5 DE JUNIO DE 2026',
      categoria: 'VISITAS',
      titulo: 'Pymeton',
      desc: 'Visitas a empresas de la región. Aprendizaje in situ de los que ya recorrieron el camino y están dispuestos a compartirlo.',
      meta: ['Visitas', 'Cupos limitados', 'Aprendizaje in situ'],
      cta: { texto: 'Reservar lugar', href: 'https://wa.me/5493794398385' }
    },
    {
      fecha: '20 DE JULIO DE 2026',
      categoria: 'INSPIRACIÓN',
      titulo: '4Peeq Talks',
      desc: 'Charlas que inspiran, ideas que transforman. Speakers con experiencia real compartiendo lo que funciona y lo que no.',
      meta: ['Charlas', 'Cupos limitados', 'Speakers reales'],
      cta: { texto: 'Reservar lugar', href: 'https://wa.me/5493794398385' }
    }
  ];

  /* Posiciones de la furgoneta para cada hito.
     Las coordenadas del SVG (viewBox 600×300) se convierten a % del contenedor 2:1. */
  var VAN_POS = [
    { l: 'calc(5%  - 22px)', t: 'calc(82% - 14px)' },  /* dot 1: (30,246)  */
    { l: 'calc(38% - 22px)', t: 'calc(40% - 14px)' },  /* dot 2: (228,120) */
    { l: 'calc(65% - 22px)', t: 'calc(55% - 14px)' },  /* dot 3: (390,165) */
    { l: 'calc(93% - 22px)', t: 'calc(22% - 14px)' }   /* dot 4: (558,66)  */
  ];

  var van    = rm.querySelector('.pr-van');
  var detail = rm.querySelector('.pr-detail');
  var btn    = rm.querySelector('.pr-next');
  var dots   = Array.from(rm.querySelectorAll('.pr-dot'));
  var nums   = Array.from(rm.querySelectorAll('.pr-dot-num'));
  var labels = Array.from(rm.querySelectorAll('.pr-dot-label'));
  var cur    = 0;

  function renderCard(h) {
    var metaHTML = h.meta.map(function (m) {
      return '<div class="pr-card-meta-item">' + m + '</div>';
    }).join('');
    return '<div class="pr-card">'
      + '<div class="pr-card-date">' + h.fecha + '</div>'
      + '<div class="pr-card-cat">' + h.categoria + '</div>'
      + '<h3 class="pr-card-title">' + h.titulo + '</h3>'
      + '<p class="pr-card-desc">' + h.desc + '</p>'
      + (metaHTML ? '<div class="pr-card-meta">' + metaHTML + '</div>' : '')
      + '<a href="' + h.cta.href + '" class="pr-card-cta">'
      + h.cta.texto + ' <span class="arr">→</span></a>'
      + '</div>';
  }

  function setHito(i) {
    van.style.left = VAN_POS[i].l;
    van.style.top  = VAN_POS[i].t;

    dots.forEach(function (d, j) {
      d.classList.remove('is-active', 'is-done');
      nums[j].style.fill   = '#3d3d3c';
      labels[j].style.fill = '#3d3d3c';
      if (j < i) {
        d.classList.add('is-done');
        nums[j].style.fill = '#fff';
      }
      if (j === i) {
        d.classList.add('is-active');
        nums[j].style.fill   = '#fff';
        labels[j].style.fill = '#7764a9';
      }
    });

    detail.innerHTML = renderCard(HITOS[i]);
    if (!reduce) {
      var card = detail.querySelector('.pr-card');
      card.classList.remove('pr-in');
      void card.offsetWidth;
      card.classList.add('pr-in');
    }
  }

  setHito(0);

  btn.addEventListener('click', function () {
    if (cur < HITOS.length - 1) {
      cur++;
      setHito(cur);
      if (cur === HITOS.length - 1) {
        btn.innerHTML = 'Reiniciar Ruta <span class="arr">→</span>';
      }
    } else {
      cur = 0;
      setHito(cur);
      btn.innerHTML = 'Siguiente Hito <span class="arr">→</span>';
    }
  });
})();
