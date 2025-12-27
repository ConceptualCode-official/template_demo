// Initialize Lucide Icons
lucide.createIcons();
// Mobile Menu
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileBtn.classList.toggle('active');
  });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// HERO TEXT FADE EFFECT
const heroText = document.getElementById('hero-text-content');
const heroIndicator = document.getElementById('hero-scroll-indicator');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // Calculate opacity: 1 at top, 0 when scrolled 60% of viewport
  let opacity = 1 - (scrollY / (windowHeight * 0.6));

  if (opacity < 0) opacity = 0;
  if (opacity > 1) opacity = 1;

  if (heroText) {
    heroText.style.opacity = opacity;
    // Slightly move it up for parallax feel
    heroText.style.transform = `translateY(-${scrollY * 0.2}px)`;
  }

  if (heroIndicator) {
    heroIndicator.style.opacity = opacity;
  }
});

// Reveal on Scroll Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal-text, .reveal-fade, .reveal-up, .reveal-zoom, .reveal-clip-path');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  root: null,
  threshold: 0.15,
  rootMargin: "0px"
});

revealElements.forEach(el => revealObserver.observe(el));

// Benefits Section Logic (Scroll Spy & Hover)
const benefitsSection = document.querySelector('.benefits-scroller-section');
const benefitItems = document.querySelectorAll('.benefit-item');
const benefitImages = document.querySelectorAll('.benefit-img');

if (benefitsSection && window.innerWidth > 768) {
  // Scroll Logic
  window.addEventListener('scroll', () => {
    const rect = benefitsSection.getBoundingClientRect();
    const scrollProgress = -rect.top / (rect.height - window.innerHeight);

    // Only process if within section
    if (scrollProgress >= 0 && scrollProgress <= 1) {
      const index = Math.min(
        Math.floor(scrollProgress * benefitItems.length),
        benefitItems.length - 1
      );

      // Update active state if not hovered manually
      updateActiveBenefit(index);
    }
  });

  // Hover Logic
  benefitItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      updateActiveBenefit(index);
    });
  });
}

function updateActiveBenefit(index) {
  // Reset all
  benefitItems.forEach(i => i.classList.remove('active'));
  benefitImages.forEach(img => img.classList.remove('active'));

  // Set active
  if (benefitItems[index]) benefitItems[index].classList.add('active');
  if (benefitImages[index]) benefitImages[index].classList.add('active');
}

// Parallax Effect (Only for Contact section now, Hero uses sticky CSS)
const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;

  parallaxElements.forEach(el => {
    const speed = el.getAttribute('data-speed');
    const rect = el.parentElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const yPos = -(scrolled * speed);
      el.style.transform = `translateY(${yPos}px)`;
    }
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      navLinks.classList.remove('active');
      mobileBtn.classList.remove('active');

      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

// Form Handling
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = 'Processing...';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerText = 'Request Sent';
      btn.style.backgroundColor = '#25D366';
      btn.style.borderColor = '#25D366';
      form.reset();

      setTimeout(() => {
        btn.innerText = originalText;
        btn.disabled = false;
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
      }, 3000);
    }, 1500);
  });
});
