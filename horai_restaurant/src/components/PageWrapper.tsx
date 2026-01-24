import React from 'react';
import { motion } from 'framer-motion';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0, filter: "blur(10px)" }}
      animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      exit={{ x: 50, opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`w-full min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
};
