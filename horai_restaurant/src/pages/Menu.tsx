import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { MenuList } from '../components/MenuList';
import { Footer } from '../components/Footer';
import { ReservationSection } from '../components/ReservationSection';
import { PageWrapper } from '../components/PageWrapper';

// Images for the mobile hero floating elements
const MOBILE_HERO_IMAGES = [
  {
    id: 1,
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/4ccb5a939e96b7ea358f3c6fbddee72a.webp",
    className: "top-4 left-4 w-32 aspect-[3/4] rotate-[-6deg]", // Fully visible top-left
    initial: { opacity: 0, x: -20, y: -20 }
  },
  {
    id: 2,
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/a5c73c9ee7eee681cb06640ad2f9f8ea.webp",
    className: "bottom-32 right-4 w-32 aspect-[3/4] rotate-[6deg]", // Fully visible bottom-right
    initial: { opacity: 0, x: 20, y: 20 }
  },
  {
    id: 3,
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/ce4a058a1b081630fb689cacf16943b3.webp",
    className: "top-20 -right-16 w-32 aspect-[3/4] rotate-[12deg] opacity-60", // Partially visible top-right
    initial: { opacity: 0, x: 20, y: -20 }
  },
  {
    id: 4,
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/e0d2660716031d5d70fbce7bfb66d911.webp",
    className: "bottom-48 -left-16 w-32 aspect-[3/4] rotate-[-12deg] opacity-60", // Partially visible bottom-left
    initial: { opacity: 0, x: -20, y: 20 }
  }
];

// Desktop Hero Items
const HERO_ITEMS = [
  {
    id: 1,
    title: "Seasonal Crudo",
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/4ccb5a939e96b7ea358f3c6fbddee72a.webp",
    className: "md:top-[22vh] md:left-[4%] md:w-[20vw] w-full max-w-[320px] mx-auto",
    rotation: "md:-rotate-[12deg] -rotate-2",
    delay: 0.3
  },
  {
    id: 2,
    title: "Smoked Duck Breast",
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/a5c73c9ee7eee681cb06640ad2f9f8ea.webp",
    className: "md:top-[26vh] md:right-[4%] md:w-[19vw] w-full max-w-[320px] mx-auto",
    rotation: "md:rotate-[12deg] rotate-2",
    delay: 0.4
  },
  {
    id: 3,
    title: "Tuna Tartare",
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/ce4a058a1b081630fb689cacf16943b3.webp",
    className: "md:top-[82vh] md:left-[8%] md:w-[22vw] w-full max-w-[320px] mx-auto",
    rotation: "md:-rotate-[8deg] -rotate-1",
    delay: 0.5
  },
  {
    id: 4,
    title: "Garden Harvest",
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/e0d2660716031d5d70fbce7bfb66d911.webp",
    className: "md:top-[88vh] md:right-[6%] md:w-[21vw] w-full max-w-[320px] mx-auto",
    rotation: "md:rotate-[10deg] rotate-1",
    delay: 0.6
  }
];

export const Menu: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const HERO_BG = "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/5652.webp";
  
  const { scrollY } = useScroll();
  
  const textOpacity = useTransform(scrollY, [0, 900], [1, 0]);
  const textY = useTransform(scrollY, [0, 900], [0, -150]);

  return (
    <PageWrapper>
      <div ref={containerRef} className="relative w-full bg-rich-black">
        <Navbar />

        {/* ================= MOBILE LAYOUT (< md) ================= */}
        <div className="md:hidden relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-rich-black">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={HERO_BG} 
              alt="Menu Background" 
              className="w-full h-full object-cover opacity-40" 
            />
            <div className="absolute inset-0 bg-rich-black/50 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B090A_90%)]" />
          </div>

          {/* Floating Corner Images */}
          {MOBILE_HERO_IMAGES.map((item) => (
            <motion.div
              key={item.id}
              initial={item.initial}
              animate={{ opacity: item.className.includes('opacity-60') ? 0.6 : 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className={`absolute ${item.className} rounded-sm overflow-hidden shadow-2xl z-10`}
            >
              <img 
                src={item.src} 
                alt="Menu Detail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-cream-50/10 rounded-sm" />
            </motion.div>
          ))}

          {/* Center Text */}
          <div className="relative z-20 text-center px-4 flex flex-col items-center gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center gap-3 mb-2"
            >
               <div className="w-8 h-[1px] bg-cream-50/40" />
               <span className="font-serif text-xs text-cream-50 uppercase tracking-[0.3em]">The Menu</span>
               <div className="w-8 h-[1px] bg-cream-50/40" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1.2 }}
              className="font-serif text-5xl text-cream-50 leading-[0.9] tracking-wide drop-shadow-2xl"
            >
              Exceptional<br />Flavors
            </motion.h1>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream-50/50">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-cream-50/50 to-transparent" />
          </motion.div>

        </div>


        {/* ================= DESKTOP HERO (Visible >= md) ================= */}
        <div className="hidden md:block relative w-full min-h-[180vh] overflow-x-hidden">
          
          {/* Fixed Background */}
          <div className="fixed inset-0 z-0">
            <img 
              src={HERO_BG} 
              alt="Menu Background" 
              className="w-full h-full object-cover opacity-30" 
            />
            <div className="absolute inset-0 bg-rich-black/60" />
          </div>

          {/* Texture Overlay */}
          <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-0" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />

          {/* Fixed Title */}
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10 pointer-events-none"
          >
            <div className="text-center px-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex items-center justify-center gap-6 mb-8"
              >
                <div className="w-12 h-[1px] bg-cream-50/30" />
                <span className="font-sans text-sm uppercase tracking-[0.25em] text-cream-50/70 font-light">The Menu</span>
                <div className="w-12 h-[1px] bg-cream-50/30" />
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="font-serif text-7xl lg:text-8xl text-cream-50 font-light tracking-widest drop-shadow-2xl leading-none"
              >
                Exceptional<br />Flavors
              </motion.h1>
            </div>
          </motion.div>

          {/* Menu Items Container */}
          <div className="relative w-full h-full z-20 pointer-events-none">
            {HERO_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.5, 
                  delay: item.delay, 
                  ease: "easeOut" 
                }}
                className={`absolute ${item.className} ${item.rotation} flex flex-col gap-4 group pointer-events-auto origin-center`}
              >
                <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-2xl shadow-black/60 transition-transform duration-700 ease-out hover:scale-[1.02]">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-rich-black/10 mix-blend-multiply" />
                  <div className="absolute inset-0 border border-cream-50/5 rounded-sm" />
                </div>

                <div className="text-center">
                  <span className="font-serif text-cream-50/70 text-xs tracking-[0.2em] uppercase">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <MenuList />
        <ReservationSection />
        <Footer />

      </div>
    </PageWrapper>
  );
};
