import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

interface RevealImageProps {
  baseImage: string;
  overlayImage: string;
  alt: string;
}

export const RevealImage: React.FC<RevealImageProps> = ({ baseImage, overlayImage, alt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileRevealed, setIsMobileRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the mask movement
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const maskX = useSpring(mouseX, springConfig);
  const maskY = useSpring(mouseY, springConfig);

  // Dynamic mask size - starts at 0, expands on hover
  const maskSize = useSpring(0, { damping: 25, stiffness: 120 });

  useEffect(() => {
    if (isHovered) {
      maskSize.set(250); // Size of the reveal circle
    } else {
      maskSize.set(0);
    }
  }, [isHovered, maskSize]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Create the dynamic mask image string
  const maskImage = useMotionTemplate`radial-gradient(circle ${maskSize}px at ${maskX}px ${maskY}px, black 40%, transparent 100%)`;

  const toggleMobileReveal = () => {
    setIsMobileRevealed(!isMobileRevealed);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center cursor-pointer md:cursor-none select-none overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={toggleMobileReveal}
    >
      {/* Base Image (Bruce Wayne) */}
      <img 
        src={baseImage} 
        alt={alt}
        className="w-full h-full object-contain pointer-events-none"
        draggable={false}
      />

      {/* Overlay Image (Batman) - Desktop Masked Version */}
      <motion.div 
        className="absolute inset-0 w-full h-full hidden md:flex items-center justify-center pointer-events-none"
        style={{ 
          maskImage: maskImage,
          WebkitMaskImage: maskImage, // Safari support
        }}
      >
        <img 
          src={overlayImage} 
          alt="Superhero Identity"
          className="w-full h-full object-contain"
          draggable={false}
        />
      </motion.div>

      {/* Overlay Image (Batman) - Mobile Toggle Version */}
      <div 
        className={`absolute inset-0 w-full h-full md:hidden flex items-center justify-center transition-opacity duration-700 ease-in-out pointer-events-none ${isMobileRevealed ? 'opacity-100' : 'opacity-0'}`}
      >
        <img 
          src={overlayImage} 
          alt="Superhero Identity"
          className="w-full h-full object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
};
