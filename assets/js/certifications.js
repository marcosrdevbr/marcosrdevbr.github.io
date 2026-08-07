"use strict";

/* ==========================================================
   CERTIFICATIONS DATA
========================================================== */

const certificationsData = [
  {
    id: "introduction-cybersecurity",

    provider: "Cisco Networking Academy",

    image: "assets/images/certifications/introduction-cybersecurity.png",

    year: "2026",
  },

  {
    id: "introduction-modern-ai",

    provider: "Cisco Networking Academy",

    image: "assets/images/certifications/introduction-modern-ai.png",

    year: "2026",
  },

  {
    id: "power-bi-bradesco",

    provider: "Fundação Bradesco",

    image: "assets/images/certifications/power-bi-bradesco.png",

    year: "2026",
  },
];

/* ==========================================================
   TECHNICAL BADGES DATA
========================================================== */

const technicalBadgesData = [
  {
    id: "cybersecurity-badge",

    provider: "Cisco Networking Academy",

    image: "assets/images/certifications/badges/cybersecurity-badge.png",
  },

  {
    id: "modern-ai-badge",

    provider: "Cisco Networking Academy",

    image: "assets/images/certifications/badges/modern-ai-badge.png",
  },
];

/* ==========================================================
   CERTIFICATION TRANSLATIONS
========================================================== */

const certificationTranslations = {
  en: {
    interface: {
      completed: "Completed",
      viewCertificate: "View Certificate",
      openCertificate: "Open certificate",
      certificate: "Certificate",
      closeCertificate: "Close certificate",
    },

    certifications: {
      "introduction-cybersecurity": {
        title: "Introduction to Cybersecurity",

        description:
          "Fundamentals of cybersecurity, digital threats, data protection and essential security practices.",
      },

      "introduction-modern-ai": {
        title: "Introduction to Modern AI",

        description:
          "Artificial Intelligence fundamentals, machine learning concepts and practical applications of modern AI tools.",
      },

      "power-bi-bradesco": {
        title: "Introduction to Data Analysis with Power BI",

        description:
          "Power BI fundamentals, data transformation, modeling, visualization and dashboard development.",
      },
    },

    badges: {
      "cybersecurity-badge": {
        title: "Introduction to Cybersecurity",
      },

      "modern-ai-badge": {
        title: "Introduction to Modern AI",
      },
    },
  },

  "pt-BR": {
    interface: {
      completed: "Concluído",
      viewCertificate: "Ver Certificado",
      openCertificate: "Abrir certificado",
      certificate: "Certificado",
      closeCertificate: "Fechar certificado",
    },

    certifications: {
      "introduction-cybersecurity": {
        title: "Introdução à Cibersegurança",

        description:
          "Fundamentos de cibersegurança, ameaças digitais, proteção de dados e práticas essenciais de segurança.",
      },

      "introduction-modern-ai": {
        title: "Introdução à Inteligência Artificial Moderna",

        description:
          "Fundamentos de Inteligência Artificial, conceitos de machine learning e aplicações práticas de ferramentas modernas de IA.",
      },

      "power-bi-bradesco": {
        title: "Introdução à Análise de Dados com Power BI",

        description:
          "Fundamentos do Power BI, transformação de dados, modelagem, visualização e desenvolvimento de dashboards.",
      },
    },

    badges: {
      "cybersecurity-badge": {
        title: "Introdução à Cibersegurança",
      },

      "modern-ai-badge": {
        title: "Introdução à Inteligência Artificial Moderna",
      },
    },
  },

  "zh-CN": {
    interface: {
      completed: "已完成",
      viewCertificate: "查看证书",
      openCertificate: "打开证书",
      certificate: "证书",
      closeCertificate: "关闭证书",
    },

    certifications: {
      "introduction-cybersecurity": {
        title: "网络安全入门",

        description: "网络安全基础、数字威胁、数据保护以及基本安全实践。",
      },

      "introduction-modern-ai": {
        title: "现代人工智能入门",

        description:
          "人工智能基础、机器学习概念以及现代人工智能工具的实际应用。",
      },

      "power-bi-bradesco": {
        title: "使用 Power BI 进行数据分析入门",

        description:
          "Power BI 基础、数据转换、数据建模、数据可视化和仪表板开发。",
      },
    },

    badges: {
      "cybersecurity-badge": {
        title: "网络安全入门",
      },

      "modern-ai-badge": {
        title: "现代人工智能入门",
      },
    },
  },
};

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const certificationsGrid = document.querySelector("#certificationsGrid");

const badgesGrid = document.querySelector("#badgesGrid");

/* ==========================================================
   LANGUAGE HELPERS
========================================================== */

function normalizeCertificationLanguage(language) {
  if (!language || typeof language !== "string") {
    return "en";
  }

  const normalizedLanguage = language.toLowerCase();

  if (normalizedLanguage.startsWith("pt")) {
    return "pt-BR";
  }

  if (normalizedLanguage.startsWith("zh")) {
    return "zh-CN";
  }

  return "en";
}

function getCurrentCertificationLanguage() {
  const documentLanguage = document.documentElement.lang;

  if (documentLanguage) {
    return normalizeCertificationLanguage(documentLanguage);
  }

  const savedLanguage =
    localStorage.getItem("portfolio-language") ||
    localStorage.getItem("language");

  if (savedLanguage) {
    return normalizeCertificationLanguage(savedLanguage);
  }

  return normalizeCertificationLanguage(navigator.language);
}

function getCertificationDictionary() {
  const currentLanguage = getCurrentCertificationLanguage();

  return (
    certificationTranslations[currentLanguage] || certificationTranslations.en
  );
}

function getLocalizedCertification(certification) {
  const dictionary = getCertificationDictionary();

  const translation = dictionary.certifications[certification.id];

  return {
    ...certification,

    title: translation?.title || certification.id,

    description: translation?.description || "",
  };
}

function getLocalizedBadge(badge) {
  const dictionary = getCertificationDictionary();

  const translation = dictionary.badges[badge.id];

  return {
    ...badge,

    title: translation?.title || badge.id,
  };
}

function getCertificationInterfaceText(key) {
  const dictionary = getCertificationDictionary();

  return dictionary.interface[key] || key;
}

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

function createCertificationCard(originalCertification) {
  const certification = getLocalizedCertification(originalCertification);

  const provider = escapeCertificationHtml(certification.provider);

  const title = escapeCertificationHtml(certification.title);

  const description = escapeCertificationHtml(certification.description);

  const image = escapeCertificationHtml(certification.image);

  const year = escapeCertificationHtml(certification.year);

  const status = escapeCertificationHtml(
    getCertificationInterfaceText("completed"),
  );

  const viewCertificate = escapeCertificationHtml(
    getCertificationInterfaceText("viewCertificate"),
  );

  const openCertificate = escapeCertificationHtml(
    getCertificationInterfaceText("openCertificate"),
  );

  return `
    <article class="certification-card">

      <button
        class="certification-image-button"
        type="button"
        data-certificate-image="${image}"
        data-certificate-title="${title}"
        aria-label="${openCertificate}: ${title}"
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
              ${viewCertificate}
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

function createBadgeCard(originalBadge) {
  const badge = getLocalizedBadge(originalBadge);

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
          ${escapeCertificationHtml(
            getCertificationInterfaceText("certificate"),
          )}
        </h3>

        <button
          class="certificate-modal-close"
          id="certificateModalClose"
          type="button"
          aria-label="${escapeCertificationHtml(
            getCertificationInterfaceText("closeCertificate"),
          )}"
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
   UPDATE CERTIFICATE MODAL LANGUAGE
========================================================== */

function updateCertificateModalLanguage() {
  const modalTitle = document.querySelector("#certificateModalTitle");

  const modalCloseButton = document.querySelector("#certificateModalClose");

  if (modalTitle) {
    modalTitle.textContent = getCertificationInterfaceText("certificate");
  }

  if (modalCloseButton) {
    modalCloseButton.setAttribute(
      "aria-label",
      getCertificationInterfaceText("closeCertificate"),
    );
  }
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
   CONFIGURE CERTIFICATION CARD EVENTS
========================================================== */

function configureCertificationCardEvents() {
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
}

/* ==========================================================
   CONFIGURE CERTIFICATE MODAL EVENTS
========================================================== */

function configureCertificateModalEvents() {
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
   RENDER ALL CERTIFICATION CONTENT
========================================================== */

function renderCertificationContent() {
  renderCertifications();

  renderTechnicalBadges();

  configureCertificationCardEvents();

  configureImageFallbacks();

  updateCertificateModalLanguage();
}

/* ==========================================================
   UPDATE AFTER LANGUAGE CHANGE
========================================================== */

document.addEventListener("languageChanged", () => {
  closeCertificateModal();

  renderCertificationContent();
});

/* ==========================================================
   INITIALIZATION
========================================================== */

function initializeCertifications() {
  createCertificateModal();

  configureCertificateModalEvents();

  renderCertificationContent();
}

initializeCertifications();
