import React from 'react';
import { motion } from 'framer-motion';
import { VideoBackground } from './VideoBackground';
import { Navbar } from './Navbar';

export const Hero: React.FC = () => {
  const VIDEO_SRC = "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/Luxury_Asian_Fine_Dining_Film.webm";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-rich-black text-cream-50">
      <VideoBackground videoSrc={VIDEO_SRC} />
      
      <Navbar />

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-script leading-none text-cream-50 opacity-90 mix-blend-overlay md:mix-blend-normal drop-shadow-2xl text-[clamp(36px,12vw,84px)] lg:text-9xl xl:text-[11rem]"
          style={{ 
            textShadow: '0 4px 30px rgba(0,0,0,0.3)' 
          }}
        >
          hōrai
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
          className="mt-6 md:mt-4 flex flex-col items-center gap-4"
        >
          <div className="w-12 h-[1px] bg-cream-50/40 mb-4" />
          <p className="font-serif text-xs md:text-sm lg:text-base uppercase tracking-[0.3em] md:tracking-[0.4em] text-cream-100/90 font-light">
            Asian Cuisine Mastery with a Twist
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-cream-50/0 via-cream-50/50 to-cream-50/0" />
        </motion.div>
      </div>
    </div>
  );
};
