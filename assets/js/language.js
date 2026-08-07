/* ==========================================================
   LANGUAGE MANAGER
========================================================== */

"use strict";

const DEFAULT_LANGUAGE = "en";

const SUPPORTED_LANGUAGES = ["en", "pt-BR", "zh-CN"];

const LANGUAGE_STORAGE_KEY = "language";

/* ==========================================================
   NORMALIZE LANGUAGE
========================================================== */

function normalizeLanguage(language) {
  if (!language || typeof language !== "string") {
    return DEFAULT_LANGUAGE;
  }

  const normalizedLanguage = language.trim().toLowerCase();

  if (normalizedLanguage.startsWith("pt")) {
    return "pt-BR";
  }

  if (normalizedLanguage.startsWith("zh")) {
    return "zh-CN";
  }

  return "en";
}

/* ==========================================================
   INITIAL LANGUAGE
========================================================== */

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage;
  }

  return normalizeLanguage(navigator.language || DEFAULT_LANGUAGE);
}

let currentLanguage = getInitialLanguage();

/* ==========================================================
   GET TRANSLATION
========================================================== */

function getTranslation(path) {
  const dictionary =
    window.translations?.[currentLanguage] ||
    window.translations?.[DEFAULT_LANGUAGE];

  if (!dictionary || !path) {
    return null;
  }

  const keys = path.split(".");

  let value = dictionary;

  for (const key of keys) {
    if (
      value === null ||
      value === undefined ||
      !Object.prototype.hasOwnProperty.call(value, key)
    ) {
      return null;
    }

    value = value[key];
  }

  return value;
}

/* ==========================================================
   TRANSLATE TEXT CONTENT
========================================================== */

function translateTextContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translationKey = element.dataset.i18n;

    const translatedText = getTranslation(translationKey);

    if (translatedText !== null) {
      element.textContent = translatedText;
    }
  });
}

/* ==========================================================
   TRANSLATE HTML CONTENT
========================================================== */

function translateHtmlContent() {
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const translationKey = element.dataset.i18nHtml;

    const translatedHtml = getTranslation(translationKey);

    if (translatedHtml !== null) {
      element.innerHTML = translatedHtml;
    }
  });
}

/* ==========================================================
   TRANSLATE ARIA LABELS
========================================================== */

function translateAriaLabels() {
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const translationKey = element.dataset.i18nAriaLabel;

    const translatedText = getTranslation(translationKey);

    if (translatedText !== null) {
      element.setAttribute("aria-label", translatedText);
    }
  });
}

/* ==========================================================
   TRANSLATE TITLES
========================================================== */

function translateTitles() {
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const translationKey = element.dataset.i18nTitle;

    const translatedText = getTranslation(translationKey);

    if (translatedText !== null) {
      element.setAttribute("title", translatedText);
    }
  });
}

/* ==========================================================
   TRANSLATE PLACEHOLDERS
========================================================== */

function translatePlaceholders() {
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const translationKey = element.dataset.i18nPlaceholder;

    const translatedText = getTranslation(translationKey);

    if (translatedText !== null) {
      element.setAttribute("placeholder", translatedText);
    }
  });
}

/* ==========================================================
   UPDATE METADATA
========================================================== */

function updateMetadata() {
  const currentPage = document.documentElement.dataset.page || "home";

  const pageTitle =
    getTranslation(`meta.pages.${currentPage}.title`) ||
    getTranslation("meta.pageTitle");

  const pageDescription =
    getTranslation(`meta.pages.${currentPage}.description`) ||
    getTranslation("meta.description");

  if (pageTitle) {
    document.title = pageTitle;

    const openGraphTitle = document.querySelector('meta[property="og:title"]');

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');

    if (openGraphTitle) {
      openGraphTitle.setAttribute("content", pageTitle);
    }

    if (twitterTitle) {
      twitterTitle.setAttribute("content", pageTitle);
    }
  }

  if (pageDescription) {
    const descriptionMeta = document.querySelector('meta[name="description"]');

    const openGraphDescription = document.querySelector(
      'meta[property="og:description"]',
    );

    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );

    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", pageDescription);
    }

    if (openGraphDescription) {
      openGraphDescription.setAttribute("content", pageDescription);
    }

    if (twitterDescription) {
      twitterDescription.setAttribute("content", pageDescription);
    }
  }
}

/* ==========================================================
   UPDATE LANGUAGE SELECTOR
========================================================== */

function updateLanguageSelector() {
  const currentLanguageElement = document.querySelector(
    "[data-current-language]",
  );

  if (currentLanguageElement) {
    const languageLabels = {
      en: "EN",
      "pt-BR": "PT",
      "zh-CN": "中文",
    };

    currentLanguageElement.textContent =
      languageLabels[currentLanguage] || "EN";
  }

  document.querySelectorAll(".language-option").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;

    button.classList.toggle("active", isActive);

    button.setAttribute("aria-pressed", String(isActive));
  });
}

/* ==========================================================
   TRANSLATE PAGE
========================================================== */

function translatePage() {
  document.documentElement.lang = currentLanguage;

  translateTextContent();
  translateHtmlContent();
  translateAriaLabels();
  translateTitles();
  translatePlaceholders();
  updateMetadata();
  updateLanguageSelector();

  /*
   * O evento deve ser disparado somente depois
   * que o idioma e os textos fixos forem atualizados.
   */
  document.dispatchEvent(
    new CustomEvent("languageChanged", {
      detail: {
        language: currentLanguage,
        dictionary: window.translations?.[currentLanguage] || null,
      },
    }),
  );
}

/* ==========================================================
   CHANGE LANGUAGE
========================================================== */

function changeLanguage(language) {
  const normalizedLanguage = normalizeLanguage(language);

  currentLanguage = SUPPORTED_LANGUAGES.includes(normalizedLanguage)
    ? normalizedLanguage
    : DEFAULT_LANGUAGE;

  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);

  translatePage();
}

/* ==========================================================
   LANGUAGE BUTTON EVENTS
========================================================== */

document.querySelectorAll(".language-option").forEach((button) => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.language);
  });
});

/* ==========================================================
   INITIALIZATION
========================================================== */

translatePage();

/* ==========================================================
   PUBLIC API
========================================================== */

window.portfolioLanguage = {
  changeLanguage,

  getCurrentLanguage() {
    return currentLanguage;
  },

  getSupportedLanguages() {
    return [...SUPPORTED_LANGUAGES];
  },
};
