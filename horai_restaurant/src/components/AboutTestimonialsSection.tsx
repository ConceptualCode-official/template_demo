import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Hōrai completely redefined my expectations of sushi. Every roll felt intentional — the balance of freshness, flavor, and artistry was flawless.",
    author: "Carl S.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/2148283884.webp"
  },
  {
    id: 2,
    quote: "Dining at Hōrai felt like stepping into a carefully composed story. From the first course to the final plate, every detail was thoughtful and refined.",
    author: "Aanya R.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/336.webp"
  },
  {
    id: 3,
    quote: "Hōrai has an elegance that’s rare to find. The flavors were bold yet beautifully balanced, and the service felt intuitive rather than performative.",
    author: "Sofia M.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/2572.webp"
  }
];

export const AboutTestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-advance logic: 7000ms interval
  useEffect(() => {
    const timer = setInterval(() => {
      triggerSlideChange((currentIndex + 1) % TESTIMONIALS.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const triggerSlideChange = (newIndex: number) => {
    setIsVisible(false);
    
    // Wait for fade out (1500ms) before changing content
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsVisible(true);
    }, 1500);
  };

  const handleNext = () => {
    if (!isVisible) return;
    const nextIndex = (currentIndex + 1) % TESTIMONIALS.length;
    triggerSlideChange(nextIndex);
  };

  const handlePrev = () => {
    if (!isVisible) return;
    const prevIndex = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    triggerSlideChange(prevIndex);
  };

  const goToSlide = (index: number) => {
    if (!isVisible || index === currentIndex) return;
    triggerSlideChange(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-rich-black">
      
      {/* Background Image - Kept AnimatePresence for smooth cross-dissolve of images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={TESTIMONIALS[currentIndex].image} 
            alt="Testimonial Background" 
            className="w-full h-full object-cover"
          />
          
          {/* Dark Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-rich-black/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-transparent to-rich-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 md:px-12 text-center">
        
        {/* Text Content with Tailwind CSS Transition */}
        <div 
          className={`
            max-w-4xl flex flex-col items-center gap-8 
            transition-opacity duration-[1500ms] ease-in-out
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {/* Stars */}
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-cream-50 text-cream-50" />
            ))}
          </div>

          {/* Heading */}
          <h2 className="font-serif text-sm md:text-base text-cream-50 uppercase tracking-[0.3em] font-light opacity-80">
            Words of Love
          </h2>

          {/* Quote */}
          <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-cream-50 leading-tight md:leading-snug font-light drop-shadow-lg">
            "{TESTIMONIALS[currentIndex].quote}"
          </p>

          {/* Author */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <span className="font-sans text-sm md:text-base text-cream-50 uppercase tracking-[0.2em] font-medium">
              {TESTIMONIALS[currentIndex].author}
            </span>
            <span className="font-sans text-[10px] text-cream-50/50 uppercase tracking-[0.15em]">
              Guest Review
            </span>
          </div>
        </div>

      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        disabled={!isVisible}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-4 text-cream-50/40 hover:text-cream-50 transition-colors duration-300 group disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      <button 
        onClick={handleNext}
        disabled={!isVisible}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-4 text-cream-50/40 hover:text-cream-50 transition-colors duration-300 group disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            disabled={!isVisible}
            className={`h-1 rounded-full transition-all duration-500 ${
              idx === currentIndex ? 'w-12 bg-cream-50' : 'w-2 bg-cream-50/20 hover:bg-cream-50/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
};
