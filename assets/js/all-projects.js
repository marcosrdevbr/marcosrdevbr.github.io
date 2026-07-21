// =============================
// All Projects Page
// =============================

const allProjectsContainer = document.getElementById("all-projects");
const filterButtons = document.querySelectorAll(".filter-button");

function createProjectCard(project) {
  const technologiesHTML = project.technologies
    .map((technology) => `<span class="project-tag">${technology}</span>`)
    .join("");

  const projectPageUrl = `project.html?id=${project.id}`;

  const card = document.createElement("article");
  card.className = "project-card";
  card.tabIndex = 0;
  card.setAttribute("role", "link");
  card.setAttribute("aria-label", `Open ${project.title}`);

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

  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      return;
    }

    window.location.href = projectPageUrl;
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = projectPageUrl;
    }
  });

  return card;
}

function renderProjects(filter = "all") {
  if (!allProjectsContainer || typeof projects === "undefined") {
    return;
  }

  allProjectsContainer.innerHTML = "";

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  filteredProjects.forEach((project) => {
    const card = createProjectCard(project);
    allProjectsContainer.appendChild(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const selectedFilter = button.dataset.filter;
    renderProjects(selectedFilter);
  });
});

renderProjects();
