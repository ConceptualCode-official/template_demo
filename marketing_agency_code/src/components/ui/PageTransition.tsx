import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  // State to track if animation is active
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      // When animation starts (enter or exit), enable transform handling by Framer Motion
      onAnimationStart={() => setIsAnimating(true)}
      // When animation completes, disable transform to allow position: sticky to work
      onAnimationComplete={() => setIsAnimating(false)}
      // CRITICAL FIX: Force transform to 'none' when idle. 
      // This removes the containing block that breaks sticky positioning.
      style={!isAnimating ? { transform: 'none' } : undefined}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
