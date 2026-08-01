"use strict";

/* ==========================================================
   CERTIFICATIONS DATA
========================================================== */

const certificationsData = [
  {
    provider: "Cisco Networking Academy",

    title: "Introduction to Cybersecurity",

    description:
      "Fundamentals of cybersecurity, digital threats, data protection and essential security practices.",

    image: "assets/images/certifications/introduction-cybersecurity.png",

    year: "2026",

    status: "Completed",
  },

  {
    provider: "Cisco Networking Academy",

    title: "Introduction to Modern AI",

    description:
      "Artificial Intelligence fundamentals, machine learning concepts and practical applications of modern AI tools.",

    image: "assets/images/certifications/introduction-modern-ai.png",

    year: "2026",

    status: "Completed",
  },

  {
    provider: "Fundação Bradesco",

    title: "Introduction to Data Analysis with Power BI",

    description:
      "Power BI fundamentals, data transformation, modeling, visualization and dashboard development.",

    image: "assets/images/certifications/power-bi-bradesco.png",

    year: "2026",

    status: "Completed",
  },
];

/* ==========================================================
   TECHNICAL BADGES DATA
========================================================== */

const technicalBadgesData = [
  {
    title: "Introduction to Cybersecurity",

    provider: "Cisco Networking Academy",

    image: "assets/images/certifications/badges/cybersecurity-badge.png",
  },

  {
    title: "Introduction to Modern AI",

    provider: "Cisco Networking Academy",

    image: "assets/images/certifications/badges/modern-ai-badge.png",
  },
];

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const certificationsGrid = document.querySelector("#certificationsGrid");

const badgesGrid = document.querySelector("#badgesGrid");

/* ==========================================================
   ESCAPE HTML
========================================================== */

function escapeCertificationHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* ==========================================================
   CREATE CERTIFICATION CARD
========================================================== */

function createCertificationCard(certification) {
  const provider = escapeCertificationHtml(certification.provider);

  const title = escapeCertificationHtml(certification.title);

  const description = escapeCertificationHtml(certification.description);

  const image = escapeCertificationHtml(certification.image);

  const year = escapeCertificationHtml(certification.year);

  const status = escapeCertificationHtml(certification.status);

  return `
    <article class="certification-card">

      <button
        class="certification-image-button"
        type="button"
        data-certificate-image="${image}"
        data-certificate-title="${title}"
        aria-label="Open certificate: ${title}"
      >

        <div class="certification-image-wrapper">

          <img
            src="${image}"
            alt="${title}"
            class="certification-image"
            loading="lazy"
          >

          <div class="certification-image-overlay">

            <span>
              View Certificate
            </span>

            <span
              class="certification-view-icon"
              aria-hidden="true"
            >
              ⤢
            </span>

          </div>

        </div>

      </button>


      <div class="certification-content">

        <div class="certification-card-meta">

          <span class="certification-provider">
            ${provider}
          </span>

          <span class="certification-year">
            ${year}
          </span>

        </div>


        <h3 class="certification-title">
          ${title}
        </h3>


        <p class="certification-description">
          ${description}
        </p>


        <span class="certification-status">

          <span
            class="certification-status-dot"
            aria-hidden="true"
          ></span>

          ${status}

        </span>

      </div>

    </article>
  `;
}

/* ==========================================================
   CREATE BADGE CARD
========================================================== */

function createBadgeCard(badge) {
  const title = escapeCertificationHtml(badge.title);

  const provider = escapeCertificationHtml(badge.provider);

  const image = escapeCertificationHtml(badge.image);

  return `
    <article class="badge-card">

      <div class="badge-image-wrapper">

        <img
          src="${image}"
          alt="${title}"
          class="badge-image"
          loading="lazy"
        >

      </div>


      <div class="badge-content">

        <h4>
          ${title}
        </h4>

        <p>
          ${provider}
        </p>

      </div>

    </article>
  `;
}

/* ==========================================================
   RENDER CERTIFICATIONS
========================================================== */

function renderCertifications() {
  if (!certificationsGrid) {
    return;
  }

  certificationsGrid.innerHTML = certificationsData
    .map(createCertificationCard)
    .join("");
}

/* ==========================================================
   RENDER BADGES
========================================================== */

function renderTechnicalBadges() {
  if (!badgesGrid) {
    return;
  }

  badgesGrid.innerHTML = technicalBadgesData.map(createBadgeCard).join("");
}

/* ==========================================================
   CREATE CERTIFICATE MODAL
========================================================== */

function createCertificateModal() {
  const existingModal = document.querySelector("#certificateModal");

  if (existingModal) {
    return;
  }

  const modal = document.createElement("div");

  modal.className = "certificate-modal";
  modal.id = "certificateModal";
  modal.hidden = true;

  modal.innerHTML = `
    <div
      class="certificate-modal-backdrop"
      data-close-certificate-modal
    ></div>

    <div
      class="certificate-modal-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificateModalTitle"
    >

      <div class="certificate-modal-header">

        <h3 id="certificateModalTitle">
          Certificate
        </h3>

        <button
          class="certificate-modal-close"
          id="certificateModalClose"
          type="button"
          aria-label="Close certificate"
        >
          ×
        </button>

      </div>


      <div class="certificate-modal-content">

        <img
          src=""
          alt=""
          class="certificate-modal-image"
          id="certificateModalImage"
        >

      </div>

    </div>
  `;

  document.body.appendChild(modal);
}

/* ==========================================================
   OPEN CERTIFICATE MODAL
========================================================== */

function openCertificateModal(imageSource, certificateTitle) {
  const modal = document.querySelector("#certificateModal");

  const modalImage = document.querySelector("#certificateModalImage");

  const modalTitle = document.querySelector("#certificateModalTitle");

  const modalCloseButton = document.querySelector("#certificateModalClose");

  if (!modal || !modalImage || !modalTitle) {
    return;
  }

  modalImage.src = imageSource;
  modalImage.alt = certificateTitle;

  modalTitle.textContent = certificateTitle;

  modal.hidden = false;

  document.body.classList.add("certificate-modal-open");

  requestAnimationFrame(() => {
    modal.classList.add("visible");
  });

  if (modalCloseButton) {
    modalCloseButton.focus();
  }
}

/* ==========================================================
   CLOSE CERTIFICATE MODAL
========================================================== */

function closeCertificateModal() {
  const modal = document.querySelector("#certificateModal");

  if (!modal || modal.hidden) {
    return;
  }

  modal.classList.remove("visible");

  document.body.classList.remove("certificate-modal-open");

  window.setTimeout(() => {
    modal.hidden = true;
  }, 250);
}

/* ==========================================================
   CONFIGURE CERTIFICATE EVENTS
========================================================== */

function configureCertificateEvents() {
  const certificateButtons = document.querySelectorAll(
    ".certification-image-button",
  );

  certificateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const certificateImage = button.dataset.certificateImage;

      const certificateTitle = button.dataset.certificateTitle;

      if (!certificateImage || !certificateTitle) {
        return;
      }

      openCertificateModal(certificateImage, certificateTitle);
    });
  });

  const modalCloseButton = document.querySelector("#certificateModalClose");

  const modalBackdrop = document.querySelector(
    "[data-close-certificate-modal]",
  );

  if (modalCloseButton) {
    modalCloseButton.addEventListener("click", closeCertificateModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeCertificateModal);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCertificateModal();
    }
  });
}

/* ==========================================================
   IMAGE ERROR FALLBACK
========================================================== */

function configureImageFallbacks() {
  const certificationImages = document.querySelectorAll(
    ".certification-image, .badge-image",
  );

  certificationImages.forEach((image) => {
    image.addEventListener("error", () => {
      const imageWrapper = image.closest(
        ".certification-image-wrapper, .badge-image-wrapper",
      );

      if (imageWrapper) {
        imageWrapper.classList.add("image-not-found");
      }

      image.style.display = "none";
    });
  });
}

/* ==========================================================
   INITIALIZATION
========================================================== */

function initializeCertifications() {
  renderCertifications();

  renderTechnicalBadges();

  createCertificateModal();

  configureCertificateEvents();

  configureImageFallbacks();
}

initializeCertifications();
