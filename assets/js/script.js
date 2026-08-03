/*
============================================================

Portfolio Website

Copyright © 2026 Marcos Rogério
All rights reserved.

Educational use only.

Please do not copy this project or redistribute it as your own.

============================================================
*/

"use strict";

/* ==========================================================
   ELEMENTS
========================================================== */

const header = document.querySelector("#header");
const navigation = document.querySelector("#navigation");
const menuButton = document.querySelector("#menuButton");
const backToTopButton = document.querySelector("#backToTop");

const navLinks = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll("main section[id]");

/* ==========================================================
   HEADER SCROLL EFFECT
========================================================== */

function updateHeader() {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

/* ==========================================================
   BACK TO TOP BUTTON
========================================================== */

function updateBackToTopButton() {
  if (window.scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* ==========================================================
   MOBILE MENU
========================================================== */

function openMobileMenu() {
  navigation.classList.add("open");
  menuButton.classList.add("active");

  menuButton.setAttribute("aria-expanded", "true");

  document.body.classList.add("menu-open");
}

function closeMobileMenu() {
  navigation.classList.remove("open");
  menuButton.classList.remove("active");

  menuButton.setAttribute("aria-expanded", "false");

  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const menuIsOpen = navigation.classList.contains("open");

  if (menuIsOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

/* ==========================================================
   CLOSE MENU AFTER CLICKING A LINK
========================================================== */

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});

/* ==========================================================
   ACTIVE NAVIGATION LINK
========================================================== */

function updateActiveNavigationLink() {
  const currentScrollPosition = window.scrollY + 160;

  pageSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      currentScrollPosition >= sectionTop &&
      currentScrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

/* ==========================================================
   CLOSE MOBILE MENU BY CLICKING OUTSIDE
========================================================== */

document.addEventListener("click", (event) => {
  const clickedInsideNavigation = navigation.contains(event.target);
  const clickedMenuButton = menuButton.contains(event.target);

  if (
    navigation.classList.contains("open") &&
    !clickedInsideNavigation &&
    !clickedMenuButton
  ) {
    closeMobileMenu();
  }
});

/* ==========================================================
   CLOSE MOBILE MENU WITH ESCAPE KEY
========================================================== */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("open")) {
    closeMobileMenu();
  }
});

/* ==========================================================
   WINDOW EVENTS
========================================================== */

window.addEventListener("scroll", () => {
  updateHeader();
  updateBackToTopButton();
  updateActiveNavigationLink();
});

/* ==========================================================
   INITIAL PAGE STATE
========================================================== */

updateHeader();
updateBackToTopButton();
updateActiveNavigationLink();
/* ==========================================================
   CURRENT YEAR
========================================================== */

const currentYearElement = document.querySelector("#currentYear");

if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

/* ==========================================================
   ANIMATED COUNTERS
========================================================== */

const counterElements = document.querySelectorAll(".counter");

function animateCounter(counter) {
  const target = Number(counter.dataset.target);

  const suffix = counter.dataset.suffix || "";

  if (!Number.isFinite(target)) {
    return;
  }

  const animationDuration = 1500;
  const animationStart = performance.now();

  function updateCounter(currentTime) {
    const elapsedTime = currentTime - animationStart;

    const progress = Math.min(elapsedTime / animationDuration, 1);

    const easedProgress = 1 - Math.pow(1 - progress, 3);

    const currentValue = Math.round(target * easedProgress);

    counter.textContent = `${currentValue}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      animateCounter(entry.target);

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.6,
  },
);

counterElements.forEach((counter) => {
  counterObserver.observe(counter);
});

/* ==========================================================
   AUTOMATIC REVEAL CLASSES
========================================================== */

const revealSelectors = [
  ".section-heading",
  ".about-visual",
  ".about-content",
  ".skill-card",
  ".project-card",
  ".projects-cta",
  ".certification-card",
  ".certifications-cta",
  ".contact-content",
  ".contact-card",
  ".footer-brand",
  ".footer-column",
];

const revealElements = document.querySelectorAll(revealSelectors.join(","));

revealElements.forEach((element, index) => {
  element.classList.add("reveal");

  element.style.transitionDelay = `${Math.min(index % 4, 3) * 90}ms`;

  if (
    element.classList.contains("about-visual") ||
    element.classList.contains("contact-content")
  ) {
    element.classList.add("reveal-left");
  }

  if (
    element.classList.contains("about-content") ||
    element.classList.contains("contact-card")
  ) {
    element.classList.add("reveal-right");
  }

  if (
    element.classList.contains("skill-card") ||
    element.classList.contains("project-card") ||
    element.classList.contains("certification-card")
  ) {
    element.classList.add("reveal-scale");
  }
});

/* ==========================================================
   REVEAL OBSERVER
========================================================== */

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -55px 0px",
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/* ==========================================================
   CARD MOUSE GLOW
========================================================== */

const glowCards = document.querySelectorAll(
  [".skill-card", ".project-card", ".certification-card", ".contact-card"].join(
    ",",
  ),
);

glowCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const cardRectangle = card.getBoundingClientRect();

    const mouseX = event.clientX - cardRectangle.left;

    const mouseY = event.clientY - cardRectangle.top;

    card.style.setProperty("--mouse-x", `${mouseX}px`);

    card.style.setProperty("--mouse-y", `${mouseY}px`);
  });
});

/* ==========================================================
   ACCESSIBILITY — REDUCED MOTION
========================================================== */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

if (prefersReducedMotion.matches) {
  revealElements.forEach((element) => {
    element.classList.add("visible");

    element.style.transitionDelay = "0ms";
  });
}
