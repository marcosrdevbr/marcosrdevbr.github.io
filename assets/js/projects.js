"use strict";

/* ==========================================================
   PROJECTS DATA
========================================================== */

const allPortfolioProjects = [
  {
    id: "bitcoin-cryptocurrency-dashboard",

    title: "Bitcoin & Cryptocurrency Dashboard",

    category: "Power BI",

    filter: ["power-bi"],

    year: "2026",

    description:
      "Interactive Power BI dashboard for analyzing cryptocurrency prices, market capitalization, trading volume and historical market trends.",

    image: "assets/images/projects/bitcoin-cryptocurrency-dashboard.png",

    technologies: ["Power BI", "DAX", "Power Query"],

    github: "https://github.com/marcosrdevbr/Bitcoin-Cryptocurrency-Dashboard",

    demo: "",
  },

  {
    id: "crm-analytics-dashboard",

    title: "CRM Analytics Dashboard",

    category: "Power BI",

    filter: ["power-bi"],

    year: "2026",

    description:
      "Interactive CRM dashboard for monitoring sales opportunities, pipeline value, conversion rates, revenue and commercial performance.",

    image: "assets/images/projects/crm-analytics-dashboard.png",

    technologies: ["Power BI", "DAX", "Sales Analytics"],

    github: "https://github.com/marcosrdevbr/CRM-Analytics-Dashboard",

    demo: "",
  },

  {
    id: "financial-performance-dashboard",

    title: "Financial Performance Dashboard",

    category: "Power BI",

    filter: ["power-bi"],

    year: "2026",

    description:
      "Financial analysis dashboard focused on revenue, profit, costs, margins, product performance and strategic business indicators.",

    image: "assets/images/projects/financial-performance-dashboard.png",

    technologies: ["Power BI", "DAX", "Financial Analytics"],

    github: "https://github.com/marcosrdevbr/Financial-Performance-Dashboard",

    demo: "",
  },

  {
    id: "customer-analytics-dashboard",

    title: "Customer Analytics Dashboard",

    category: "Power BI",

    filter: ["power-bi"],

    year: "2026",

    description:
      "Customer intelligence dashboard analyzing revenue, profitability, purchasing behavior, regional performance and customer segments.",

    image: "assets/images/projects/customer-analytics-dashboard.png",

    technologies: ["Power BI", "DAX", "Customer Analytics"],

    github: "https://github.com/marcosrdevbr/Customer-Analytics-Dashboard",

    demo: "",
  },

  {
    id: "smarttech-business-intelligence-dashboard",

    title: "SmartTech Business Intelligence Dashboard",

    category: "Power BI",

    filter: ["power-bi"],

    year: "2026",

    description:
      "Business Intelligence solution developed to monitor sales, revenue, product performance, customer behavior and strategic KPIs.",

    image:
      "assets/images/projects/smarttech-business-intelligence-dashboard.png",

    technologies: ["Power BI", "DAX", "Business Intelligence"],

    github:
      "https://github.com/marcosrdevbr/SmartTech-Business-Intelligence-Dashboard",

    demo: "",
  },

  {
    id: "retail-inventory-analysis-dashboard",

    title: "Retail Inventory Analysis Dashboard",

    category: "Power BI & SQL",

    filter: ["power-bi", "sql"],

    year: "2026",

    description:
      "Inventory analysis solution combining Power BI and SQL to monitor stock levels, inventory value, turnover and replenishment indicators.",

    image: "assets/images/projects/retail-inventory-analysis-dashboard.png",

    technologies: ["Power BI", "SQL", "Inventory Analytics"],

    github:
      "https://github.com/marcosrdevbr/Retail-Inventory-Analysis-Dashboard",

    demo: "",
  },

  {
    id: "trade-marketing-intelligence-dashboard",

    title: "Trade Marketing Intelligence Dashboard",

    category: "Power BI",

    filter: ["power-bi"],

    year: "2026",

    description:
      "Trade Marketing dashboard designed to monitor retail execution, revenue, sales volume, targets and commercial performance.",

    image: "assets/images/projects/trade-marketing-intelligence-dashboard.png",

    technologies: ["Power BI", "DAX", "Trade Marketing"],

    github:
      "https://github.com/marcosrdevbr/Trade-Marketing-Intelligence-Dashboard",

    demo: "",
  },

  {
    id: "sales-performance-dashboard",

    title: "Sales Performance Dashboard",

    category: "Power BI",

    filter: ["power-bi"],

    year: "2026",

    description:
      "Interactive sales dashboard created to monitor revenue, products, customer performance, sales trends and business results.",

    image: "assets/images/projects/sales-performance-dashboard.png",

    technologies: ["Power BI", "DAX", "Sales Analytics"],

    github: "https://github.com/marcosrdevbr/Sales-Performance-Dashboard",

    demo: "",
  },

  {
    id: "sales-performance-analysis-with-sql",

    title: "Sales Performance Analysis with SQL",

    category: "SQL",

    filter: ["sql"],

    year: "2026",

    description:
      "SQL analysis project developed to answer business questions through aggregations, filtering, grouping and relational data queries.",

    image: "assets/images/projects/sales-performance-analysis-sql.png",

    technologies: ["SQL", "SQLite", "Business Analysis"],

    github:
      "https://github.com/marcosrdevbr/Sales-Performance-Analysis-with-SQL",

    demo: "",
  },

  {
    id: "marketing-analytics-dashboard",

    title: "Marketing Analytics Dashboard",

    category: "Tableau",

    filter: ["tableau"],

    year: "2026",

    description:
      "Marketing dashboard built in Tableau to analyze campaign performance, conversions, return on investment and strategic marketing KPIs.",

    image: "assets/images/projects/marketing-analytics-dashboard.png",

    technologies: ["Tableau", "Marketing Analytics", "Data Visualization"],

    github: "https://github.com/marcosrdevbr/Marketing-Analytics-Dashboard",

    demo: "",
  },

  {
    id: "trade-marketing-execution-dashboard",

    title: "Trade Marketing Execution Dashboard",

    category: "Tableau",

    filter: ["tableau"],

    year: "2026",

    description:
      "Retail execution dashboard focused on product availability, store audits, merchandising indicators and point-of-sale performance.",

    image: "assets/images/projects/trade-marketing-execution-dashboard.png",

    technologies: ["Tableau", "Trade Marketing", "Retail Analytics"],

    github:
      "https://github.com/marcosrdevbr/Trade-Marketing-Execution-Dashboard",

    demo: "",
  },

  {
    id: "coffee-shop-sales-performance-dashboard",

    title: "Coffee Shop Sales Performance Dashboard",

    category: "Tableau",

    filter: ["tableau"],

    year: "2026",

    description:
      "Tableau dashboard developed to analyze coffee shop revenue, transaction volume, product categories and sales performance over time.",

    image: "assets/images/projects/coffee-shop-sales-performance-dashboard.png",

    technologies: ["Tableau", "Sales Analytics", "Data Visualization"],

    github:
      "https://github.com/marcosrdevbr/Coffee-Shop-Sales-Performance-Dashboard",

    demo: "",
  },

  {
    id: "personal-portfolio-website",

    title: "Professional Portfolio Website",

    category: "Web Portfolio",

    filter: ["portfolio"],

    year: "2026",

    description:
      "Responsive professional portfolio developed with HTML, CSS and JavaScript to present projects, certifications and analytical skills.",

    image: "assets/images/projects/professional-portfolio-website.png",

    technologies: ["HTML", "CSS", "JavaScript"],

    github: "https://github.com/marcosrdevbr/marcosrdevbr.github.io",

    demo: "https://marcosrdevbr.github.io",
  },
  {
    id: "smarttech-sales-insights",

    title: "SmartTech Sales Insights",

    category: "Tableau",

    filter: ["tableau"],

    year: "2026",

    description:
      "Interactive Tableau dashboard developed to analyze sales performance, revenue trends, customer behavior and business KPIs through clear and actionable visualizations.",

    image: "assets/images/projects/smarttech-sales-insights.png",

    technologies: ["Tableau", "Sales Analytics", "Data Visualization"],

    github: "https://github.com/marcosrdevbr/SmartTech-Sales-Insights",

    demo: "",
  },
];

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const allProjectsGrid = document.querySelector("#allProjectsGrid");

const projectFilterButtons = document.querySelectorAll(
  ".project-filter-button",
);

const projectsResultText = document.querySelector("#projectsResultText");

const projectsTotal = document.querySelector("#projectsTotal");

const projectsEmptyState = document.querySelector("#projectsEmptyState");

const clearProjectFilterButton = document.querySelector("#clearProjectFilter");

/* ==========================================================
   ESCAPE HTML
========================================================== */

function escapeProjectHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* ==========================================================
   TECHNOLOGY TAGS
========================================================== */

function createProjectTechnologyTags(technologies) {
  if (!Array.isArray(technologies)) {
    return "";
  }

  return technologies
    .map(
      (technology) => `
        <span>
          ${escapeProjectHtml(technology)}
        </span>
      `,
    )
    .join("");
}

/* ==========================================================
   OPTIONAL DEMO LINK
========================================================== */

function createProjectDemoLink(project) {
  if (!project.demo) {
    return "";
  }

  return `
    <a
      href="${escapeProjectHtml(project.demo)}"
      class="all-project-demo-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo
      <span>↗</span>
    </a>
  `;
}

/* ==========================================================
   CREATE PROJECT CARD
========================================================== */

function createAllProjectCard(project) {
  return `
    <article
      class="all-project-card"
      data-category="${escapeProjectHtml(project.filter.join(" "))}"
    >

      <a
        href="${escapeProjectHtml(project.github)}"
        class="all-project-image-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View ${escapeProjectHtml(project.title)}"
      >

        <div class="all-project-image-wrapper">

          <img
            src="${escapeProjectHtml(project.image)}"
            alt="${escapeProjectHtml(project.title)}"
            class="all-project-image"
            loading="lazy"
          >

          <div class="all-project-image-overlay">

            <span>
              Explore Project
            </span>

            <span class="all-project-overlay-icon">
              ↗
            </span>

          </div>

        </div>

      </a>


      <div class="all-project-content">

        <div class="all-project-meta">

          <span class="all-project-category">
            ${escapeProjectHtml(project.category)}
          </span>

          <span class="all-project-year">
            ${escapeProjectHtml(project.year)}
          </span>

        </div>


        <h2 class="all-project-title">
          ${escapeProjectHtml(project.title)}
        </h2>


        <p class="all-project-description">
          ${escapeProjectHtml(project.description)}
        </p>


        <div class="all-project-technologies">

          ${createProjectTechnologyTags(project.technologies)}

        </div>


        <div class="all-project-links">

          <a
            href="${escapeProjectHtml(project.github)}"
            class="all-project-github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
            <span>↗</span>
          </a>

          ${createProjectDemoLink(project)}

        </div>

      </div>

    </article>
  `;
}

/* ==========================================================
   UPDATE RESULT TEXT
========================================================== */

function updateProjectsResultText(projectCount, filter) {
  if (!projectsResultText) {
    return;
  }

  const projectWord = projectCount === 1 ? "project" : "projects";

  if (filter === "all") {
    projectsResultText.textContent = `Showing all ${projectCount} ${projectWord}`;

    return;
  }

  const activeButton = document.querySelector(
    `.project-filter-button[data-filter="${filter}"]`,
  );

  const filterName = activeButton ? activeButton.textContent.trim() : filter;

  projectsResultText.textContent = `Showing ${projectCount} ${filterName} ${projectWord}`;
}

/* ==========================================================
   RENDER PROJECTS
========================================================== */

function renderPortfolioProjects(filter = "all") {
  if (!allProjectsGrid) {
    return;
  }

  const filteredProjects =
    filter === "all"
      ? allPortfolioProjects
      : allPortfolioProjects.filter((project) =>
          project.filter.includes(filter),
        );

  allProjectsGrid.innerHTML = filteredProjects
    .map(createAllProjectCard)
    .join("");

  updateProjectsResultText(filteredProjects.length, filter);

  if (projectsEmptyState) {
    projectsEmptyState.hidden = filteredProjects.length !== 0;
  }

  addProjectCardAnimations();
}

/* ==========================================================
   FILTER BUTTON STATE
========================================================== */

function setActiveProjectFilter(selectedButton) {
  projectFilterButtons.forEach((button) => {
    const buttonIsActive = button === selectedButton;

    button.classList.toggle("active", buttonIsActive);

    button.setAttribute("aria-pressed", String(buttonIsActive));
  });
}

/* ==========================================================
   FILTER EVENTS
========================================================== */

projectFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter || "all";

    setActiveProjectFilter(button);

    renderPortfolioProjects(selectedFilter);
  });
});

/* ==========================================================
   CLEAR FILTER
========================================================== */

if (clearProjectFilterButton) {
  clearProjectFilterButton.addEventListener("click", () => {
    const allProjectsButton = document.querySelector(
      '.project-filter-button[data-filter="all"]',
    );

    if (allProjectsButton) {
      setActiveProjectFilter(allProjectsButton);
    }

    renderPortfolioProjects("all");
  });
}

/* ==========================================================
   PROJECT CARD ANIMATIONS
========================================================== */

function addProjectCardAnimations() {
  const cards = document.querySelectorAll(".all-project-card");

  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => {
      card.classList.add("visible");
    });

    return;
  }

  const cardObserver = new IntersectionObserver(
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
      threshold: 0.1,
    },
  );

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${Math.min(index % 3, 2) * 90}ms`;

    cardObserver.observe(card);
  });
}

/* ==========================================================
   INITIALIZATION
========================================================== */

/* ==========================================================
   FEATURED PROJECTS — HOME PAGE
========================================================== */

const featuredProjectsGrid = document.querySelector("#projectsGrid");

function createFeaturedProjectCard(project) {
  const technologies = Array.isArray(project.technologies)
    ? project.technologies
        .map(
          (technology) => `
            <span>
              ${escapeProjectHtml(technology)}
            </span>
          `,
        )
        .join("")
    : "";

  return `
    <article class="project-card">

      <a
        href="${escapeProjectHtml(project.github)}"
        class="project-image-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View ${escapeProjectHtml(project.title)}"
      >

        <div class="project-image-wrapper">

          <img
            src="${escapeProjectHtml(project.image)}"
            alt="${escapeProjectHtml(project.title)}"
            class="project-image"
            loading="lazy"
          >

          <div class="project-image-overlay">

            <span>
              View Project
            </span>

            <span class="project-overlay-icon">
              ↗
            </span>

          </div>

        </div>

      </a>


      <div class="project-content">

        <div class="project-meta">

          <span class="project-category">
            ${escapeProjectHtml(project.category)}
          </span>

          <span class="project-year">
            ${escapeProjectHtml(project.year)}
          </span>

        </div>


        <h3 class="project-title">
          ${escapeProjectHtml(project.title)}
        </h3>


        <p class="project-description">
          ${escapeProjectHtml(project.description)}
        </p>


        <div class="project-tags">
          ${technologies}
        </div>


        <div class="project-links">

          <a
            href="${escapeProjectHtml(project.github)}"
            class="project-main-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <span>→</span>
          </a>

          <a
            href="${escapeProjectHtml(project.github)}"
            class="project-github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span>↗</span>
          </a>

        </div>

      </div>

    </article>
  `;
}

/* ==========================================================
   RENDER FEATURED PROJECTS
========================================================== */

function renderFeaturedProjects() {
  if (!featuredProjectsGrid) {
    return;
  }

  const featuredProjects = allPortfolioProjects.slice(0, 6);

  featuredProjectsGrid.innerHTML = featuredProjects
    .map(createFeaturedProjectCard)
    .join("");
}

/* ==========================================================
   INITIALIZE PROJECTS PAGE
========================================================== */

function initializeProjectsPage() {
  if (!allProjectsGrid) {
    return;
  }

  if (projectsTotal) {
    projectsTotal.textContent = allPortfolioProjects.length;
  }

  renderPortfolioProjects("all");
}

/* ==========================================================
   INITIALIZATION
========================================================== */

renderFeaturedProjects();
initializeProjectsPage();
