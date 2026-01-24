import React from 'react';
import { motion } from 'framer-motion';

interface ImageBackgroundProps {
  imageSrc: string;
  altText?: string;
}

export const ImageBackground: React.FC<ImageBackgroundProps> = ({ imageSrc, altText = "Background" }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-rich-black">
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover opacity-90"
        />
      </motion.div>
      
      {/* Cinematic Overlays using rich-black */}
      <div className="absolute inset-0 bg-rich-black/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-rich-black/50 z-[1]" />
      
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
};
