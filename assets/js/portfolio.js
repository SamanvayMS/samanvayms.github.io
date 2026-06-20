(function () {
  var root = document.documentElement;
  var body = document.body;
  var themeToggle = document.querySelector("[data-theme-toggle]");
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  body.style.marginBottom = "0";

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (error) {}

    if (themeToggle) {
      themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  function getInitialTheme() {
    try {
      var saved = localStorage.getItem("portfolio-theme");
      if (saved === "dark" || saved === "light") {
        return saved;
      }
    } catch (error) {}

    return "dark";
  }

  setTheme(getInitialTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  var typeTarget = document.querySelector("[data-portfolio-typewriter]");
  if (typeTarget && !prefersReducedMotion) {
    var phrases = [
      "Graduate student in Financial Engineering at UIUC.",
      "Building ML systems for finance and markets.",
      "Exploring reinforcement learning, market microstructure, and generative AI."
    ];
    var phraseIndex = 0;
    var charIndex = phrases[0].length;
    var deleting = false;

    function tickTypewriter() {
      var phrase = phrases[phraseIndex];
      typeTarget.textContent = phrase.slice(0, charIndex);

      if (!deleting && charIndex < phrase.length) {
        charIndex += 1;
        window.setTimeout(tickTypewriter, 45);
        return;
      }

      if (!deleting && charIndex === phrase.length) {
        deleting = true;
        window.setTimeout(tickTypewriter, 1600);
        return;
      }

      if (deleting && charIndex > 0) {
        charIndex -= 1;
        window.setTimeout(tickTypewriter, 22);
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      window.setTimeout(tickTypewriter, 350);
    }

    tickTypewriter();
  }

  var filterRoot = document.querySelector("[data-portfolio-filters]");
  if (filterRoot) {
    var filterButtons = filterRoot.querySelectorAll("[data-filter]");
    var cards = document.querySelectorAll("[data-portfolio-card]");

    filterRoot.addEventListener("click", function (event) {
      var button = event.target.closest("[data-filter]");
      if (!button) {
        return;
      }

      var filter = button.getAttribute("data-filter");

      filterButtons.forEach(function (item) {
        item.setAttribute("aria-pressed", String(item === button));
      });

      cards.forEach(function (card) {
        var tags = card.getAttribute("data-tags") || "";
        card.hidden = filter !== "all" && tags.indexOf(filter) === -1;
      });
    });
  }

  var revealItems = document.querySelectorAll(".reveal");
  if (revealItems.length && !prefersReducedMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }
})();
