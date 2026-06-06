const themeConfig = {
  "medical-red": {
    "--theme-primary": "#dc2626",
    "--theme-primary-dark": "#7f1d1d",
    "--theme-secondary": "#991b1b",
    "--theme-accent": "#f59e0b",
    "--theme-bg": "#1a0608",
    "--theme-bg-2": "#3a0a10",
    "--theme-surface": "#fff8f6",
    "--theme-badge": "#fee2e2",
    "--theme-radius": "22px",
    "--theme-shadow": "0 24px 60px rgba(30, 5, 8, 0.34)",
    "--hero-gradient": "#25070b"
  }
};

const activeTheme = document.body?.dataset.theme;
if (activeTheme && themeConfig[activeTheme]) {
  Object.entries(themeConfig[activeTheme]).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^='#']");
  if (!link) return;

  const target = document.querySelector(link.getAttribute("href"));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

const revealItems = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const backToTop = document.createElement("button");
backToTop.className = "back-to-top";
backToTop.type = "button";
backToTop.setAttribute("aria-label", "Lên đầu trang");
backToTop.textContent = "↑";
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 520);
});

const sectionLinks = Array.from(document.querySelectorAll(".nav-link[data-section]"));
const sections = sectionLinks
  .map((link) => document.getElementById(link.dataset.section))
  .filter(Boolean);

if (sections.length && "IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      sectionLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.section === visible.target.id);
      });
    },
    { rootMargin: "-28% 0px -56% 0px", threshold: [0.1, 0.25, 0.5] }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
