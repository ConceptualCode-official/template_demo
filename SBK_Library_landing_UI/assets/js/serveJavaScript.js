/**
 * Scroll reveal animation system
 */

// Store observer instance
let scrollObserver = null

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
  // Get all elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]')

  // Intersection Observer options
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }

  // Intersection Observer callback
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target
        const animationType = element.getAttribute('data-animate')

        // Add animation classes based on type
        switch (animationType) {
          case 'fade-up':
            element.style.opacity = '1'
            element.style.transform = 'translateY(0)'
            break
          case 'fade-up-delay':
            element.style.opacity = '1'
            element.style.transform = 'translateY(0)'
            break
          case 'fade-up-delay-1':
          case 'fade-up-delay-2':
          case 'fade-up-delay-3':
          case 'fade-up-delay-4':
          case 'fade-up-delay-5':
          case 'fade-up-delay-6':
            setTimeout(
              () => {
                element.style.opacity = '1'
                element.style.transform = 'translateY(0)'
              },
              parseInt(animationType.split('-').pop()) * 100
            )
            break
          case 'slide-right':
            element.style.opacity = '1'
            element.style.transform = 'translateX(0)'
            break
          case 'slide-left':
            element.style.opacity = '1'
            element.style.transform = 'translateX(0)'
            break
          default:
            element.style.opacity = '1'
            element.style.transform = 'none'
        }

        // Add transition for smooth animation
        element.style.transition =
          'opacity 0.8s ease-out, transform 0.8s ease-out'

        // Unobserve after animation
        scrollObserver.unobserve(element)
      }
    })
  }

  // Create observer
  scrollObserver = new IntersectionObserver(observerCallback, observerOptions)

  // Observe all animated elements
  animatedElements.forEach((element) => {
    scrollObserver.observe(element)
  })
}

/**
 * Feedback button functionality
 */
function initFeedbackButton() {
  const feedbackBtn = document.getElementById('feedback-btn')
  const feedbackModal = document.getElementById('feedback-modal')
  const closeFeedback = document.getElementById('close-feedback')

  if (feedbackBtn && feedbackModal && closeFeedback) {
    feedbackBtn.addEventListener('click', openFeedbackModal)
    closeFeedback.addEventListener('click', closeFeedbackModal)

    // Close on outside click
    feedbackModal.addEventListener('click', (e) => {
      if (e.target === feedbackModal) {
        closeFeedbackModal()
      }
    })
  }
}

function openFeedbackModal() {
  const feedbackModal = document.getElementById('feedback-modal')
  if (feedbackModal) {
    feedbackModal.classList.remove('hidden')
    feedbackModal.classList.add('flex')
    document.body.style.overflow = 'hidden'
  }
}

function closeFeedbackModal() {
  const feedbackModal = document.getElementById('feedback-modal')
  if (feedbackModal) {
    feedbackModal.classList.add('hidden')
    feedbackModal.classList.remove('flex')
    document.body.style.overflow = ''
  }
}

/**
 * Cookies popup functionality
 */
function initCookiesPopup() {
  const cookiesPopup = document.getElementById('cookies-popup')
  const acceptCookies = document.getElementById('accept-cookies')
  const declineCookies = document.getElementById('decline-cookies')

  // Check if user has already made a choice
  const cookiesAccepted = localStorage.getItem('sbk-cookies-accepted')

  if (!cookiesAccepted && cookiesPopup) {
    // Show popup after 2 seconds
    setTimeout(() => {
      cookiesPopup.classList.remove('hidden')
      cookiesPopup.classList.add('flex')
    }, 2000)

    if (acceptCookies) {
      acceptCookies.addEventListener('click', acceptCookiesHandler)
    }

    if (declineCookies) {
      declineCookies.addEventListener('click', declineCookiesHandler)
    }
  }
}

function acceptCookiesHandler() {
  localStorage.setItem('sbk-cookies-accepted', 'true')
  closeCookiesPopup()
}

function declineCookiesHandler() {
  localStorage.setItem('sbk-cookies-accepted', 'false')
  closeCookiesPopup()
}

function closeCookiesPopup() {
  const cookiesPopup = document.getElementById('cookies-popup')
  if (cookiesPopup) {
    cookiesPopup.classList.add('hidden')
    cookiesPopup.classList.remove('flex')
  }
}

/**
 * Claim your spot modal functionality
 */
function initClaimSpotModal() {
  const claimBtns = document.querySelectorAll('[data-claim-spot]')
  const claimModal = document.getElementById('claim-spot-modal')
  const closeClaimBtn = document.getElementById('close-claim-modal')

  if (claimModal && closeClaimBtn) {
    claimBtns.forEach((btn) => {
      btn.addEventListener('click', openClaimSpotModal)
    })

    closeClaimBtn.addEventListener('click', closeClaimSpotModal)

    // Close on outside click
    claimModal.addEventListener('click', (e) => {
      if (e.target === claimModal) {
        closeClaimSpotModal()
      }
    })
  }
}

function openClaimSpotModal(e) {
  e.preventDefault()
  const claimModal = document.getElementById('claim-spot-modal')
  if (claimModal) {
    claimModal.classList.remove('hidden')
    claimModal.classList.add('flex')
    document.body.style.overflow = 'hidden'
  }
}

function closeClaimSpotModal() {
  const claimModal = document.getElementById('claim-spot-modal')
  if (claimModal) {
    claimModal.classList.add('hidden')
    claimModal.classList.remove('flex')
    document.body.style.overflow = ''
  }
}

/**
 * Initialize all animations
 */
export function init() {
  // Initialize scroll animations
  initScrollAnimations()

  // Initialize feedback button
  initFeedbackButton()

  // Initialize cookies popup
  initCookiesPopup()

  // Initialize claim spot modal
  initClaimSpotModal()
}

/**
 * Cleanup function
 */
export function teardown() {
  // Disconnect observer if it exists
  if (scrollObserver) {
    scrollObserver.disconnect()
    scrollObserver = null
  }

  // Clean up event listeners
  const feedbackBtn = document.getElementById('feedback-btn')
  const closeFeedback = document.getElementById('close-feedback')
  const acceptCookies = document.getElementById('accept-cookies')
  const declineCookies = document.getElementById('decline-cookies')
  const claimBtns = document.querySelectorAll('[data-claim-spot]')
  const closeClaimBtn = document.getElementById('close-claim-modal')

  if (feedbackBtn) feedbackBtn.removeEventListener('click', openFeedbackModal)
  if (closeFeedback)
    closeFeedback.removeEventListener('click', closeFeedbackModal)
  if (acceptCookies)
    acceptCookies.removeEventListener('click', acceptCookiesHandler)
  if (declineCookies)
    declineCookies.removeEventListener('click', declineCookiesHandler)
  if (closeClaimBtn)
    closeClaimBtn.removeEventListener('click', closeClaimSpotModal)
  claimBtns.forEach((btn) => {
    btn.removeEventListener('click', openClaimSpotModal)
  })

  // Reset body overflow
  document.body.style.overflow = ''
}
