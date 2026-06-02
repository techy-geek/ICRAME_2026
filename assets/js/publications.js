// ============================================================
// ICRAME — Publications Data & Rendering Logic
// ============================================================

const PUBLICATIONS_DATA = [
  // 2025
  {
    id: "pub-2025-1",
    type: "proceeding",
    title: "Recent Advances in Thermo-Fluidic and Energy Engineering: Select Proceedings of ICRAME 2025",
    authors: "K. M. Pandey, R. D. Misra, P. K. Patowari, U. S. Dixit",
    venue: "Springer Lecture Notes in Mechanical Engineering",
    year: 2025,
    abstract: "This volume presents select peer-reviewed proceedings of ICRAME 2025, focusing on thermo-fluidic and energy engineering — covering heat transfer, combustion, renewable energy, and computational fluid dynamics.",
    link: "https://link.springer.com/book/10.1007/978-981-95-3698-6",
    image: "",
    tags: ["Thermo-Fluidics", "Energy Engineering", "Heat Transfer", "CFD"],
    citations: 18
  },
  {
    id: "pub-2025-2",
    type: "proceeding",
    title: "Recent Advancements in Design and Automation: Select Proceedings of ICRAME 2025",
    authors: "K. M. Pandey, R. D. Misra, P. K. Patowari, U. S. Dixit",
    venue: "Springer Lecture Notes in Mechanical Engineering",
    year: 2025,
    abstract: "This volume covers mechanical design, robotics, automation, control systems, and computational mechanics from ICRAME 2025.",
    link: "https://link.springer.com/book/9789819539741",
    image: "",
    tags: ["Mechanical Design", "Automation", "Robotics", "Control Systems"],
    citations: 15
  },
  {
    id: "pub-2025-3",
    type: "proceeding",
    title: "Recent Advancements in Artificial Intelligence and Optimization: Select Proceedings of ICRAME 2025",
    authors: "K. M. Pandey, R. D. Misra, P. K. Patowari, U. S. Dixit",
    venue: "Springer Lecture Notes in Mechanical Engineering",
    year: 2025,
    abstract: "This volume presents applications of artificial intelligence, machine learning, and optimization in manufacturing and engineering from ICRAME 2025.",
    link: "https://link.springer.com/book/9789819592678",
    image: "",
    tags: ["Artificial Intelligence", "Optimization", "Machine Learning"],
    citations: 22
  },
  // 2024
  {
    id: "pub-2024-1",
    type: "proceeding",
    title: "Recent Trends in Mechanical Engineering: Select Proceedings of ICRAME 2024",
    authors: "K. M. Pandey, R. D. Misra, P. K. Patowari, U. S. Dixit",
    venue: "Springer Lecture Notes in Mechanical Engineering",
    year: 2024,
    abstract: "Selected papers from ICRAME 2024 highlighting recent advances in materials science, manufacturing technology, design optimization, and automotive systems.",
    link: "https://link.springer.com/book/10.1007/978-981-97-7535-4",
    image: "",
    tags: ["Materials Science", "Manufacturing", "Design Optimization"],
    citations: 34
  },
  // 2023
  {
    id: "pub-2023-1",
    type: "proceeding",
    title: "Advances in Mechanical Engineering: Select Proceedings of ICRAME 2023 (Volume 1)",
    authors: "K. M. Pandey, R. D. Misra, P. K. Patowari, U. S. Dixit",
    venue: "Springer Lecture Notes in Mechanical Engineering",
    year: 2023,
    abstract: "Volume 1 of ICRAME 2023 proceedings focusing on thermal and fluids engineering, computational heat transfer, and alternative energy.",
    link: "https://link.springer.com/book/10.1007/978-981-97-4167-0",
    image: "",
    tags: ["Thermal Engineering", "Fluid Dynamics", "Alternative Energy"],
    citations: 45
  },
  {
    id: "pub-2023-2",
    type: "proceeding",
    title: "Advances in Mechanical Engineering: Select Proceedings of ICRAME 2023 (Volume 2)",
    authors: "K. M. Pandey, R. D. Misra, P. K. Patowari, U. S. Dixit",
    venue: "Springer Lecture Notes in Mechanical Engineering",
    year: 2023,
    abstract: "Volume 2 of ICRAME 2023 proceedings covering mechanical design, FEM, computational mechanics, structural integrity, and tribology.",
    link: "https://link.springer.com/book/10.1007/978-981-96-6613-3",
    image: "",
    tags: ["Mechanical Design", "FEM", "Tribology", "Solid Mechanics"],
    citations: 39
  },
  {
    id: "pub-2023-3",
    type: "proceeding",
    title: "Advances in Mechanical Engineering: Select Proceedings of ICRAME 2023 (Volume 3)",
    authors: "K. M. Pandey, R. D. Misra, P. K. Patowari, U. S. Dixit",
    venue: "Springer Lecture Notes in Mechanical Engineering",
    year: 2023,
    abstract: "Volume 3 of ICRAME 2023 proceedings focusing on advanced manufacturing, Industry 4.0, micro-machining, and sustainable manufacturing.",
    link: "https://link.springer.com/book/10.1007/978-981-96-6632-4",
    image: "",
    tags: ["Advanced Manufacturing", "Industry 4.0", "Machining", "Sustainability"],
    citations: 52
  },
  // 2022
  {
    id: "pub-2022-1",
    type: "proceeding",
    title: "Recent Advances in Mechanical Engineering: Select Proceedings of ICRAME 2022",
    authors: "K. M. Pandey, R. D. Misra, P. K. Patowari, U. S. Dixit",
    venue: "Springer Lecture Notes in Mechanical Engineering",
    year: 2022,
    abstract: "Selected papers from ICRAME 2022 covering heat and mass transfer, fluid dynamics, composite materials, design, modeling, and control systems.",
    link: "https://link.springer.com/book/10.1007/978-981-97-0900-7",
    image: "",
    tags: ["Heat Transfer", "Fluid Dynamics", "Composite Materials"],
    citations: 58
  },
  // 2021
  {
    id: "pub-2021-1",
    type: "proceeding",
    title: "Recent Advances in Mechanical Engineering: Select Proceedings of ICRAME 2021",
    authors: "K. M. Pandey, R. D. Misra, P. K. Patowari, U. S. Dixit",
    venue: "Springer Lecture Notes in Mechanical Engineering",
    year: 2021,
    abstract: "Select contributions from ICRAME 2021 spanning fluid mechanics, thermodynamics, IC engines, turbomachinery, machine design, and industrial engineering.",
    link: "https://link.springer.com/book/10.1007/978-981-19-3266-3",
    image: "",
    tags: ["Fluid Mechanics", "Thermodynamics", "IC Engines", "Solid Mechanics"],
    citations: 62
  },
  // 2020
  {
    id: "pub-2020-1",
    type: "proceeding",
    title: "Recent Advances in Mechanical Engineering: Select Proceedings of ICRAME 2020",
    authors: "K. M. Pandey, R. D. Misra, P. K. Patowari, U. S. Dixit",
    venue: "Springer Lecture Notes in Mechanical Engineering",
    year: 2020,
    abstract: "Inaugural ICRAME proceedings in Springer Lecture Notes covering thermal, fluids, manufacturing, design, and materials engineering.",
    link: "https://link.springer.com/book/10.1007/978-981-15-7711-6",
    image: "",
    tags: ["Thermal Engineering", "Manufacturing", "Design", "Materials Science"],
    citations: 78
  }
];

// ── Springer cover SVG gear decoration (pre-computed static string) ──
const GEAR_SVG_MARKUP = '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="bcc-gear-svg" aria-hidden="true">' +
  '<circle cx="100" cy="60" r="28" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>' +
  '<circle cx="100" cy="60" r="18" fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="6"/>' +
  '<circle cx="100" cy="60" r="6" fill="rgba(255,255,255,0.15)"/>' +
  '<line x1="126.0" y1="60.0" x2="134.0" y2="60.0" stroke="rgba(255,255,255,0.18)" stroke-width="5" stroke-linecap="round"/>' +
  '<line x1="121.0" y1="75.3" x2="128.6" y2="80.0" stroke="rgba(255,255,255,0.18)" stroke-width="5" stroke-linecap="round"/>' +
  '<line x1="108.0" y1="84.7" x2="110.5" y2="92.3" stroke="rgba(255,255,255,0.18)" stroke-width="5" stroke-linecap="round"/>' +
  '<line x1="91.9" y1="84.7" x2="89.5" y2="92.3" stroke="rgba(255,255,255,0.18)" stroke-width="5" stroke-linecap="round"/>' +
  '<line x1="79.0" y1="75.3" x2="72.5" y2="80.0" stroke="rgba(255,255,255,0.18)" stroke-width="5" stroke-linecap="round"/>' +
  '<line x1="74.0" y1="60.0" x2="66.0" y2="60.0" stroke="rgba(255,255,255,0.18)" stroke-width="5" stroke-linecap="round"/>' +
  '<line x1="79.0" y1="44.7" x2="72.5" y2="40.0" stroke="rgba(255,255,255,0.18)" stroke-width="5" stroke-linecap="round"/>' +
  '<line x1="91.9" y1="35.3" x2="89.5" y2="27.7" stroke="rgba(255,255,255,0.18)" stroke-width="5" stroke-linecap="round"/>' +
  '<line x1="108.0" y1="35.3" x2="110.5" y2="27.7" stroke="rgba(255,255,255,0.18)" stroke-width="5" stroke-linecap="round"/>' +
  '<line x1="121.0" y1="44.7" x2="128.6" y2="40.0" stroke="rgba(255,255,255,0.18)" stroke-width="5" stroke-linecap="round"/>' +
  '<circle cx="150" cy="30" r="16" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>' +
  '<circle cx="150" cy="30" r="10" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="4"/>' +
  '<line x1="166.0" y1="30.0" x2="169.0" y2="30.0" stroke="rgba(255,255,255,0.12)" stroke-width="3.5" stroke-linecap="round"/>' +
  '<line x1="160.7" y1="41.7" x2="163.2" y2="44.2" stroke="rgba(255,255,255,0.12)" stroke-width="3.5" stroke-linecap="round"/>' +
  '<line x1="150.0" y1="46.0" x2="150.0" y2="49.0" stroke="rgba(255,255,255,0.12)" stroke-width="3.5" stroke-linecap="round"/>' +
  '<line x1="139.3" y1="41.7" x2="136.8" y2="44.2" stroke="rgba(255,255,255,0.12)" stroke-width="3.5" stroke-linecap="round"/>' +
  '<line x1="134.0" y1="30.0" x2="131.0" y2="30.0" stroke="rgba(255,255,255,0.12)" stroke-width="3.5" stroke-linecap="round"/>' +
  '<line x1="139.3" y1="18.3" x2="136.8" y2="15.8" stroke="rgba(255,255,255,0.12)" stroke-width="3.5" stroke-linecap="round"/>' +
  '<line x1="150.0" y1="14.0" x2="150.0" y2="11.0" stroke="rgba(255,255,255,0.12)" stroke-width="3.5" stroke-linecap="round"/>' +
  '<line x1="160.7" y1="18.3" x2="163.2" y2="15.8" stroke="rgba(255,255,255,0.12)" stroke-width="3.5" stroke-linecap="round"/>' +
  '<circle cx="52" cy="95" r="12" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>' +
  '<circle cx="52" cy="95" r="7" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="3"/>' +
  '<line x1="63.0" y1="95.0" x2="67.0" y2="95.0" stroke="rgba(255,255,255,0.10)" stroke-width="3" stroke-linecap="round"/>' +
  '<line x1="56.6" y1="106.0" x2="60.2" y2="108.1" stroke="rgba(255,255,255,0.10)" stroke-width="3" stroke-linecap="round"/>' +
  '<line x1="44.0" y1="105.3" x2="40.9" y2="108.3" stroke="rgba(255,255,255,0.10)" stroke-width="3" stroke-linecap="round"/>' +
  '<line x1="41.0" y1="95.0" x2="37.0" y2="95.0" stroke="rgba(255,255,255,0.10)" stroke-width="3" stroke-linecap="round"/>' +
  '<line x1="44.0" y1="84.7" x2="40.9" y2="81.7" stroke="rgba(255,255,255,0.10)" stroke-width="3" stroke-linecap="round"/>' +
  '<line x1="56.6" y1="84.0" x2="60.2" y2="81.9" stroke="rgba(255,255,255,0.10)" stroke-width="3" stroke-linecap="round"/>' +
  '<line x1="52.0" y1="107.0" x2="52.0" y2="111.0" stroke="rgba(255,255,255,0.10)" stroke-width="3" stroke-linecap="round"/>' +
  '</svg>';

// ── Generate a single book card ─────────────────────────────
function _buildBookCard(pub) {
  const titleParts = pub.title.split(':');
  const mainTitle  = titleParts[0].trim();
  const subTitle   = (titleParts[1] || '').trim();
  const authParts  = pub.authors.split(',');
  const editors    = authParts.slice(0, 3).join(',') + (authParts.length > 3 ? ' et al.' : '');

  var coverImg;
  if (pub.image && pub.image !== '') {
    coverImg = '<img src="' + pub.image + '" alt="" class="bcc-real-img">';
  } else {
    var subHtml = subTitle ? '<div class="bcc-sub-title">' + subTitle + '</div>' : '';
    coverImg = '<div class="bcc-face">'
      + '<div class="bcc-series-badge">Lecture Notes in Mechanical Engineering</div>'
      + GEAR_SVG_MARKUP
      + '<div class="bcc-text-block">'
      + '<div class="bcc-editors-line">' + editors + '</div>'
      + '<div class="bcc-editors-label">Editors</div>'
      + '<div class="bcc-main-title">' + mainTitle + '</div>'
      + subHtml
      + '</div>'
      + '<div class="bcc-springer-bar">'
      + '<span class="bcc-springer-logo">Springer</span>'
      + '</div>'
      + '</div>';
  }

  var tagPills = pub.tags.map(function(t) { return '<span class="bk-tag">' + t + '</span>'; }).join('');

  var starSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
  var arrowSvg = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>';

  return '<article class="book-card" data-id="' + pub.id + '">'
    + '<a href="' + pub.link + '" target="_blank" rel="noopener noreferrer" class="bcc-link">'
    + '<div class="bcc-cover">'
    + '<div class="bcc-spine"></div>'
    + coverImg
    + '</div></a>'
    + '<div class="bci-panel">'
    + '<p class="bci-full-title">' + pub.title + '</p>'
    + '<p class="bci-authors">' + pub.authors + '</p>'
    + '<div class="bci-tags">' + tagPills + '</div>'
    + '<div class="bci-footer">'
    + '<span class="bci-citations">' + starSvg + pub.citations + ' cited</span>'
    + '<a href="' + pub.link + '" target="_blank" rel="noopener noreferrer" class="bci-btn">View on Springer ' + arrowSvg + '</a>'
    + '</div></div></article>';
}

// ── Compute Statistics ───────────────────────────────────────
function computeStats(data) {
  const latestYear = 2025;
  const totalCitations = data.reduce((acc, p) => acc + (p.citations || 0), 0);
  return {
    totalPublications: data.length,
    publicationsLatestYear: data.filter(p => p.year === latestYear).length,
    totalCitations
  };
}

// ── Render Summary Cards ─────────────────────────────────────
function renderStats(stats) {
  const container = document.getElementById("publications-stats-grid");
  if (!container) return;

  container.innerHTML = `
    <div class="stat-card" data-stat="total">
      <div class="stat-icon-wrap">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
      </div>
      <div class="stat-info">
        <h3 class="stat-value" id="stat-total-pub">0</h3>
        <p class="stat-label">Total Proceedings</p>
      </div>
      <div class="stat-card-glow"></div>
    </div>
    <div class="stat-card" data-stat="current">
      <div class="stat-icon-wrap">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
      </div>
      <div class="stat-info">
        <h3 class="stat-value" id="stat-this-year">0</h3>
        <p class="stat-label">Volumes in 2025</p>
      </div>
      <div class="stat-card-glow"></div>
    </div>
    <div class="stat-card" data-stat="citations">
      <div class="stat-icon-wrap">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
      </div>
      <div class="stat-info">
        <h3 class="stat-value" id="stat-citations">0</h3>
        <p class="stat-label">Total Citations</p>
      </div>
      <div class="stat-card-glow"></div>
    </div>
  `;

  animateNumber("stat-total-pub",  stats.totalPublications,      1200);
  animateNumber("stat-this-year",  stats.publicationsLatestYear, 1200);
  animateNumber("stat-citations",  stats.totalCitations,         1500);
}

function animateNumber(elementId, targetVal, durationMs) {
  const el = document.getElementById(elementId);
  if (!el) return;
  let startTimestamp = null;
  const step = (ts) => {
    if (!startTimestamp) startTimestamp = ts;
    const progress = Math.min((ts - startTimestamp) / durationMs, 1);
    el.textContent = Math.floor(progress * targetVal).toLocaleString();
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}

// ── SVG Charts ───────────────────────────────────────────────
function renderCharts(data) {
  const barChartContainer      = document.getElementById("bar-chart-container");
  const timelineChartContainer = document.getElementById("timeline-chart-container");
  if (!barChartContainer || !timelineChartContainer) return;

  const years      = [2020, 2021, 2022, 2023, 2024, 2025];
  const yearCounts = years.map(yr => ({ year: yr, count: data.filter(p => p.year === yr).length }));
  const maxVal     = Math.max(...yearCounts.map(yc => yc.count), 1);

  // Bar Chart
  const graphWidth = 440;
  const barSpacing = graphWidth / years.length;
  const barWidth   = 32;

  let barSvgHtml = `
    <svg viewBox="0 0 500 240" class="svg-chart-element" aria-label="Publications per Year Bar Chart">
      <defs>
        <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#0b3c5d"/>
          <stop offset="100%" stop-color="#1b5a8c"/>
        </linearGradient>
        <linearGradient id="barGradHover" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#8b0000"/>
          <stop offset="100%" stop-color="#b81d1d"/>
        </linearGradient>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity="0.15"/>
        </filter>
      </defs>
      <line x1="40" y1="40"  x2="480" y2="40"  class="chart-grid-line"/>
      <line x1="40" y1="90"  x2="480" y2="90"  class="chart-grid-line"/>
      <line x1="40" y1="140" x2="480" y2="140" class="chart-grid-line"/>
      <line x1="40" y1="190" x2="480" y2="190" stroke="var(--line)" stroke-width="2"/>`;

  yearCounts.forEach((yc, idx) => {
    const x         = 40 + idx * barSpacing + (barSpacing - barWidth) / 2;
    const barHeight = (yc.count / maxVal) * 130;
    const y         = 190 - barHeight;
    barSvgHtml += `
      <g class="chart-bar-group" data-year="${yc.year}" data-count="${yc.count}">
        <rect x="${x - 5}" y="20" width="${barWidth + 10}" height="170" fill="transparent" style="cursor:pointer;"/>
        <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="4" fill="url(#barGrad)" filter="url(#shadow)" class="chart-bar-rect">
          <animate attributeName="height" from="0" to="${barHeight}" dur="0.8s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1"/>
          <animate attributeName="y" from="190" to="${y}" dur="0.8s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1"/>
        </rect>
        <text x="${x + barWidth / 2}" y="208" class="chart-axis-text" text-anchor="middle">${yc.year}</text>
        <text x="${x + barWidth / 2}" y="${y - 8}" class="chart-bar-value" text-anchor="middle" font-size="10" font-weight="700" fill="var(--primary)">${yc.count}</text>
      </g>`;
  });
  barSvgHtml += `</svg>`;
  barChartContainer.innerHTML = barSvgHtml;

  // Timeline Chart
  let runningSum = 0;
  const timelinePoints = yearCounts.map(yc => { runningSum += yc.count; return { year: yc.year, count: runningSum }; });
  const maxCumulative  = Math.max(...timelinePoints.map(tp => tp.count), 1);
  const timeSpacing    = graphWidth / (years.length - 1);
  const coords = timelinePoints.map((tp, idx) => {
    const x = 40 + idx * timeSpacing;
    const y = 190 - (tp.count / maxCumulative) * 130;
    return { x, y, year: tp.year, cumulative: tp.count };
  });

  let pathD = "", areaD = `M 40 190`;
  coords.forEach((coord, idx) => {
    if (idx === 0) { pathD += `M ${coord.x} ${coord.y}`; }
    else {
      const prev = coords[idx - 1];
      const cpX  = prev.x + (coord.x - prev.x) / 2;
      pathD += ` C ${cpX} ${prev.y}, ${cpX} ${coord.y}, ${coord.x} ${coord.y}`;
    }
  });
  areaD += ` L ${coords[0].x} ${coords[0].y} ` + pathD.substring(1) + ` L ${coords[coords.length - 1].x} 190 Z`;

  let timelineSvgHtml = `
    <svg viewBox="0 0 500 240" class="svg-chart-element" aria-label="Publication growth timeline">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0b3c5d" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#0b3c5d" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      <line x1="40" y1="60"  x2="480" y2="60"  class="chart-grid-line"/>
      <line x1="40" y1="105" x2="480" y2="105" class="chart-grid-line"/>
      <line x1="40" y1="150" x2="480" y2="150" class="chart-grid-line"/>
      <line x1="40" y1="190" x2="480" y2="190" stroke="var(--line)" stroke-width="2"/>
      <path d="${areaD}" fill="url(#areaGrad)"/>
      <path d="${pathD}" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="chart-timeline-line"/>`;

  coords.forEach(coord => {
    timelineSvgHtml += `
      <g class="chart-dot-group" data-year="${coord.year}" data-count="${coord.cumulative}">
        <circle cx="${coord.x}" cy="${coord.y}" r="15" fill="transparent" style="cursor:pointer;"/>
        <circle cx="${coord.x}" cy="${coord.y}" r="5" fill="#fff" stroke="var(--secondary)" stroke-width="3" class="chart-dot-circle"/>
        <text x="${coord.x}" y="208" class="chart-axis-text" text-anchor="middle">${coord.year}</text>
        <text x="${coord.x}" y="${coord.y - 10}" class="chart-dot-value" text-anchor="middle" font-size="10" font-weight="700" fill="var(--secondary)">${coord.cumulative}</text>
      </g>`;
  });
  timelineSvgHtml += `</svg>`;
  timelineChartContainer.innerHTML = timelineSvgHtml;

  setupChartTooltips();
}

function setupChartTooltips() {
  let tooltip = document.getElementById("chart-tooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "chart-tooltip";
    tooltip.className = "chart-tooltip-element";
    document.body.appendChild(tooltip);
  }
  const show = (e, year, count, prefix) => {
    tooltip.innerHTML = `<strong>${year}</strong><br>${prefix}: <span>${count}</span>`;
    tooltip.style.opacity = "1";
    tooltip.style.left = (e.pageX + 15) + "px";
    tooltip.style.top  = (e.pageY - 25) + "px";
  };
  const hide = () => { tooltip.style.opacity = "0"; };
  document.querySelectorAll(".chart-bar-group").forEach(g => {
    g.addEventListener("mousemove", e => show(e, g.dataset.year, g.dataset.count, "Publications"));
    g.addEventListener("mouseleave", hide);
  });
  document.querySelectorAll(".chart-dot-group").forEach(g => {
    g.addEventListener("mousemove", e => show(e, g.dataset.year, g.dataset.count, "Cumulative"));
    g.addEventListener("mouseleave", hide);
  });
}

// ── Year Quick-Jump Selector ─────────────────────────────────
function renderYearSelector(years) {
  const container = document.getElementById("year-navigation-bar");
  if (!container) return;

  let html = `<div class="year-nav-label">Jump to Year:</div><div class="year-pills-container">
    <button class="year-nav-pill active" data-year="all" aria-label="Show all publications">All</button>`;
  years.forEach(yr => {
    html += `<button class="year-nav-pill" data-year="${yr}" aria-label="Jump to ${yr}">${yr}</button>`;
  });
  html += `</div>`;
  container.innerHTML = html;

  const pills = container.querySelectorAll(".year-nav-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const target = pill.dataset.year;
      const sections = document.querySelectorAll(".pub-year-section");
      if (target === "all") {
        sections.forEach(s => { s.style.display = "block"; s.style.opacity = "1"; s.style.transform = "translateY(0)"; });
        document.getElementById("publications-list-root")?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        sections.forEach(s => {
          if (s.id === `year-section-${target}`) {
            s.style.display = "block";
            setTimeout(() => { s.style.opacity = "1"; s.style.transform = "translateY(0)"; }, 30);
          } else {
            s.style.opacity = "0"; s.style.transform = "translateY(12px)"; s.style.display = "none";
          }
        });
      }
    });
  });
}

// ── Main Render: Book Card Grid grouped by Year ──────────────
function renderPublications(filteredData) {
  const container = document.getElementById("publications-list-root");
  if (!container) return;

  if (filteredData.length === 0) {
    container.innerHTML = `
      <div class="no-publications-found">
        <div class="no-pub-icon">
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--muted)"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <h3>No publications match your search</h3>
        <p>Try refining your keywords or selecting a different year.</p>
        <button class="bci-btn" id="reset-pub-search" style="border:none;cursor:pointer;">Clear Filters</button>
      </div>`;
    document.getElementById("reset-pub-search")?.addEventListener("click", () => {
      const si = document.getElementById("pub-search-input");
      const tf = document.getElementById("tag-filter-select");
      if (si) si.value = "";
      if (tf) tf.value = "all";
      renderPublications(PUBLICATIONS_DATA);
      document.querySelectorAll(".year-nav-pill").forEach(p => p.classList.toggle("active", p.dataset.year === "all"));
      document.querySelectorAll(".pub-year-section").forEach(s => { s.style.display = "block"; s.style.opacity = "1"; s.style.transform = "translateY(0)"; });
    });
    return;
  }

  // Group by year
  const groups = {};
  filteredData.forEach(pub => {
    if (!groups[pub.year]) groups[pub.year] = [];
    groups[pub.year].push(pub);
  });
  const sortedYears = Object.keys(groups).sort((a, b) => b - a);

  var html = '';
  sortedYears.forEach(function(year) {
    var pubs = groups[year].slice().sort(function(a, b) { return (b.citations || 0) - (a.citations || 0); });
    var volLabel = pubs.length === 1 ? 'Volume' : 'Volumes';
    var cardsHtml = pubs.map(function(pub) { return _buildBookCard(pub); }).join('');
    html += '<section class="pub-year-section" id="year-section-' + year + '">'
      + '<div class="pys-header">'
      + '<div class="pys-year-block">'
      + '<span class="pys-year-num">' + year + '</span>'
      + '<span class="pys-vol-count">' + pubs.length + ' ' + volLabel + '</span>'
      + '</div>'
      + '<div class="pys-rule"></div>'
      + '<span class="pys-springer-badge">Springer LNME</span>'
      + '</div>'
      + '<div class="book-cards-grid">' + cardsHtml + '</div>'
      + '</section>';
  });
  container.innerHTML = html;

  // Tag pill click → filter
  container.querySelectorAll(".bk-tag").forEach(pill => {
    pill.addEventListener("click", () => {
      const tf = document.getElementById("tag-filter-select");
      if (tf) { tf.value = pill.textContent; filterPublicationsList(); }
    });
  });
}

// ── Tag Filter Dropdown ──────────────────────────────────────
function extractUniqueTags(data) {
  const tags = new Set();
  data.forEach(pub => pub.tags.forEach(t => tags.add(t)));
  return Array.from(tags).sort();
}

function populateTagFilter(tags) {
  const select = document.getElementById("tag-filter-select");
  if (!select) return;
  select.innerHTML = `<option value="all">All Topics / Domains</option>`;
  tags.forEach(tag => {
    const opt = document.createElement("option");
    opt.value = tag; opt.textContent = tag;
    select.appendChild(opt);
  });
}

function filterPublicationsList() {
  const searchVal   = (document.getElementById('pub-search-input')?.value || '').toLowerCase().trim();
  const selectedTag = document.getElementById('tag-filter-select')?.value || 'all';

  // If no filter active — restore the static year sections
  if (searchVal === '' && selectedTag === 'all') {
    document.querySelectorAll('.pub-year-section').forEach(function(s) {
      s.style.display = 'block';
      s.style.opacity = '1';
      s.style.transform = 'translateY(0)';
    });
    document.querySelectorAll('.year-nav-pill').forEach(function(p) {
      p.classList.toggle('active', p.dataset.year === 'all');
    });
    // Re-wire tag pills in restored static HTML
    document.querySelectorAll('#publications-list-root .bk-tag').forEach(function(pill) {
      pill.addEventListener('click', function() {
        var tf = document.getElementById('tag-filter-select');
        if (tf) { tf.value = pill.textContent.trim(); filterPublicationsList(); }
      });
    });
    return;
  }

  // Apply filter
  let filtered = PUBLICATIONS_DATA;
  if (selectedTag !== 'all') filtered = filtered.filter(function(p) { return p.tags.includes(selectedTag); });
  if (searchVal !== '') filtered = filtered.filter(function(p) {
    return p.title.toLowerCase().includes(searchVal) ||
      p.authors.toLowerCase().includes(searchVal) ||
      p.venue.toLowerCase().includes(searchVal) ||
      p.abstract.toLowerCase().includes(searchVal) ||
      p.tags.some(function(t) { return t.toLowerCase().includes(searchVal); });
  });

  renderPublications(filtered);
  document.querySelectorAll('.year-nav-pill').forEach(function(p) {
    p.classList.toggle('active', p.dataset.year === 'all');
  });
}

// ── Scroll Spy ───────────────────────────────────────────────
function handleScrollSpy() {
  const sections = document.querySelectorAll(".pub-year-section");
  const pills    = document.querySelectorAll(".year-pills-container .year-nav-pill");
  if (!sections.length || !pills.length) return;
  const allPill = document.querySelector('.year-nav-pill[data-year="all"]');
  if (!allPill?.classList.contains("active")) return;
  const scrollY = window.scrollY + 180;
  let active = "";
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight)
      active = sec.id.replace("year-section-", "");
  });
  if (active) pills.forEach(p => p.classList.toggle("active", p.dataset.year === active));
}

// ── Entry Point ──────────────────────────────────────────────
export function initPublicationsPage() {
  try {
    var tabs   = document.querySelectorAll('.pub-ytab');
    var panels = document.querySelectorAll('.pub-year-panel');

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var year = tab.getAttribute('data-year');

        // Activate clicked tab
        tabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');

        // Show matching panel, hide the rest
        panels.forEach(function(panel) {
          panel.style.display = (panel.id === 'pub-panel-' + year) ? 'block' : 'none';
        });
      });
    });
  } catch (err) {
    console.error('[Publications] initPublicationsPage error:', err);
  }
}

