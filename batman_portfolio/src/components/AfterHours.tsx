import React from 'react';
import { motion } from 'framer-motion';

export const AfterHours: React.FC = () => {
  return (
    <section className="w-full py-32 bg-white text-black px-4 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        
        {/* Left: Text */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-none mb-8">
              <span className="block italic font-light text-gray-400">After</span>
              Hours
            </h2>
            <p className="font-sans text-xl md:text-2xl leading-relaxed mb-12 max-w-lg">
              Outside of client work, I find inspiration in the shadows of the city—exploring architecture, night photography, and developing new technologies.
            </p>
            <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-sm">
              These aren't just pastimes; they're a reflection of my creative roots. My journey began with sketching in childhood, and over the years, I've explored various art forms, each leaving its mark on the designer I am today.
            </p>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 aspect-[3/2] relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2574&auto=format&fit=crop" 
            alt="After Hours Photography" 
            className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
          />
          <span className="absolute bottom-4 right-4 font-sans text-[10px] tracking-widest text-white/80 uppercase">
            Taken with Leica M11 Monochrom
          </span>
        </motion.div>

      </div>
    </section>
  );
};
