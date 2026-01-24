import React from 'react';
import { motion } from 'framer-motion';

export const LocationsSection: React.FC = () => {
  // Sophisticated restaurant interior
  const IMAGE_SRC = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative w-full bg-rich-black">
      
      {/* Visual Hero Banner */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <motion.div
           initial={{ scale: 1.05 }}
           whileInView={{ scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-full h-full"
        >
          <img 
            src={IMAGE_SRC} 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-rich-black/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-transparent to-transparent" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl text-cream-50 uppercase tracking-[0.2em] font-light drop-shadow-lg"
          >
            Locations
          </motion.h2>
        </div>
      </div>

      {/* City Strip */}
      <div className="w-full bg-rich-black py-16 md:py-24 border-t border-cream-50/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
            <LocationItem city="Tokyo" address="Ginza 4-Chome, Chuo City" />
            <LocationItem city="Dubai" address="Downtown Blvd, Opera District" />
            <LocationItem city="Paris" address="12 Rue de la Paix, 1st Arr." />
            <LocationItem city="Rome" address="Via del Corso, 18, Centro" />
          </div>
        </div>
      </div>

    </section>
  );
};

const LocationItem = ({ city, address }: { city: string; address: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="flex flex-col gap-3"
  >
    <h3 className="font-serif text-xl md:text-2xl text-cream-50 uppercase tracking-[0.15em]">
      {city}
    </h3>
    <p className="font-sans text-xs text-cream-50/40 uppercase tracking-[0.1em] leading-relaxed max-w-[200px] mx-auto">
      {address}
    </p>
  </motion.div>
);
