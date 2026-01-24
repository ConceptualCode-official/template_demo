import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ExquisiteFlavorsSection: React.FC = () => {
  const BACKGROUND_IMAGE = "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/zhg4CQQsNHqANL4P4ykqogUQ.webp";

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden flex items-center justify-center bg-rich-black">
      <div className="absolute inset-0 z-0">
        <img 
          src={BACKGROUND_IMAGE} 
          alt="Exquisite Flavors Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-rich-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-transparent to-rich-black/30 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/80 via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream-50 uppercase tracking-[0.15em] mb-6 font-light drop-shadow-lg"
        >
          Exquisite Flavors
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <div className="w-12 h-[1px] bg-cream-50/50" />
          
          <p className="font-sans text-cream-100/80 text-sm md:text-base leading-relaxed max-w-xl font-light tracking-wide drop-shadow-md">
            Immerse yourself in a culinary journey defined by passion, precision, and the finest ingredients sourced from around the globe.
          </p>

          <Link to="/about">
            <motion.button 
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 px-8 py-3 border border-cream-50/40 bg-rich-black/20 backdrop-blur-sm text-cream-50 font-sans text-xs md:text-sm uppercase tracking-[0.25em] transition-all duration-300 hover:bg-cream-50 hover:text-rich-black hover:border-transparent"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
