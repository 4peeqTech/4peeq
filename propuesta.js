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
        end: "+=" + (slides.length * 200) + "%" 
      }
    });

    // Animación de Portada S1 atada al scroll inicial
    masterTl.addLabel("scene_intro");
    masterTl.fromTo("#s1 .foco-spin", 
      { scale: 3.5, y: "30vh" }, 
      { scale: 1, y: 0, duration: 1.5, ease: "power2.inOut" }, 
      "scene_intro"
    );
    masterTl.fromTo("#s1 .s1-text", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power2.out" }, 
      "scene_intro+=0.5"
    );
    masterTl.to("#s1 .cue", { opacity: 0, duration: 0.5 }, "scene_intro+=0.2");

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
        var scannerLine = document.getElementById('scannerLine');
        var rdPanel = document.getElementById('rdPanel');
        var xrNodes = Array.prototype.slice.call(document.querySelectorAll('.xr-node'));
        
        if (scannerLine && rdPanel) {
          rdPanel.innerHTML = '<div class="rd-panel-num">' + DIMS[0].n + '</div><h3>' + DIMS[0].t + '</h3><p>' + DIMS[0].d + '</p>';
          if(xrNodes[0]) xrNodes[0].classList.add('on');
          
          var scanStops = ["15%", "45%", "68%", "85%", "100%"]; // Y positions for scanner

          for (var k = 1; k < 5; k++) {
            (function(step) {
              masterTl.to(scannerLine, {
                top: scanStops[step],
                duration: 1.5,
                ease: "power2.inOut",
                onStart: function() {
                   xrNodes.forEach(function (n, j) { n.classList.toggle('on', j === step); });
                   rdPanel.innerHTML = '<div class="rd-panel-num">' + DIMS[step].n + '</div><h3>' + DIMS[step].t + '</h3><p>' + DIMS[step].d + '</p>';
                   rdPanel.classList.remove('rd-anim'); void rdPanel.offsetWidth; rdPanel.classList.add('rd-anim');
                },
                onReverseComplete: function() {
                   var prev = step - 1;
                   xrNodes.forEach(function (n, j) { n.classList.toggle('on', j === prev); });
                   rdPanel.innerHTML = '<div class="rd-panel-num">' + DIMS[prev].n + '</div><h3>' + DIMS[prev].t + '</h3><p>' + DIMS[prev].d + '</p>';
                   rdPanel.classList.remove('rd-anim'); void rdPanel.offsetWidth; rdPanel.classList.add('rd-anim');
                }
              }, "+=0.2");
            })(k);
          }
        }
      }

      // Especial: Animación Clientes (Big Bang)
      if (slide.id === 's-clientes') {
        var logoWraps = slide.querySelectorAll('.c-logo-wrap');
        var revealCl = slide.querySelectorAll('.s-cl-reveal');
        
        masterTl.addLabel("clientes_intro", "+=0.2");
        masterTl.fromTo(revealCl, 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
          "clientes_intro"
        );

        masterTl.addLabel("clientes_explode", "clientes_intro+=0.3");

        logoWraps.forEach(function(wrap, i) {
          var n = i + 1;
          var angle = n * 137.5 * (Math.PI / 180); // Phyllotaxis angle
          var maxRadius = 32;
          var radius = Math.sqrt(n / logoWraps.length) * maxRadius;
          var rRandom = radius + (Math.random() - 0.5) * 8; // leve aleatoriedad
          
          // Ampliamos el multiplicador para aprovechar mejor los bordes sin salir de la pantalla
          var endX = (rRandom * Math.cos(angle)) * 1.4 + "vw"; 
          var endY = (rRandom * Math.sin(angle)) * 1.25 + "vh";
          var endScale = 1.1 + Math.random() * 0.5; // tamaño base más grande (1.1 a 1.6) para garantizar legibilidad
          var endRotation = (Math.random() - 0.5) * 15; // orientados casi rectos para que sean legibles
          
          // Empezar desde un pixel en el centro absoluto
          var startX = "0vw";
          var startY = "0vh";
          var startScale = 0;
          var startRotation = (Math.random() - 0.5) * 720; // empiezan con rotación al azar (dados vuelta varias veces)
          
          // Set initial state at the moment the section starts
          masterTl.set(wrap, 
            { xPercent: -50, yPercent: -50, x: startX, y: startY, scale: startScale, rotation: startRotation, opacity: 1 }, 
            "clientes_intro"
          );
          
          // Explode out
          masterTl.to(wrap,
            { x: endX, y: endY, scale: endScale, rotation: endRotation, ease: "power3.out", duration: 4 },
            "clientes_explode"
          );
        });
      }

      // Especial: Animación del Club
      if (slide.id && /^s-club-[123]$/.test(slide.id)) {
        var photos = Array.prototype.slice.call(slide.querySelectorAll('.cphoto'));
        if (photos.length > 0) {
          masterTl.fromTo(photos,
            { opacity: 0, scale: reduce ? 1 : 0.82 },
            { opacity: 1, scale: 1, duration: 0.7, stagger: 0.08, ease: 'back.out(1.3)' },
            '<0.1'
          );
        }
      }

      /* ---- timeline: animar atado al scroll ---- */
      if (isTimelineSlide) {
        var trackFill = isTimelineSlide.querySelector('.tl-fill');
        var nodes = isTimelineSlide.querySelectorAll('.tl-node');
        var cards = isTimelineSlide.querySelectorAll('.tl-card');
        
        masterTl.to(trackFill, { width: "100%", duration: 3, ease: "none" });
        masterTl.fromTo(nodes, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 1 }, "<0.2");
        masterTl.fromTo(cards, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 1 }, "<");
      }

      /* ---- contador animado atado al scroll ---- */
      if (isStatsSlide) {
        var nums = isStatsSlide.querySelectorAll('[data-count]');
        var counted = false;
        masterTl.call(function() {
          if (counted) return;
          counted = true;
          nums.forEach(function(el) {
            var raw = el.dataset.final || el.textContent.trim();
            el.dataset.final = raw;
            var prefix = (raw.match(/^\D*/) || [''])[0];
            var suffix = (raw.match(/\D*$/) || [''])[0];
            var target = parseInt(raw.replace(/\D/g, ''), 10) || 0;
            
            var counter = { val: 0 };
            gsap.to(counter, {
              val: target,
              duration: 3.5,
              ease: "power1.inOut",
              onUpdate: function() {
                el.textContent = prefix + Math.round(counter.val) + suffix;
              }
            });
          });
        }, null, "scene" + index + "+=0.4");
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

  // Ocultar Navbar al scrollear
  var pnav = document.getElementById('pnav');
  if (pnav) {
    ScrollTrigger.create({
      start: "top -50%", 
      onUpdate: function(self) {
        if (self.direction === 1) { 
          gsap.to(pnav, { yPercent: -100, autoAlpha: 0, duration: 0.3, overwrite: true });
        } else { 
          gsap.to(pnav, { yPercent: 0, autoAlpha: 1, duration: 0.3, overwrite: true });
        }
      }
    });
  }
})();
