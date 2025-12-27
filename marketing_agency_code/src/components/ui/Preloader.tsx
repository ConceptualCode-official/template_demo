import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const increment = Math.random() * 15;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onLoadingComplete();
      }, 800);
    }
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center text-white overflow-hidden"
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Short Logo Animation */}
        <motion.div 
          className="relative w-24 h-24 mb-8 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
           {/* Rotating Borders */}
           <motion.div 
             className="absolute inset-0 border-2 border-white/20"
             animate={{ rotate: 360 }}
             transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
           />
           <motion.div 
             className="absolute inset-2 border border-white/40"
             animate={{ rotate: -360 }}
             transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
           />
           
           {/* The "E" Logo */}
           <div className="relative w-12 h-12 flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-600 opacity-20 rotate-45" />
               <div className="absolute inset-0 border border-white/30 rotate-45" />
               <span className="font-serif text-4xl font-bold text-white relative z-10">E</span>
           </div>
        </motion.div>
        
        <div className="w-48 h-[2px] bg-gray-900 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 flex justify-between w-48 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          <span>Loading Assets</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
    </motion.div>
  );
};
