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

  /* ---- promo bar (Pymeton La Conferencia) ---- */
  const promoBar = document.getElementById('promoBar');
  if (promoBar) {
    const PROMO_KEY = 'promo-pymeton-conferencia-2026-closed';
    const eventDate = new Date('2026-10-14T14:00:00-03:00');
    const close = () => { document.body.classList.add('promo-closed'); localStorage.setItem(PROMO_KEY, '1'); };

    if (Date.now() > eventDate.getTime() || localStorage.getItem(PROMO_KEY) === '1') {
      document.body.classList.add('promo-closed');
    } else {
      const setPromoHeight = () => {
        document.documentElement.style.setProperty('--promo-h', promoBar.offsetHeight + 'px');
      };
      setPromoHeight();
      window.addEventListener('resize', setPromoHeight, { passive: true });
      const countdownEl = document.getElementById('promoCountdown');
      if (countdownEl) {
        const daysLeft = Math.ceil((eventDate.getTime() - Date.now()) / 86400000);
        countdownEl.textContent = daysLeft <= 0 ? '¡Es hoy!' : `Faltan ${daysLeft} días`;
      }
      const closeBtn = document.getElementById('promoBarClose');
      if (closeBtn) closeBtn.addEventListener('click', close);
    }
  }

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

  /* ---- pymeton page-wide violet glow follows cursor ---- */
  const pymGlow = document.querySelector('.pym-page-glow');
  if (pymGlow && !reduce) {
    window.addEventListener('pointermove', (e) => {
      pymGlow.style.setProperty('--mx', (e.clientX / window.innerWidth * 100) + '%');
      pymGlow.style.setProperty('--my', (e.clientY / window.innerHeight * 100) + '%');
    });
  }

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

  /* ---- photo card tilt (desktop only, respects reduced-motion) ---- */
  if (!reduce) {
    document.querySelectorAll('.ph-img').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

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

  /* ---- invitation cards: grid, se abre una a la vez con click (acordeón) ---- */
  const invCells = document.querySelectorAll('.inv-cell');
  let openCell = null;

  invCells.forEach((cell) => {
    const trigger = cell.querySelector('.inv-trigger');
    const panel = cell.querySelector('.inv-reveal-wrap');
    if (!trigger || !panel) return;
    panel.inert = true;

    trigger.addEventListener('click', () => {
      const willOpen = cell !== openCell;
      if (openCell && openCell !== cell) {
        openCell.classList.remove('is-open');
        const prevTrigger = openCell.querySelector('.inv-trigger');
        const prevPanel = openCell.querySelector('.inv-reveal-wrap');
        if (prevTrigger) prevTrigger.setAttribute('aria-expanded', 'false');
        if (prevPanel) prevPanel.inert = true;
      }
      cell.classList.toggle('is-open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
      panel.inert = !willOpen;
      openCell = willOpen ? cell : null;
    });
  });
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

/* ---- scrollytelling: strict scroll-linked scenes ---- */
(function () {
  'use strict';
  var section = document.getElementById('scrolly');
  if (!section) return;

  var glow  = section.querySelector('.scrolly-glow');
  var bar   = section.querySelector('.scrolly-bar');
  var hint  = section.querySelector('.scrolly-hint');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var scenes = [
    { el: document.getElementById('sy-s1'), range: [0.00, 0.06, 0.18, 0.25] },
    { el: document.getElementById('sy-s2'), range: [0.22, 0.30, 0.42, 0.50] },
    { el: document.getElementById('sy-s3'), range: [0.47, 0.55, 0.67, 0.75] },
    { el: document.getElementById('sy-s4'), range: [0.72, 0.82, 0.95, 1.00] }
  ];

  /* Maps progress p through a 4-stop range/output pair (like framer useTransform). */
  function map4(p, r, v) {
    if (p <= r[0]) return v[0];
    if (p <= r[1]) return v[0] + (v[1] - v[0]) * (p - r[0]) / (r[1] - r[0]);
    if (p <= r[2]) return v[1];
    if (p <= r[3]) return v[1] + (v[3] - v[1]) * (p - r[2]) / (r[3] - r[2]);
    return v[3];
  }

  function getProgress() {
    var scrollTop  = window.scrollY || window.pageYOffset;
    var sectionTop = section.offsetTop;
    var sectionH   = section.offsetHeight;
    var viewH      = window.innerHeight;
    var raw = (scrollTop - sectionTop) / (sectionH - viewH);
    return Math.max(0, Math.min(1, raw));
  }

  function update() {
    var p = getProgress();

    /* Progress bar: scaleX 0→1 */
    bar.style.transform = 'scaleX(' + p + ')';

    /* Scroll hint: fades out */
    hint.style.opacity = p < 0.05 ? (1 - p / 0.05) : 0;

    /* Glow pulse */
    var go = p <= 0.5 ? 0.25 + 0.25 * (p / 0.5) : 0.5 - 0.25 * ((p - 0.5) / 0.5);
    glow.style.opacity = go;

    /* Scenes: opacity + translateY (or no translate when reduce-motion) */
    var yAmp = reduce ? 0 : 60;
    scenes.forEach(function (s) {
      var r = s.range;
      var opacity = map4(p, r, [0, 1, 1, 0]);
      var y       = map4(p, r, [yAmp, 0, 0, -yAmp]);
      s.el.style.opacity   = opacity;
      s.el.style.transform = 'translateY(' + y + 'px)';
      /* aria-hidden: hide from AT when invisible */
      s.el.setAttribute('aria-hidden', opacity < 0.05 ? 'true' : 'false');
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
})();

/* ---- pymeton: sidekick "El Pelado" que comenta cada sección ---- */
(function () {
  'use strict';
  var buddy = document.querySelector('[data-pym-buddy]');
  if (!buddy) return;

  var bubble = buddy.querySelector('[data-pym-bubble]');
  var char = buddy.querySelector('[data-pym-char]');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* EDITAR ACÁ: diálogos por sección, en orden de aparición en la página */
  var LINES = [
    { sel: '.pym-edition', text: '¡Volvió PYMETON! 🔥 Mirá la segunda edición.' },
    { sel: '.pym-edition + .pym-edition', text: '¿Te perdiste la primera? Están todos acá 👇' },
    { sel: '.final', text: '¡Seguinos en Instagram! 👉 Tocame.' }
  ];

  var entries = LINES
    .map(function (l) { return { el: document.querySelector(l.sel), text: l.text }; })
    .filter(function (e) { return e.el; });
  if (!entries.length) return;

  var hero = document.querySelector('.pym-hero');
  var talkTimer = null;

  function say(text) {
    bubble.textContent = text;
    bubble.classList.add('show');
    if (!reduce) {
      char.classList.add('talking');
      clearTimeout(talkTimer);
      talkTimer = setTimeout(function () { char.classList.remove('talking'); }, 1200);
    }
  }

  var finalEl = document.querySelector('.final');

  function setLinkMode(on) {
    char.classList.toggle('is-link', on);
    if (on) {
      char.setAttribute('role', 'link');
      char.setAttribute('aria-label', 'Seguinos en Instagram');
    } else {
      char.removeAttribute('role');
      char.removeAttribute('aria-label');
    }
  }

  var current = null;
  var io = new IntersectionObserver(function (ents) {
    ents.forEach(function (e) {
      if (e.isIntersecting) {
        var match = entries.find(function (en) { return en.el === e.target; });
        if (match && match.text !== current) { current = match.text; say(match.text); }
        if (e.target === finalEl) setLinkMode(true);
      } else if (e.target === finalEl) {
        setLinkMode(false);
      }
    });
  }, { threshold: 0.45 });
  entries.forEach(function (e) { io.observe(e.el); });

  if (hero && 'IntersectionObserver' in window) {
    var heroIo = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) { buddy.classList.toggle('is-on', e.intersectionRatio < 0.6); });
    }, { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] });
    heroIo.observe(hero);
  }

  char.addEventListener('click', function () {
    if (!char.classList.contains('is-link')) return;
    window.open('https://www.instagram.com/4peeq.ok/', '_blank', 'noopener');
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
  const path = location.pathname;
  const file = path.split('/').pop() || 'index.html';
  const svcPages = ['consultoria.html', 'academy.html', 'people.html', 'tech.html', 'makers.html'];
  const isClub = /\/club(\/|$)/.test(path);

  document.querySelectorAll('.nav-links > a').forEach((a) => {
    const href = (a.getAttribute('href') || '').split('#')[0].split('/').pop();
    if (href === file || (file === '' && href === 'index.html')) a.classList.add('active');
  });

  if (svcPages.includes(file) || isClub) {
    document.querySelector('.nav-dd-btn')?.classList.add('active');
  }

  document.querySelectorAll('.nav-dd a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    const hrefFile = href.split('/').pop();
    if (hrefFile === file || (isClub && href === '/club')) a.classList.add('active');
  });
})();

/* ---- club gallery with random rotation ---- */
(function () {
  const gallery = document.getElementById('clubGallery');
  if (!gallery) return;

  const CLUB_IMGS = [
    '../public/club/opt/IMG-20251015-WA0095.webp',
    '../public/club/opt/IMG-20251125-WA0220.webp',
    '../public/club/opt/IMG-20251203-WA0085.webp',
    '../public/club/opt/IMG_6827.webp',
    '../public/club/opt/Screenshot_20251105_212939_YouTube.webp',
    '../public/club/opt/1062-DSC01997.webp',
    '../public/club/opt/1086-DSC02035.webp',
    '../public/club/opt/1107-DSC02066.webp',
    '../public/club/opt/20251121_223727.webp',
    '../public/club/opt/645-DSC01371.webp',
    '../public/club/opt/659-DSC01385.webp',
    '../public/club/opt/DSC04063_v1.webp',
    '../public/club/opt/DSC04100_v2.webp',
    '../public/club/opt/_DSC5059.webp',
    '../public/club/opt/_DSC5657.webp',
    '../public/club/opt/_DSC5713_v2.webp',
    '../public/club/opt/_DSC5914.webp',
    '../public/club/opt/_DSC5941.webp',
    '../public/club/opt/4peeq-182.webp',
    '../public/club/opt/4peeq-213.webp',
    '../public/club/opt/4peeq-221.webp',
    '../public/club/opt/4peeq-289.webp',
    '../public/club/opt/4peeq-291.webp',
  ];

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const slots = gallery.querySelectorAll('[data-slot]');
  const pool = shuffle([...CLUB_IMGS]);
  const active = pool.splice(0, 5);
  const busy = [false, false, false, false, false];

  slots.forEach((slot, i) => {
    const img = document.createElement('img');
    img.src = active[i];
    img.alt = '';
    img.loading = 'lazy';
    slot.appendChild(img);
  });

  setInterval(() => {
    if (pool.length === 0) return;
    const si = Math.floor(Math.random() * 5);
    if (busy[si]) return;
    busy[si] = true;
    const slot = slots[si];
    const img = slot.querySelector('img');
    if (!img) { busy[si] = false; return; }
    img.classList.add('fading');
    setTimeout(() => {
      const ni = Math.floor(Math.random() * pool.length);
      const next = pool[ni];
      pool[ni] = active[si];
      active[si] = next;
      img.src = next;
      img.classList.remove('fading');
      busy[si] = false;
    }, 450);
  }, 3500);
})();

/* ---- Calendario scrollytelling (rail + fecha gigante + countdown) ---- */
(function () {
  'use strict';
  var scrolly = document.querySelector('.cal-scrolly');
  if (!scrolly) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* === EDITAR ACÁ: próximos eventos del Club ===========================
     Para cambiar fechas/eventos, editá SOLO este array. El rail, la
     furgoneta y la cuenta regresiva se recalculan solos. Agregar o quitar
     un objeto ajusta todo automáticamente.
     - iso : fecha máquina 'AAAA-MM-DD' (mueve la cuenta regresiva)
     - dia / mes / anio : fecha gigante que se muestra en pantalla
     ==================================================================== */
  var EVENTOS = [
    {
      iso: '2026-09-11',
      dia: '11', mes: 'SEP', anio: '2026',
      label: 'Pymeton Streaming',
      categoria: 'PROGRAMAS ON DEMAND',
      titulo: 'Pymeton Streaming',
      desc: 'Experiencias y aprendizajes reales de consultores y dueños pymes que ya recorrieron el camino.',
      meta: ['Streaming', 'On demand', 'Aprendizaje real'],
      cta: { texto: 'Ver los capítulos', href: '/pymeton' }
    },
    {
      iso: '2026-09-23',
      dia: '23', mes: 'SEP', anio: '2026',
      label: 'Pymeton Comunidad',
      categoria: 'NETWORKING',
      titulo: 'Pymeton Comunidad',
      desc: 'Encuentros de networking. Donde las conversaciones se vuelven las oportunidades más importantes.',
      meta: ['Networking', 'Cupos limitados', 'Dueños de pymes'],
      cta: { texto: 'Reservar lugar', href: 'https://wa.me/5493794398385' }
    },
    {
      iso: '2026-10-03',
      dia: '03', mes: 'OCT', anio: '2026',
      label: '4Peeq Cup',
      categoria: 'COMPETENCIA · TORNEO',
      titulo: '4Peeq Cup · Fútbol',
      desc: 'Torneo de fútbol interempresas. Una tarde para competir, conocer otros dueños y transformar goles en alianzas.',
      meta: ['Interempresas', 'Cupos limitados', 'Dueños de pymes'],
      cta: { texto: 'Reservar mi lugar', href: 'https://wa.me/5493794398385' }
    },
    {
      iso: '2026-10-14',
      dia: '14', mes: 'OCT', anio: '2026',
      label: 'Pymeton La Conferencia',
      categoria: 'CICLO DE CHARLAS',
      titulo: 'Pymeton La Conferencia',
      desc: 'Charlas que inspiran, ideas que transforman. Speakers con experiencia real compartiendo lo que funciona y lo que no.',
      meta: ['Charlas', 'Cupos limitados', 'Speakers reales'],
      cta: { texto: 'Reservar lugar', href: 'https://eventos.4peeq.com/eventos/pymeton-la-conferencia-2026/comprar' }
    }
  ];

  var N = EVENTOS.length;
  if (!N) return;

  /* El alto del scroll se ajusta solo al número de eventos. */
  scrolly.style.setProperty('--cal-events', N);

  /* Combi VW Type 2 (vista lateral) en los colores de 4Peeq: cuerpo
     violeta + crema lavanda. Apunta a la derecha; el JS la rota para
     seguir la curva del camino. */
  var VAN_SVG =
    '<svg viewBox="0 0 104 64" width="104" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<ellipse cx="52" cy="59.5" rx="42" ry="3.6" fill="rgba(21,20,43,.16)"/>'
    /* carrocería crema lavanda */
    + '<path d="M8 25 Q8 13 22 11.5 L80 10.5 Q96 11.5 98.5 30 L98.5 44 Q98.5 49 92 49 L12 49 Q8 49 8 44 Z" fill="#ece4f7"/>'
    /* mitad inferior violeta (sube hacia el frente) */
    + '<path d="M8 33 L78 33 Q85 25 98.5 30.5 L98.5 44 Q98.5 49 92 49 L12 49 Q8 49 8 44 Z" fill="#7764a9"/>'
    /* moldura plateada de la cintura */
    + '<path d="M8 32 L78 32 Q85 24.5 98.5 29.6" stroke="#cdbfe6" stroke-width="1.6" fill="none"/>'
    /* techo claro */
    + '<path d="M21 11.5 Q21 6 31 6 L73 6 Q83 6 84 11.5 Z" fill="#f5f0fc"/>'
    /* ventanas laterales (tintadas) */
    + '<rect x="14" y="14" width="13" height="13" rx="2" fill="#2c2150"/>'
    + '<rect x="29" y="14" width="13" height="13" rx="2" fill="#2c2150"/>'
    + '<rect x="44" y="14" width="13" height="13" rx="2" fill="#2c2150"/>'
    /* parabrisas delantero (curvo) */
    + '<path d="M60 14 L74 14 Q83 15.5 85 23 L60 27 Z" fill="#2c2150"/>'
    /* reflejos en ventanas */
    + '<rect x="15" y="15" width="11" height="3" rx="1" fill="#ffffff" opacity=".25"/>'
    + '<rect x="45" y="15" width="11" height="3" rx="1" fill="#ffffff" opacity=".25"/>'
    /* faro redondo */
    + '<circle cx="94" cy="35" r="3.6" fill="#fff3d6" stroke="#b9a3df" stroke-width="1.1"/>'
    /* emblema (anillo 4Peeq) */
    + '<circle cx="80" cy="38.5" r="4.4" fill="#ffffff" stroke="#45315f" stroke-width="1"/>'
    + '<circle cx="80" cy="38.5" r="1.7" fill="#7764a9"/>'
    /* paragolpes plateados */
    + '<rect x="83" y="44" width="15" height="3.6" rx="1.6" fill="#d3cde0"/>'
    + '<rect x="6" y="44" width="11" height="3.2" rx="1.6" fill="#d3cde0"/>'
    /* ruedas con banda clara y tapón */
    + '<circle cx="26" cy="49" r="8" fill="#23222b"/>'
    + '<circle cx="26" cy="49" r="5" fill="#ece4f7"/>'
    + '<circle cx="26" cy="49" r="2.4" fill="#c4b6df"/>'
    + '<circle cx="80" cy="49" r="8" fill="#23222b"/>'
    + '<circle cx="80" cy="49" r="5" fill="#ece4f7"/>'
    + '<circle cx="80" cy="49" r="2.4" fill="#c4b6df"/>'
    + '</svg>';

  /* --- Camino diagonal que cruza toda la sección (esquina sup-izq →
     inf-der), con ondas. Los puntos quedan dispersos en diagonal y deja
     libres las esquinas inf-izq (fecha) y sup-der (detalle) para el texto.
     viewBox estirado al escenario con preserveAspectRatio none. --- */
  var VBW = 1000, VBH = 600;
  var PATH_D = 'M 30 120 C 210 90 280 215 430 250 C 560 282 640 360 760 362 C 872 364 930 470 985 540';

  /* --- Estructura: camino (svg + puntos + furgoneta) y escenas --- */
  var road   = scrolly.querySelector('.cal-road');
  var scenes = scrolly.querySelector('.cal-scenes');
  var bar    = scrolly.querySelector('.cal-bar');
  var hint   = scrolly.querySelector('.cal-hint');

  road.innerHTML =
    '<svg class="cal-road-svg" viewBox="0 0 ' + VBW + ' ' + VBH + '" preserveAspectRatio="none" aria-hidden="true">'
    + '<path class="cal-road-bg" d="' + PATH_D + '"/>'
    + '<path class="cal-road-line" d="' + PATH_D + '"/>'
    + '</svg>';

  var path    = road.querySelector('.cal-road-line');
  var pathLen = path.getTotalLength();

  /* Puntos: ubicados sobre el camino donde queda la furgoneta cuando
     cada escena está centrada (len = (i+0.5)/N del recorrido). */
  var dotsFrag = '';
  EVENTOS.forEach(function (e, i) {
    var pt = path.getPointAtLength(((i + 0.5) / N) * pathLen);
    dotsFrag += '<div class="cal-dot" data-i="' + i + '" '
      + 'style="left:' + (pt.x / VBW * 100) + '%;top:' + (pt.y / VBH * 100) + '%">'
      + '<span class="cal-dot-label">' + e.label + '</span></div>';
  });
  dotsFrag += '<div class="cal-van" aria-hidden="true">' + VAN_SVG + '</div>';
  road.insertAdjacentHTML('beforeend', dotsFrag);

  scenes.innerHTML = EVENTOS.map(function (e) {
    var metaHTML = e.meta.map(function (m) {
      return '<div class="cal-chip">' + m + '</div>';
    }).join('');
    return '<article class="cal-scene" aria-hidden="true">'
      + '<div class="cal-date">'
      +   '<span class="cal-date-day">' + e.dia + '</span>'
      +   '<span class="cal-date-mo">' + e.mes + '</span>'
      +   '<span class="cal-date-yr">' + e.anio + '</span>'
      +   cdMarkup(e.iso)
      + '</div>'
      + '<div class="cal-info">'
      +   '<div class="cal-cat">' + e.categoria + '</div>'
      +   '<h3 class="cal-title">' + e.titulo + '</h3>'
      +   '<p class="cal-desc">' + e.desc + '</p>'
      +   (metaHTML ? '<div class="cal-meta">' + metaHTML + '</div>' : '')
      +   '<a href="' + e.cta.href + '" class="cal-cta">' + e.cta.texto + ' <span class="arr">→</span></a>'
      + '</div>'
      + '</article>';
  }).join('');

  var sceneEls = Array.from(scenes.querySelectorAll('.cal-scene'));
  var dotEls   = Array.from(road.querySelectorAll('.cal-dot'));
  var van      = road.querySelector('.cal-van');

  /* ---- Cuenta regresiva en vivo (días · horas · min · seg) ---- */
  function cdMarkup(iso) {
    function unit(u, lab, extra) {
      return '<div class="cal-cd-unit' + (extra || '') + '">'
        + '<span class="cal-cd-num" data-u="' + u + '">--</span>'
        + '<span class="cal-cd-lab">' + lab + '</span></div>';
    }
    return '<div class="cal-countdown" data-iso="' + iso + '">'
      + '<span class="cal-cd-head">Faltan</span>'
      + '<div class="cal-cd-grid">'
      +   unit('d', 'días') + unit('h', 'horas') + unit('m', 'min')
      +   unit('s', 'seg', ' is-sec')
      + '</div></div>';
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function tick() {
    var now = Date.now();
    scenes.querySelectorAll('.cal-countdown').forEach(function (box) {
      if (box.classList.contains('is-past')) return;
      var ev = new Date(box.getAttribute('data-iso') + 'T00:00:00').getTime();
      var diff = ev - now;
      if (diff <= 0) {
        box.classList.add('is-past');
        box.innerHTML = '<span class="cal-cd-done">Este evento ya ocurrió</span>';
        return;
      }
      var s = Math.floor(diff / 1000);
      set(box, 'd', Math.floor(s / 86400));
      set(box, 'h', pad(Math.floor(s % 86400 / 3600)));
      set(box, 'm', pad(Math.floor(s % 3600 / 60)));
      set(box, 's', pad(s % 60));
    });
  }
  function set(box, u, v) {
    var el = box.querySelector('[data-u="' + u + '"]');
    if (el) el.textContent = v;
  }
  tick();
  setInterval(tick, 1000);

  /* Maps progress p through a 4-stop range/output pair (igual que el scrollytelling de la home). */
  function map4(p, r, v) {
    if (p <= r[0]) return v[0];
    if (p <= r[1]) return v[0] + (v[1] - v[0]) * (p - r[0]) / (r[1] - r[0]);
    if (p <= r[2]) return v[1];
    if (p <= r[3]) return v[1] + (v[3] - v[1]) * (p - r[2]) / (r[3] - r[2]);
    return v[3];
  }

  /* Reparte uniformemente los 4 stops de cada escena a lo largo del scroll. */
  var seg = 1 / N;
  var ranges = EVENTOS.map(function (e, i) {
    var a = i * seg, b = (i + 1) * seg, w = b - a;
    return [
      i === 0 ? 0 : a + w * 0.10,
      a + w * 0.30,
      b - w * 0.30,
      i === N - 1 ? 1 : b - w * 0.10
    ];
  });

  /* Dimensiones del escenario (para rotar la furgoneta bajo escala no uniforme). */
  var stageW = 0, stageH = 0;
  function measure() {
    var r = road.getBoundingClientRect();
    stageW = r.width; stageH = r.height;
  }

  function getProgress() {
    var scrollTop  = window.scrollY || window.pageYOffset;
    var rect       = scrolly.getBoundingClientRect();
    var sectionTop = rect.top + scrollTop;
    var raw = (scrollTop - sectionTop) / (scrolly.offsetHeight - window.innerHeight);
    return Math.max(0, Math.min(1, raw));
  }

  function moveVan(p) {
    var len = pathLen * p;
    var pt  = path.getPointAtLength(len);
    var pt2 = path.getPointAtLength(Math.min(pathLen, len + 1));
    van.style.left = (pt.x / VBW * 100) + '%';
    van.style.top  = (pt.y / VBH * 100) + '%';
    var rot = '';
    if (!reduce) {
      var dx = (pt2.x - pt.x) / VBW * stageW;
      var dy = (pt2.y - pt.y) / VBH * stageH;
      rot = ' rotate(' + (Math.atan2(dy, dx) * 180 / Math.PI) + 'deg)';
    }
    van.style.transform = 'translate(-50%,-50%)' + rot;
  }

  function update() {
    var p = getProgress();

    bar.style.transform = 'scaleX(' + p + ')';
    if (hint) hint.style.opacity = p < 0.05 ? (1 - p / 0.05) : 0;

    moveVan(p);

    var active = Math.min(N - 1, Math.floor(p / seg + 0.5));
    var yAmp = reduce ? 0 : 50;
    sceneEls.forEach(function (el, i) {
      var r = ranges[i];
      var opacity = map4(p, r, [0, 1, 1, 0]);
      el.style.opacity   = opacity;
      el.style.transform = 'translateY(' + map4(p, r, [yAmp, 0, 0, -yAmp]) + 'px)';
      el.setAttribute('aria-hidden', opacity < 0.05 ? 'true' : 'false');
    });

    dotEls.forEach(function (d, i) {
      d.classList.toggle('is-done', i < active);
      d.classList.toggle('is-active', i === active);
    });
  }

  function onResize() { measure(); update(); }

  measure();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  update();
})();
