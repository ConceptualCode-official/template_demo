import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const ContactHero: React.FC = () => {
  // Dark, moody plated dessert image
  const HERO_BG = "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2574&auto=format&fit=crop";

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-rich-black">
      
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={HERO_BG} 
            alt="Exquisite Dessert" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-rich-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B090A_90%)] opacity-80" />
        
        {/* Vertical Gradients */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rich-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-rich-black via-rich-black/80 to-transparent" />
        
        {/* Film Grain */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
      </div>

      {/* Centered Composition */}
      <div className="relative z-10 container mx-auto px-4 w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Label */}
          <span className="font-sans text-xs md:text-sm text-cream-50/70 uppercase tracking-[0.25em] mb-6">
            Contact Us
          </span>

          {/* Headline with Dividers */}
          <div className="w-full flex items-center justify-center gap-6 md:gap-12">
            {/* Left Divider */}
            <div className="hidden md:block w-16 lg:w-24 h-[1px] bg-gradient-to-r from-transparent via-cream-50/20 to-cream-50/40" />
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream-50 uppercase tracking-[0.15em] font-light leading-tight drop-shadow-2xl">
              We’re At Your<br />Service
            </h1>
            
            {/* Right Divider */}
            <div className="hidden md:block w-16 lg:w-24 h-[1px] bg-gradient-to-l from-transparent via-cream-50/20 to-cream-50/40" />
          </div>

        </motion.div>
      </div>
    </section>
  );
};
