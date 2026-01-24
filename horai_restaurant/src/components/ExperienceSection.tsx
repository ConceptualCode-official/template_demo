import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const IMAGES = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/various-dessert-served-plate.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/shish-kebab-with-chicken-fillet-rice-garnish-accompaned-by-glass-white-wine.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/pie-with-ground-beef-filling-rolls-puff-pastry-with-meat-plate.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/mushrooms-sauce-with-potato-mash.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/mixed-salad-topped-with-lime-slices.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/meatballs-sesame-seeds-with-decor-herbs-carrots-mandarin-slices.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/fried-chicken-pieces-lemon.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/elegant-dessert-dark-plate-with-decorative-flowers.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/horai/delicious-carpaccio-plate-restaurant.webp"
];

const TICKER_ITEMS = [...IMAGES, ...IMAGES, ...IMAGES, ...IMAGES];

export const ExperienceSection: React.FC = () => {
  return (
    <section className="relative w-full bg-rich-black py-24 md:py-32 overflow-hidden flex flex-col items-center">
      
      <div className="container mx-auto px-4 text-center mb-16 z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream-50 uppercase tracking-[0.2em] mb-6 font-light"
        >
          A Unique Experience
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-12 h-[1px] bg-cream-50/30" />
          <p className="font-sans text-cream-100/70 text-sm md:text-base leading-relaxed max-w-2xl font-light tracking-wide">
            Discover a symphony of flavors where ancient traditions meet modern artistry. 
            Each dish is a curated masterpiece, designed not just to be eaten, but to be felt.
          </p>
        </motion.div>
      </div>

      <div className="w-full relative z-0 flex flex-col gap-4">
        <div className="w-full">
          <SeamlessTicker direction={1} baseSpeed={0.4} hoverSpeed={0.15} />
        </div>
        <div className="w-full">
          <SeamlessTicker direction={-1} baseSpeed={0.4} hoverSpeed={0.15} />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <Link to="/menu">
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative px-10 py-4 overflow-hidden rounded-sm bg-rich-black/40 backdrop-blur-sm border border-cream-50/40 hover:border-cream-50 transition-all duration-500 shadow-2xl hover:shadow-cream-50/10"
            >
              <span className="relative z-10 font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-cream-50 group-hover:text-rich-black transition-colors duration-500 font-medium">
                Explore Menu
              </span>
              <div className="absolute inset-0 bg-cream-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center ease-out" />
            </motion.button>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rich-black via-rich-black/80 to-transparent pointer-events-none z-20" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-rich-black via-rich-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-rich-black via-rich-black/80 to-transparent z-20 pointer-events-none" />

    </section>
  );
};

interface TickerProps {
  direction: number;
  baseSpeed: number;
  hoverSpeed: number;
}

const SeamlessTicker: React.FC<TickerProps> = ({ direction, baseSpeed, hoverSpeed }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const state = useRef({ pos: 0, currentSpeed: baseSpeed });
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      const targetSpeed = isHovered ? hoverSpeed : baseSpeed;
      state.current.currentSpeed += (targetSpeed - state.current.currentSpeed) * 0.05;
      state.current.pos += direction * state.current.currentSpeed;

      const WRAP_THRESHOLD = 3000; 

      if (direction === -1 && state.current.pos <= -WRAP_THRESHOLD) {
        state.current.pos += WRAP_THRESHOLD;
      } else if (direction === 1 && state.current.pos >= 0) {
        state.current.pos -= WRAP_THRESHOLD;
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${state.current.pos}px, 0, 0)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [direction, baseSpeed, hoverSpeed, isHovered]);

  return (
    <div 
      className="w-full overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={containerRef}
        className="flex gap-4 w-max will-change-transform"
        style={{ backfaceVisibility: 'hidden' }}
      >
        {TICKER_ITEMS.map((src, index) => (
          <TickerCard key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

const TickerCard: React.FC<{ src: string }> = ({ src }) => (
  <div className="relative w-[240px] h-[300px] md:w-[280px] md:h-[350px] flex-shrink-0 rounded-lg overflow-hidden group/card bg-gray-900 shadow-lg">
    <img 
      src={src} 
      alt="Culinary Detail" 
      loading="lazy"
      className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 transition-opacity duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-transparent opacity-40 group-hover/card:opacity-20 transition-opacity duration-500" />
    <div className="absolute inset-0 border border-cream-50/5 rounded-lg pointer-events-none" />
  </div>
);
