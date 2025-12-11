let currentSlide = 0;
let typingInterval;
let scrollRevealObserver;

function initHeroBackgroundSlider() {
  const slides = document.querySelectorAll(".hero-bg-slide");
  if (slides.length === 0) return;
  setInterval(() => {
    slides[currentSlide].style.opacity = "0";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = "1";
  }, 5000);
}

function initTypingAnimation() {
  const typingElement = document.querySelector(".typing-text");
  if (!typingElement) return;
  const words = JSON.parse(typingElement.getAttribute("data-words") || "[]");
  if (words.length === 0) return;
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }
    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }
    typingInterval = setTimeout(type, typeSpeed);
  }
  type();
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".scroll-reveal");
  if (revealElements.length === 0) return;
  scrollRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          entry.target.style.transition =
            "opacity 0.6s ease-out, transform 0.6s ease-out";
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  revealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    scrollRevealObserver.observe(el);
  });
}

function initMarquee() {
  const marqueeWrappers = document.querySelectorAll(".marquee-wrapper");
  marqueeWrappers.forEach((wrapper) => {
    const track = wrapper.querySelector(
      ".marquee-track, .marquee-track-reverse"
    );
    if (!track) return;
    const items = Array.from(track.children);
    const isReverse = track.classList.contains("marquee-track-reverse");
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
    const totalWidth = items.reduce(
      (sum, item) => sum + item.offsetWidth + 24,
      0
    );
    let position = isReverse ? 0 : 0;
    const speed = isReverse ? -1 : 1;
    function animate() {
      position += speed * 0.5;
      if (!isReverse && position >= totalWidth) position = 0;
      else if (isReverse && position <= -totalWidth) position = 0;
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  });
}

function handleSmoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    const headerOffset = 120;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
}

function initSmoothScroll() {
  const scrollLinks = document.querySelectorAll(".scroll-to-section");
  scrollLinks.forEach((link) =>
    link.addEventListener("click", handleSmoothScroll)
  );
}

function handleBackToTopVisibility() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  if (window.pageYOffset > 300) {
    btn.style.opacity = "1";
    btn.style.visibility = "visible";
  } else {
    btn.style.opacity = "0";
    btn.style.visibility = "invisible";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", handleBackToTopVisibility);
  btn.addEventListener("click", scrollToTop);
}

function initInstagramVideoModal() {
  const videoItems = document.querySelectorAll(".instagram-video-item");
  const modal = document.getElementById("instagram-video-modal");
  const closeBtn = document.getElementById("close-video-modal");
  const instagramLink = document.getElementById("instagram-embed-0");
  if (!modal) return;
  videoItems.forEach((item) => {
    item.addEventListener("click", () => {
      const videoUrl = item.getAttribute("data-video-url");
      if (instagramLink && videoUrl) instagramLink.src = videoUrl + 'embed/';
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
  }
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });
}

function initLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  if (!loadingScreen) return;
  const logoImages = document.querySelectorAll("[data-logo]");
  logoImages.forEach((img) => {
    img.style.opacity = "1";
  });

  let pageLoaded = false;

  window.addEventListener("load", () => {
    pageLoaded = true;
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
    }, 3000);
  });

  setTimeout(() => {
    if (!pageLoaded) {
      loadingScreen.classList.add("hidden");
    }
  }, 8000);
}

export function init() {
  initLoadingScreen();
  initHeroBackgroundSlider();
  initTypingAnimation();
  initScrollReveal();
  initMarquee();
  initSmoothScroll();
  initBackToTop();
  initInstagramVideoModal();
}

export function teardown() {
  if (typingInterval) clearTimeout(typingInterval);
  if (scrollRevealObserver) scrollRevealObserver.disconnect();
  const btn = document.getElementById("back-to-top");
  if (btn) {
    window.removeEventListener("scroll", handleBackToTopVisibility);
    btn.removeEventListener("click", scrollToTop);
  }
  const scrollLinks = document.querySelectorAll(".scroll-to-section");
  scrollLinks.forEach((link) =>
    link.removeEventListener("click", handleSmoothScroll)
  );
}
