// ==========================================================================
// 1. DATA STORE (Edit your profile, skills & projects here)
// ==========================================================================
const PORTFOLIO_DATA = {
  profile: {
    name: "Anas Javed",
    email: "anas.javed.dev@example.com",
    github: "https://github.com",
    resumeFilename: "Anas_Javed_Resume.txt",
  },
  skills: [
    {
      number: "01",
      spanClass: "span-6",
      cardClass: "skill-emerald-card",
      badgeClass: "badge-light",
      eyebrow: "INTELLIGENCE & VISION",
      title: "AI, ML & Deep Learning",
      description:
        "Designing computer vision tracking pipelines, neural architectures, and retrieval-augmented generation workflows for real-time inference.",
      chipClass: "skill-chip",
      items: [
        "Python",
        "PyTorch",
        "Scikit-learn",
        "Kaggle",
        "CNN",
        "Transformers",
        "RAG",
        "Ultralytics YOLO11",
        "Computer Vision",
      ],
    },
    {
      number: "02",
      spanClass: "span-6",
      cardClass: "skill-forest-card",
      badgeClass: "badge-forest",
      eyebrow: "WEB ARCHITECTURE",
      title: "Full-Stack Web Development",
      description:
        "Building scalable end-to-end web applications combining responsive frontends, RESTful APIs, and hybrid NoSQL + relational SQL databases.",
      chipClass: "chip-forest",
      highlightChip: "MERN Stack",
      highlightChipClass: "chip-emerald-pop",
      items: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "MERN Stack",
        "SQL",
        "REST APIs",
        "Streamlit",
      ],
    },
    {
      number: "03",
      spanClass: "span-7",
      cardClass: "card-lavender",
      badgeClass: "badge-white",
      eyebrow: "INFRASTRUCTURE & WORKFLOWS",
      title: "DevOps, Tools & Engineering",
      description:
        "Reproducible environments, clean version control workflows, and containerized deployments across local and cloud compute.",
      chipClass: "chip-white",
      items: ["Git", "GitHub", "Docker", "Linux Containers", "System Design"],
    },
  ],
  projects: [
    {
      id: "people-counting",
      title: "People Counting Project",
      category: "ai",
      categoryLabel: "AI & Computer Vision",
      highlightBadge: "YOLO11 + BoT-SORT ReID",
      isFeaturedSurface: true,
      summary:
        "A computer vision web application built with Ultralytics YOLO11, BoT-SORT with Re-Identification (ReID), and Streamlit. Detects and tracks only the person class (class 0) to count both people currently in frame and total unique individuals across video files or a live webcam feed.",
      tags: [
        "Python",
        "Ultralytics YOLO11",
        "BoT-SORT ReID",
        "Streamlit",
        "Computer Vision",
        "PyTorch",
      ],
      highlights: [
        "Strict class filtering (class 0) isolates human detections to eliminate background false positives.",
        "Integrates BoT-SORT with deep Re-Identification embeddings to preserve identity across occlusions.",
        "Dual telemetry counters display live in-frame headcount alongside cumulative unique visitors.",
        "Interactive Streamlit dashboard supporting both uploaded MP4/AVI video streams and live webcam feeds.",
      ],
    },
    {
      id: "audiolink",
      title: "AudioLink",
      category: "systems",
      categoryLabel: "Systems & Audio",
      highlightBadge: "Multi-Device Audio Routing",
      isFeaturedSurface: false,
      summary:
        "A web application that broadcasts a single audio source to multiple Bluetooth output devices simultaneously, enabling synchronized shared listening experiences.",
      tags: [
        "Web Audio API",
        "JavaScript",
        "Node.js",
        "Audio Routing",
        "Bluetooth",
      ],
      highlights: [
        "Captures and multiplexes a unified audio stream across concurrent Bluetooth sinks.",
        "Latency compensation controls to keep wireless playback synchronized across heterogeneous speakers/headsets.",
        "Clean browser-based device discovery and per-channel volume management UI.",
      ],
    },
    {
      id: "mealbridge",
      title: "MealBridge",
      category: "fullstack",
      categoryLabel: "Full-Stack Web",
      highlightBadge: "Social Impact • Full-Stack",
      isFeaturedSurface: false,
      summary:
        "A full-stack web platform connecting NGOs and Restaurants to donate and claim surplus cooked food efficiently, reducing urban food waste.",
      tags: [
        "MERN Stack",
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "REST API",
      ],
      highlights: [
        "Role-based dashboards tailored for Restaurant donors and verified NGO collection teams.",
        "Real-time surplus listing lifecycle: Available → Claimed → Picked Up with expiry windows.",
        "Automated matching notifications and pickup coordination logs.",
      ],
    },
    {
      id: "airbnb",
      title: "Airbnb Clone",
      category: "fullstack",
      categoryLabel: "Full-Stack Web",
      highlightBadge: "Full-Stack Hospitality",
      isFeaturedSurface: false,
      summary:
        "Full-stack property listing, booking, and stay management platform featuring user authentication, dynamic search filters, and relational/document data modeling.",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "Authentication",
      ],
      highlights: [
        "End-to-end host property creation with image galleries, pricing tiers, and availability calendars.",
        "Secure JWT/session authentication protecting booking mutations and user reviews.",
        "Multi-criteria search filtering by location, guest capacity, and price range.",
      ],
    },
    {
      id: "bookstore",
      title: "Bookstore Website",
      category: "fullstack",
      categoryLabel: "Full-Stack Web",
      highlightBadge: "E-Commerce & Catalog",
      isFeaturedSurface: false,
      summary:
        "Online book catalog and e-commerce storefront with instant search, genre categorization, persistent shopping cart management, and SQL/NoSQL backend integration.",
      tags: ["MERN + SQL", "React", "Node.js", "REST APIs", "Cart State"],
      highlights: [
        "Structured relational & document schema for inventory tracking, authors, and order history.",
        "Responsive storefront with instant keyword search, category filters, and dynamic cart totals.",
        "Clean checkout flow with order confirmation summaries.",
      ],
    },
    {
      id: "weather",
      title: "Weather Website",
      category: "fullstack",
      categoryLabel: "Full-Stack Web",
      highlightBadge: "Live Telemetry UI",
      isFeaturedSurface: false,
      summary:
        "Real-time meteorological dashboard featuring global city search, multi-day forecasts, humidity/wind telemetry, and dynamic weather state visualization.",
      tags: ["JavaScript", "Weather REST API", "Responsive UI", "Async/Await"],
      highlights: [
        "Integrates live meteorological endpoints for current conditions and multi-day outlook.",
        "Displays temperature, feels-like index, humidity, wind velocity, and atmospheric visibility.",
        "Adaptive visual indicators that respond dynamically to live weather conditions.",
      ],
    },
  ],
};

// ==========================================================================
// 2. TOAST NOTIFICATIONS
// ==========================================================================
const ToastController = {
  container: document.getElementById("toastContainer"),

  show(message) {
    if (!this.container) return;
    const toast = document.createElement("div");
    toast.className = "toast-item";
    toast.innerHTML = `<span class="dot-emerald"></span><span>${message}</span>`;
    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  },
};

// ==========================================================================
// 3. LIGHT / DARK THEME CONTROLLER
// ==========================================================================
const ThemeController = {
  toggleBtn: document.getElementById("themeToggleBtn"),
  iconEl: document.getElementById("themeIcon"),
  labelEl: document.getElementById("themeLabel"),
  heroPathEl: document.getElementById("heroLShapePath"),

  init() {
    const isDark = document.documentElement.classList.contains("dark");
    this.apply(isDark ? "dark" : "light");

    this.toggleBtn?.addEventListener("click", () => {
      const next = document.documentElement.classList.contains("dark")
        ? "light"
        : "dark";
      localStorage.setItem("portfolio-theme", next);
      this.apply(next);
      ToastController.show(
        next === "dark" ? "Switched to Dark Mode" : "Switched to Light Mode",
      );
    });
  },

  apply(theme) {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    if (this.iconEl) this.iconEl.textContent = isDark ? "☀️" : "🌙";
    if (this.labelEl) this.labelEl.textContent = isDark ? "Light" : "Dark";
    if (this.heroPathEl) {
      this.heroPathEl.setAttribute("fill", isDark ? "#132A24" : "#F6FDF7");
      this.heroPathEl.setAttribute("stroke", isDark ? "#365C50" : "#0B261E");
    }
  },
};

// ==========================================================================
// 4. INTERACTIVE DOT-MATRIX BACKGROUND
// ==========================================================================
const DotMatrixController = {
  init() {
    const canvas = document.getElementById("dot-matrix-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    const spacing = 28;
    const radius = 1.6;
    const mouse = { x: -9999, y: -9999, radius: 115 };
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener("mouseleave", () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.04;

      const isDark = document.documentElement.classList.contains("dark");
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const originX = col * spacing + spacing / 2;
          const originY = row * spacing + spacing / 2;
          const wave = Math.sin((col + row) * 0.32 - time);

          let alpha = isDark
            ? 0.22 + Math.max(0, wave) * 0.45
            : 0.14 + Math.max(0, wave) * 0.22;
          let drawX = originX;
          let drawY = originY;

          const dx = originX - mouse.x;
          const dy = originY - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            drawX += Math.cos(angle) * force * 7;
            drawY += Math.sin(angle) * force * 7;
            alpha = 1;
          }

          ctx.beginPath();
          ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `rgba(91, 227, 112, ${alpha})`
            : `rgba(14, 61, 49, ${alpha})`;
          ctx.fill();
        }
      }
      requestAnimationFrame(render);
    };

    resize();
    render();
  },
};

// ==========================================================================
// 5. UI RENDERER (SKILLS & PROJECTS)
// ==========================================================================
const UIRenderer = {
  projectsGrid: document.getElementById("projectsGrid"),
  skillsGrid: document.getElementById("skillsBentoGrid"),

  renderSkills() {
    if (!this.skillsGrid) return;

    const skillCardsHTML = PORTFOLIO_DATA.skills
      .map(
        (group) => `
      <div class="${group.spanClass} brutal-card skill-card ${group.cardClass}">
        <div>
          <div class="skill-card-top">
            <span class="skill-eyebrow ${group.badgeClass}">${group.eyebrow}</span>
            <span class="skill-num ${group.badgeClass}">${group.number}</span>
          </div>
          <h3 class="skill-title">${group.title}</h3>
          <p class="skill-desc">${group.description}</p>
        </div>
        <div class="skill-chips-wrap">
          ${group.items
            .map((item) => {
              const cls =
                item === group.highlightChip
                  ? group.highlightChipClass
                  : group.chipClass;
              return `<span class="${cls}">${item}</span>`;
            })
            .join("")}
        </div>
      </div>`,
      )
      .join("");

    const academicCardHTML = `
      <div class="span-5 brutal-card skill-card surface-card">
        <div>
          <span class="skill-eyebrow badge-light">ACADEMIC PROFILE</span>
          <h3 class="skill-title" style="margin-top: 0.75rem;">
            BTech Computer Science &amp; Engineering
          </h3>
          <p class="skill-desc">
            Focused on bridging theoretical foundations in algorithms, databases, and neural networks with pragmatic software engineering.
          </p>
        </div>
        <div class="academic-footer">
          <span class="availability-text">● Available for Internships</span>
          <button type="button" data-action="open-resume" class="cv-inline-btn">
            View CV →
          </button>
        </div>
      </div>`;

    this.skillsGrid.innerHTML = skillCardsHTML + academicCardHTML;
  },

  renderProjects(filter = "all") {
    if (!this.projectsGrid) return;
    const filtered =
      filter === "all"
        ? PORTFOLIO_DATA.projects
        : PORTFOLIO_DATA.projects.filter((p) => p.category === filter);

    this.projectsGrid.innerHTML = filtered
      .map((project, idx) => {
        const isFeatured = idx === 0 && filter === "all";
        const surfaceClass = project.isFeaturedSurface
          ? "featured-surface"
          : "surface-card";

        return `
        <article class="brutal-card project-card ${surfaceClass} ${
          isFeatured ? "featured" : ""
        }">
          <div>
            <div class="project-top-meta">
              <span class="project-badge">${project.highlightBadge}</span>
              <span class="project-index">0${PORTFOLIO_DATA.projects.indexOf(project) + 1}</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-summary">${project.summary}</p>
          </div>
          <div>
            <div class="tag-list">
              ${project.tags.map((tag) => `<span class="skill-chip">${tag}</span>`).join("")}
            </div>
            <div class="project-footer">
              <button type="button" data-project-id="${project.id}" class="brutal-btn btn-lavender">
                <span>Inspect Architecture / Demo Details</span>
                <span>→</span>
              </button>
              <a
                href="${PORTFOLIO_DATA.profile.github}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository for ${project.title}"
                class="surface-card project-repo-btn"
              >
                ↗
              </a>
            </div>
          </div>
        </article>`;
      })
      .join("");
  },
};

// ==========================================================================
// 6. MODAL & RESUME CONTROLLER
// ==========================================================================
const ModalController = {
  projectModal: document.getElementById("projectModal"),
  resumeModal: document.getElementById("resumeModal"),

  openProject(id) {
    const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);
    if (!project || !this.projectModal) return;

    document.getElementById("modalBadge").textContent =
      `${project.categoryLabel} • ${project.highlightBadge}`;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalDescription").textContent = project.summary;
    document.getElementById("modalHighlights").innerHTML = project.highlights
      .map(
        (item) =>
          `<li><span class="bullet-accent">▹</span><span>${item}</span></li>`,
      )
      .join("");
    document.getElementById("modalTags").innerHTML = project.tags
      .map((tag) => `<span class="skill-chip">${tag}</span>`)
      .join("");

    this.projectModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  },

  closeProject() {
    this.projectModal?.classList.add("hidden");
    document.body.style.overflow = "";
  },

  openResume() {
    this.resumeModal?.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  },

  closeResume() {
    this.resumeModal?.classList.add("hidden");
    document.body.style.overflow = "";
  },

  downloadResumeTxt() {
    const content = `ANAS JAVED
BTech Computer Science & Engineering (CSE)
Email: ${PORTFOLIO_DATA.profile.email} | GitHub: github.com/anasjaved

SKILLS
${PORTFOLIO_DATA.skills.map((s) => `- ${s.title}: ${s.items.join(", ")}`).join("\n")}

PROJECTS
${PORTFOLIO_DATA.projects.map((p, i) => `${i + 1}. ${p.title}: ${p.summary}`).join("\n")}`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = PORTFOLIO_DATA.profile.resumeFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    ToastController.show(`Downloaded ${PORTFOLIO_DATA.profile.resumeFilename}`);
  },
};

// ==========================================================================
// 7. APP INITIALIZATION & EVENT DELEGATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  ThemeController.init();
  DotMatrixController.init();
  UIRenderer.renderSkills();
  UIRenderer.renderProjects("all");

  // Project Filter Pills
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active-filter"));
      btn.classList.add("active-filter");
      UIRenderer.renderProjects(btn.dataset.filter);
    });
  });

  // Global Click Delegation
  document.addEventListener("click", async (e) => {
    const projectTrigger = e.target.closest("[data-project-id]");
    if (projectTrigger) {
      ModalController.openProject(projectTrigger.dataset.projectId);
      return;
    }

    const actionTrigger = e.target.closest("[data-action]");
    if (actionTrigger) {
      const action = actionTrigger.dataset.action;
      if (action === "open-resume") ModalController.openResume();
      if (action === "close-resume-modal") ModalController.closeResume();
      if (action === "close-project-modal") ModalController.closeProject();
      if (action === "download-resume") ModalController.downloadResumeTxt();
      if (action === "print-resume") window.print();
      if (action === "copy-email") {
        await navigator.clipboard?.writeText(PORTFOLIO_DATA.profile.email);
        ToastController.show(
          `Copied ${PORTFOLIO_DATA.profile.email} to clipboard!`,
        );
      }
    }

    if (e.target === ModalController.projectModal)
      ModalController.closeProject();
    if (e.target === ModalController.resumeModal) ModalController.closeResume();
  });

  // Escape Key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      ModalController.closeProject();
      ModalController.closeResume();
    }
  });

  // Quick Message Form
  document
    .getElementById("quickMessageForm")
    ?.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("quickEmailInput");
      if (!input?.value.trim()) return;
      ToastController.show("Message received! Anas will get back to you soon.");
      input.value = "";
    });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenuBtn?.addEventListener("click", () => {
    const isHidden = mobileMenu?.classList.toggle("hidden");
    mobileMenuBtn.setAttribute("aria-expanded", String(!isHidden));
  });
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu?.classList.add("hidden");
      mobileMenuBtn?.setAttribute("aria-expanded", "false");
    });
  });
});
