/**
 * Studio Click Photography - Home Page JavaScript
 * Handles theme toggle, back to top, and quick action menu
 */

// Theme management
let currentTheme = "dark";

function handleThemeToggle() {
  const html = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");

  if (currentTheme === "dark") {
    // Switch to light mode with professional colors
    html.style.setProperty("--dark-background-color", "#F8F9FA");
    html.style.setProperty("--light-text-color", "#1A1A1A");
    html.style.setProperty("--gray-text-color", "#4A5568");
    html.style.setProperty("--dark-border-color", "#E2E8F0");
    html.style.setProperty("--dark-text-color", "#1A1A1A");
    html.style.setProperty("--light-accent-color", "var(--accent-color)");
    html.style.setProperty("--light-accent2-color", "var(--accent2-color)");
    html.style.setProperty("--light-accent3-color", "var(--accent3-color)");
    html.style.setProperty("--light-accent4-color", "var(--accent4-color)");
    html.style.setProperty("--light-primary-color", "var(--primary-color)");
    html.style.setProperty("--light-opacity", 0.2);

    if (themeToggle) {
      themeToggle.innerHTML = '<i class="fas fa-sun text-xl"></i>';
    }
    if (themeToggleMobile) {
      themeToggleMobile.innerHTML = '<i class="fas fa-sun text-xl"></i>';
    }

    currentTheme = "light";
    localStorage.setItem("theme", "light");
  } else {
    // Switch to dark mode
    html.style.setProperty("--dark-background-color", "#121212");
    html.style.setProperty("--light-text-color", "#FFFFFF");
    html.style.setProperty("--gray-text-color", "#777777");
    html.style.setProperty("--dark-border-color", "#2C2C2C");
    html.style.setProperty("--dark-text-color", "#121212");
    html.style.setProperty("--light-accent-color", "var(--dark-background-color)");
    html.style.setProperty("--light-accent2-color", "var(--dark-background-color)");
    html.style.setProperty("--light-accent3-color", "var(--dark-background-color)");
    html.style.setProperty("--light-accent4-color", "var(--dark-background-color)");
    html.style.setProperty("--light-primary-color", "var(--dark-background-color)");
    html.style.setProperty("--light-opacity", 1);

    if (themeToggle) {
      themeToggle.innerHTML = '<i class="fas fa-moon text-xl"></i>';
    }
    if (themeToggleMobile) {
      themeToggleMobile.innerHTML = '<i class="fas fa-moon text-xl"></i>';
    }

    currentTheme = "dark";
    localStorage.setItem("theme", "dark");
  }
}

// Back to top functionality
function handleBackToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Quick action menu toggle
let isQuickMenuOpen = false;

function handleQuickMenuToggle() {
  const quickMenu = document.getElementById("quick-action-menu");
  if (!quickMenu) return;

  isQuickMenuOpen = !isQuickMenuOpen;

  if (isQuickMenuOpen) {
    quickMenu.classList.remove("hidden");
    quickMenu.classList.add("flex");
  } else {
    quickMenu.classList.add("hidden");
    quickMenu.classList.remove("flex");
  }
}

// Scroll handler
function handleScroll() {
  const scrollBtn = document.getElementById("scroll-to-top");
  const quickActionBtn = document.getElementById("quick-action-btn");

  if (window.scrollY > 300) {
    if (scrollBtn) scrollBtn.classList.remove("hidden");
  } else {
    if (scrollBtn) scrollBtn.classList.add("hidden");
  }
  // Quick action button is always visible now
}

// Feedback modal handlers
function openFeedbackModal() {
  const modal = document.getElementById("feedback-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function closeFeedbackModal() {
  const modal = document.getElementById("feedback-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  }
}

// Cookie popup handlers
const cookiePreferences = {
  analytics: false,
  marketing: false,
  preference: false,
};

function showCookiePopup() {
  const cookiePopup = document.getElementById("cookie-popup");
  const hasConsent = localStorage.getItem("cookieConsent");

  // Only show if user has NOT accepted cookies yet
  if (!hasConsent && cookiePopup) {
    cookiePopup.classList.remove("hidden");
  }
}

function hideCookiePopup() {
  const cookiePopup = document.getElementById("cookie-popup");
  if (cookiePopup) {
    cookiePopup.classList.add("hidden");
  }
}

function acceptAllCookies() {
  localStorage.setItem("cookieConsent", "all");
  localStorage.setItem(
    "cookiePreferences",
    JSON.stringify({
      analytics: true,
      marketing: true,
      preference: true,
    })
  );
  hideCookiePopup();
}

function showCookieCustomization() {
  const compact = document.getElementById("cookie-compact");
  const expanded = document.getElementById("cookie-expanded");

  if (compact) compact.classList.add("hidden");
  if (expanded) expanded.classList.remove("hidden");
}

function collapseCookieCustomization() {
  const compact = document.getElementById("cookie-compact");
  const expanded = document.getElementById("cookie-expanded");

  if (compact) compact.classList.remove("hidden");
  if (expanded) expanded.classList.add("hidden");
}

function toggleCookie(e) {
  const button = e.currentTarget;
  const cookieType = button.getAttribute("data-cookie");
  const slider = button.querySelector(".toggle-slider");

  cookiePreferences[cookieType] = !cookiePreferences[cookieType];

  if (cookiePreferences[cookieType]) {
    button.classList.remove("bg-[var(--dark-border-color)]");
    button.classList.add("bg-[var(--accent-color)]");
    slider.classList.add("translate-x-5");
  } else {
    button.classList.add("bg-[var(--dark-border-color)]");
    button.classList.remove("bg-[var(--accent-color)]");
    slider.classList.remove("translate-x-5");
  }
}

function saveCookiePreferences() {
  localStorage.setItem("cookieConsent", "custom");
  localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
  hideCookiePopup();
}

// Booking modal handlers
function showBookingModal() {
  const modal = document.getElementById("booking-modal");
  const hasSeenBooking = localStorage.getItem("hasSeenBookingModal");

  // Only show if user hasn't seen it before
  if (!hasSeenBooking && modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
    localStorage.setItem("hasSeenBookingModal", "true");
  }
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  }
}

// Portfolio card holder functionality
let currentCardIndex = 0;
const totalCards = 9;
let selectedCard = null;

function positionCards() {
  const cards = document.querySelectorAll(".portfolio-card");
  const holder = document.querySelector("#portfolio-cards");

  if (!holder) return;

  cards.forEach((card, index) => {
    const offset = index - currentCardIndex;
    const spreadAngle = offset * 6; // degrees
    const spreadX = offset * 25; // pixels - horizontal spread
    const spreadY = Math.abs(offset) * -15 + 150; // pixels - cards stack above holder
    const scale = index === currentCardIndex ? 1 : 0.92;
    const zIndex = totalCards - Math.abs(offset);

    // Position cards centered above the holder at bottom
    card.style.position = "absolute";
    card.style.left = "50%";
    card.style.bottom = "0";
    card.style.transform = `
      translateX(calc(-50% + ${spreadX}px))
      translateY(${spreadY}px)
      rotate(${spreadAngle}deg)
      scale(${scale})
    `;
    card.style.zIndex = zIndex;
    card.style.opacity = 1 - Math.abs(offset) * 0.12;
    card.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";

    // Reset card state
    const cardInner = card.querySelector(".card-inner");
    const cardDetails = card.querySelector(".card-details");
    const cardButtons = card.querySelector(".card-buttons");

    if (cardInner) cardInner.style.border = "none";
    if (cardDetails) cardDetails.classList.remove("hidden");
    if (cardButtons) cardButtons.classList.add("hidden");
  });
}

function selectCard(card) {
  // If a card is already selected, close it first
  if (selectedCard && selectedCard !== card) {
    closeSelectedCard();
  }

  selectedCard = card;

  // Position card in center with specific transformations
  card.style.transition = "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
  card.style.transform =
    "translateX(-115px) translateY(0) rotate(0deg) scale(1)";
  card.style.opacity = "1";
  card.style.zIndex = "1000";

  // Update card inner styling
  const cardInner = card.querySelector(".card-inner");
  const cardDetails = card.querySelector(".card-details");
  const cardButtons = card.querySelector(".card-buttons");

  if (cardInner) {
    cardInner.style.border = "2px solid var(--accent-color)";
  }

  if (cardDetails) {
    cardDetails.classList.add("hidden");
  }

  if (cardButtons) {
    cardButtons.classList.remove("hidden");
  }
}

function closeSelectedCard() {
  if (!selectedCard) return;

  const cardInner = selectedCard.querySelector(".card-inner");
  const cardDetails = selectedCard.querySelector(".card-details");
  const cardButtons = selectedCard.querySelector(".card-buttons");

  if (cardInner) {
    cardInner.style.border = "none";
  }

  if (cardDetails) {
    cardDetails.classList.remove("hidden");
  }

  if (cardButtons) {
    cardButtons.classList.add("hidden");
  }

  selectedCard = null;
  positionCards();
}

function openDetailsModal(card) {
  const modal = document.getElementById("details-modal");
  const modalImage = document.getElementById("modal-image");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  const img = card.querySelector("img");
  const category = card.getAttribute("data-category");
  const title = card.getAttribute("data-title");
  const description = card.getAttribute("data-description");

  if (modal && modalImage && img) {
    modalImage.src = img.src;
    modalImage.alt = img.alt || "";
    modalImage.setAttribute("data-media", img.getAttribute("data-media") || "");
    modalCategory.textContent = category || "";
    modalTitle.textContent = title || "";
    modalDescription.textContent = description || "";

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function closeDetailsModal() {
  const modal = document.getElementById("details-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  }
}

function closeAllCards() {
  closeSelectedCard();
  closeDetailsModal();
}

function nextCard() {
  if (currentCardIndex < totalCards - 1) {
    currentCardIndex++;
    positionCards();
  }
}

function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    positionCards();
  }
}

// Services sticky scroll functionality with butter-smooth scrolling
let serviceScrollPosition = 0;
let isInServicesSection = false;

function handleServicesScroll(e) {
  const servicesSection = document.getElementById("sk3h9s");
  const servicesScroll = document.querySelector("[data-services-scroll]");

  if (!servicesSection || !servicesScroll) return;

  const sectionRect = servicesSection.getBoundingClientRect();
  const maxScroll = servicesScroll.scrollWidth - servicesScroll.clientWidth;

  // Check if we're in the services section viewport
  if (
    sectionRect.top <= 100 &&
    sectionRect.bottom >= window.innerHeight * 0.5
  ) {
    isInServicesSection = true;

    // Check if we can scroll horizontally
    const canScrollRight = serviceScrollPosition < maxScroll;
    const canScrollLeft = serviceScrollPosition > 0;

    if ((canScrollRight && e.deltaY > 0) || (canScrollLeft && e.deltaY < 0)) {
      e.preventDefault();

      // Smooth scroll increment - smaller value for smoother feel
      const scrollSpeed = 2;
      serviceScrollPosition += e.deltaY * scrollSpeed;
      serviceScrollPosition = Math.max(
        0,
        Math.min(serviceScrollPosition, maxScroll)
      );

      // Apply smooth scroll with CSS
      servicesScroll.style.scrollBehavior = "auto";
      servicesScroll.scrollLeft = serviceScrollPosition;
    }
  } else {
    isInServicesSection = false;
    // Reset when leaving section
    if (sectionRect.bottom < 0) {
      serviceScrollPosition = 0;
    }
  }
}

// Quick Action Button Toggle
const quickActionBtn = document.getElementById("quick-action-btn");
const quickActionMenu = document.getElementById("quick-action-menu");
let quickActionOpen = false;

function toggleQuickAction() {
  quickActionOpen = !quickActionOpen;
  const icon = quickActionBtn.querySelector("i");

  if (quickActionOpen) {
    quickActionMenu.classList.remove("hidden");
    quickActionMenu.classList.add("flex");
    icon.className = "fas fa-times text-2xl";
    quickActionBtn.classList.remove("hover:rotate-90");
    quickActionBtn.classList.add("rotate-45");
  } else {
    quickActionMenu.classList.add("hidden");
    quickActionMenu.classList.remove("flex");
    icon.className = "fas fa-plus text-2xl";
    quickActionBtn.classList.add("hover:rotate-90");
    quickActionBtn.classList.remove("rotate-45");
  }
}

// Initialize
export function init() {
  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    handleThemeToggle();
  }

  // Theme toggle buttons
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");

  if (themeToggle) {
    themeToggle.addEventListener("click", handleThemeToggle);
  }
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", handleThemeToggle);
  }

  // Scroll button
  const scrollBtn = document.getElementById("scroll-to-top");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", handleBackToTop);
  }

  // Quick action button
  const quickActionBtn = document.getElementById("quick-action-btn");
  if (quickActionBtn) {
    quickActionBtn.addEventListener("click", toggleQuickAction);
  }

  // Close quick menu when clicking outside
  document.addEventListener("click", (e) => {
    const quickMenu = document.getElementById("quick-action-menu");
    const quickActionBtn = document.getElementById("quick-action-btn");

    if (quickMenu && quickActionBtn && isQuickMenuOpen) {
      if (!quickMenu.contains(e.target) && !quickActionBtn.contains(e.target)) {
        isQuickMenuOpen = false;
        quickMenu.classList.add("hidden");
        quickMenu.classList.remove("flex");
      }
    }
  });

  // Portfolio cards
  const prevBtn = document.getElementById("prev-card");
  const nextBtn = document.getElementById("next-card");
  const portfolioCards = document.querySelectorAll(".portfolio-card");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const detailsModal = document.getElementById("details-modal");
  const holderCircle = document.getElementById("holder-circle");

  if (prevBtn) {
    prevBtn.addEventListener("click", prevCard);
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", nextCard);
  }

  // Card click handlers
  portfolioCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Don't select if clicking on buttons
      if (
        e.target.closest(".view-card-btn") ||
        e.target.closest(".close-card-btn")
      ) {
        return;
      }
      selectCard(card);
    });

    // View button handler
    const viewBtn = card.querySelector(".view-card-btn");
    if (viewBtn) {
      viewBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openDetailsModal(card);
        closeSelectedCard();
      });
    }

    // Close button handler
    const closeBtn = card.querySelector(".close-card-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeSelectedCard();
      });
    }
  });

  // Close details modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeDetailsModal);
  }

  // Click outside modal to close
  if (detailsModal) {
    detailsModal.addEventListener("click", (e) => {
      if (e.target === detailsModal) {
        closeDetailsModal();
      }
    });
  }

  // Holder circle click - close all
  if (holderCircle) {
    holderCircle.addEventListener("click", closeAllCards);
  }

  // Initialize card positions
  if (portfolioCards.length > 0) {
    positionCards();
  }

  // Feedback modal
  const feedbackBtn = document.getElementById("feedback-btn");
  const feedbackModal = document.getElementById("feedback-modal");
  const closeFeedbackModal = document.getElementById("close-feedback-modal");
  const cancelFeedbackBtn = document.getElementById("cancel-feedback");

  if (feedbackBtn) {
    feedbackBtn.addEventListener("click", () => {
      feedbackModal.classList.remove("hidden");
      feedbackModal.classList.add("flex");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeFeedbackModal) {
    closeFeedbackModal.addEventListener("click", () => {
      feedbackModal.classList.add("hidden");
      feedbackModal.classList.remove("flex");
      document.body.style.overflow = "";
    });
  }

  if (cancelFeedbackBtn) {
    cancelFeedbackBtn.addEventListener("click", () => {
      feedbackModal.classList.add("hidden");
      feedbackModal.classList.remove("flex");
      document.body.style.overflow = "";
    });
  }

  // Cookie popup
  const acceptAllCookiesBtn = document.getElementById("accept-all-cookies");
  const customizeCookiesBtn = document.getElementById("customize-cookies");
  const collapseCookiesBtn = document.getElementById("collapse-cookies");
  const saveCookiePreferencesBtn = document.getElementById(
    "save-cookie-preferences"
  );
  const acceptAllExpandedBtn = document.getElementById("accept-all-expanded");

  if (acceptAllCookiesBtn) {
    acceptAllCookiesBtn.addEventListener("click", acceptAllCookies);
  }
  if (customizeCookiesBtn) {
    customizeCookiesBtn.addEventListener("click", showCookieCustomization);
  }
  if (collapseCookiesBtn) {
    collapseCookiesBtn.addEventListener("click", collapseCookieCustomization);
  }
  if (saveCookiePreferencesBtn) {
    saveCookiePreferencesBtn.addEventListener("click", saveCookiePreferences);
  }
  if (acceptAllExpandedBtn) {
    acceptAllExpandedBtn.addEventListener("click", acceptAllCookies);
  }

  // Cookie toggles
  const cookieToggles = document.querySelectorAll(".cookie-toggle");
  cookieToggles.forEach((toggle) => {
    toggle.addEventListener("click", toggleCookie);
  });

  // Show cookie popup if no consent yet
  setTimeout(showCookiePopup, 1000);

  // Booking modal
  const closeBookingBtn = document.getElementById("close-booking-modal");
  const bookingModal = document.getElementById("booking-modal");
  const bookActionBtn = document.querySelectorAll("#book-action-btn");

  if (closeBookingBtn) {
    closeBookingBtn.addEventListener("click", closeBookingModal);
  }

  // Open booking modal from quick action button
  if (bookActionBtn.length > 0) {
    bookActionBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        bookingModal.classList.remove("hidden");
        bookingModal.classList.add("flex");
        document.body.style.overflow = "hidden";
        // Close quick action menu
        const quickMenu = document.getElementById("quick-action-menu");
        if (quickMenu) {
          quickMenu.classList.add("hidden");
          quickMenu.classList.remove("flex");
        }
      });
    });
  }

  // Click outside modal to close
  if (bookingModal) {
    bookingModal.addEventListener("click", (e) => {
      if (e.target === bookingModal) {
        closeBookingModal();
      }
    });
  }

  // Show booking modal after 7 seconds of page fully loaded
  setTimeout(showBookingModal, 7000);

  // Scroll event
  window.addEventListener("scroll", handleScroll);

  // Initial check
  handleScroll();

  // Services scroll functionality
  window.addEventListener("wheel", handleServicesScroll, { passive: false });
}

// Cleanup
export function teardown() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const scrollBtn = document.getElementById("scroll-to-top");
  const quickActionBtn = document.getElementById("quick-action-btn");
  const feedbackBtn = document.getElementById("feedback-btn");
  const closeFeedbackBtn = document.getElementById("close-feedback-modal");
  const closeBookingBtn = document.getElementById("close-booking-modal");

  if (themeToggle) {
    themeToggle.removeEventListener("click", handleThemeToggle);
  }
  if (themeToggleMobile) {
    themeToggleMobile.removeEventListener("click", handleThemeToggle);
  }
  if (scrollBtn) {
    scrollBtn.removeEventListener("click", handleBackToTop);
  }
  if (quickActionBtn) {
    quickActionBtn.removeEventListener("click", handleQuickMenuToggle);
  }
  if (feedbackBtn) {
    feedbackBtn.removeEventListener("click", openFeedbackModal);
  }
  if (closeFeedbackBtn) {
    closeFeedbackBtn.removeEventListener("click", closeFeedbackModal);
  }
  if (closeBookingBtn) {
    closeBookingBtn.removeEventListener("click", closeBookingModal);
  }

  window.removeEventListener("scroll", handleScroll);

  window.removeEventListener("wheel", handleServicesScroll);

  // Reset body overflow
  document.body.style.overflow = "";
}
