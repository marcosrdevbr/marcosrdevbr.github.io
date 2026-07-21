// =============================
// Individual Project Page
// =============================

const projectDetailContainer = document.getElementById("project-detail");

const urlParameters = new URLSearchParams(window.location.search);
const projectId = urlParameters.get("id");

const selectedProject =
  typeof projects !== "undefined"
    ? projects.find((project) => project.id === projectId)
    : null;

// =============================
// Project Not Found
// =============================

if (!projectDetailContainer) {
  console.error("Project detail container was not found.");
} else if (!selectedProject) {
  projectDetailContainer.innerHTML = `
    <div class="project-not-found">
      <span class="hero-tag">Project unavailable</span>

      <h1>Project not found</h1>

      <p>
        The requested project could not be located. Return to the projects
        page and select another project.
      </p>

      <a class="project-button" href="projects.html">
        Back to Projects →
      </a>
    </div>
  `;
} else {
  // =============================
  // Technologies
  // =============================

  const technologiesHTML = selectedProject.technologies
    .map((technology) => `<span class="project-tag">${technology}</span>`)
    .join("");

  // =============================
  // Optional Case Study
  // =============================

  const hasCaseStudy = Boolean(selectedProject.substack);

  const caseStudyButton = hasCaseStudy
    ? `
      <a
        class="project-button project-button-substack"
        href="${selectedProject.substack}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Case Study →
      </a>
    `
    : "";

  const caseStudyInformation = hasCaseStudy
    ? `
      <a
        class="project-information-link"
        href="${selectedProject.substack}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Available →
      </a>
    `
    : `<strong>Coming Soon</strong>`;

  // =============================
  // Page Metadata
  // =============================

  document.title = `${selectedProject.title} | Marcos Rogério`;

  // =============================
  // Project Content
  // =============================

  projectDetailContainer.innerHTML = `
    <a class="back-link" href="projects.html">
      ← Back to All Projects
    </a>

    <header class="project-detail-header">
      <div class="project-detail-heading">
        <span class="hero-tag">${selectedProject.category}</span>

        <h1>${selectedProject.title}</h1>

        <p>${selectedProject.description}</p>

        <div class="project-detail-actions">
          <a
            class="project-button"
            href="${selectedProject.github}"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>

          ${caseStudyButton}
        </div>
      </div>
    </header>

    <section class="project-detail-showcase">
      <img
        class="project-detail-image"
        src="${selectedProject.image}"
        alt="${selectedProject.title}"
      >
    </section>

    <div class="project-detail-layout">
      <div class="project-detail-main">

        <section class="project-detail-section">
          <span class="project-section-label">About the project</span>

          <h2>Project Overview</h2>

          <p>
            This project was developed to transform business data into clear
            and actionable insights through data modeling, KPI analysis and
            interactive data visualizations.
          </p>

          <p>
            The dashboard organizes relevant performance indicators into a
            structured analytical experience, supporting business monitoring,
            performance evaluation and data-driven decision-making.
          </p>
        </section>

        <section class="project-detail-section">
          <span class="project-section-label">Business value</span>

          <h2>Project Objectives</h2>

          <ul class="project-objectives">
            <li>Consolidate relevant business performance indicators.</li>

            <li>
              Transform raw data into clear and understandable visual
              information.
            </li>

            <li>
              Identify trends, patterns and business opportunities.
            </li>

            <li>
              Support strategic decisions through interactive analysis.
            </li>
          </ul>
        </section>

        <section class="project-detail-section">
          <span class="project-section-label">Technical stack</span>

          <h2>Technologies</h2>

          <div class="project-technologies project-detail-technologies">
            ${technologiesHTML}
          </div>
        </section>
      </div>

      <aside class="project-information-card">
        <span class="project-section-label">Project details</span>

        <h2>Information</h2>

        <div class="project-information-list">
          <div class="project-information-item">
            <span>Category</span>
            <strong>${selectedProject.category}</strong>
          </div>

          <div class="project-information-item">
            <span>Year</span>
            <strong>${selectedProject.year}</strong>
          </div>

          <div class="project-information-item">
            <span>Status</span>
            <strong>Completed</strong>
          </div>

          <div class="project-information-item">
            <span>Type</span>
            <strong>Portfolio Project</strong>
          </div>

          <div class="project-information-item">
            <span>Repository</span>

            <a
              class="project-information-link"
              href="${selectedProject.github}"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div class="project-information-item">
            <span>Case Study</span>
            ${caseStudyInformation}
          </div>
        </div>

        <div class="project-sidebar-technologies">
          <span>Tools and Technologies</span>

          <div class="project-technologies">
            ${technologiesHTML}
          </div>
        </div>

        <div class="project-sidebar-actions">
          <a
            class="project-button"
            href="${selectedProject.github}"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository →
          </a>

          ${caseStudyButton}
        </div>
      </aside>
    </div>

    <section class="project-next-step">
      <div class="project-next-step-content">
        <span class="project-section-label">Continue exploring</span>

        <h2>Enjoyed this project?</h2>

        <p>
          Explore my complete portfolio of Business Intelligence, Power BI,
          Tableau and SQL projects.
        </p>
      </div>

      <a class="btn-primary" href="projects.html">
        View All Projects →
      </a>
    </section>
  `;
}
