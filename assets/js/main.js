import { initPublicationsPage } from "./publications.js";

const ROUTES = {
  home: "pages/home.html",
  about: "pages/about.html",
  committees: "pages/committees.html",
  speakers: "pages/speakers.html",
  publications: "pages/publications.html",
  "call-for-papers": "pages/call-for-papers.html",
  "important-dates": "pages/important-dates.html",
  "paper-submission": "pages/paper-submission.html",
  sponsors: "pages/sponsors.html",
  registration: "pages/registration.html",
  contact: "pages/contact.html",
};

const HOME_COMPONENTS = [
  "components/home/about-icrame.html",
  "components/home/important-dates.html",
  // "components/home/speakers.html",
  // "components/home/publications.html",
  "components/home/about-nit.html",
  // "components/home/gallery.html",
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
  const menuCheckbox = document.getElementById("menu-toggle");
  const navAnchors = document.querySelectorAll(".nav-links a");

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      if (menuCheckbox && menuCheckbox.checked) {
        menuCheckbox.checked = false;
      }
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

function startCountdown() {
  const targetDate = new Date("2026-10-05T09:00:00+05:30").getTime();
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const messageEl = document.getElementById("countdown-message");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const pad = (n) => String(n).padStart(2, "0");

  const update = () => {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      if (messageEl) messageEl.textContent = "🎉 ICRAME 2026 is live now!";
      if (countdownInterval) clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  };

  update();
  countdownInterval = setInterval(update, 1000);
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
    startCountdown();
  } else if (route === "publications") {
    initPublicationsPage();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateVisitorCount() {
  fetch('https://abacus.jasoncameron.dev/hit/icrame2026/site_visits')
    .then(response => response.json())
    .then(data => {
      const el = document.getElementById('visitor-count');
      if (el) {
        // Abacus returns { value: ... }, counterapi returned { count: ... }
        const count = data.value || data.count;
        el.textContent = count ? count.toLocaleString() : 'Unavailable';
      }
    })
    .catch(err => {
      const el = document.getElementById('visitor-count');
      if (el) el.textContent = 'Unavailable';
    });
}

async function init() {
  await loadGlobalComponents();
  bindNavbarEvents();
  updateVisitorCount();
  window.addEventListener("hashchange", renderRoute);
  await renderRoute();
}

init().catch((error) => {
  appRoot.innerHTML = `<section class="section"><div class="container"><div class="card"><h2>Unable to load page</h2><p>${error.message}</p></div></div></section>`;
});
// Initialization complete.