/* ==========================================================================
   LUMIÈRE STORIES — Photography & Wedding Studio (Demo)
   Vanilla JS, no dependencies. Studio details live in SITE_CONFIG and the
   PORTFOLIO / GALLERY / FILMS arrays below — edit those to rebrand.
   ========================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  /* ------------------------------------------------------------------
     1. SITE CONFIG — demo placeholders, replace for a real studio
     ------------------------------------------------------------------ */
  const SITE_CONFIG = {
    brandName: "LUMIÈRE STORIES",
    // WhatsApp / phone in international format, digits only (no +, spaces or dashes)
    whatsappNumber: "919876543210", // DEMO NUMBER — replace
    phoneHref: "tel:+919876543210", // DEMO NUMBER — replace
    instagram: "https://www.instagram.com/", // placeholder — replace with the studio's profile
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
    defaultWhatsAppMessage:
      "Hello LUMIÈRE STORIES, I'd like to check your availability for our wedding photography. Could you please share package details?",
  };

  /* Image helper — local WebP files in assets/images, two sizes per photo:
     "<id>-800.webp" (grids, cards) and "<id>-1600.webp" (lightbox). */
  const img = (id, large) => `assets/images/${id}-${large ? 1600 : 800}.webp`;

  /* ------------------------------------------------------------------
     2. CONTENT — fictional demo stories
     ------------------------------------------------------------------ */
  const PORTFOLIO = [
    { id: "1722952934708-749c22eb2e58", h: 1200, cat: "wedding", title: "The Royal Wedding", loc: "Sangli",
      alt: "Bride in red and groom in an ivory sherwani posing beneath a canopy of warm fairy lights",
      desc: "A regal evening celebration lit by thousands of fairy lights. We balanced grand, formal portraits with the quiet, candid moments between rituals." },
    { id: "1630526720753-aa4e71acf67d", h: 1198, cat: "pre-wedding", title: "A Love Story", loc: "Kolhapur",
      alt: "Couple in traditional wedding attire standing on a rock beside a flowing river",
      desc: "A riverside pre-wedding session under moody monsoon skies — flowing fabric, rushing water and a couple who couldn't stop laughing." },
    { id: "1744804298431-57953e4eaba0", h: 1146, cat: "events", title: "The Grand Celebration", loc: "Pune",
      alt: "Couple raising their hands under a glowing floral arch as cold pyros light up the night",
      desc: "A spectacular reception entrance with a floral arch, cold pyros and four hundred guests cheering the newlyweds on." },
    { id: "1754782915524-714d8534a5df", h: 1200, cat: "wedding", title: "Forever Begins", loc: "Miraj",
      alt: "Groom tenderly kissing the bride's forehead during a traditional wedding ceremony",
      desc: "An intimate family wedding where every ritual carried meaning. The forehead kiss after the varmala said everything." },
    { id: "1735052712464-9d24b69be5f5", h: 1200, cat: "pre-wedding", title: "The Pre-Wedding Diaries", loc: "Mahabaleshwar",
      alt: "Couple in wedding attire embracing on a tree-lined path in the woods",
      desc: "Misty mornings and tree-lined paths in the hills of Mahabaleshwar — a slow, romantic session made for golden light." },
    { id: "1786687054621-a701763e8c58", h: 1200, cat: "wedding", title: "A Maharashtrian Wedding", loc: "Sangli",
      alt: "Couple in a traditional Maharashtrian saree and pheta standing together in a sunlit garden",
      desc: "Nauvari sarees, pheta turbans and mundavalya — a proud celebration of Maharashtrian tradition, photographed with warmth and colour." },
    { id: "1727430256509-0f897d6f4765", h: 1200, cat: "engagement", title: "The Engagement Story", loc: "Kolhapur",
      alt: "Couple exchanging rings beneath a canopy of white flowers at their engagement",
      desc: "A ring ceremony under a canopy of white blooms, with both families gathered close for the moment the rings were exchanged." },
    { id: "1733759414886-6b3a5423ceb3", h: 1200, cat: "candid", title: "Moments of Joy", loc: "Pune",
      alt: "Groom in a saffron turban and bride sharing a joyful candid moment",
      desc: "A wedding full of colour and laughter. We stayed close, stayed quiet and let the happiest moments unfold on their own." },
    { id: "1600685890506-593fdf55949b", h: 1199, cat: "portraits", title: "The Bridal Portraits", loc: "Sangli",
      alt: "Portrait of a bride in red bridal attire with ornate gold jewellery and a veil",
      desc: "An editorial bridal session celebrating heirloom jewellery, intricate embroidery and the bride's confident, radiant smile." },
    { id: "1610173827002-62c0f1f05d04", h: 534, cat: "events", title: "The Celebration Diaries", loc: "Miraj",
      alt: "Women in traditional red and gold outfits dancing together at a family celebration",
      desc: "A sangeet night of dancing aunties, surprise performances and non-stop music — every frame full of energy." },
    { id: "1599462616558-2b75fd26a283", h: 1545, cat: "candid", title: "Two Souls, One Story", loc: "Kolhapur",
      alt: "Groom in a white sherwani kissing the bride in a red and cream lehenga",
      desc: "A tender, unscripted moment between portraits — the kind of frame that becomes the first page of the album." },
    { id: "1621801306185-8c0ccf9c8eb8", h: 534, cat: "wedding", title: "The Wedding Details", loc: "Sangli",
      alt: "Close-up of the couple's hands joined, the bride's hands decorated with intricate mehendi and red bangles",
      desc: "Mehendi, chooda and joined hands — the small details that hold the biggest emotions of the day." },
  ];

  const CAT_LABEL = { wedding: "Wedding", "pre-wedding": "Pre-Wedding", candid: "Candid", engagement: "Engagement", portraits: "Portraits", events: "Events",
    bride: "Bride", groom: "Groom", couple: "Couple", decor: "Decor", haldi: "Haldi", mehendi: "Mehendi", reception: "Reception", family: "Family" };

  const GALLERY = [
    { id: "1587271407850-8d438ca9fdf2", h: 534, cat: "wedding", title: "Pheras under the canopy", alt: "Couple performing a wedding ritual under a floral canopy in a decorated hall" },
    { id: "1610173827043-9db50e0d8ef9", h: 1200, cat: "bride", title: "Bridal grace", alt: "Bride in red with gold jewellery and mehendi, looking down softly" },
    { id: "1681717075175-19feb7a6f664", h: 1202, cat: "haldi", title: "Haldi smiles", alt: "Bride in a yellow saree with marigold decorations smiling at her haldi" },
    { id: "1759906766080-82b785c61f51", h: 1200, cat: "groom", title: "The groom", alt: "Groom in an ivory sherwani and safa standing confidently" },
    { id: "1505932794465-147d1f1b2c97", h: 534, cat: "mehendi", title: "Mehendi circle", alt: "Many hands decorated with intricate henna patterns held together" },
    { id: "1775566417313-e57b7c47716c", h: 1200, cat: "couple", title: "Garden portraits", alt: "Newlywed couple in traditional attire posing in a garden" },
    { id: "1745573673416-66e829644ae9", h: 449, cat: "decor", title: "Reception stage", alt: "Wedding stage decorated with red and white flowers" },
    { id: "1774020039205-7ea6e6eff43a", h: 534, cat: "engagement", title: "Exchange of rings", alt: "Hands exchanging rings during a traditional ceremony" },
    { id: "1770387688486-397ff1afdb2c", h: 534, cat: "reception", title: "First dance", alt: "Couple dancing at their wedding reception" },
    { id: "1661274766834-4a700d13dabb", h: 1202, cat: "family", title: "Family portrait", alt: "Family dressed in festive outfits posing together in a garden" },
    { id: "1587271315307-eaebc181c749", h: 1200, cat: "bride", title: "Getting ready", alt: "Bride smiling as her maang tikka is adjusted" },
    { id: "1741201864879-c5e7f81c98b0", h: 534, cat: "wedding", title: "Blessings", alt: "Bride with folded hands during a Hindu wedding ceremony surrounded by family" },
    { id: "1729347917808-e3e35a462fec", h: 1422, cat: "groom", title: "Classic sherwani", alt: "Groom in a white sherwani and pink safa standing against a green wall" },
    { id: "1780227102903-956ab5da42d0", h: 1200, cat: "haldi", title: "Turmeric blessings", alt: "Bride in yellow surrounded by family hands covered in turmeric paste" },
    { id: "1738849760236-541fcdd3931d", h: 1200, cat: "mehendi", title: "Floral mehendi", alt: "Bride's hands with mehendi holding floral jewellery" },
    { id: "1735052712489-f45220126a0c", h: 1224, cat: "couple", title: "Walking together", alt: "Bride and groom walking hand in hand down a garden path" },
    { id: "1560505605-f300b17028d6", h: 637, cat: "decor", title: "Fresh garlands", alt: "Red and white flower garlands" },
    { id: "1726068449701-4e11c5d64b11", h: 534, cat: "reception", title: "On the stage", alt: "Couple seated together on an elegant reception stage" },
    { id: "1583878448938-0de973eec3b9", h: 534, cat: "family", title: "Bridesmaids", alt: "Group of women in matching pink outfits seated together" },
    { id: "1610047614301-13c63f00c032", h: 1200, cat: "bride", title: "Golden hour bride", alt: "Bride in a red and gold lehenga posing against a golden backdrop" },
    { id: "1627913755902-dddc0b4c8c63", h: 1200, cat: "groom", title: "Royal safa", alt: "Close portrait of a groom in a yellow sherwani and embellished safa" },
    { id: "1764286954620-28029fbae9b6", h: 534, cat: "couple", title: "Garlanded", alt: "Bride and groom wearing flower garlands seated together" },
    { id: "1730003727902-3643640a3d43", h: 534, cat: "mehendi", title: "Mehendi in progress", alt: "Artist applying intricate henna to a bride's arm" },
    { id: "1542042161784-26ab9e041e89", h: 534, cat: "engagement", title: "The ring", alt: "Couple holding hands, showing a gold engagement ring" },
    { id: "1599335972861-b17756cf8141", h: 800, cat: "decor", title: "Puja corner", alt: "Floral decoration around a traditional puja setup" },
    { id: "1727430201245-fb796167e302", h: 560, cat: "family", title: "Family embrace", alt: "Family members hugging the bride during the celebration" },
    { id: "1617627143750-d86bc21e42bb", h: 1200, cat: "bride", title: "Silk and gold", alt: "Woman in a pink and orange silk saree with gold jewellery between two trees" },
    { id: "1744804298395-25ef35052d25", h: 1200, cat: "couple", title: "A tender kiss", alt: "Couple sharing a tender moment beneath hanging flower strings" },
    { id: "1525135927526-a01d9e5e9484", h: 1200, cat: "mehendi", title: "Mehendi details", alt: "Close-up of a bride's hands decorated with mehendi against a bright lehenga" },
    { id: "1735052709798-2abcc8c0d6e1", h: 534, cat: "groom", title: "First look", alt: "Groom in a turban with the bride framed through a circular window" },
  ];

  const FILMS = [
    { poster: "1754782921180-674165dec130", title: "Wedding Highlights",
      desc: "A 3–5 minute highlight film set to music — the vows, the rituals, the emotions and the dance floor, cut into a story you'll want to share." },
    { poster: "1686294590361-77d765d76aad", title: "Pre-Wedding Film",
      desc: "A short cinematic film from your pre-wedding shoot, perfect for your wedding invite, social media or the reception screen." },
    { poster: "1760080903536-736f18eddcac", title: "Cinematic Wedding Story",
      desc: "A longer documentary-style film that weaves together speeches, family voices and every ceremony across your celebration." },
  ];

  /* ------------------------------------------------------------------
     3. Helpers
     ------------------------------------------------------------------ */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const waLink = (msg) => `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg || SITE_CONFIG.defaultWhatsAppMessage)}`;
  let lastFocus = null;

  /* ------------------------------------------------------------------
     4. Header: transparent → solid, mobile menu, active link
     ------------------------------------------------------------------ */
  const header = $("#siteHeader");
  const navToggle = $("#navToggle");
  const backToTop = $("#backToTop");

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-solid", y > 60);
    backToTop.classList.toggle("is-visible", y > 800);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const setMenu = (open) => {
    document.body.classList.toggle("nav-open", open);
    document.body.classList.toggle("no-scroll", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  navToggle.addEventListener("click", () => setMenu(!document.body.classList.contains("nav-open")));
  $$("#mainNav a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.classList.contains("nav-open")) setMenu(false); });

  // Highlight the nav link of the section in view
  const navLinks = $$('.main-nav ul a');
  const sectionMap = navLinks.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const navObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sectionMap.forEach((s) => navObs.observe(s));
  }

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ------------------------------------------------------------------
     5. External links (WhatsApp, Instagram, socials, phone)
     ------------------------------------------------------------------ */
  const setExternal = (el, href) => { el.href = href; el.target = "_blank"; el.rel = "noopener"; };
  $$("[data-whatsapp]").forEach((el) => setExternal(el, waLink()));
  $$("[data-instagram]").forEach((el) => setExternal(el, SITE_CONFIG.instagram));
  $$("[data-facebook]").forEach((el) => setExternal(el, SITE_CONFIG.facebook));
  $$("[data-youtube]").forEach((el) => setExternal(el, SITE_CONFIG.youtube));
  $$("[data-phone]").forEach((el) => { el.href = SITE_CONFIG.phoneHref; });

  /* ------------------------------------------------------------------
     6. Scroll reveal
     ------------------------------------------------------------------ */
  let revealObs = null;
  if ("IntersectionObserver" in window) {
    revealObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); revealObs.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach((el) => revealObs.observe(el));
  } else {
    $$(".reveal").forEach((el) => el.classList.add("is-visible"));
  }

  /* ------------------------------------------------------------------
     7. Masonry grids with filters (portfolio + gallery)
     ------------------------------------------------------------------ */
  function tileHTML(item, index, kind) {
    const isPortfolio = kind === "portfolio";
    return `
      <button type="button" class="tile is-entering" data-index="${index}" style="animation-delay:${Math.min(index, 8) * 60}ms"
        aria-label="${escapeHTML(isPortfolio ? `View story: ${item.title}, ${CAT_LABEL[item.cat]}, ${item.loc}` : `View photo: ${item.title}`)}">
        <img src="${img(item.id)}" alt="${escapeHTML(item.alt)}" width="800" height="${item.h}" loading="lazy" decoding="async">
        <span class="tile-info">
          <span class="tile-cat">${CAT_LABEL[item.cat]}</span>
          <span class="tile-title">${escapeHTML(item.title)}</span>
          ${isPortfolio ? `<span class="tile-loc"><i class="fa-solid fa-location-dot" aria-hidden="true"></i>${escapeHTML(item.loc)}, Maharashtra</span><span class="tile-view">View Story</span>` : ""}
        </span>
      </button>`;
  }

  function setupGrid({ grid, filters, data, kind }) {
    let visible = data.slice();
    const render = (filter) => {
      visible = filter === "all" ? data.slice() : data.filter((d) => d.cat === filter);
      grid.innerHTML = visible.map((d, i) => tileHTML(d, i, kind)).join("");
      $$("img", grid).forEach((im) => im.addEventListener("error", () => im.parentElement.classList.add("img-fallback"), { once: true }));
    };
    const select = (filter) => {
      $$(".filter-btn", filters).forEach((b) => {
        const on = b.dataset.filter === filter;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", String(on));
      });
      render(filter);
    };
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (btn) select(btn.dataset.filter);
    });
    grid.addEventListener("click", (e) => {
      const tile = e.target.closest(".tile");
      if (tile) openLightbox(visible, Number(tile.dataset.index), kind);
    });
    render("all");
    return { select };
  }

  const portfolio = setupGrid({ grid: $("#portfolioGrid"), filters: $("#portfolioFilters"), data: PORTFOLIO, kind: "portfolio" });
  setupGrid({ grid: $("#galleryGrid"), filters: $("#galleryFilters"), data: GALLERY, kind: "gallery" });

  // Footer category links pre-filter the portfolio
  $$("[data-filter-link]").forEach((a) => a.addEventListener("click", () => portfolio.select(a.dataset.filterLink)));

  /* ------------------------------------------------------------------
     8. Lightbox / story modal (keyboard + touch swipe)
     ------------------------------------------------------------------ */
  const lb = $("#lightbox");
  const lbImg = $("#lbImg");
  let lbItems = [], lbIndex = 0, lbKind = "gallery";

  function showLightboxItem() {
    const item = lbItems[lbIndex];
    const isPortfolio = lbKind !== "gallery";
    lbImg.src = img(item.id, true);
    lbImg.alt = item.alt;
    $("#lbMeta").textContent = isPortfolio ? `${CAT_LABEL[item.cat] || item.cat} · ${item.loc}, Maharashtra` : CAT_LABEL[item.cat];
    $("#lbTitle").textContent = item.title;
    $("#lbDesc").textContent = item.desc || "";
    $("#lbDesc").hidden = !item.desc;
    $("#lbCount").textContent = `${lbIndex + 1} / ${lbItems.length}`;
    $("#lbCaption").toggleAttribute("data-simple", !isPortfolio);
    const multi = lbItems.length > 1;
    $("#lbPrev").hidden = !multi;
    $("#lbNext").hidden = !multi;
    // Preload neighbours for smooth navigation
    if (multi) [1, -1].forEach((d) => { new Image().src = img(lbItems[(lbIndex + d + lbItems.length) % lbItems.length].id, true); });
  }

  function openLightbox(items, index, kind) {
    lbItems = items; lbIndex = index; lbKind = kind;
    lastFocus = document.activeElement;
    lb.setAttribute("aria-label", kind === "gallery" ? "Photo viewer" : "Story viewer");
    showLightboxItem();
    lb.hidden = false;
    document.body.classList.add("no-scroll");
    $("#lbClose").focus();
  }
  function closeLightbox() {
    lb.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }
  const stepLightbox = (d) => { lbIndex = (lbIndex + d + lbItems.length) % lbItems.length; showLightboxItem(); };

  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => stepLightbox(-1));
  $("#lbNext").addEventListener("click", () => stepLightbox(1));
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.id === "lbStage") closeLightbox(); });

  // Touch swipe
  let touchX = null;
  lb.addEventListener("touchstart", (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50 && lbItems.length > 1) stepLightbox(dx < 0 ? 1 : -1);
    touchX = null;
  });

  // Featured story "Explore Full Story" opens a story slideshow
  const FEATURED_STORY = [
    { id: "1741201864710-8c031ebd13bc", cat: "wedding", loc: "Sangli", title: "A Day Filled With Forever", alt: "Bride and groom seated together on a golden wedding stage",
      desc: "Ananya & Rohan's three-day celebration in Sangli — a sample story told through candid and cinematic photographs." },
    { id: "1754782915842-aa4fca6c203a", cat: "wedding", loc: "Sangli", title: "Showered With Blessings", alt: "Family showering the couple with flower petals",
      desc: "Petals, laughter and both families crowding in close as the ceremony reached its happiest moment." },
    { id: "1680490964562-60ee7fd82944", cat: "wedding", loc: "Sangli", title: "Hands That Hold", alt: "Close-up of the couple's hands joined during a ritual",
      desc: "The quiet detail at the heart of the ceremony — two hands joined as the priest recited the vows." },
    { id: "1679937698873-6065742c8d32", cat: "wedding", loc: "Sangli", title: "Sacred Promises", alt: "Bride with folded hands as the groom ties a ritual thread",
      desc: "Every ritual photographed with patience and respect, so nothing important was missed." },
    { id: "1740417265999-42c749fcbed3", cat: "wedding", loc: "Sangli", title: "Together, Always", alt: "Bride and groom holding hands wearing flower garlands",
      desc: "Garlanded and grinning — the couple stepping into married life, hand in hand." },
  ];
  $$("[data-open-story]").forEach((b) => b.addEventListener("click", () => openLightbox(FEATURED_STORY, 0, "story")));

  /* ------------------------------------------------------------------
     9. Film preview modal (no video files in this demo)
     ------------------------------------------------------------------ */
  const filmModal = $("#filmModal");
  function openFilm(i) {
    const f = FILMS[i];
    lastFocus = document.activeElement;
    $("#filmPoster").src = img(f.poster, true);
    $("#filmPoster").alt = "";
    $("#filmTitle").textContent = f.title;
    $("#filmDesc").textContent = f.desc;
    filmModal.hidden = false;
    document.body.classList.add("no-scroll");
    $("#filmClose").focus();
  }
  function closeFilm() {
    filmModal.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }
  $$("[data-film]").forEach((b) => b.addEventListener("click", () => openFilm(Number(b.dataset.film))));
  $("#filmClose").addEventListener("click", closeFilm);
  filmModal.addEventListener("click", (e) => { if (e.target === filmModal) closeFilm(); });
  $("#filmEnquire").addEventListener("click", () => { closeFilm(); preselectService("Cinematic Films"); });

  // Global keyboard handling for overlays (Esc, arrows, focus trap)
  document.addEventListener("keydown", (e) => {
    const openOverlay = !lb.hidden ? lb : !filmModal.hidden ? filmModal : null;
    if (!openOverlay) return;
    if (e.key === "Escape") { openOverlay === lb ? closeLightbox() : closeFilm(); }
    if (openOverlay === lb && e.key === "ArrowRight") stepLightbox(1);
    if (openOverlay === lb && e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "Tab") {
      const focusables = $$("button:not([hidden]), a[href]", openOverlay).filter((el) => el.offsetParent !== null);
      if (!focusables.length) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ------------------------------------------------------------------
     10. Testimonial carousel (buttons, dots, autoplay, swipe)
     ------------------------------------------------------------------ */
  const track = $("#sliderTrack");
  const slides = $$(".slide", track);
  const dotsWrap = $("#sliderDots");
  let slideIndex = 0, autoplay = null;

  slides.forEach((_, i) => {
    const d = document.createElement("button");
    d.type = "button";
    d.setAttribute("role", "tab");
    d.setAttribute("aria-label", `Show testimonial ${i + 1}`);
    d.addEventListener("click", () => { goTo(i); restart(); });
    dotsWrap.appendChild(d);
  });
  function goTo(i) {
    slideIndex = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    slides.forEach((s, k) => s.setAttribute("aria-hidden", String(k !== slideIndex)));
    $$("button", dotsWrap).forEach((d, k) => d.setAttribute("aria-selected", String(k === slideIndex)));
  }
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const restart = () => { clearInterval(autoplay); if (!reduceMotion) autoplay = setInterval(() => goTo(slideIndex + 1), 6500); };
  $("#sliderPrev").addEventListener("click", () => { goTo(slideIndex - 1); restart(); });
  $("#sliderNext").addEventListener("click", () => { goTo(slideIndex + 1); restart(); });
  const slider = $("#testimonialSlider");
  slider.addEventListener("mouseenter", () => clearInterval(autoplay));
  slider.addEventListener("mouseleave", restart);
  slider.addEventListener("focusin", () => clearInterval(autoplay));
  let sx = null;
  slider.addEventListener("touchstart", (e) => { sx = e.changedTouches[0].clientX; }, { passive: true });
  slider.addEventListener("touchend", (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 40) { goTo(slideIndex + (dx < 0 ? 1 : -1)); restart(); }
    sx = null;
  });
  goTo(0); restart();

  /* ------------------------------------------------------------------
     11. FAQ accordion
     ------------------------------------------------------------------ */
  $$(".acc-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".acc-item");
      const open = !item.classList.contains("is-open");
      $$(".acc-item.is-open").forEach((o) => { if (o !== item) { o.classList.remove("is-open"); $(".acc-btn", o).setAttribute("aria-expanded", "false"); } });
      item.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  /* ------------------------------------------------------------------
     12. Booking form — validation & demo success (nothing is sent)
     ------------------------------------------------------------------ */
  const form = $("#bookingForm");
  const success = $("#formSuccess");
  const dateInput = $("#fDate");

  // Earliest selectable date = today (local time)
  const todayISO = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };
  dateInput.min = todayISO();

  function preselectService(value) {
    $$('input[name="services"]', form).forEach((c) => { if (c.value === value) c.checked = true; });
  }
  // Service "Enquire" links and package buttons pre-fill the form
  $$("[data-service]").forEach((a) => a.addEventListener("click", () => preselectService(a.dataset.service)));
  $$("[data-package]").forEach((a) => a.addEventListener("click", () => {
    const msg = $("#fMessage");
    if (!msg.value.trim()) msg.value = `I'm interested in the ${a.dataset.package} collection. Please share pricing for our dates.`;
    if (a.dataset.package === "Luxury Collection") preselectService("Complete Photography Package");
  }));

  const normalisePhone = (v) => v.replace(/[\s-]/g, "").replace(/^(\+91|0091|91(?=\d{10}$)|0(?=\d{10}$))/, "");
  const rules = {
    fName: (v) => v.trim().length >= 2 || "Please enter your full name.",
    fPhone: (v) => /^[6-9]\d{9}$/.test(normalisePhone(v)) || "Enter a valid 10-digit Indian mobile number (starting with 6–9).",
    fEmail: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Please enter a valid email address.",
    fType: (v) => !!v || "Please choose an event type.",
    fDate: (v) => {
      if (!v) return "Please choose your event date.";
      if (!/^\d{4}-\d{2}-\d{2}$/.test(v) || isNaN(new Date(v + "T00:00:00"))) return "Please enter a valid date.";
      if (v < todayISO()) return "The event date can't be in the past.";
      const max = new Date(); max.setFullYear(max.getFullYear() + 3);
      if (new Date(v + "T00:00:00") > max) return "Please choose a date within the next 3 years.";
      return true;
    },
    fLocation: (v) => v.trim().length >= 2 || "Please tell us where the event will be.",
  };

  function validateField(id) {
    const input = $("#" + id);
    const result = rules[id](input.value);
    const field = input.closest(".field");
    const msg = result === true ? "" : result;
    field.classList.toggle("has-error", !!msg);
    $(".error", field).textContent = msg;
    input.setAttribute("aria-invalid", String(!!msg));
    return !msg;
  }
  Object.keys(rules).forEach((id) => {
    const input = $("#" + id);
    input.addEventListener("blur", () => { if (input.value) validateField(id); });
    input.addEventListener("input", () => { if (input.closest(".field").classList.contains("has-error")) validateField(id); });
    input.addEventListener("change", () => { if (input.closest(".field").classList.contains("has-error")) validateField(id); });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = Object.keys(rules).map((id) => validateField(id));
    if (results.includes(false)) {
      const firstBad = $(".field.has-error input, .field.has-error select", form);
      if (firstBad) firstBad.focus();
      return;
    }
    const data = new FormData(form);
    const services = data.getAll("services");
    const name = data.get("name").trim();
    const prettyDate = new Date(data.get("date") + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    const waMsg = [
      `Hello ${SITE_CONFIG.brandName}, I'd like to check availability.`,
      `Name: ${name}`,
      `Event: ${data.get("eventType")} on ${prettyDate}`,
      `Location: ${data.get("location").trim()} (${data.get("days")} day/s)`,
      services.length ? `Services: ${services.join(", ")}` : "",
      data.get("message").trim() ? `Message: ${data.get("message").trim()}` : "",
    ].filter(Boolean).join("\n");

    // Demo only: nothing is sent or stored.
    $("#successName").textContent = name.split(" ")[0];
    setExternal($("#successWhatsapp"), waLink(waMsg));
    form.hidden = true;
    success.hidden = false;
    success.focus();
  });

  $("#formReset").addEventListener("click", () => {
    form.reset();
    $$(".field.has-error", form).forEach((f) => f.classList.remove("has-error"));
    success.hidden = true;
    form.hidden = false;
    $("#fName").focus();
  });
})();
