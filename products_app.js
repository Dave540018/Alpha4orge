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
    // Optional 9:16 media. Leave blank to fall back to desktop media.
    mobileImage: "",
    mobileVideo: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/PurpleAmazonKit01portrait.mp4",
    mobilePoster: "",
    products: [
      {
        id: "ambient-pen-stand",
        position: "top-left",
        title: "Pen Stand with Ambient Night Light & Mobile Holder",
        shortLabel: "Warm desk glow",
        image: "https://m.media-amazon.com/images/I/61Kk2VGnl1L._SL1500_.jpg",
        amazonUrl: "https://link.amazon/B03ouWVKb",
        tint: "#ffc794",
        description:
          "A practical pen organizer with a soft ambient glow that makes a desk feel warmer and more inviting.",
        features: [
          "Ambient bedside or desk lighting",
          "Keeps everyday stationery organised",
          "Compact decorative design"
        ]
      },
      {
        id: "wireless-headphones",
        position: "top-right",
        title: "Wireless Bluetooth On-Ear Headphones with Microphone",
        shortLabel: "Focus and music",
        image: "https://m.media-amazon.com/images/I/41lArSiD5hL._SL1200_.jpg",
        amazonUrl: "https://link.amazon/B03Sr5dBE",
        tint: "#d5d5d7",
        description:
          "Lightweight wireless headphones for study sessions, music, calls and everyday listening.",
        features: [
          "Wireless Bluetooth listening",
          "Built-in microphone",
          "Comfortable on-ear design"
        ]
      },
      {
        id: "pastel-gel-pens",
        position: "bottom-left",
        title: "Pastel Gel Pens for Writing with Highlighter",
        shortLabel: "Pretty note taking",
        image: "https://m.media-amazon.com/images/I/61dOAZPNFiL._SL1500_.jpg",
        amazonUrl: "https://link.amazon/B0bWsy0CA",
        tint: "#f2a4e3",
        description:
          "A coordinated pastel pen set for journaling, planning, highlighting and colourful study notes.",
        features: [
          "Coordinated pastel shades",
          "Useful for notes and journaling",
          "Smooth everyday writing"
        ]
      },
      {
        id: "speaker-alarm-clock",
        position: "bottom-right",
        title: "Digital Alarm Clock with Speaker",
        shortLabel: "Wake, study, repeat",
        image: "https://m.media-amazon.com/images/I/51h8gy88kgL._SL1000_.jpg",
        amazonUrl: "https://link.amazon/B06wPRJxL",
        tint: "#d5d5d7",
        description:
          "A clear digital clock designed for a bedside table or study desk, with useful speaker features.",
        features: [
          "Large easy-to-read display",
          "Useful bedside alarm",
          "Compact desk-friendly body"
        ]
      }
    ]
  },

  {
    id: "pokemon-collector-room",
    eyebrow: "Collector world",
    title: "Ultimate Pokémon Collector Setup",
    subtitle: "Figures, guides and accessories for Pokémon fans",
    theme: {
      accent: "#2f80ed",
      accentSoft: "#d9ebff",
      accentDark: "#163f8f",
      surfaceTint: "rgba(24, 55, 110, 0.76)"
    },

    image: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/PokemonAmazonKit02.png",
    video: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/PokemonAmazonKit02.mp4",
    poster: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/PokemonAmazonKit02.png",
    backgroundImage: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/PokemonAmazonKit02.png",
    backgroundVideo: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/PokemonAmazonKit02.mp4",
    // Optional 9:16 media. Leave blank to fall back to desktop media.
    mobileImage: "",
    mobileVideo: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/PokemonAmazonKit02portrait.mp4",
    mobilePoster: "",

    products: [
      {
        id: "mega-charizard-x-figure",
        position: "top-left",
        title: "Mega Charizard X Pokémon Collectible Figure",
        shortLabel: "Blue-flame display figure",
        image: "https://m.media-amazon.com/images/I/51BVTz2CwCL._SL1100_.jpg",
        amazonUrl: "https://link.amazon/B0a1ERbSL",
        tint: "#82cfff",
        description:
          "A dramatic Mega Charizard X collectible featuring its distinctive black body, blue wings and bright blue flame details.",
        features: [
          "Detailed Mega Charizard X design",
          "Bold black and blue colour scheme",
          "Suitable for display and collections"
        ]
      },
      {
        id: "zacian-figure",
        position: "top-right",
        title: "Zacian Legendary Pokémon Collectible Figure",
        shortLabel: "Legendary display collectible",
        image: "https://m.media-amazon.com/images/I/51XR8B7IYbL._SL1100_.jpg",
        amazonUrl: "https://link.amazon/B05rPxNZf",
        tint: "#ffe08a",
        description:
          "A colourful Zacian collectible figure with its recognisable red, gold and blue legendary armour-inspired appearance.",
        features: [
          "Legendary Pokémon character design",
          "Detailed red, gold and blue finish",
          "Ideal for desks and display shelves"
        ]
      },
      {
        id: "pokemon-essential-handbook",
        position: "bottom-left",
        title: "Pokémon Super Duper Extra Deluxe Essential Handbook",
        shortLabel: "Guide to Pokémon characters",
        image: "https://m.media-amazon.com/images/I/81WfiCf9MNL._SL1500_.jpg",
        amazonUrl: "https://link.amazon/B0ahsH2yb",
        tint: "#ff746c",
        description:
          "A colourful Pokémon reference handbook containing information and statistics for more than one thousand Pokémon characters.",
        features: [
          "Covers more than 1,000 characters",
          "Colourful illustrated reference guide",
          "Useful for young fans and collectors"
        ]
      },
      {
        id: "pokeball-card-storage-case",
        position: "bottom-right",
        title: "Poké Ball Trading Card Storage and Carrying Case",
        shortLabel: "Protect and carry cards",
        image: "https://m.media-amazon.com/images/I/61tZy-HymQL._SL1024_.jpg",
        amazonUrl: "https://link.amazon/B09K1yLDI",
        tint: "#ff9b96",
        description:
          "A compact Poké Ball-themed storage case designed to organise and protect trading cards, small accessories and collector items.",
        features: [
          "Protective zippered outer case",
          "Poké Ball-inspired exterior design",
          "Portable storage for cards and accessories"
        ]
      }
    ]
  },

  {
    id: "gaming-accessories-setup",
    eyebrow: "Gaming essentials",
    title: "Level Up Your Gaming Setup",
    subtitle: "Cool accessories for a more immersive gaming experience",

    theme: {
      accent: "#39d353",
      accentSoft: "#d8ffe2",
      accentDark: "#087f3e",
      surfaceTint: "rgba(10, 34, 48, 0.78)"
    },

    image: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/AccessoriesAmazonkit03.png",
    video: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/AccessoriesAmazonkit03.mp4",
    poster: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/AccessoriesAmazonkit03.png",
    backgroundImage: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/AccessoriesAmazonkit03.png",
    backgroundVideo: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/AccessoriesAmazonkit03.mp4",
    // Optional 9:16 media. Leave blank to fall back to desktop media.
    mobileImage: "",
    mobileVideo: "https://github.com/Dave540018/alpha4orge-assets/releases/download/v1.0.0/AccessoriesAmazonkit03portrait.mp4",
    mobilePoster: "",

    products: [
      {
        id: "rgb-gaming-mouse",
        position: "top-left",
        title: "Ergonomic RGB Wired Gaming Mouse",
        shortLabel: "Fast and precise control",
        image: "https://m.media-amazon.com/images/I/81tioCUVf4L._SL1500_.jpg",
        amazonUrl: "https://link.amazon/B05yLBqnn",
        tint: "#d9ff78",
        description:
          "A futuristic wired gaming mouse with an angular ergonomic design, responsive controls and bright RGB-style lighting accents.",
        features: [
          "Ergonomic gaming design",
          "Responsive wired connection",
          "Illuminated RGB-style accents"
        ]
      },
      {
        id: "rgb-desktop-speakers",
        position: "top-right",
        title: "RGB Multimedia Gaming Speakers",
        shortLabel: "Immersive desktop sound",
        image: "https://m.media-amazon.com/images/I/71kIRMs8nQL._SL1500_.jpg",
        amazonUrl: "https://link.amazon/B09omlf8k",
        tint: "#b8f5ff",
        description:
          "A compact pair of desktop speakers with colourful RGB lighting, designed for gaming, music and everyday multimedia use.",
        features: [
          "Colourful RGB lighting",
          "Compact desktop design",
          "Suitable for games and music"
        ]
      },
      {
        id: "wired-gaming-controller",
        position: "bottom-left",
        title: "Wired Dual-Stick Gaming Controller",
        shortLabel: "Comfortable console-style play",
        image: "https://m.media-amazon.com/images/I/515eeXc5YuL._SL1200_.jpg",
        amazonUrl: "https://link.amazon/B09lNS20m",
        tint: "#dcecff",
        description:
          "A comfortable wired game controller with dual analogue sticks, responsive action buttons and illuminated design details.",
        features: [
          "Dual analogue controls",
          "Responsive action buttons",
          "Comfortable wired gameplay"
        ]
      },
      {
        id: "rgb-gaming-headset",
        position: "bottom-right",
        title: "RGB Gaming Headset with Microphone",
        shortLabel: "Clear sound and team chat",
        image: "https://m.media-amazon.com/images/I/71VR6c3j2bL._SL1500_.jpg",
        amazonUrl: "https://link.amazon/B0dtpZBLi",
        tint: "#c9e5ff",
        description:
          "An over-ear gaming headset with soft ear cushions, an adjustable microphone and colourful RGB lighting for an immersive setup.",
        features: [
          "Over-ear padded comfort",
          "Adjustable boom microphone",
          "RGB illuminated design"
        ]
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

const commentsDrawer = document.getElementById("commentsDrawer");
const commentsScrim = document.getElementById("commentsScrim");
const closeCommentsButton = document.getElementById("closeComments");
const commentsTitle = document.getElementById("commentsTitle");
const commentsList = document.getElementById("commentsList");
const commentForm = document.getElementById("commentForm");
const commentName = document.getElementById("commentName");
const commentText = document.getElementById("commentText");

let activeIndex = 0;
let dragStartX = 0;
let dragCurrentX = 0;
let isDragging = false;
let hidePreviewTimer = null;
let activePreviewCard = null;
let isMuted = true;

const SOCIAL_STORAGE_KEY = "alpha4orge-products-social-v1";
const DEFAULT_LIKE_COUNT = 1240;

function loadSocialState() {
  try {
    const parsed = JSON.parse(
      localStorage.getItem(SOCIAL_STORAGE_KEY) || "{}"
    );

    return {
      likes:
        parsed.likes && typeof parsed.likes === "object"
          ? parsed.likes
          : {},
      comments:
        parsed.comments && typeof parsed.comments === "object"
          ? parsed.comments
          : {}
    };
  } catch (_) {
    return {
      likes: {},
      comments: {}
    };
  }
}

let socialState = loadSocialState();
let activeCommentsCollectionId = null;

function saveSocialState() {
  try {
    localStorage.setItem(
      SOCIAL_STORAGE_KEY,
      JSON.stringify(socialState)
    );
  } catch (_) {}
}

function getLikeRecord(collectionId) {
  const saved = socialState.likes[collectionId];

  return saved && typeof saved === "object"
    ? {
        liked: Boolean(saved.liked),
        count: Number(saved.count) || DEFAULT_LIKE_COUNT
      }
    : {
        liked: false,
        count: DEFAULT_LIKE_COUNT
      };
}

function getComments(collectionId) {
  return Array.isArray(socialState.comments[collectionId])
    ? socialState.comments[collectionId]
    : [];
}

const AUTO_ROTATE_MS = 9000;
const PRODUCT_AUTO_SCROLL_MS = 2600;

let autoRotateTimer = null;
const productRailTimers = new Map();
let previewReturnFocus = null;

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
      href="#"
      role="button"
      aria-label="${escapeHtml(product.title)} — preview product"
    >
      <div class="product-image-wrap">
        <img
          src="${escapeHtml(product.image)}"
          alt="${escapeHtml(product.title)}"
          loading="lazy"
        />
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
    <div
      class="mobile-product-pill"
      data-product-id="${escapeHtml(product.id)}"
      role="button"
      tabindex="0"
      aria-label="Preview ${escapeHtml(product.title)}"
    >
      <img
        class="pill-img"
        src="${escapeHtml(product.image)}"
        alt="${escapeHtml(product.title)}"
        loading="lazy"
      />

      <div class="pill-info">
        <h4>${escapeHtml(product.title)}</h4>
        <p>${escapeHtml(product.shortLabel)}</p>
      </div>

      <button
        class="pill-preview-btn"
        type="button"
        aria-label="Preview ${escapeHtml(product.title)}"
      >
        View
      </button>
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
        data-desktop-src="${escapeHtml(collection.video)}"
        data-mobile-src="${escapeHtml(collection.mobileVideo || collection.video)}"
        poster="${escapeHtml(collection.poster || collection.image)}"
        data-desktop-poster="${escapeHtml(collection.poster || collection.image)}"
        data-mobile-poster="${escapeHtml(collection.mobilePoster || collection.mobileImage || collection.poster || collection.image)}"
        ${isMuted ? "muted" : ""}
        loop
        playsinline
        preload="${index === 0 ? "auto" : "metadata"}"
      ></video>
    `
    : `
      <img
        class="hero-media"
        src="${escapeHtml(collection.image)}"
        data-desktop-src="${escapeHtml(collection.image)}"
        data-mobile-src="${escapeHtml(collection.mobileImage || collection.image)}"
        alt="${escapeHtml(collection.title)}"
        loading="${index === 0 ? "eager" : "lazy"}"
      />
    `;

  const likeRecord = getLikeRecord(collection.id);
  const likesCount = likeRecord.count;

  return `
    <article
      class="collection-slide"
      data-collection-id="${escapeHtml(collection.id)}"
      aria-label="${escapeHtml(collection.title)}"
    >
      <div
        class="collection-stage"
        style="--mobile-poster:url('${escapeHtml(
          collection.poster || collection.image
        )}')"
      >
        <div class="hero-frame">${media}</div>

        ${collection.products
          .map(productCardTemplate)
          .join("")}

        <div class="mobile-actions-bar">
          <button
            class="action-btn like-btn ${
              likeRecord.liked ? "liked" : ""
            }"
            type="button"
            data-action="like"
            aria-label="Like post"
          >
            <span class="action-icon-circle">❤️</span>
            <span class="action-label">${likesCount}</span>
          </button>

          <button
            class="action-btn mute-btn"
            type="button"
            data-action="mute"
            aria-label="Toggle sound"
          >
            <span class="action-icon-circle sound-icon">
              ${isMuted ? "🔇" : "🔊"}
            </span>

            <span class="action-label">
              ${isMuted ? "Muted" : "Sound"}
            </span>
          </button>

          <button
            class="action-btn comments-btn"
            type="button"
            data-action="comments"
            aria-label="Open comments"
          >
            <span class="action-icon-circle">💬</span>
            <span class="action-label comment-count">
              ${getComments(collection.id).length}
            </span>
          </button>

          <button
            class="action-btn share-btn"
            type="button"
            data-action="share"
            aria-label="Share post"
          >
            <span class="action-icon-circle">↗️</span>
            <span class="action-label">Share</span>
          </button>
        </div>

        <div class="mobile-products-drawer">
          <div class="drawer-header">
            <span>
              Featured Amazon Finds (${collection.products.length})
            </span>

            <span>Swipe ➔</span>
          </div>

          <div class="drawer-products-scroll">
            ${collection.products
              .map(mobileProductPillTemplate)
              .join("")}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCollections() {
  track.innerHTML = COLLECTIONS
    .map(collectionTemplate)
    .join("");

  dotsContainer.innerHTML = COLLECTIONS.map(
    (_, index) => `
      <button
        class="collection-dot ${
          index === activeIndex ? "is-active" : ""
        }"
        type="button"
        data-slide-index="${index}"
        aria-label="Go to collection ${index + 1}"
      ></button>
    `
  ).join("");

  totalCollections.textContent = String(
    COLLECTIONS.length
  ).padStart(2, "0");

  bindProductEvents();
  bindMobileFeedActions();
  syncResponsiveMediaSources();
}

function applyTheme(collection) {
  const root = document.documentElement;

  root.style.setProperty(
    "--accent",
    collection.theme.accent
  );

  root.style.setProperty(
    "--accent-soft",
    collection.theme.accentSoft
  );

  root.style.setProperty(
    "--accent-dark",
    collection.theme.accentDark
  );

  root.style.setProperty(
    "--surface-tint",
    collection.theme.surfaceTint
  );
}

async function safePlay(video) {
  if (!video) return;

  video.muted = isMuted;
  video.defaultMuted = isMuted;
  video.playsInline = true;

  try {
    await video.play();
  } catch (_) {
    // Muted autoplay can still be blocked on some browsers.
  }
}

function syncActiveHeroVideo() {
  const slides = [
    ...document.querySelectorAll(".collection-slide")
  ];

  document
    .querySelectorAll("video.hero-media")
    .forEach(video => {
      const slide = video.closest(".collection-slide");
      const isActive = slide === slides[activeIndex];

      if (isActive) {
        safePlay(video);
      } else {
        video.pause();
      }
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
      ambientVideo.poster =
        collection.backgroundImage ||
        collection.poster ||
        "";

      ambientVideo.load();
    }

    ambientVideo.classList.add("is-visible");
    await safePlay(ambientVideo);

    if (
      ambientVideo.paused &&
      collection.backgroundImage
    ) {
      ambientImage.src = collection.backgroundImage;
      ambientImage.classList.add("is-visible");
    }
  } else {
    ambientVideo.removeAttribute("src");
    ambientVideo.load();

    ambientImage.src =
      collection.backgroundImage ||
      collection.poster ||
      collection.image;

    ambientImage.classList.add("is-visible");
  }
}

function isMobileFeed() {
  return window.matchMedia(
    "(max-width: 680px)"
  ).matches;
}

function syncResponsiveMediaSources() {
  const mobile = isMobileFeed();

  document.querySelectorAll(".hero-media").forEach(media => {
    const desiredSrc = mobile ? media.dataset.mobileSrc : media.dataset.desktopSrc;
    if (!desiredSrc) return;

    if (media.tagName === "VIDEO") {
      const desiredPoster = mobile ? media.dataset.mobilePoster : media.dataset.desktopPoster;
      const currentSrc = media.getAttribute("src") || "";
      if (currentSrc !== desiredSrc) {
        media.pause();
        media.setAttribute("src", desiredSrc);
        if (desiredPoster) media.setAttribute("poster", desiredPoster);
        media.load();
      } else if (desiredPoster && media.getAttribute("poster") !== desiredPoster) {
        media.setAttribute("poster", desiredPoster);
      }
    } else if (media.getAttribute("src") !== desiredSrc) {
      media.setAttribute("src", desiredSrc);
    }
  });
}

function updateCarousel({
  animate = true,
  fromScroll = false
} = {}) {
  if (isMobileFeed()) {
    track.style.transform = "none";

    if (!fromScroll) {
      const slides = document.querySelectorAll(
        ".collection-slide"
      );

      const targetSlide = slides[activeIndex];

      if (targetSlide) {
        viewport.scrollTo({
          top: targetSlide.offsetTop,
          behavior: animate ? "smooth" : "auto"
        });
      }
    }
  } else {
    if (!animate) {
      track.classList.add("no-transition");
    }

    track.style.transform =
      `translate3d(-${activeIndex * 100}%, 0, 0)`;

    requestAnimationFrame(() => {
      track.classList.remove("no-transition");
    });
  }

  const collection = COLLECTIONS[activeIndex];

  if (!collection) return;

  pageHeading.textContent = collection.title;

  currentCollection.textContent = String(
    activeIndex + 1
  ).padStart(2, "0");

  document
    .querySelectorAll(".collection-dot")
    .forEach((dot, index) => {
      dot.classList.toggle(
        "is-active",
        index === activeIndex
      );
    });

  previousButton.disabled =
    COLLECTIONS.length <= 1;

  nextButton.disabled =
    COLLECTIONS.length <= 1;

  applyTheme(collection);
  syncResponsiveMediaSources();
  updateAmbientBackground(collection);
  syncActiveHeroVideo();

  if (preview.classList.contains("is-open")) {
    closePreview();
  }

  if (
    commentsDrawer?.classList.contains("is-open")
  ) {
    closeComments();
  }

  startProductRailForActiveSlide();
}

function normaliseCollectionIndex(index) {
  if (!COLLECTIONS.length) return 0;

  return (
    (index + COLLECTIONS.length) %
    COLLECTIONS.length
  );
}

function goToCollection(index) {
  activeIndex = normaliseCollectionIndex(index);
  updateCarousel();
  scheduleAutoRotation();
}

function findProductById(productId) {
  for (const collection of COLLECTIONS) {
    const product = collection.products.find(
      item => item.id === productId
    );

    if (product) return product;
  }

  return null;
}

function openPreview(
  product,
  sourceElement = null
) {
  if (!product) return;

  clearTimeout(hidePreviewTimer);
  pauseAutoRotation();
  pauseAllProductRails();

  previewReturnFocus =
    sourceElement || document.activeElement;

  // Keep the preview on the same side as the selected desktop product.
  preview.classList.remove("preview-left", "preview-right");
  if (!isMobileFeed() && sourceElement) {
    const position = sourceElement.dataset.position ||
      sourceElement.closest("[data-position]")?.dataset.position || "";
    preview.classList.add(position.includes("right") ? "preview-right" : "preview-left");
  }

  previewImage.src = product.image;
  previewImage.alt = product.title;
  previewTitle.textContent = product.title;
  previewDescription.textContent =
    product.description;

  previewLabel.textContent =
    product.shortLabel || "Featured pick";

  previewLink.href = product.amazonUrl;

  previewFeatures.innerHTML =
    product.features
      .map(
        feature =>
          `<li>${escapeHtml(feature)}</li>`
      )
      .join("");

  preview.classList.add("is-open");
  preview.setAttribute("aria-hidden", "false");

  previewScrim.classList.add("is-visible");
  previewScrim.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("preview-open");

  requestAnimationFrame(() => {
    closePreviewButton?.focus({
      preventScroll: true
    });
  });
}

function closePreview() {
  clearTimeout(hidePreviewTimer);

  activePreviewCard = null;

  preview.classList.remove("is-open");
  preview.setAttribute("aria-hidden", "true");

  previewScrim.classList.remove("is-visible");
  previewScrim.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "preview-open"
  );

  resumeAutoRotation();
  startProductRailForActiveSlide();

  if (
    previewReturnFocus &&
    typeof previewReturnFocus.focus === "function"
  ) {
    previewReturnFocus.focus({
      preventScroll: true
    });
  }

  previewReturnFocus = null;
}

function bindProductEvents() {
  document
    .querySelectorAll(
      ".product-card, .mobile-product-pill"
    )
    .forEach(card => {
      const product = findProductById(
        card.dataset.productId
      );

      if (!product) return;

      card.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        openPreview(product, card);
      });

      card.addEventListener(
        "keydown",
        event => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            openPreview(product, card);
          }
        }
      );

      card.addEventListener(
        "mouseenter",
        () => {
          const supportsHover =
            window.matchMedia(
              "(hover: hover) and (pointer: fine)"
            ).matches;

          if (
            !isMobileFeed() &&
            supportsHover
          ) {
            openPreview(product, card);
          }
        }
      );
    });
}

function bindMobileFeedActions() {
  document
    .querySelectorAll(".collection-slide")
    .forEach(slide => {
      let lastTap = 0;

      slide.addEventListener("click", event => {
        if (
          !isMobileFeed() ||
          event.target.closest(
            ".mobile-actions-bar, .mobile-products-drawer, button, a"
          )
        ) {
          return;
        }

        const currentTime = Date.now();
        const tapLength =
          currentTime - lastTap;

        if (
          tapLength < 300 &&
          tapLength > 0
        ) {
          triggerHeartAnimation(
            event.clientX,
            event.clientY,
            slide
          );

          toggleLike(
            slide.dataset.collectionId
          );
        }

        lastTap = currentTime;
      });

      slide
        .querySelectorAll(".action-btn")
        .forEach(button => {
          button.addEventListener(
            "click",
            async event => {
              event.preventDefault();
              event.stopPropagation();

              const action =
                button.dataset.action;

              const collectionId =
                slide.dataset.collectionId;

              if (action === "like") {
                toggleLike(collectionId);
                return;
              }

              if (action === "mute") {
                isMuted = !isMuted;

                document
                  .querySelectorAll("video")
                  .forEach(video => {
                    video.muted = isMuted;
                  });

                document
                  .querySelectorAll(
                    ".sound-icon"
                  )
                  .forEach(icon => {
                    icon.textContent =
                      isMuted ? "🔇" : "🔊";
                  });

                document
                  .querySelectorAll(
                    ".mute-btn .action-label"
                  )
                  .forEach(label => {
                    label.textContent =
                      isMuted
                        ? "Muted"
                        : "Sound";
                  });

                return;
              }

              if (action === "comments") {
                openComments(collectionId);
                return;
              }

              if (action === "share") {
                await shareCollection(
                  collectionId
                );
              }
            }
          );
        });
    });
}

async function shareCollection(collectionId) {
  const collection = COLLECTIONS.find(
    item => item.id === collectionId
  );

  if (!collection) return;

  const shareUrl =
    `${window.location.origin}` +
    `${window.location.pathname}` +
    `#${encodeURIComponent(collectionId)}`;

  const shareData = {
    title: collection.title,
    text:
      `Check out ${collection.title} ` +
      "on Alpha4orge.",
    url: shareUrl
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }
    }
  }

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(
        shareUrl
      );

      showToast("Post link copied");
      return;
    } catch (_) {}
  }

  window.prompt(
    "Copy this link:",
    shareUrl
  );
}

function toggleLike(collectionId) {
  const current =
    getLikeRecord(collectionId);

  const nextLiked = !current.liked;

  const nextCount = Math.max(
    0,
    current.count +
      (nextLiked ? 1 : -1)
  );

  socialState.likes[collectionId] = {
    liked: nextLiked,
    count: nextCount
  };

  saveSocialState();

  document
    .querySelectorAll(
      `.collection-slide[data-collection-id="${CSS.escape(
        collectionId
      )}"] .like-btn`
    )
    .forEach(likeButton => {
      likeButton.classList.toggle(
        "liked",
        nextLiked
      );

      const label =
        likeButton.querySelector(
          ".action-label"
        );

      if (label) {
        label.textContent =
          String(nextCount);
      }
    });
}

function triggerHeartAnimation(
  x,
  y,
  container
) {
  const heart =
    document.createElement("div");

  heart.className = "heart-burst";
  heart.textContent = "❤️";
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 800);
}

function formatCommentTime(timestamp) {
  try {
    return new Intl.DateTimeFormat(
      undefined,
      {
        dateStyle: "medium",
        timeStyle: "short"
      }
    ).format(new Date(timestamp));
  } catch (_) {
    return "";
  }
}

function renderComments(collectionId) {
  if (!commentsList) return;

  const comments =
    getComments(collectionId);

  commentsList.innerHTML = comments.length
    ? comments
        .map(
          comment => `
            <article class="comment-item">
              <div class="comment-avatar">
                ${escapeHtml(
                  (
                    comment.name || "A"
                  )
                    .slice(0, 1)
                    .toUpperCase()
                )}
              </div>

              <div class="comment-body">
                <div class="comment-meta">
                  <strong>
                    ${escapeHtml(
                      comment.name ||
                        "Anonymous"
                    )}
                  </strong>

                  <time
                    datetime="${escapeHtml(
                      comment.createdAt
                    )}"
                  >
                    ${escapeHtml(
                      formatCommentTime(
                        comment.createdAt
                      )
                    )}
                  </time>
                </div>

                <p>
                  ${escapeHtml(comment.text)}
                </p>
              </div>
            </article>
          `
        )
        .join("")
    : `
      <div class="comments-empty">
        <span>💬</span>
        <strong>No comments yet</strong>
        <p>
          Start the conversation about
          this collection.
        </p>
      </div>
    `;
}
function updateCommentCounts(collectionId) {
  const count =
    getComments(collectionId).length;

  document
    .querySelectorAll(
      `.collection-slide[data-collection-id="${CSS.escape(
        collectionId
      )}"] .comment-count`
    )
    .forEach(element => {
      element.textContent = String(count);
    });
}

function openComments(collectionId) {
  if (!commentsDrawer) return;

  activeCommentsCollectionId =
    collectionId;

  pauseAutoRotation();
  pauseAllProductRails();

  const collection = COLLECTIONS.find(
    item => item.id === collectionId
  );

  commentsTitle.textContent =
    collection?.title || "Comments";

  renderComments(collectionId);

  commentsDrawer.classList.add("is-open");

  commentsDrawer.setAttribute(
    "aria-hidden",
    "false"
  );

  commentsScrim.classList.add(
    "is-visible"
  );

  commentsScrim.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "comments-open"
  );

  requestAnimationFrame(() => {
    commentText?.focus({
      preventScroll: true
    });
  });
}

function closeComments() {
  if (!commentsDrawer) return;

  commentsDrawer.classList.remove(
    "is-open"
  );

  commentsDrawer.setAttribute(
    "aria-hidden",
    "true"
  );

  commentsScrim.classList.remove(
    "is-visible"
  );

  commentsScrim.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "comments-open"
  );

  activeCommentsCollectionId = null;

  resumeAutoRotation();
  startProductRailForActiveSlide();
}

function showToast(message) {
  const toast =
    document.createElement("div");

  toast.className = "social-toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  setTimeout(() => {
    toast.classList.remove("is-visible");

    setTimeout(() => {
      toast.remove();
    }, 220);
  }, 1800);
}

commentForm?.addEventListener(
  "submit",
  event => {
    event.preventDefault();

    if (!activeCommentsCollectionId) {
      return;
    }

    const text =
      commentText.value.trim();

    const name =
      commentName.value.trim() ||
      "Anonymous";

    if (!text) return;

    const comments = getComments(
      activeCommentsCollectionId
    );

    comments.push({
      id:
        `${Date.now()}-` +
        Math.random()
          .toString(36)
          .slice(2, 8),

      name: name.slice(0, 40),
      text: text.slice(0, 280),
      createdAt:
        new Date().toISOString()
    });

    socialState.comments[
      activeCommentsCollectionId
    ] = comments;

    saveSocialState();

    renderComments(
      activeCommentsCollectionId
    );

    updateCommentCounts(
      activeCommentsCollectionId
    );

    commentText.value = "";

    showToast("Comment posted");
  }
);

closeCommentsButton?.addEventListener(
  "click",
  closeComments
);

commentsScrim?.addEventListener(
  "click",
  closeComments
);

function restartProgressBar() {
  const progress =
    document.getElementById(
      "autoProgress"
    );

  if (!progress) return;

  progress.style.animation = "none";
  progress.offsetHeight;

  progress.style.animation =
    `autoProgress ` +
    `${AUTO_ROTATE_MS}ms ` +
    "linear forwards";
}

function pauseAutoRotation() {
  clearTimeout(autoRotateTimer);
  autoRotateTimer = null;

  const progress =
    document.getElementById(
      "autoProgress"
    );

  progress?.classList.add("is-paused");
}

function resumeAutoRotation() {
  const progress =
    document.getElementById(
      "autoProgress"
    );

  progress?.classList.remove(
    "is-paused"
  );

  scheduleAutoRotation();
}

function scheduleAutoRotation() {
  clearTimeout(autoRotateTimer);

  const previewOpen =
    preview.classList.contains("is-open");

  const commentsOpen =
    commentsDrawer?.classList.contains(
      "is-open"
    );

  if (
    document.hidden ||
    previewOpen ||
    commentsOpen ||
    COLLECTIONS.length <= 1
  ) {
    return;
  }

  restartProgressBar();

  autoRotateTimer = window.setTimeout(
    () => {
      goToCollection(
        activeIndex + 1
      );
    },
    AUTO_ROTATE_MS
  );
}

function stopProductRail(slide) {
  const existingTimer =
    productRailTimers.get(slide);

  if (existingTimer) {
    clearInterval(existingTimer);
  }

  productRailTimers.delete(slide);
}

function pauseAllProductRails() {
  productRailTimers.forEach(timer => {
    clearInterval(timer);
  });

  productRailTimers.clear();
}

function startProductRail(slide) {
  const previewOpen =
    preview.classList.contains("is-open");

  const commentsOpen =
    commentsDrawer?.classList.contains(
      "is-open"
    );

  if (
    !isMobileFeed() ||
    !slide ||
    previewOpen ||
    commentsOpen
  ) {
    return;
  }

  stopProductRail(slide);

  const rail = slide.querySelector(
    ".drawer-products-scroll"
  );

  const pills = [
    ...slide.querySelectorAll(
      ".mobile-product-pill"
    )
  ];

  if (!rail || pills.length < 2) {
    return;
  }

  let productIndex = 0;
  let direction = 1;

  const moveToIndex = index => {
    const target = pills[index];

    if (!target) return;

    const maxScrollLeft = Math.max(
      0,
      rail.scrollWidth -
        rail.clientWidth
    );

    const desiredLeft =
      target.offsetLeft -
      (
        rail.clientWidth -
        target.offsetWidth
      ) /
        2;

    const clampedLeft = Math.max(
      0,
      Math.min(
        desiredLeft,
        maxScrollLeft
      )
    );

    rail.scrollTo({
      left: clampedLeft,
      behavior: "smooth"
    });
  };

  const moveNext = () => {
    const isBlocked =
      document.hidden ||
      preview.classList.contains(
        "is-open"
      ) ||
      commentsDrawer?.classList.contains(
        "is-open"
      );

    if (isBlocked) return;

    if (
      productIndex >=
      pills.length - 1
    ) {
      direction = -1;
    } else if (productIndex <= 0) {
      direction = 1;
    }

    productIndex += direction;
    moveToIndex(productIndex);
  };

  rail.scrollTo({
    left: 0,
    behavior: "auto"
  });

  const timer = window.setInterval(
    moveNext,
    PRODUCT_AUTO_SCROLL_MS
  );

  productRailTimers.set(slide, timer);

  const stopForInteraction = () => {
    stopProductRail(slide);
  };

  const restartAfterInteraction = () => {
    window.setTimeout(() => {
      startProductRail(slide);
    }, 1800);
  };

  rail.addEventListener(
    "pointerdown",
    stopForInteraction,
    { once: true }
  );

  rail.addEventListener(
    "touchstart",
    stopForInteraction,
    {
      once: true,
      passive: true
    }
  );

  rail.addEventListener(
    "pointerup",
    restartAfterInteraction,
    { once: true }
  );

  rail.addEventListener(
    "touchend",
    restartAfterInteraction,
    {
      once: true,
      passive: true
    }
  );
}

function startProductRailForActiveSlide() {
  pauseAllProductRails();

  if (!isMobileFeed()) return;

  const activeSlide =
    document.querySelectorAll(
      ".collection-slide"
    )[activeIndex];

  startProductRail(activeSlide);
}

let mobileFeedObserver = null;

function setupMobileFeedObserver() {
  if (mobileFeedObserver) {
    mobileFeedObserver.disconnect();
  }

  if (!isMobileFeed()) return;

  const slides = [
    ...document.querySelectorAll(
      ".collection-slide"
    )
  ];

  mobileFeedObserver =
    new IntersectionObserver(
      entries => {
        const visibleEntries = entries
          .filter(
            entry =>
              entry.isIntersecting &&
              entry.intersectionRatio >=
                0.6
          )
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        const mostVisible =
          visibleEntries[0];

        if (!mostVisible) return;

        const index = slides.indexOf(
          mostVisible.target
        );

        if (
          index !== -1 &&
          index !== activeIndex
        ) {
          activeIndex = index;

          updateCarousel({
            animate: false,
            fromScroll: true
          });

          scheduleAutoRotation();
        }
      },
      {
        root: viewport,
        threshold: [0.6, 0.75, 0.9]
      }
    );

  slides.forEach(slide => {
    mobileFeedObserver.observe(slide);
  });
}

/* Unified desktop/mobile navigation: drag, swipe and keyboard */
const SWIPE_THRESHOLD = 54;
let dragStartY = 0;
let dragCurrentY = 0;

function isInteractiveTarget(target) {
  return Boolean(target.closest(
    "a, button, input, textarea, select, .product-card, .mobile-product-pill, " +
    ".mobile-products-drawer, .mobile-actions-bar, .product-preview, .comments-drawer"
  ));
}

function beginCarouselDrag(event) {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  if (isInteractiveTarget(event.target)) return;

  isDragging = true;
  dragStartX = event.clientX;
  dragCurrentX = event.clientX;
  dragStartY = event.clientY;
  dragCurrentY = event.clientY;
  viewport.classList.add("is-dragging");
  pauseAutoRotation();

  try { viewport.setPointerCapture(event.pointerId); } catch (_) {}
}

function moveCarouselDrag(event) {
  if (!isDragging) return;
  dragCurrentX = event.clientX;
  dragCurrentY = event.clientY;

  const dx = dragCurrentX - dragStartX;
  const dy = dragCurrentY - dragStartY;

  // On desktop, show direct horizontal drag feedback.
  if (!isMobileFeed() && Math.abs(dx) > Math.abs(dy)) {
    event.preventDefault();
    const percent = (dx / Math.max(1, viewport.clientWidth)) * 100;
    track.classList.add("no-transition");
    track.style.transform = `translate3d(calc(-${activeIndex * 100}% + ${percent}%), 0, 0)`;
  }
}

function endCarouselDrag(event) {
  if (!isDragging) return;
  isDragging = false;
  viewport.classList.remove("is-dragging");

  try { viewport.releasePointerCapture(event.pointerId); } catch (_) {}

  const dx = dragCurrentX - dragStartX;
  const dy = dragCurrentY - dragStartY;
  track.classList.remove("no-transition");

  if (isMobileFeed()) {
    if (Math.abs(dy) >= SWIPE_THRESHOLD && Math.abs(dy) > Math.abs(dx)) {
      goToCollection(activeIndex + (dy < 0 ? 1 : -1));
    } else {
      updateCarousel({ animate: true });
      scheduleAutoRotation();
    }
  } else {
    if (Math.abs(dx) >= SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      goToCollection(activeIndex + (dx < 0 ? 1 : -1));
    } else {
      updateCarousel({ animate: true });
      scheduleAutoRotation();
    }
  }
}

viewport?.addEventListener("pointerdown", beginCarouselDrag);
viewport?.addEventListener("pointermove", moveCarouselDrag, { passive: false });
viewport?.addEventListener("pointerup", endCarouselDrag);
viewport?.addEventListener("pointercancel", endCarouselDrag);

document.addEventListener("keydown", event => {
  if (event.target.closest?.("input, textarea, select, [contenteditable='true']")) return;
  if (preview.classList.contains("is-open") || commentsDrawer?.classList.contains("is-open")) return;

  const previousKeys = isMobileFeed() ? ["ArrowUp", "PageUp"] : ["ArrowLeft", "PageUp"];
  const nextKeys = isMobileFeed() ? ["ArrowDown", "PageDown"] : ["ArrowRight", "PageDown"];

  if (previousKeys.includes(event.key)) {
    event.preventDefault();
    goToCollection(activeIndex - 1);
  } else if (nextKeys.includes(event.key)) {
    event.preventDefault();
    goToCollection(activeIndex + 1);
  } else if (event.key === "Home") {
    event.preventDefault();
    goToCollection(0);
  } else if (event.key === "End") {
    event.preventDefault();
    goToCollection(COLLECTIONS.length - 1);
  }
});

previousButton?.addEventListener(
  "click",
  () => {
    goToCollection(activeIndex - 1);
  }
);

nextButton?.addEventListener(
  "click",
  () => {
    goToCollection(activeIndex + 1);
  }
);

dotsContainer?.addEventListener(
  "click",
  event => {
    const button =
      event.target.closest(
        "[data-slide-index]"
      );

    if (!button) return;

    goToCollection(
      Number(button.dataset.slideIndex)
    );
  }
);

closePreviewButton?.addEventListener(
  "click",
  closePreview
);

previewScrim?.addEventListener(
  "click",
  closePreview
);

window.addEventListener(
  "resize",
  () => {
    syncResponsiveMediaSources();
    updateCarousel({
      animate: false
    });

    setupMobileFeedObserver();
    startProductRailForActiveSlide();
  }
);

document.addEventListener(
  "keydown",
  event => {
    if (event.key !== "Escape") {
      return;
    }

    if (
      preview.classList.contains(
        "is-open"
      )
    ) {
      closePreview();
      return;
    }

    if (
      commentsDrawer?.classList.contains(
        "is-open"
      )
    ) {
      closeComments();
    }
  }
);

document.addEventListener(
  "visibilitychange",
  () => {
    if (document.hidden) {
      pauseAutoRotation();
      pauseAllProductRails();

      document
        .querySelectorAll("video")
        .forEach(video => {
          video.pause();
        });

      return;
    }

    syncActiveHeroVideo();
    scheduleAutoRotation();
    startProductRailForActiveSlide();
  }
);

const menuButton =
  document.getElementById("menuBtn");

const mainNavigation =
  document.getElementById("nav");

const gamesDropdown =
  document.getElementById(
    "gamesDropdown"
  );

const gamesButton =
  gamesDropdown?.querySelector(
    ".nav-dropbtn"
  );

menuButton?.addEventListener(
  "click",
  () => {
    const open =
      mainNavigation?.classList.toggle(
        "open"
      );

    menuButton.setAttribute(
      "aria-expanded",
      String(Boolean(open))
    );
  }
);

gamesButton?.addEventListener(
  "click",
  event => {
    event.stopPropagation();

    const open =
      gamesDropdown.classList.toggle(
        "open"
      );

    gamesButton.setAttribute(
      "aria-expanded",
      String(open)
    );
  }
);

document.addEventListener(
  "click",
  event => {
    if (
      gamesDropdown &&
      !gamesDropdown.contains(
        event.target
      )
    ) {
      gamesDropdown.classList.remove(
        "open"
      );

      gamesButton?.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  }
);

renderCollections();

const hashCollectionId =
  decodeURIComponent(
    window.location.hash.replace(
      /^#/,
      ""
    )
  );

const hashIndex =
  COLLECTIONS.findIndex(
    item =>
      item.id === hashCollectionId
  );

if (hashIndex >= 0) {
  activeIndex = hashIndex;
}

setupMobileFeedObserver();

updateCarousel({
  animate: false
});

scheduleAutoRotation();
startProductRailForActiveSlide();
