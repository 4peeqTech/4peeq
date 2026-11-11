/* ---- analytics: clics clave -> eventos de Google (GTM-ML6RZ7TC) ----
   Un solo listener delegado: los botones nuevos se miden solos según su destino. */
(function () {
  'use strict';
  function track(name, params) {
    if (typeof window.gtag !== 'function') return;
    params = params || {};
    params.page_path = location.pathname;
    window.gtag('event', name, params);
  }

  function eventFor(href) {
    if (/(^|\/\/)(wa\.me|api\.whatsapp\.com)\//.test(href)) return 'whatsapp_click';
    if (/(^|\/\/)eventos\.4peeq\.com/.test(href)) return 'reservar_pymeton';
    if (/instagram\.com/.test(href)) return 'instagram_click';
    if (/google\.[a-z.]+\/maps/.test(href)) return 'maps_click';
    return null;
  }

  function locationOf(el) {
    if (el.closest('#promoBar')) return 'promo-bar';
    if (el.closest('#nav, #mobileMenu')) return 'nav';
    if (el.closest('footer')) return 'footer';
    var sec = el.closest('section[id], [id]');
    return sec ? sec.id : 'page';
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (a) {
      var name = eventFor(a.href);
      if (name) {
        track(name, {
          link_url: a.href,
          link_text: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60),
          click_location: locationOf(a)
        });
      }
    }
    if (e.target.closest && e.target.closest('#promoBarClose')) track('promo_bar_close');
  }, true);
})();
