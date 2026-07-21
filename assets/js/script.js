// =============================
// Featured Projects
// =============================

const projectsContainer = document.getElementById("featured-projects");

if (projectsContainer && typeof projects !== "undefined") {
  const featuredProjects = projects.filter((project) => project.featured);

  featuredProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const technologiesHTML = project.technologies
      .map((technology) => `<span class="project-tag">${technology}</span>`)
      .join("");

    card.innerHTML = `
      <img
        class="project-image"
        src="${project.image}"
        alt="${project.title}"
      >

      <div class="project-content">
        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <div class="project-technologies">
          ${technologiesHTML}
        </div>

        <div class="project-links">
          <a
            class="project-button"
            href="${project.github}"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>

          ${
            project.substack
              ? `
              <a
                class="project-button project-button-substack"
                href="${project.substack}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Case Study →
              </a>
              `
              : ""
          }
        </div>
      </div>
    `;

    projectsContainer.appendChild(card);
  });
}
