import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const STATS = [
  { value: 3, label: "Michelin Stars", pad: 2 },
  { value: 16, label: "Awards Won", pad: 0 },
  { value: 584, label: "Chefs Trained", pad: 0 },
  { value: 24, label: "Global Locations", pad: 0 },
];

export const AboutStatsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-rich-black py-32 md:py-40 flex justify-center items-center overflow-hidden">
      
      {/* Soft Gradient Fades for Seamless Transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rich-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rich-black to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {STATS.map((stat, index) => (
            <StatItem 
              key={index} 
              target={stat.value} 
              label={stat.label} 
              pad={stat.pad} 
              delay={index * 0.2} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  target: number;
  label: string;
  pad: number;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ target, label, pad, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2.5,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Gentle ease-out
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, target, delay]);

  // Format number with leading zeros if needed (e.g., 03)
  const formattedValue = pad > 0 
    ? String(displayValue).padStart(pad, '0') 
    : displayValue.toLocaleString();

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center gap-4 md:gap-6">
      <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream-50 font-light tracking-tight tabular-nums">
        {formattedValue}
      </span>
      <span className="font-sans text-[10px] md:text-xs text-cream-50/50 uppercase tracking-[0.25em] font-medium">
        {label}
      </span>
    </div>
  );
};
