import React from 'react';
import { motion } from 'framer-motion';

export const AboutCraftsmanshipSection: React.FC = () => {
  const IMAGE_SRC = "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/1ea02269b3b13b80328c24c97dfa3a38.webp";

  return (
    <section className="relative w-full bg-rich-black overflow-hidden">
      
      {/* Soft Gradient Fades for Seamless Transition with adjacent sections */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rich-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rich-black to-transparent z-10 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full relative"
      >
        <img 
          src={IMAGE_SRC} 
          alt="Culinary Craftsmanship" 
          className="w-full h-auto object-cover block"
        />
        
        {/* Cinematic Overlays for atmosphere */}
        <div className="absolute inset-0 bg-rich-black/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black/20 via-transparent to-transparent opacity-60" />
      </motion.div>

    </section>
  );
};
