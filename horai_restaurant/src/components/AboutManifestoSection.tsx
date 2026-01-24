import React from 'react';
import { motion } from 'framer-motion';

export const AboutManifestoSection: React.FC = () => {
  return (
    <section className="relative w-full bg-rich-black py-32 md:py-48 flex justify-center items-center overflow-hidden">
      
      {/* Soft Gradient Fades for Seamless Transition */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-rich-black via-rich-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-rich-black via-rich-black/80 to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 container mx-auto px-6 md:px-12 max-w-3xl text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
           whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-15%" }}
           transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col gap-10 items-center"
        >
            {/* Headline */}
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream-50 uppercase tracking-[0.12em] leading-tight font-light drop-shadow-lg">
              Bold, Unique, and <br className="hidden md:block" /> Unmatched Culinary <br className="hidden md:block" /> Craftsmanship
            </h2>
            
            {/* Editorial Paragraph */}
            <p className="font-sans text-cream-100/60 text-sm md:text-base leading-loose max-w-xl tracking-wide font-light antialiased">
              We believe that true mastery lies not just in the precision of the cut or the balance of the seasoning, but in the story every plate tells. Our journey is one of relentless curiosity—honoring the ancient rhythms of Asian culinary traditions while daring to rewrite the rules. Every ingredient is chosen with intention, every dish composed with an artist’s eye, creating a dining experience that is as provocative as it is profound.
            </p>
        </motion.div>
      </div>
    </section>
  );
};
