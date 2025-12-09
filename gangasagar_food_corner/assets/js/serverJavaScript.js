/**
 * Gangasagar Food Corner - Homepage Animations & Interactions
 * Handles scroll reveal animations, marquee effects, header transitions, and order system
 */

let scrollListener
let marquee1Element
let marquee2Element
let backToTopButton
let orderModal
let closeOrderModalBtn
let cancelOrderBtn
let deliveryMethodRadios
let dishDetailsModal
let closeDishDetailsBtn
let selectedDishes = []
let autoPopupShown = false
let cookiePopupElement
let topBannerElement
let autoOrderPopupElement

// Dish data with descriptions
const dishData = {
  1: {
    name: 'Grilled Salmon Delight',
    price: 499,
    mrp: 699,
    rating: 4.8,
    description:
      'Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables, lemon butter sauce, and aromatic herbs. A healthy and delicious choice rich in omega-3 fatty acids.',
    image:
      'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/1a7ea513-d0be-4ae5-b4d7-3431b204fc00/publicContain',
  },
  2: {
    name: 'Rainbow Buddha Bowl',
    price: 349,
    mrp: 449,
    rating: 4.6,
    description:
      'A vibrant and nutritious bowl filled with fresh vegetables, quinoa, avocado, chickpeas, and tahini dressing. Perfect for health-conscious food lovers seeking a complete meal.',
    image:
      'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/eb57840d-196f-44bc-e871-94e281bac600/public',
  },
  3: {
    name: 'Mediterranean Feast',
    price: 599,
    mrp: 799,
    rating: 4.9,
    description:
      'An authentic spread of Greek favorites including fresh pita bread, creamy tzatziki, crumbled feta cheese, Greek salad, and perfectly grilled fish. A journey to the Mediterranean.',
    image:
      'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/c8b19486-427a-4b38-de68-9b0f9de3be00/public',
  },
  4: {
    name: 'Rajma Rice Combo',
    price: 249,
    mrp: 329,
    rating: 4.7,
    description:
      'Traditional North Indian comfort food featuring slow-cooked kidney beans in rich tomato gravy, served with steaming basmati rice. Feels like home-cooked goodness.',
    image:
      'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/95c24b6c-90ae-4940-8e0b-0b871d8b7d00/publicContain',
  },
  5: {
    name: 'Aloo Paratha Special',
    price: 179,
    mrp: 229,
    rating: 4.5,
    description:
      'Crispy stuffed Indian flatbread filled with spiced potato mixture, served hot with butter, yogurt, and pickle. A breakfast favorite that works anytime!',
    image:
      'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/0a2155c3-f3bb-4d3a-3147-eeabdee93800/public',
  },
  6: {
    name: 'Special Thali',
    price: 399,
    mrp: 499,
    rating: 4.8,
    description:
      'A complete Indian meal platter with dal, sabzi, roti, rice, raita, salad, pickle, and dessert. Experience the variety of Indian cuisine in one plate.',
    image:
      'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a2244dab-f3bf-4226-cc30-32d90a397800/public',
  },
}

/**
 * Initialize AOS (Animate On Scroll) library
 */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100,
    })
  }
}

/**
 * Handle header glassmorphism effect on scroll
 */
function handleHeaderScroll() {
  const header = document.getElementById('global-header')
  if (!header) return

  if (window.scrollY > 50) {
    header.classList.add('header-scrolled')
  } else {
    header.classList.remove('header-scrolled')
  }
}

/**
 * Initialize marquee scroll effects with pause on hover
 */
function initMarqueeEffects() {
  marquee1Element = document.getElementById('marquee-1')
  marquee2Element = document.getElementById('marquee-2')

  if (marquee1Element) {
    marquee1Element.addEventListener('mouseenter', handleMarquee1MouseEnter)
    marquee1Element.addEventListener('mouseleave', handleMarquee1MouseLeave)
  }

  if (marquee2Element) {
    marquee2Element.addEventListener('mouseenter', handleMarquee2MouseEnter)
    marquee2Element.addEventListener('mouseleave', handleMarquee2MouseLeave)
  }
}

function handleMarquee1MouseEnter() {
  marquee1Element.classList.add('marquee-paused')
}

function handleMarquee1MouseLeave() {
  marquee1Element.classList.remove('marquee-paused')
}

function handleMarquee2MouseEnter() {
  marquee2Element.classList.add('marquee-paused')
}

function handleMarquee2MouseLeave() {
  marquee2Element.classList.remove('marquee-paused')
}

/**
 * Handle back to top button functionality
 */
function initBackToTop() {
  backToTopButton = document.getElementById('backToTop')

  if (backToTopButton) {
    backToTopButton.addEventListener('click', handleBackToTopClick)
  }
}

function handleBackToTopClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

/**
 * Handle order modal functionality
 */
function initOrderModal() {
  orderModal = document.getElementById('orderModal')
  closeOrderModalBtn = document.getElementById('closeOrderModal')
  cancelOrderBtn = document.getElementById('cancelOrder')
  deliveryMethodRadios = document.querySelectorAll(
    'input[name="deliveryMethod"]'
  )
  dishDetailsModal = document.getElementById('dishDetailsModal')
  closeDishDetailsBtn = document.getElementById('closeDishDetailsModal')

  // Close order modal
  if (closeOrderModalBtn) {
    closeOrderModalBtn.addEventListener('click', handleCloseOrderModal)
  }

  if (cancelOrderBtn) {
    cancelOrderBtn.addEventListener('click', handleCloseOrderModal)
  }

  if (orderModal) {
    orderModal.addEventListener('click', handleOrderModalOutsideClick)
  }

  // Close dish details modal
  if (closeDishDetailsBtn) {
    closeDishDetailsBtn.addEventListener('click', handleCloseDishDetailsModal)
  }

  if (dishDetailsModal) {
    dishDetailsModal.addEventListener(
      'click',
      handleDishDetailsModalOutsideClick
    )
  }

  // Handle delivery method change
  deliveryMethodRadios.forEach((radio) => {
    radio.addEventListener('change', handleDeliveryMethodChange)
  })

  // Add click handlers to all "Order Now" buttons
  const orderButtons = document.querySelectorAll('a[href="javascript:void(0)"]')
  orderButtons.forEach((button) => {
    const text = button.textContent.toLowerCase()
    if (
      text.includes('order') ||
      text.includes('explore') ||
      text.includes('book')
    ) {
      button.addEventListener('click', handleOrderButtonClick)
    }
  })

  // Add dish buttons event listeners
  initDishButtons()

  // Form submission
  const orderForm = document.getElementById('orderForm')
  if (orderForm) {
    orderForm.addEventListener('submit', handleOrderFormSubmit)
  }
}

function initDishButtons() {
  // View dish buttons
  const viewButtons = document.querySelectorAll('.view-dish-btn')
  viewButtons.forEach((btn) => {
    btn.addEventListener('click', handleViewDish)
  })

  // Add dish buttons in modal
  const addButtons = document.querySelectorAll('.add-dish-btn')
  addButtons.forEach((btn) => {
    btn.addEventListener('click', handleAddDish)
  })

  // Dish order buttons (from featured dishes section)
  const dishOrderButtons = document.querySelectorAll('.dish-order-btn')
  dishOrderButtons.forEach((btn) => {
    btn.addEventListener('click', handleDishOrderButton)
  })

  // Add from details button
  const addFromDetailsBtn = document.getElementById('addDishFromDetails')
  if (addFromDetailsBtn) {
    addFromDetailsBtn.addEventListener('click', handleAddFromDetails)
  }
}

function handleViewDish(e) {
  const dishId = e.currentTarget.getAttribute('data-dish-id')
  const dish = dishData[dishId]

  if (!dish) return

  // Populate dish details modal
  document.getElementById('dishDetailName').textContent = dish.name
  document.getElementById('dishDetailImage').src = dish.image
  document.getElementById('dishDetailImage').alt = dish.name
  document.getElementById('dishDetailRating').textContent = `â˜… ${dish.rating}`
  document.getElementById('dishDetailPrice').textContent = `â‚¹${dish.price}`
  document.getElementById('dishDetailMRP').textContent = `â‚¹${dish.mrp}`
  const discount = Math.round(((dish.mrp - dish.price) / dish.mrp) * 100)
  document.getElementById('dishDetailDiscount').textContent = `${discount}% OFF`
  document.getElementById('dishDetailDescription').textContent =
    dish.description

  // Store current dish ID
  document
    .getElementById('addDishFromDetails')
    .setAttribute('data-dish-id', dishId)

  // Show modal
  if (dishDetailsModal) {
    dishDetailsModal.classList.remove('hidden')
  }
}

function handleAddFromDetails(e) {
  const dishId = e.currentTarget.getAttribute('data-dish-id')
  addDishToCart(dishId)
  handleCloseDishDetailsModal()
}

function handleAddDish(e) {
  const button = e.currentTarget
  // First try to get dishId from button itself
  let dishId = button.getAttribute('data-dish-id')

  // If not on button, get from parent card
  if (!dishId) {
    const dishCard = button.closest('[data-dish-id]')
    dishId = dishCard ? dishCard.getAttribute('data-dish-id') : null
  }

  if (dishId) {
    addDishToCart(dishId)
  }
}

function addDishToCart(dishId) {
  const dishCard = document.querySelector(`[data-dish-id="${dishId}"]`)
  if (!dishCard) return

  const dishName = dishCard.getAttribute('data-dish-name')
  const dishPrice = parseInt(dishCard.getAttribute('data-dish-price'))

  // Check if dish already in cart
  const existingDish = selectedDishes.find((d) => d.id === dishId)
  if (existingDish) {
    // Already added, remove it
    selectedDishes = selectedDishes.filter((d) => d.id !== dishId)
    updateDishButton(dishId, false)
  } else {
    // Add to cart
    selectedDishes.push({
      id: dishId,
      name: dishName,
      price: dishPrice,
    })
    updateDishButton(dishId, true)
  }

  updateSelectedDishesList()
  updateOrderSummary()
}

function updateDishButton(dishId, isAdded) {
  const dishCard = document.querySelector(`[data-dish-id="${dishId}"]`)
  if (!dishCard) return

  const addBtn = dishCard.querySelector('.add-dish-btn')
  if (!addBtn) return

  if (isAdded) {
    addBtn.innerHTML = '<i class="fas fa-minus"></i>'
    addBtn.classList.add('bg-red-500', 'hover:bg-red-600')
    addBtn.classList.remove(
      'bg-[var(--primary-color)]',
      'hover:bg-[var(--primary-button-hover-bg-color)]'
    )
    dishCard.classList.add(
      'border-[var(--primary-color)]',
      'bg-[var(--primary-color)]/5'
    )
  } else {
    addBtn.innerHTML = '<i class="fas fa-plus"></i>'
    addBtn.classList.remove('bg-red-500', 'hover:bg-red-600')
    addBtn.classList.add(
      'bg-[var(--primary-color)]',
      'hover:bg-[var(--primary-button-hover-bg-color)]'
    )
    dishCard.classList.remove(
      'border-[var(--primary-color)]',
      'bg-[var(--primary-color)]/5'
    )
  }
}

function updateSelectedDishesList() {
  const section = document.getElementById('selectedDishesSection')
  const list = document.getElementById('selectedDishesList')
  const summaryList = document.getElementById('orderSummaryDishes')

  if (!section || !list) return

  if (selectedDishes.length === 0) {
    section.classList.add('hidden')
    if (summaryList) summaryList.innerHTML = ''
    return
  }

  section.classList.remove('hidden')
  const dishesHTML = selectedDishes
    .map(
      (dish) => `
    <div class="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
      <div class="flex-1">
        <span class="font-semibold text-[var(--dark-text-color)]">${dish.name}</span>
        <span class="text-[var(--primary-color)] font-bold ml-3">â‚¹${dish.price}</span>
      </div>
      <button type="button" class="text-red-500 hover:text-red-700 px-2" onclick="window.removeDishFromCart('${dish.id}')">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `
    )
    .join('')

  list.innerHTML = dishesHTML

  // Also update order summary dishes list
  if (summaryList) {
    summaryList.innerHTML = selectedDishes
      .map(
        (dish) => `
      <div class="flex justify-between text-sm text-[var(--dark-text-color)]">
        <span>${dish.name}</span>
        <span class="font-semibold">â‚¹${dish.price}</span>
      </div>
    `
      )
      .join('')
  }
}

// Make removeDishFromCart available globally
window.removeDishFromCart = function (dishId) {
  selectedDishes = selectedDishes.filter((d) => d.id !== dishId)
  updateDishButton(dishId, false)
  updateSelectedDishesList()
  updateOrderSummary()
}

function updateOrderSummary() {
  const subtotal = selectedDishes.reduce((sum, dish) => sum + dish.price, 0)
  const gst = Math.round(subtotal * 0.05)
  const platformFee = 5
  const packagingCharge = 10
  const deliveryMethod = document.querySelector(
    'input[name="deliveryMethod"]:checked'
  )
  const deliveryCharge =
    deliveryMethod && deliveryMethod.value === 'home' ? 40 : 0
  const total = subtotal + gst + platformFee + packagingCharge + deliveryCharge

  document.getElementById('subtotalAmount').textContent = `â‚¹${subtotal}`
  document.getElementById('gstAmount').textContent = `â‚¹${gst}`
  document.getElementById('platformFee').textContent = `â‚¹${platformFee}`
  document.getElementById('packagingCharge').textContent = `â‚¹${packagingCharge}`
  document.getElementById('deliveryCharges').textContent = `â‚¹${deliveryCharge}`
  document.getElementById('totalAmount').textContent = `â‚¹${total}`
}

function openOrderModal() {
  if (orderModal) {
    orderModal.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
  }
}

function handleOrderButtonClick(e) {
  e.preventDefault()
  openOrderModal()
}

function handleCloseOrderModal() {
  if (orderModal) {
    orderModal.classList.add('hidden')
    document.body.style.overflow = 'auto'
  }
}

function handleOrderModalOutsideClick(e) {
  if (e.target === orderModal) {
    handleCloseOrderModal()
  }
}

function handleCloseDishDetailsModal() {
  if (dishDetailsModal) {
    dishDetailsModal.classList.add('hidden')
  }
}

function handleDishDetailsModalOutsideClick(e) {
  if (e.target === dishDetailsModal) {
    handleCloseDishDetailsModal()
  }
}

function handleDeliveryMethodChange(e) {
  const addressFields = document.getElementById('addressFields')
  if (addressFields) {
    if (e.target.value === 'home') {
      addressFields.style.display = 'block'
      addressFields.querySelectorAll('input, textarea').forEach((field) => {
        field.required = true
      })
    } else {
      addressFields.style.display = 'none'
      addressFields.querySelectorAll('input, textarea').forEach((field) => {
        field.required = false
      })
    }
  }
  updateOrderSummary()
}

function handleOrderFormSubmit(e) {
  e.preventDefault()

  // Check if any dishes selected
  if (selectedDishes.length === 0) {
    alert('Please select at least one dish to continue.')
    return
  }

  // Get form data
  const formData = new FormData(e.target)
  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const deliveryMethod = formData.get('deliveryMethod')
  const paymentMethod = formData.get('paymentMethod')
  const address = formData.get('address')
  const city = formData.get('city')
  const pincode = formData.get('pincode')

  // Calculate totals
  const subtotal = selectedDishes.reduce((sum, dish) => sum + dish.price, 0)
  const gst = Math.round(subtotal * 0.05)
  const platformFee = 5
  const packagingCharge = 10
  const deliveryCharge = deliveryMethod === 'home' ? 40 : 0
  const total = subtotal + gst + platformFee + packagingCharge + deliveryCharge

  // Create order summary
  const orderSummary = {
    customerInfo: {
      name,
      email,
      phone,
    },
    dishes: selectedDishes,
    deliveryMethod,
    deliveryAddress:
      deliveryMethod === 'home'
        ? `${address}, ${city}, ${pincode}`
        : 'Pick up from store',
    paymentMethod,
    subtotal,
    gst,
    platformFee,
    packagingCharge,
    deliveryCharge,
    total,
  }

  // Store in sessionStorage
  sessionStorage.setItem('orderData', JSON.stringify(orderSummary))

  // Redirect to payment page (you can create a payment page or integrate payment gateway)
  // For now, show success message
  alert(
    `Order placed successfully!\\n\\nTotal Amount: â‚¹${total}\\nPayment Method: ${
      paymentMethod === 'cod' ? 'Cash on Delivery' : 'UPI/QR Code'
    }\\n\\nYou will receive a confirmation email shortly.`
  )

  // Reset and close
  selectedDishes = []
  e.target.reset()
  updateSelectedDishesList()
  updateOrderSummary()
  handleCloseOrderModal()
}

function handleDishOrderButton(e) {
  e.preventDefault()
  const dishId = e.currentTarget.getAttribute('data-dish-id')

  // Open modal
  openOrderModal()

  // Auto-select the dish
  if (dishId && dishData[dishId]) {
    setTimeout(() => {
      addDishToCart(dishId)
    }, 300)
  }
}

/**
 * Add scroll reveal animations to sections
 */
function addScrollRevealAnimations() {
  // Hero Section
  const heroSection = document.querySelector('#sybbke')
  if (heroSection) {
    heroSection.setAttribute('data-aos', 'fade-up')
  }

  // Features Section
  const featuresSection = document.querySelector('#sy6olq')
  if (featuresSection) {
    const featureCards = featuresSection.querySelectorAll('.group')
    featureCards.forEach((card, index) => {
      card.setAttribute('data-aos', 'fade-up')
      card.setAttribute('data-aos-delay', `${index * 100}`)
    })
  }

  // Story Section
  const storySection = document.querySelector('#suvoc1')
  if (storySection) {
    const storyImage = storySection.querySelector('img')
    const storyContent = storySection.querySelector('.text-white')

    if (storyImage) {
      storyImage.setAttribute('data-aos', 'fade-right')
    }
    if (storyContent) {
      storyContent.setAttribute('data-aos', 'fade-left')
    }
  }

  // Dishes Section
  const dishesSection = document.querySelector('#s9vn81')
  if (dishesSection) {
    const dishCards = dishesSection.querySelectorAll('.group')
    dishCards.forEach((card, index) => {
      card.setAttribute('data-aos', 'zoom-in')
      card.setAttribute('data-aos-delay', `${index * 150}`)
    })
  }

  // Testimonials Section
  const testimonialsSection = document.querySelector('#sy643d')
  if (testimonialsSection) {
    const header = testimonialsSection.querySelector('.text-center')
    if (header) {
      header.setAttribute('data-aos', 'fade-down')
    }
  }

  // Contact Section
  const contactSection = document.querySelector('#sjqkq6m')
  if (contactSection) {
    const form = contactSection.querySelector('form')
    const contactInfo = contactSection.querySelectorAll('.bg-white')

    if (form) {
      form.setAttribute('data-aos', 'fade-right')
    }
    contactInfo.forEach((info, index) => {
      info.setAttribute('data-aos', 'fade-left')
      info.setAttribute('data-aos-delay', `${index * 100}`)
    })
  }
}

/**
 * Add interactive button classes
 */
function enhanceButtons() {
  const buttons = document.querySelectorAll(
    'a[class*="bg-[var(--primary-color)]"], a[class*="bg-[var(--secondary-button-bg-color)]"]'
  )
  buttons.forEach((button) => {
    if (!button.classList.contains('btn-interactive')) {
      button.classList.add('btn-interactive')
    }
  })
}

/**
 * Add 3D card effects to feature cards
 */
function enhance3DCards() {
  const cards = document.querySelectorAll('.group')
  cards.forEach((card) => {
    if (!card.classList.contains('card-3d')) {
      card.classList.add('card-3d')
    }
  })
}

/**
 * Cookie Management Functions
 */
function checkAndShowCookiePopup() {
  cookiePopupElement = document.getElementById('cookiePopup')
  if (!cookiePopupElement) return

  const cookieConsent = localStorage.getItem('cookieConsent')
  const cookieTimestamp = localStorage.getItem('cookieConsentTimestamp')

  if (!cookieConsent) {
    // Never accepted or rejected - show popup
    cookiePopupElement.classList.remove('hidden')
  } else if (cookieConsent === 'rejected') {
    // Check if 24 hours have passed since rejection
    const currentTime = new Date().getTime()
    const lastRejectedTime = parseInt(cookieTimestamp)
    const oneDayInMs = 24 * 60 * 60 * 1000

    if (currentTime - lastRejectedTime >= oneDayInMs) {
      // Show popup again after 24 hours
      cookiePopupElement.classList.remove('hidden')
    } else {
      // Still within 24 hours, show banner
      showTopBanner()
    }
  } else if (cookieConsent === 'accepted') {
    // Already accepted - show banner
    showTopBanner()
  }
}

function handleAcceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted')
  localStorage.setItem(
    'cookieConsentTimestamp',
    new Date().getTime().toString()
  )
  if (cookiePopupElement) {
    cookiePopupElement.classList.add('hidden')
  }
  showTopBanner()
}

function handleRejectCookies() {
  localStorage.setItem('cookieConsent', 'rejected')
  localStorage.setItem(
    'cookieConsentTimestamp',
    new Date().getTime().toString()
  )
  if (cookiePopupElement) {
    cookiePopupElement.classList.add('hidden')
  }
  showTopBanner()
}

function initCookiePopup() {
  const acceptBtn = document.getElementById('acceptCookies')
  const rejectBtn = document.getElementById('rejectCookies')

  if (acceptBtn) {
    acceptBtn.addEventListener('click', handleAcceptCookies)
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', handleRejectCookies)
  }

  // Check and show cookie popup on page load
  checkAndShowCookiePopup()
}

/**
 * Top Banner Functions
 */
function showTopBanner() {
  topBannerElement = document.getElementById('topBanner')
  if (topBannerElement) {
    topBannerElement.classList.remove('hidden')

    // Adjust body padding to account for banner
    document.body.style.paddingTop = '48px'
    document.body.classList.add('has-top-banner')
  }
}

function initTopBanner() {
  const closeBannerBtn = document.getElementById('closeBanner')
  const orderBtn = document.getElementById('topBannerOrderBtn')

  if (closeBannerBtn) {
    closeBannerBtn.addEventListener('click', handleCloseBanner)
  }

  if (orderBtn) {
    orderBtn.addEventListener('click', handleTopBannerOrder)
  }
}

function handleCloseBanner() {
  if (topBannerElement) {
    topBannerElement.classList.add('hidden')
    document.body.style.paddingTop = '0'
    document.body.classList.remove('has-top-banner')
  }
}

function handleTopBannerOrder(e) {
  e.preventDefault()
  openOrderModal()
}

/**
 * Auto Order Popup Functions
 */
function checkAndShowAutoPopup() {
  autoOrderPopupElement = document.getElementById('autoOrderPopup')
  if (!autoOrderPopupElement) return

  const popupShownDate = localStorage.getItem('autoPopupShownDate')
  const today = new Date().toDateString()

  if (popupShownDate !== today) {
    // Show popup after 6 seconds
    setTimeout(() => {
      if (!autoPopupShown) {
        autoOrderPopupElement.classList.remove('hidden')
        document.body.style.overflow = 'hidden'
        autoPopupShown = true
        localStorage.setItem('autoPopupShownDate', today)
      }
    }, 6000)
  } else {
    // Already shown today - show banner instead
    showTopBanner()
  }
}

function initAutoOrderPopup() {
  const closeBtn = document.getElementById('closeAutoPopup')
  const orderBtn = document.getElementById('autoPopupOrderBtn')

  if (closeBtn) {
    closeBtn.addEventListener('click', handleCloseAutoPopup)
  }

  if (orderBtn) {
    orderBtn.addEventListener('click', handleAutoPopupOrder)
  }

  if (autoOrderPopupElement) {
    autoOrderPopupElement.addEventListener('click', handleAutoPopupOutsideClick)
  }

  // Check and show auto popup
  checkAndShowAutoPopup()
}

function handleCloseAutoPopup() {
  if (autoOrderPopupElement) {
    autoOrderPopupElement.classList.add('hidden')
    document.body.style.overflow = 'auto'
  }
  showTopBanner()
}

function handleAutoPopupOrder(e) {
  e.preventDefault()
  handleCloseAutoPopup()
  openOrderModal()
}

function handleAutoPopupOutsideClick(e) {
  if (e.target === autoOrderPopupElement) {
    handleCloseAutoPopup()
  }
}

/**
 * Initialize all animations and interactions
 */
export function init() {
  // Initialize AOS
  initAOS()

  // Add scroll reveal animations
  addScrollRevealAnimations()

  // Enhance interactive elements
  enhanceButtons()
  enhance3DCards()

  // Initialize marquee effects
  initMarqueeEffects()

  // Initialize back to top button
  initBackToTop()

  // Initialize order modal
  initOrderModal()

  // Initialize cookie popup
  initCookiePopup()

  // Initialize top banner
  initTopBanner()

  // Initialize auto order popup
  initAutoOrderPopup()

  // Add scroll listener for header
  scrollListener = handleHeaderScroll
  window.addEventListener('scroll', scrollListener)

  // Initial header check
  handleHeaderScroll()

  // Refresh AOS after a short delay to ensure all elements are loaded
  setTimeout(() => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh()
    }
  }, 500)
}

/**
 * Cleanup function to remove event listeners
 */
export function teardown() {
  // Remove scroll listener
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener)
    scrollListener = null
  }

  // Remove marquee listeners
  if (marquee1Element) {
    marquee1Element.removeEventListener('mouseenter', handleMarquee1MouseEnter)
    marquee1Element.removeEventListener('mouseleave', handleMarquee1MouseLeave)
    marquee1Element = null
  }

  if (marquee2Element) {
    marquee2Element.removeEventListener('mouseenter', handleMarquee2MouseEnter)
    marquee2Element.removeEventListener('mouseleave', handleMarquee2MouseLeave)
    marquee2Element = null
  }

  // Remove back to top listener
  if (backToTopButton) {
    backToTopButton.removeEventListener('click', handleBackToTopClick)
    backToTopButton = null
  }

  // Clean up order modal
  selectedDishes = []
  if (closeOrderModalBtn) {
    closeOrderModalBtn.removeEventListener('click', handleCloseOrderModal)
  }
  if (cancelOrderBtn) {
    cancelOrderBtn.removeEventListener('click', handleCloseOrderModal)
  }
  if (orderModal) {
    orderModal.removeEventListener('click', handleOrderModalOutsideClick)
  }
  if (closeDishDetailsBtn) {
    closeDishDetailsBtn.removeEventListener(
      'click',
      handleCloseDishDetailsModal
    )
  }
  if (dishDetailsModal) {
    dishDetailsModal.removeEventListener(
      'click',
      handleDishDetailsModalOutsideClick
    )
  }

  // Clean up cookie popup
  const acceptBtn = document.getElementById('acceptCookies')
  const rejectBtn = document.getElementById('rejectCookies')
  if (acceptBtn) {
    acceptBtn.removeEventListener('click', handleAcceptCookies)
  }
  if (rejectBtn) {
    rejectBtn.removeEventListener('click', handleRejectCookies)
  }

  // Clean up top banner
  const closeBannerBtn = document.getElementById('closeBanner')
  const topBannerOrderBtn = document.getElementById('topBannerOrderBtn')
  if (closeBannerBtn) {
    closeBannerBtn.removeEventListener('click', handleCloseBanner)
  }
  if (topBannerOrderBtn) {
    topBannerOrderBtn.removeEventListener('click', handleTopBannerOrder)
  }

  // Clean up auto popup
  const closeAutoPopupBtn = document.getElementById('closeAutoPopup')
  const autoPopupOrderBtn = document.getElementById('autoPopupOrderBtn')
  if (closeAutoPopupBtn) {
    closeAutoPopupBtn.removeEventListener('click', handleCloseAutoPopup)
  }
  if (autoPopupOrderBtn) {
    autoPopupOrderBtn.removeEventListener('click', handleAutoPopupOrder)
  }
  if (autoOrderPopupElement) {
    autoOrderPopupElement.removeEventListener(
      'click',
      handleAutoPopupOutsideClick
    )
  }

  // Reset body styles
  document.body.style.overflow = 'auto'
  document.body.style.paddingTop = '0'

  // Reset flags
  autoPopupShown = false
  cookiePopupElement = null
  topBannerElement = null
  autoOrderPopupElement = null
}
