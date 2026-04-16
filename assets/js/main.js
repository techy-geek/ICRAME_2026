const ROUTES = {
  home: "pages/home.html",
  about: "pages/about.html",
  committees: "pages/committees.html",
  speakers: "pages/speakers.html",
  "call-for-papers": "pages/call-for-papers.html",
  "important-dates": "pages/important-dates.html",
  "paper-submission": "pages/paper-submission.html",
  registration: "pages/registration.html",
  contact: "pages/contact.html",
};

const HOME_COMPONENTS = [
  "components/home/about-icrame.html",
  "components/home/venue.html",
  "components/home/important-dates.html",
  "components/home/speakers.html",
  "components/home/publications.html",
  "components/home/about-nit.html",
  "components/home/mech-dept.html",
  "components/home/about-silchar.html",
  "components/home/gallery.html",
  "components/home/contact-snippet.html",
];

const appRoot = document.getElementById("app");
const navbarRoot = document.getElementById("navbar-root");
const footerRoot = document.getElementById("footer-root");

let countdownInterval;

async function loadHtml(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }
  return response.text();
}

async function loadGlobalComponents() {
  const [navbarHtml, footerHtml] = await Promise.all([
    loadHtml("components/navbar.html"),
    loadHtml("components/footer.html"),
  ]);
  navbarRoot.innerHTML = navbarHtml;
  footerRoot.innerHTML = footerHtml;
}

function bindNavbarEvents() {
  const menuBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navAnchors = document.querySelectorAll(".nav-links a");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("show");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
  }

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navLinks?.classList.remove("show");
      menuBtn?.setAttribute("aria-expanded", "false");
    });
  });
}

function setActiveLink(route) {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const isActive = link.dataset.route === route;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function updateCountdown() {
  const timerEl = document.getElementById("countdown-timer");
  if (!timerEl) {
    return;
  }
  const target = new Date("2026-10-05T09:00:00+05:30").getTime();
  const diff = target - Date.now();

  if (diff <= 0) {
    timerEl.textContent = "Conference is now live";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  timerEl.textContent = `${days}d ${hours}h ${minutes}m`;
}

async function renderHomeComponents() {
  const root = document.getElementById("home-components-root");
  if (!root) {
    return;
  }
  const blocks = await Promise.all(HOME_COMPONENTS.map((path) => loadHtml(path)));
  root.innerHTML = blocks.join("");
}

async function renderRoute() {
  const route = window.location.hash.replace("#", "") || "home";
  const pagePath = ROUTES[route] || ROUTES.home;
  appRoot.innerHTML = await loadHtml(pagePath);
  setActiveLink(route);

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  if (route === "home") {
    await renderHomeComponents();
    updateCountdown();
    countdownInterval = window.setInterval(updateCountdown, 60000);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function init() {
  await loadGlobalComponents();
  bindNavbarEvents();
  window.addEventListener("hashchange", renderRoute);
  await renderRoute();
}

init().catch((error) => {
  appRoot.innerHTML = `<section class="section"><div class="container"><div class="card"><h2>Unable to load page</h2><p>${error.message}</p></div></div></section>`;
});
