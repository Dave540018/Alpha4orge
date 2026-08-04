const COLLECTIONS = [
  {
    id: "cozy-study",
    eyebrow: "Study aesthetic",
    title: "Cozy Study Essentials",
    subtitle: "A softly curated desk-and-room collection",
    theme: {
      accent: "#b46bff",
      accentSoft: "#f0d8ff",
      accentDark: "#7141a6",
      surfaceTint: "rgba(239, 222, 255, 0.72)"
    },
    image: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/PurpleAmazonKit01.png",
    video: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/PurpleAmazonKit01.mp4",
    poster: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/PurpleAmazonKit01.png",
    backgroundImage: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/PurpleAmazonKit01.png",
    backgroundVideo: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/PurpleAmazonKit01.mp4",
    products: [
      {
        id: "ambient-pen-stand",
        position: "top-left",
        title: "Pen Stand with Ambient Night Light & Mobile Holder",
        shortLabel: "Warm desk glow",
        image: "https://m.media-amazon.com/images/I/61Kk2VGnl1L._SL1500_.jpg",
        amazonUrl: "https://link.amazon/B03ouWVKb",
        tint: "#ffc794",
        description: "A practical pen organizer with a soft ambient glow that makes a desk feel warmer and more inviting.",
        features: ["Ambient bedside or desk lighting", "Keeps everyday stationery organised", "Compact decorative design"]
      },
      {
        id: "wireless-headphones",
        position: "top-right",
        title: "Wireless Bluetooth On-Ear Headphones with Microphone",
        shortLabel: "Focus and music",
        image: "https://m.media-amazon.com/images/I/41lArSiD5hL._SL1200_.jpg",
        amazonUrl: "https://link.amazon/B03Sr5dBE",
        tint: "#d5d5d7",
        description: "Lightweight wireless headphones for study sessions, music, calls and everyday listening.",
        features: ["Wireless Bluetooth listening", "Built-in microphone", "Comfortable on-ear design"]
      },
      {
        id: "pastel-gel-pens",
        position: "bottom-left",
        title: "Pastel Gel Pens for Writing with Highlighter",
        shortLabel: "Pretty note taking",
        image: "https://m.media-amazon.com/images/I/61dOAZPNFiL._SL1500_.jpg",
        amazonUrl: "https://link.amazon/B0bWsy0CA",
        tint: "#f2a4e3",
        description: "A coordinated pastel pen set for journaling, planning, highlighting and colourful study notes.",
        features: ["Coordinated pastel shades", "Useful for notes and journaling", "Smooth everyday writing"]
      },
      {
        id: "speaker-alarm-clock",
        position: "bottom-right",
        title: "Digital Alarm Clock with Speaker",
        shortLabel: "Wake, study, repeat",
        image: "https://m.media-amazon.com/images/I/51h8gy88kgL._SL1000_.jpg",
        amazonUrl: "https://link.amazon/B06wPRJxL",
        tint: "#d5d5d7",
        description: "A clear digital clock designed for a bedside table or study desk, with useful speaker features.",
        features: ["Large easy-to-read display", "Useful bedside alarm", "Compact desk-friendly body"]
      }
    ]
  },
  {
    id: "soft-workspace",
    eyebrow: "Minimal workspace",
    title: "Soft Productivity Setup",
    subtitle: "Calm tools for focused work",
    theme: {
      accent: "#5f9ed8",
      accentSoft: "#dceeff",
      accentDark: "#356c9f",
      surfaceTint: "rgba(218, 238, 255, 0.74)"
    },
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1800&q=90",
    video: "",
    poster: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1800&q=90",
    backgroundImage: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1800&q=90",
    backgroundVideo: "",
    products: [
      {
        id: "desk-lamp",
        position: "top-left",
        title: "Minimal LED Desk Lamp",
        shortLabel: "Soft task lighting",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
        amazonUrl: "https://www.amazon.in/?tag=YOUR-AFFILIATE-TAG",
        tint: "#cde8ff",
        description: "A clean desk lamp for reading and focused work, designed to keep the workspace visually uncluttered.",
        features: ["Adjustable lighting", "Minimal footprint", "Suitable for study desks"]
      },
      {
        id: "keyboard",
        position: "top-right",
        title: "Compact Wireless Keyboard",
        shortLabel: "Clean typing setup",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
        amazonUrl: "https://www.amazon.in/?tag=YOUR-AFFILIATE-TAG",
        tint: "#dbe8f3",
        description: "A compact wireless keyboard that keeps the desk tidy while remaining comfortable for daily typing.",
        features: ["Wireless connection", "Compact layout", "Desk-friendly design"]
      },
      {
        id: "notebook",
        position: "bottom-left",
        title: "Hardbound Productivity Notebook",
        shortLabel: "Plans in one place",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85",
        amazonUrl: "https://www.amazon.in/?tag=YOUR-AFFILIATE-TAG",
        tint: "#bfddf5",
        description: "A simple hardbound notebook for project notes, daily planning and focused task lists.",
        features: ["Durable hard cover", "Useful for planning", "Portable size"]
      },
      {
        id: "desk-speaker",
        position: "bottom-right",
        title: "Compact Bluetooth Desk Speaker",
        shortLabel: "Low-volume ambience",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
        amazonUrl: "https://www.amazon.in/?tag=YOUR-AFFILIATE-TAG",
        tint: "#cbd7e2",
        description: "A compact speaker for soft background music, podcasts and light audio during work sessions.",
        features: ["Bluetooth playback", "Compact body", "Suitable for desk use"]
      }
    ]
  },
  {
    id: "reading-corner",
    eyebrow: "Slow living",
    title: "Quiet Reading Corner",
    subtitle: "Small comforts for an unhurried evening",
    theme: {
      accent: "#d7875c",
      accentSoft: "#ffe6d7",
      accentDark: "#9a5434",
      surfaceTint: "rgba(255, 229, 214, 0.76)"
    },
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=90",
    video: "",
    poster: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=90",
    backgroundImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=90",
    backgroundVideo: "",
    products: [
      {
        id: "reading-light",
        position: "top-left",
        title: "Warm Rechargeable Reading Light",
        shortLabel: "Gentle evening light",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=85",
        amazonUrl: "https://www.amazon.in/?tag=YOUR-AFFILIATE-TAG",
        tint: "#ffd2b8",
        description: "A warm reading light that creates a softer atmosphere for books, journaling and winding down.",
        features: ["Warm light tone", "Rechargeable design", "Portable and compact"]
      },
      {
        id: "book-rest",
        position: "top-right",
        title: "Adjustable Book and Tablet Stand",
        shortLabel: "Hands-free reading",
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=85",
        amazonUrl: "https://www.amazon.in/?tag=YOUR-AFFILIATE-TAG",
        tint: "#ead8ca",
        description: "A practical stand for holding books or a tablet at a more comfortable reading angle.",
        features: ["Adjustable viewing angle", "Supports books and tablets", "Foldable design"]
      },
      {
        id: "soft-blanket",
        position: "bottom-left",
        title: "Soft Throw Blanket",
        shortLabel: "Extra comfort",
        image: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=900&q=85",
        amazonUrl: "https://www.amazon.in/?tag=YOUR-AFFILIATE-TAG",
        tint: "#ffc6a8",
        description: "A soft throw blanket for a chair, sofa or bed, adding warmth to a calm reading space.",
        features: ["Soft comfortable texture", "Easy room styling", "Useful across seasons"]
      },
      {
        id: "ceramic-mug",
        position: "bottom-right",
        title: "Ceramic Tea and Coffee Mug",
        shortLabel: "A warm drink nearby",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85",
        amazonUrl: "https://www.amazon.in/?tag=YOUR-AFFILIATE-TAG",
        tint: "#e5cab9",
        description: "A simple ceramic mug for tea, coffee or cocoa during a quiet reading session.",
        features: ["Comfortable handle", "Everyday ceramic body", "Suitable for hot drinks"]
      }
    ]
  }
];

const track = document.getElementById("collectionTrack");
const viewport = document.getElementById("collectionViewport");
const previousButton = document.getElementById("previousCollection");
const nextButton = document.getElementById("nextCollection");
const dotsContainer = document.getElementById("collectionDots");
const currentCollection = document.getElementById("currentCollection");
const totalCollections = document.getElementById("totalCollections");
const pageHeading = document.getElementById("pageHeading");
const ambientImage = document.getElementById("ambientImage");
const ambientVideo = document.getElementById("ambientVideo");
const preview = document.getElementById("productPreview");
const previewScrim = document.getElementById("previewScrim");
const closePreviewButton = document.getElementById("closePreview");
const previewImage = document.getElementById("previewImage");
const previewTitle = document.getElementById("previewTitle");
const previewDescription = document.getElementById("previewDescription");
const previewFeatures = document.getElementById("previewFeatures");
const previewLink = document.getElementById("previewLink");
const previewLabel = document.getElementById("previewLabel");

let activeIndex = 0;
let dragStartX = 0;
let dragCurrentX = 0;
let isDragging = false;
let hidePreviewTimer = null;
let activePreviewCard = null;
let isMuted = true;
let likesState = {};

const AUTO_ROTATE_MS = 9000;
let autoRotateTimer = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function productCardTemplate(product) {
  return `
    <a
      class="product-card"
      data-product-id="${escapeHtml(product.id)}"
      data-position="${escapeHtml(product.position)}"
      style="--product-tint:${escapeHtml(product.tint)}"
      href="${escapeHtml(product.amazonUrl)}"
      target="_blank"
      rel="sponsored noopener noreferrer"
      aria-label="${escapeHtml(product.title)} — open on Amazon"
    >
      <div class="product-image-wrap">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.title)}" loading="lazy" />
      </div>
      <div class="product-copy">
        <h3>${escapeHtml(product.title)}</h3>
        <p>${escapeHtml(product.shortLabel)}</p>
      </div>
    </a>
  `;
}

function mobileProductPillTemplate(product) {
  return `
    <div class="mobile-product-pill" data-product-id="${escapeHtml(product.id)}">
      <img class="pill-img" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.title)}" />
      <div class="pill-info">
        <h4>${escapeHtml(product.title)}</h4>
        <p>${escapeHtml(product.shortLabel)}</p>
      </div>
      <a class="pill-buy-btn" href="${escapeHtml(product.amazonUrl)}" target="_blank" rel="sponsored noopener noreferrer">
        Buy ↗
      </a>
    </div>
  `;
}

function collectionTemplate(collection, index) {
  const hasVideo = Boolean(collection.video);
  const media = hasVideo
    ? `
      <video
        class="hero-media"
        src="${escapeHtml(collection.video)}"
        poster="${escapeHtml(collection.poster || collection.image)}"
        ${isMuted ? "muted" : ""}
        loop
        playsinline
        preload="${index === 0 ? "auto" : "metadata"}"
      ></video>
    `
    : `
      <img class="hero-media" src="${escapeHtml(collection.image)}" alt="${escapeHtml(collection.title)}" loading="${index === 0 ? "eager" : "lazy"}" />
    `;

  const likesCount = likesState[collection.id] ? 1241 : 1240;

  return `
    <article class="collection-slide" data-collection-id="${escapeHtml(collection.id)}" aria-label="${escapeHtml(collection.title)}">
      <div class="collection-stage">
        <div class="hero-frame">${media}</div>
        ${collection.products.map(productCardTemplate).join("")}

        <!-- Mobile YouTube Shorts / Reels Floating Action Bar -->
        <div class="mobile-actions-bar">
          <button class="action-btn like-btn ${likesState[collection.id] ? "liked" : ""}" type="button" data-action="like" aria-label="Like post">
            <span class="action-icon-circle">❤️</span>
            <span class="action-label">${likesCount}</span>
          </button>
          <button class="action-btn mute-btn" type="button" data-action="mute" aria-label="Toggle sound">
            <span class="action-icon-circle sound-icon">${isMuted ? "🔇" : "🔊"}</span>
            <span class="action-label">${isMuted ? "Muted" : "Sound"}</span>
          </button>
          <button class="action-btn share-btn" type="button" data-action="share" aria-label="Share post">
            <span class="action-icon-circle">↗️</span>
            <span class="action-label">Share</span>
          </button>
        </div>

        <!-- Mobile Bottom Amazon Products Shelf -->
        <div class="mobile-products-drawer">
          <div class="drawer-header">
            <span>Featured Amazon Finds (${collection.products.length})</span>
            <span>Swipe ➔</span>
          </div>
          <div class="drawer-products-scroll">
            ${collection.products.map(mobileProductPillTemplate).join("")}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCollections() {
  track.innerHTML = COLLECTIONS.map(collectionTemplate).join("");
  dotsContainer.innerHTML = COLLECTIONS.map((_, index) => `
    <button class="collection-dot ${index === 0 ? "is-active" : ""}" type="button" data-slide-index="${index}" aria-label="Go to collection ${index + 1}"></button>
  `).join("");

  totalCollections.textContent = String(COLLECTIONS.length).padStart(2, "0");
  bindProductEvents();
  bindMobileFeedActions();
}

function applyTheme(collection) {
  const root = document.documentElement;
  root.style.setProperty("--accent", collection.theme.accent);
  root.style.setProperty("--accent-soft", collection.theme.accentSoft);
  root.style.setProperty("--accent-dark", collection.theme.accentDark);
}

async function safePlay(video) {
  if (!video) return;
  video.muted = isMuted;
  video.playsInline = true;
  try { await video.play(); } catch (_) {}
}

function syncActiveHeroVideo() {
  document.querySelectorAll("video.hero-media").forEach((video) => {
    const slide = video.closest(".collection-slide");
    const isActive = slide === document.querySelectorAll(".collection-slide")[activeIndex];
    if (isActive) safePlay(video);
    else video.pause();
  });
}

async function updateAmbientBackground(collection) {
  if (isMobileFeed()) return;
  ambientImage.classList.remove("is-visible");
  ambientVideo.classList.remove("is-visible");
  ambientVideo.pause();

  if (collection.backgroundVideo) {
    if (ambientVideo.src !== collection.backgroundVideo) {
      ambientVideo.src = collection.backgroundVideo;
      ambientVideo.load();
    }
    ambientVideo.classList.add("is-visible");
    await safePlay(ambientVideo);
  } else {
    ambientImage.src = collection.backgroundImage || collection.poster || collection.image;
    ambientImage.classList.add("is-visible");
  }
}

function isMobileFeed() {
  return window.matchMedia("(max-width: 680px)").matches;
}

function updateCarousel({ animate = true, fromScroll = false } = {}) {
  if (isMobileFeed()) {
    track.style.transform = "none";
    if (!fromScroll) {
      const slides = document.querySelectorAll(".collection-slide");
      const targetSlide = slides[activeIndex];
      if (targetSlide) {
        viewport.scrollTo({ top: targetSlide.offsetTop, behavior: animate ? "smooth" : "auto" });
      }
    }
  } else {
    if (!animate) track.classList.add("no-transition");
    track.style.transform = `translate3d(-${activeIndex * 100}%, 0, 0)`;
    requestAnimationFrame(() => track.classList.remove("no-transition"));
  }

  const collection = COLLECTIONS[activeIndex];
  pageHeading.textContent = collection.title;
  currentCollection.textContent = String(activeIndex + 1).padStart(2, "0");

  document.querySelectorAll(".collection-dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === activeIndex);
  });

  previousButton.disabled = COLLECTIONS.length <= 1;
  nextButton.disabled = COLLECTIONS.length <= 1;
  applyTheme(collection);
  updateAmbientBackground(collection);
  syncActiveHeroVideo();
  closePreview();
}

function normaliseCollectionIndex(index) {
  if (!COLLECTIONS.length) return 0;
  return (index + COLLECTIONS.length) % COLLECTIONS.length;
}

function goToCollection(index) {
  activeIndex = normaliseCollectionIndex(index);
  updateCarousel();
}

function findProductById(productId) {
  for (const collection of COLLECTIONS) {
    const product = collection.products.find(item => item.id === productId);
    if (product) return product;
  }
  return null;
}

function openPreview(product) {
  clearTimeout(hidePreviewTimer);
  previewImage.src = product.image;
  previewImage.alt = product.title;
  previewTitle.textContent = product.title;
  previewDescription.textContent = product.description;
  previewLabel.textContent = product.shortLabel || "Featured pick";
  previewLink.href = product.amazonUrl;
  previewFeatures.innerHTML = product.features.map(feature => `<li>${escapeHtml(feature)}</li>`).join("");

  preview.classList.add("is-open");
  preview.setAttribute("aria-hidden", "false");
  previewScrim.classList.add("is-visible");
}

function closePreview() {
  clearTimeout(hidePreviewTimer);
  activePreviewCard = null;
  preview.classList.remove("is-open");
  preview.setAttribute("aria-hidden", "true");
  previewScrim.classList.remove("is-visible");
}

function bindProductEvents() {
  document.querySelectorAll(".product-card, .mobile-product-pill").forEach(card => {
    const product = findProductById(card.dataset.productId);
    if (!product) return;

    card.addEventListener("click", (e) => {
      if (e.target.closest("a.pill-buy-btn")) return; // direct amazon link click
      if (isMobileFeed()) {
        e.preventDefault();
        openPreview(product);
      }
    });

    card.addEventListener("mouseenter", () => {
      if (!isMobileFeed() && window.matchMedia("(hover: hover)").matches) openPreview(product);
    });
  });
}

/* Addictive Interaction Logic: Likes, Double-Tap, Sound, Share */
function bindMobileFeedActions() {
  document.querySelectorAll(".collection-slide").forEach(slide => {
    let lastTap = 0;

    // Double-tap video screen to like
    slide.addEventListener("click", (e) => {
      if (!isMobileFeed() || e.target.closest(".mobile-actions-bar, .mobile-products-drawer")) return;
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;

      if (tapLength < 300 && tapLength > 0) {
        triggerHeartAnimation(e.clientX, e.clientY, slide);
        toggleLike(slide.dataset.collectionId, slide);
      }
      lastTap = currentTime;
    });

    // Action bar buttons
    slide.querySelectorAll(".action-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const action = btn.dataset.action;
        const collectionId = slide.dataset.collectionId;

        if (action === "like") {
          toggleLike(collectionId, slide);
        } else if (action === "mute") {
          isMuted = !isMuted;
          document.querySelectorAll("video").forEach(v => v.muted = isMuted);
          document.querySelectorAll(".sound-icon").forEach(icon => icon.textContent = isMuted ? "🔇" : "🔊");
          document.querySelectorAll(".mute-btn .action-label").forEach(lbl => lbl.textContent = isMuted ? "Muted" : "Sound");
        } else if (action === "share") {
          if (navigator.share) {
            navigator.share({
              title: "Alpha4orge Finds",
              text: "Check out this cozy Amazon workspace setup!",
              url: window.location.href,
            }).catch(() => {});
          } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
          }
        }
      });
    });
  });
}

function toggleLike(collectionId, slide) {
  likesState[collectionId] = !likesState[collectionId];
  const likeBtn = slide.querySelector(".like-btn");
  const label = likeBtn.querySelector(".action-label");
  likeBtn.classList.toggle("liked", likesState[collectionId]);
  label.textContent = likesState[collectionId] ? 1241 : 1240;
}

function triggerHeartAnimation(x, y, container) {
  const heart = document.createElement("div");
  heart.className = "heart-burst";
  heart.innerHTML = "❤️";
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 800);
}

/* Intersection Observer for Mobile Vertical Snap Feed */
let mobileFeedObserver = null;

function setupMobileFeedObserver() {
  if (mobileFeedObserver) mobileFeedObserver.disconnect();
  if (!isMobileFeed()) return;

  const slides = [...document.querySelectorAll(".collection-slide")];

  mobileFeedObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        const index = slides.indexOf(entry.target);
        if (index !== -1 && index !== activeIndex) {
          activeIndex = index;
          updateCarousel({ animate: false, fromScroll: true });
        }
      }
    });
  }, { root: viewport, threshold: 0.6 });

  slides.forEach(slide => mobileFeedObserver.observe(slide));
}

previousButton.addEventListener("click", () => goToCollection(activeIndex - 1));
nextButton.addEventListener("click", () => goToCollection(activeIndex + 1));
dotsContainer.addEventListener("click", event => {
  const button = event.target.closest("[data-slide-index]");
  if (button) goToCollection(Number(button.dataset.slideIndex));
});
closePreviewButton.addEventListener("click", closePreview);
previewScrim.addEventListener("click", closePreview);

window.addEventListener("resize", () => {
  updateCarousel({ animate: false });
  setupMobileFeedObserver();
});

renderCollections();
setupMobileFeedObserver();
updateCarousel({ animate: false });
