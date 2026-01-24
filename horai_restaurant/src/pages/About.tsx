import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ReservationSection } from '../components/ReservationSection'; // Added import
import { Star } from 'lucide-react';
import { PageWrapper } from '../components/PageWrapper';
import { AboutManifestoSection } from '../components/AboutManifestoSection';
import { AboutCraftsmanshipSection } from '../components/AboutCraftsmanshipSection';
import { AboutStatsSection } from '../components/AboutStatsSection';
import { AboutCulturalSection } from '../components/AboutCulturalSection';
import { AboutTestimonialsSection } from '../components/AboutTestimonialsSection';

export const About: React.FC = () => {
  // Updated hero background image
  const HERO_BG = "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/209813e33c5f411ddfd49d98eef34c14.webp";

  return (
    <PageWrapper>
      <div className="w-full min-h-screen bg-rich-black text-cream-50 selection:bg-cream-50/20">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
          
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
                alt="Culinary Craftsmanship" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Cinematic Overlays */}
            {/* 1. Base darkening using the specific #0B090A color (rich-black) */}
            <div className="absolute inset-0 bg-rich-black/40 mix-blend-multiply" />
            
            {/* 2. Vignette for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B090A_90%)] opacity-80" />
            
            {/* 3. Vertical Gradients for seamless blending */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rich-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-rich-black via-rich-black/80 to-transparent" />
            
            {/* 4. Film Grain Texture */}
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
              {/* Ornamental Icon Cluster */}
              <div className="flex items-center gap-3 mb-8 opacity-60">
                <Star strokeWidth={1} size={10} className="fill-cream-50/40 text-cream-50/40" />
                <Star strokeWidth={1} size={14} className="fill-cream-50/60 text-cream-50/60" />
                <Star strokeWidth={1} size={10} className="fill-cream-50/40 text-cream-50/40" />
              </div>

              {/* Headline with Dividers */}
              <div className="w-full flex items-center justify-center gap-6 md:gap-12">
                {/* Left Divider */}
                <div className="hidden md:block w-24 lg:w-32 h-[1px] bg-gradient-to-r from-transparent via-cream-50/20 to-cream-50/40" />
                
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream-50 uppercase tracking-[0.2em] font-light whitespace-nowrap drop-shadow-2xl">
                  A Quest To Excellence
                </h1>
                
                {/* Right Divider */}
                <div className="hidden md:block w-24 lg:w-32 h-[1px] bg-gradient-to-l from-transparent via-cream-50/20 to-cream-50/40" />
              </div>

            </motion.div>
          </div>
        </section>

        {/* Editorial Manifesto Section */}
        <AboutManifestoSection />

        {/* Craftsmanship Visual Section */}
        <AboutCraftsmanshipSection />

        {/* Credibility Stats Section */}
        <AboutStatsSection />

        {/* Cultural Experience (Split Layout) */}
        <AboutCulturalSection />

        {/* Testimonials Section */}
        <AboutTestimonialsSection />
        
        {/* Reservation Section (Global Component) */}
        <ReservationSection />

        {/* Footer (Seamless Blend) */}
        <div className="relative z-10">
           <Footer />
        </div>
      </div>
    </PageWrapper>
  );
};
