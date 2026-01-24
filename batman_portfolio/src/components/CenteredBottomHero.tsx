import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

interface CenteredBottomHeroProps {
  baseImage: string;
  overlayImage: string;
  alt: string;
}

export const CenteredBottomHero: React.FC<CenteredBottomHeroProps> = ({
  baseImage,
  overlayImage,
  alt,
}) => {
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
      maskSize.set(300); // Reveal radius
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
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full md:w-3/4 lg:w-1/2 max-w-3xl flex justify-center items-end pointer-events-none">
      <div
        ref={containerRef}
        className="relative w-full cursor-pointer select-none pointer-events-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={toggleMobileReveal}
      >
        {/* Base Image (Bruce Wayne) */}
        {/* Added scale-125 for mobile to increase size by ~20%, origin-bottom to keep anchored */}
        <img
          src={baseImage}
          alt={alt}
          fetchPriority="high"
          className="w-full max-h-[85vh] lg:max-h-[90vh] object-cover object-top block mx-auto scale-125 md:scale-100 origin-bottom transition-transform duration-300"
          draggable={false}
        />

        {/* Overlay Image (Batman) - Desktop Masked Version */}
        <motion.div
          className="absolute inset-0 w-full h-full hidden md:block pointer-events-none scale-125 md:scale-100 origin-bottom"
          style={{
            maskImage: maskImage,
            WebkitMaskImage: maskImage, // Safari support
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <img
            src={overlayImage}
            alt="Superhero Identity"
            fetchPriority="high"
            className="w-full h-full object-cover object-top"
            draggable={false}
          />
        </motion.div>

        {/* Overlay Image (Batman) - Mobile Toggle Version */}
        {/* Uses opacity fade to simulate reveal on tap */}
        <div
          className={`absolute inset-0 w-full h-full md:hidden transition-opacity duration-500 ease-in-out pointer-events-none scale-125 origin-bottom ${
            isMobileRevealed ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={overlayImage}
            alt="Superhero Identity"
            className="w-full h-full object-cover object-top"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
