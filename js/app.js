/* =====================================================
   CV — Erika Adai Reyes Herrera
   app.js — Loads cv-data.json and renders the whole CV
   ===================================================== */

/* ---- Inline SVG icons ---- */
const ICONS = {
  phone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  location: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25v-4.073M15.75 9.75V7.5a3.75 3.75 0 00-7.5 0v2.25M3.75 9.75h16.5"/></svg>`,
  folder: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/></svg>`,
  book: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>`,
  grad: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>`,
  chip: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"/></svg>`,
  bell: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/></svg>`,
  payment: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/></svg>`,
  chart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"/></svg>`,
  wrench: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/></svg>`,
  lightning: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 01.284-2.253m0 0A11.978 11.978 0 0012 10.5c2.998 0 5.74-1.1 7.843-2.918"/></svg>`,
};

/* Badge icon mapping */
const BADGE_ICONS = {
  'Gestión de clientes': ICONS.users,
  'Pagos': ICONS.payment,
  'Reportes': ICONS.chart,
  'Notificaciones API': ICONS.bell,
};

/* Interest icon mapping */
const INTEREST_ICONS = {
  'Desarrollo de Productos Digitales': ICONS.chip,
  'Desarrollo Web': ICONS.globe,
  'Diseño de Interfaces': ICONS.star,
  'Inteligencia Artificial': ICONS.lightning,
  'Automatización': ICONS.wrench,
};

/* Tool icon label mapping */
const TOOL_LABELS = {
  vscode:  'VS',
  android: 'AS',
  netbeans:'NB',
  cisco:   'CP',
  canva:   'Cv',
  notion:  'N',
  excel:   'X',
};

/* ---- Helper: build section heading ---- */
function buildHeading(iconKey, title) {
  return `
    <div class="section-heading">
      <div class="section-icon">${ICONS[iconKey]}</div>
      <span class="section-title">${title}</span>
    </div>
    <div class="section-divider"></div>
  `;
}

/* ---- Helper: sidebar heading ---- */
function buildSbHeading(iconKey, title) {
  return `
    <div class="sb-heading">
      <div class="sb-heading-icon">${ICONS[iconKey]}</div>
      <span class="sb-heading-text">${title}</span>
    </div>
  `;
}

/* ---- Render functions ---- */

function renderContact(data, el) {
  const c = data.contact;
  el.innerHTML = buildSbHeading('phone', 'Contacto') + `
    <ul class="contact-list">
      <li class="contact-item">${ICONS.phone}<span>${c.phone}</span></li>
      <li class="contact-item">${ICONS.email}<a href="mailto:${c.email}">${c.email}</a></li>
      <li class="contact-item">${ICONS.github}<a href="https://${c.github}" target="_blank">${c.github}</a></li>
      <li class="contact-item">${ICONS.linkedin}<a href="https://${c.linkedin}" target="_blank">${c.linkedin}</a></li>
      <li class="contact-item">${ICONS.location}<span>${c.location}</span></li>
    </ul>
  `;
}

function renderTech(data, el) {
  const tech = data.technologies;
  const groups = Object.entries(tech).map(([group, items]) => `
    <div class="tech-group">
      <div class="tech-group-label">${group}</div>
      <div class="chip-row">
        ${items.map(t => `<span class="chip">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
  el.innerHTML = buildSbHeading('chip', 'Tecnologías') + groups;
}

function renderTools(data, el) {
  const items = data.tools.map(t => `
    <li class="tools-item">
      <div class="tool-icon ${t.icon}">${TOOL_LABELS[t.icon] || t.icon.substring(0,2).toUpperCase()}</div>
      ${t.name}
    </li>
  `).join('');
  el.innerHTML = buildSbHeading('wrench', 'Herramientas') + `<ul class="tools-list">${items}</ul>`;
}

function renderSkills(data, el) {
  const items = data.skills.map(s => `
    <li class="skills-item"><span class="skill-dot"></span>${s}</li>
  `).join('');
  el.innerHTML = buildSbHeading('lightning', 'Habilidades') + `<ul class="skills-list">${items}</ul>`;
}

function renderLanguages(data, el) {
  const items = data.languages.map(l => {
    const dots = Array.from({length: 5}, (_, i) =>
      `<span class="lang-dot${i < l.dots ? ' filled' : ''}"></span>`
    ).join('');
    return `
      <li class="lang-item">
        <div class="lang-header">
          <span class="lang-name">${l.name}</span>
          <span class="lang-level">${l.level}</span>
        </div>
        <div class="lang-dots">${dots}</div>
      </li>
    `;
  }).join('');
  el.innerHTML = buildSbHeading('globe', 'Idiomas') + `<ul class="lang-list">${items}</ul>`;
}

function renderHeader(data, el) {
  const p = data.personal;
  const specialties = p.specialties.map((s, i) =>
    i === 0 ? `<span class="specialty-text">${s}</span>`
    : `<span class="specialty-sep"></span><span class="specialty-text">${s}</span>`
  ).join('');
  el.innerHTML = `
    <div class="cv-name">
      <span class="first">${p.firstName}</span>
      <span class="last">${p.lastName}</span>
    </div>
    <div class="cv-accent-bar"></div>
    <div class="cv-specialties">${specialties}</div>
    <div class="cv-title">${p.title}</div>
  `;
}

function renderProfile(data, el) {
  el.innerHTML = buildHeading('user', 'Perfil Profesional') +
    `<p class="profile-text">${data.profile}</p>`;
}

function renderExperience(data, el) {
  const items = data.experience.map(job => `
    <div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-header">
        <span class="tl-title">${job.position}</span>
        <span class="tl-period">${job.period}</span>
      </div>
      <div class="tl-company">${job.company}</div>
      <ul class="tl-list">
        ${job.items.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  el.innerHTML = buildHeading('briefcase', 'Experiencia') +
    `<div class="timeline">${items}</div>`;
}

function renderProjects(data, el) {
  const cards = data.projects.map(p => {
    if (p.featured) {
      const badges = p.badges.map(b => `
        <span class="badge">
          ${BADGE_ICONS[b] || ICONS.chip}
          ${b}
        </span>
      `).join('');
      const listItems = p.items.map(i => `<li>${i}</li>`).join('');
      return `
        <div class="project-card featured">
          <div class="featured-label">
            <div class="featured-star">${ICONS.star}</div>
            <span class="featured-tag">Proyecto Destacado</span>
          </div>
          <div class="proj-header">
            <span class="proj-title">${p.name}</span>
            <span class="proj-period">${p.period}</span>
          </div>
          <div class="proj-subtitle">${p.subtitle}</div>
          <p class="proj-description">${p.description}</p>
          <div class="badge-row">${badges}</div>
          <ul class="proj-list">${listItems}</ul>
        </div>
      `;
    } else {
      const listItems = p.items.map(i => `<li>${i}</li>`).join('');
      return `
        <div class="project-card">
          <div class="proj-header">
            <span class="proj-title">${p.name}</span>
            <span class="proj-period">${p.period}</span>
          </div>
          <div class="proj-subtitle">${p.subtitle}</div>
          <ul class="proj-list">${listItems}</ul>
        </div>
      `;
    }
  }).join('');
  el.innerHTML = buildHeading('folder', 'Proyectos') +
    `<div class="projects-wrap">${cards}</div>`;
}

function renderLearning(data, el) {
  const items = data.learning.map(l =>
    `<li class="learning-item">${l}</li>`
  ).join('');
  el.innerHTML = buildHeading('book', 'Aprendizaje Complementario') +
    `<ul class="learning-list">${items}</ul>`;
}

function renderInterests(data, el) {
  const chips = data.interests.map(i => `
    <span class="interest-chip">
      ${INTEREST_ICONS[i] || ICONS.star}
      ${i}
    </span>
  `).join('');
  el.innerHTML = buildHeading('star', 'Áreas de Interés') +
    `<div class="interests-wrap">${chips}</div>`;
}

function renderEducation(data, el) {
  const edu = data.education;
  el.innerHTML = buildHeading('grad', 'Educación') + `
    <div class="edu-card">
      <div class="edu-left">
        <div class="edu-dot"></div>
        <div>
          <div class="edu-degree">${edu.degree}</div>
          <div class="edu-institution">${edu.institution}</div>
        </div>
      </div>
      <div class="edu-badge">${edu.extra}</div>
    </div>
  `;
}

/* ---- Bootstrap ---- */
function buildCV(data) {
  renderContact(data, document.getElementById('sb-contact'));
  renderTech(data, document.getElementById('sb-tech'));
  renderTools(data, document.getElementById('sb-tools'));
  renderSkills(data, document.getElementById('sb-skills'));
  renderLanguages(data, document.getElementById('sb-languages'));

  renderHeader(data, document.getElementById('cv-header'));
  renderProfile(data, document.getElementById('cv-profile'));
  renderExperience(data, document.getElementById('cv-experience'));
  renderProjects(data, document.getElementById('cv-projects'));
  renderLearning(data, document.getElementById('cv-learning'));
  renderInterests(data, document.getElementById('cv-interests'));
  renderEducation(data, document.getElementById('cv-education'));
}

/* Load JSON — works with Live Server or any local HTTP server */
fetch('./cv-data.json')
  .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
  .then(buildCV)
  .catch(err => {
    console.error('No se pudo cargar cv-data.json:', err);
    document.getElementById('cv-root').innerHTML =
      '<p style="color:#ff6b6b;padding:32px;font-family:monospace">⚠️ Abre el proyecto con Live Server en VS Code (clic derecho → Open with Live Server).<br><br>El JSON no puede cargarse desde file://</p>';
  });
