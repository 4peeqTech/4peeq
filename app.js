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
