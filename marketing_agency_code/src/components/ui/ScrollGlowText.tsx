import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ScrollGlowTextProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export const ScrollGlowText: React.FC<ScrollGlowTextProps> = ({ children, className, threshold = 0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px", amount: threshold });

  return (
    <div 
      ref={ref}
      className={cn(
        "glow-text transition-all duration-1000",
        isInView ? "active" : "",
        className
      )}
    >
      {children}
    </div>
  );
};
