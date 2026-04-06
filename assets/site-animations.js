(function () {
  function initGlobalMotion() {
    var revealTargets = document.querySelectorAll(
      "section, footer, details, .group, .relative.mx-auto, .max-w-6xl, .max-w-7xl, .max-w-\[1024px\], .max-w-\[1512px\]"
    );

    revealTargets.forEach(function (el) {
      el.classList.add("motion-reveal");
    });

    var io = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08,
      }
    );

    revealTargets.forEach(function (el) {
      io.observe(el);
    });

    var hoverTargets = document.querySelectorAll(
      ".group, details, button, a"
    );

    hoverTargets.forEach(function (el) {
      el.classList.add("motion-hover");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGlobalMotion);
  } else {
    initGlobalMotion();
  }
})();
