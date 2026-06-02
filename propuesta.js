/* ============================================================
   4Peeq — Propuesta (GSAP + ScrollTrigger)
   Página de scrollytelling real: vista fija (Locked Viewport)
   ============================================================ */
(function () {
  'use strict';
  
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pnav   = document.getElementById('pnav');

  if (pnav) { pnav.classList.add('theme-dark'); pnav.classList.remove('theme-light'); }

  // Datos globales del Radar (Radiografía)
  var DIMS = [
    { t: 'Negocio',      n: '01', d: 'Modelo de negocio, propuesta de valor, segmentos de clientes y canales. Entendemos cómo y con qué gana tu empresa.' },
    { t: 'Organización', n: '02', d: 'Estructura, roles, organigrama y liderazgo. Quién hace qué, y si la organización acompaña tus objetivos.' },
    { t: 'Procesos',     n: '03', d: 'Mapa de procesos, cuellos de botella y orden operativo. Dónde se traba el día a día y cómo destrabarlo.' },
    { t: 'Números',      n: '04', d: 'Ingresos, costos, rentabilidad y flujo de caja. La salud financiera real, con datos confiables.' },
    { t: 'Resultado',    n: '05', d: 'Informe integral con los puntos críticos detectados y un plan de acción claro para avanzar.' }
  ];
  var VERTS  = [ [200,50], [342.6,153.6], [288.2,321.4], [111.8,321.4], [57.4,153.6] ];
  var CENTER = [200, 200];
  var LABEL_MAP = [[0], [1, 2], [3], [4], [5, 6]];
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  function shapePoints(active) {
    return VERTS.map(function (v, i) {
      var f = (i === active) ? 0.98 : 0.55;
      return lerp(CENTER[0], v[0], f).toFixed(1) + ',' + lerp(CENTER[1], v[1], f).toFixed(1);
    }).join(' ');
  }

  /* ---- scroll reveal con GSAP (Locked Viewport) ---- */
  var deck = document.getElementById('scrolly-deck');
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  
  if (deck && slides.length > 0) {
    gsap.set(slides, { autoAlpha: 0 });
    gsap.set(slides[0], { autoAlpha: 1 });

    var masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: deck,
        pin: true,
        scrub: 1, // suavizado
        start: "top top",
        // Multiplicamos por cantidad de slides para dar suficiente "espacio de scroll"
        end: "+=" + (slides.length * 200) + "%" 
      }
    });

    slides.forEach(function(slide, index) {
      var reveals = slide.querySelectorAll('.reveal');
      var isTimelineSlide = slide.querySelector('#tl');
      var isStatsSlide = slide.querySelector('.res-stats');

      // Crossfade de entrada (excepto el primero que ya está visible)
      if (index > 0) {
        masterTl.addLabel("scene" + index, "+=0.5");
        masterTl.to(slides[index - 1], { autoAlpha: 0, duration: 1 }, "scene" + index);
        masterTl.to(slide, { autoAlpha: 1, duration: 1 }, "scene" + index);
      } else {
        masterTl.addLabel("scene0", 0);
      }

      // Animaciones por partes de cada sección
      if (reveals.length > 0) {
        var revealArr = Array.prototype.slice.call(reveals).sort(function(a, b) {
          return (parseInt(a.getAttribute('data-d')) || 0) - (parseInt(b.getAttribute('data-d')) || 0);
        });
        
        masterTl.fromTo(revealArr, 
          { opacity: 0, y: reduce ? 0 : 34 }, 
          { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power2.out" },
          index === 0 ? 0 : "<0.2"
        );
      }

      // Especial: Animación Scrollytelling de la Radiografía (S4)
      if (slide.id === 's4') {
        var radarShape = document.getElementById('radarShape');
        var rdPanel = document.getElementById('rdPanel');
        var radarNodes = Array.prototype.slice.call(document.querySelectorAll('.radar-node'));
        var radarLabels = Array.prototype.slice.call(document.querySelectorAll('.rn-label'));
        
        if (radarShape && rdPanel) {
          // Inicializar estado 0 al crearse
          rdPanel.innerHTML = '<div class="rd-panel-num">' + DIMS[0].n + '</div><h3>' + DIMS[0].t + '</h3><p>' + DIMS[0].d + '</p>';
          radarShape.setAttribute('points', shapePoints(0));
          if(radarNodes[0]) radarNodes[0].classList.add('on');
          (LABEL_MAP[0] || []).forEach(function (idx) { if (radarLabels[idx]) radarLabels[idx].classList.add('on'); });

          for (var k = 1; k < 5; k++) {
            (function(step) {
              masterTl.to(radarShape, {
                attr: { points: shapePoints(step) },
                duration: 1.5,
                ease: "power2.inOut",
                onStart: function() {
                   radarNodes.forEach(function (n, j) { n.classList.toggle('on', j === step); });
                   radarLabels.forEach(function (l) { l.classList.remove('on'); });
                   (LABEL_MAP[step] || []).forEach(function (idx) { if (radarLabels[idx]) radarLabels[idx].classList.add('on'); });
                   rdPanel.innerHTML = '<div class="rd-panel-num">' + DIMS[step].n + '</div><h3>' + DIMS[step].t + '</h3><p>' + DIMS[step].d + '</p>';
                   rdPanel.classList.remove('rd-anim'); void rdPanel.offsetWidth; rdPanel.classList.add('rd-anim');
                },
                onReverseComplete: function() {
                   var prev = step - 1;
                   radarNodes.forEach(function (n, j) { n.classList.toggle('on', j === prev); });
                   radarLabels.forEach(function (l) { l.classList.remove('on'); });
                   (LABEL_MAP[prev] || []).forEach(function (idx) { if (radarLabels[idx]) radarLabels[idx].classList.add('on'); });
                   rdPanel.innerHTML = '<div class="rd-panel-num">' + DIMS[prev].n + '</div><h3>' + DIMS[prev].t + '</h3><p>' + DIMS[prev].d + '</p>';
                   rdPanel.classList.remove('rd-anim'); void rdPanel.offsetWidth; rdPanel.classList.add('rd-anim');
                }
              }, "+=0.6"); // Pequeña pausa entre dimensiones
            })(k);
          }
          // Pausa extra final para dejar leer el último punto
          masterTl.to({}, { duration: 1 });
        }
      }

      /* ---- timeline: animar atado al scroll ---- */
      if (isTimelineSlide) {
        var trackFill = isTimelineSlide.querySelector('.tl-fill');
        var nodes = isTimelineSlide.querySelectorAll('.tl-node');
        masterTl.to(trackFill, { width: "100%", duration: 2, ease: "none" });
        masterTl.fromTo(nodes, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.6 }, "<0.2");
      }

      /* ---- contador animado atado al scroll ---- */
      if (isStatsSlide) {
        var nums = isStatsSlide.querySelectorAll('[data-count]');
        nums.forEach(function(el) {
          var raw = el.dataset.final || el.textContent.trim();
          el.dataset.final = raw;
          var prefix = (raw.match(/^\D*/) || [''])[0];
          var suffix = (raw.match(/\D*$/) || [''])[0];
          var target = parseInt(raw.replace(/\D/g, ''), 10) || 0;
          
          var counter = { val: 0 };
          masterTl.to(counter, {
            val: target,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: function() {
              el.textContent = prefix + Math.round(counter.val) + suffix;
            }
          }, "<");
        });
      }
    });
  }

  /* ---- spotlight sigue el cursor en .stage ---- */
  document.querySelectorAll('.stage').forEach(function (stage) {
    var sp = stage.querySelector('.spotlight');
    if (!sp) return;
    stage.addEventListener('pointermove', function (e) {
      var r = stage.getBoundingClientRect();
      sp.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      sp.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
    stage.addEventListener('pointerleave', function () {
      sp.style.setProperty('--mx', '50%');
      sp.style.setProperty('--my', '35%');
    });
  });
})();
