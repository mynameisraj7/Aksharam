function byId(id) {
  return document.getElementById(id);
}

function renderNav() {
  const navList = byId("navLinks");
  if (!navList) return;

  const page = document.body.dataset.page || "";

  navList.innerHTML = siteData.nav
    .map((item) => {
      const active = item.page === page ? "is-active" : "";
      return `<li><a class="nav-link ${active}" href="${item.href}">${item.label}</a></li>`;
    })
    .join("");
}

function initMobileNav() {
  const toggle = byId("navToggle");
  const navList = byId("navLinks");
  if (!toggle || !navList) return;
  toggle.addEventListener("click", () => navList.classList.toggle("is-open"));
}

function createGuestCard(person) {
  return `
    <article class="guest-card reveal">
      <div class="guest-avatar" aria-hidden="true">
           <img src="${person.image}" alt="${person.name}">
      </div>
      <h3 class="guest-name">${person.name}</h3>
      <p class="guest-role">${person.role}</p>
    </article>
  `;
}

function createEventCard(event) {
  return `
    <article class="event-card reveal" onclick="this.classList.toggle('is-flipped')">
      <div class="event-card-inner">
        
        <!-- FRONT -->
        <div class="event-card-front">
          <img class="event-poster" src="${event.poster}" alt="${event.title}">
          <div class="event-body">
            <h3 class="event-title">${event.title}</h3>
            <p class="event-date">${event.date}</p>
            <span class="event-category">${event.category}</span>
          </div>
        </div>

        <!-- BACK -->
        <div class="event-card-back">
          <h3>${event.title}</h3>
          <p>${event.description || "No description available."}</p>
        </div>

      </div>
    </article>
  `;
}

function renderFeatures() {
  const featureGrid = byId("featureGrid");
  if (!featureGrid) return;
  featureGrid.innerHTML = siteData.features
    .map(
      (feature) => `
      <article class="feature-card reveal">
        <h3 class="feature-title">${feature.emoji} ${feature.title}</h3>
        <p class="feature-text">${feature.text}</p>
      </article>
    `
    )
    .join("");
}

function renderHomeGuests() {
  const guestGrid = byId("homeGuestsGrid");
  if (!guestGrid) return;
  guestGrid.innerHTML = siteData.guestsPreview.map(createGuestCard).join("");
}

function renderHomeEvents() {
  const eventGrid = byId("homeEventsGrid");
  if (!eventGrid) return;
  eventGrid.innerHTML = siteData.events.slice(0, 4).map(createEventCard).join("");
}

function renderAllEvents() {
  const eventGrid = byId("allEventsGrid");
  if (!eventGrid) return;

  const filterWrap = byId("eventFilters");
  const searchInput = byId("eventSearch");
  const categories = ["All", ...new Set(siteData.events.map((event) => event.category))];
  let activeCategory = "All";
  let searchText = "";

  function paintFilters() {
    filterWrap.innerHTML = categories
      .map(
        (category) =>
          `<button class="chip ${activeCategory === category ? "is-active" : ""}" data-filter="${category}" type="button">${category}</button>`
      )
      .join("");

    filterWrap.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        activeCategory = chip.dataset.filter;
        paintFilters();
        paintEvents();
      });
    });
  }

  function paintEvents() {
    const filtered = siteData.events.filter((event) => {
      const categoryPass = activeCategory === "All" || event.category === activeCategory;
      const text = `${event.title} ${event.category}`.toLowerCase();
      const searchPass = text.includes(searchText.toLowerCase());
      return categoryPass && searchPass;
    });
    eventGrid.innerHTML = filtered.map(createEventCard).join("");
    initReveal();
  }

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchText = event.target.value.trim();
      paintEvents();
    });
  }

  paintFilters();
  paintEvents();
}

function renderGuestPage() {
  const container = byId("guestSections");
  if (!container) return;

  container.innerHTML = siteData.guestCategories
    .map(
      (category) => `
      <section class="category-block reveal">
        <h2 class="section-title">${category.title}</h2>
        <div class="guest-grid">
          ${category.people.map(createGuestCard).join("")}
        </div>
      </section>
    `
    )
    .join("");
}

function renderSocials() {
  const socialList = document.getElementById("socialList");

  if (!socialList) return; // ✅ STOP if not present

  socialList.innerHTML = "";

  siteData.contact.socials.forEach((social) => {
    const a = document.createElement("a");
    a.href = social.link;
    a.className = "social-pill";
    a.target = "_blank";

    a.innerHTML = `<i class="${social.icon}"></i>`;

    socialList.appendChild(a);
  });
}

function renderReachPanel() {
  const reach = byId("reachPanel");
  if (!reach) return;
  reach.innerHTML = `
    <h3 class="form-title">Reach us at</h3>
    <p>${siteData.contact.address.join("<br>")}</p>
    <p><strong>Mail:</strong> ${siteData.contact.mail}</p>
    <p>Team Aksharam is conducting the fest and is dedicated to help you with your queries.</p>
  `;
}

function renderFooter() {
  const footer = byId("siteFooter");
  if (!footer) return;
  footer.className = "site-footer reveal";
  footer.innerHTML = `
    <div class="footer-top">
      <section>
        <div class="footer-branding">
          <img class="mini-logo" src="assets/aksharam_logo.png" alt="Aksharam logo">
        </div>
        <p class="footer-note">
          Aksharam is a cultural festival celebrating literature, dialogue, and heritage through curated events, performances, and community participation.
        </p>
        <h3>Address</h3>
        <p class="footer-note">${siteData.contact.address.join("<br>")}</p>
      </section>
      <section>
        <h2 class="section-title" style="margin-top:0; text-align:left; font-size:3rem;">Contact</h2>
        <div class="contact-columns">
          <div class="contact-box">
            <h4>For accommodation query's</h4>
            ${siteData.contact.accommodation.map((item) => `<p>${item}</p>`).join("")}
            <h4 style="margin-top:14px;">For Event query's</h4>
            ${siteData.contact.eventQueries.map((item) => `<p>${item}</p>`).join("")}
          </div>
          <div class="contact-box">
            <h4>For other query's</h4>
            ${siteData.contact.accommodation.map((item) => `<p>${item}</p>`).join("")}
            <h4 style="margin-top:14px;">You can also mail us at</h4>
            <p>${siteData.contact.mail}</p>
          </div>
        </div>
      </section>
    </div>
    <div class="footer-bottom">
      <span>Build with ❤ by Team iConnect</span>
      <span>© Team iConnect, GJUS&T, Hisar. All Rights Reserved</span>
    </div>
  `;
}

function initContactForm() {
  const form = byId("contactForm");
  const feedback = byId("formFeedback");
  if (!form || !feedback) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    feedback.textContent = `Thanks ${name}, your message has been received.`;
    form.reset();
  });
}

function initReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function bootstrap() {
  renderNav();
  initMobileNav();
  renderFeatures();
  renderHomeGuests();
  renderHomeEvents();
  renderAllEvents();
  renderGuestPage();
  renderReachPanel();
  renderSocials();
  renderFooter();
  initContactForm();
  initReveal();
}

bootstrap();
