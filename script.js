/* =========================================================================
   Metro Pizzería — JS mínimo, sin dependencias
   ========================================================================= */
(function () {
  "use strict";

  /* ─── Año dinámico en el footer ──────────────────────────────────────── */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ─── Nav: fondo sólido al hacer scroll ──────────────────────────────── */
  var nav = document.getElementById("nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ─── Reveal al scroll (técnica Nikato, vanilla) ─────────────────────── */
  var reveals = document.querySelectorAll(".reveal");
  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    // Sin animación: mostrar todo de una.
    reveals.forEach(function (el) {
      el.classList.add("visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
