import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Instagram, Play } from 'lucide-react';

const baseReels = [
  { id: 1, img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400", video: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4" },
  { id: 2, img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=400", video: "https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4" },
  { id: 3, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400", video: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" },
  { id: 4, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400", video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-3456-large.mp4" },
  { id: 5, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400", video: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4" },
  { id: 6, img: "https://images.unsplash.com/photo-1611162618071-239a6707402c?q=80&w=400", video: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" },
];

// Quadruple the array to ensure density and full circle coverage without gaps
const reels = [...baseReels, ...baseReels, ...baseReels, ...baseReels].map((reel, i) => ({ ...reel, uniqueId: i }));

export const SocialProof = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  // Create a tall container to allow for "sticky" scrolling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to a full 360 degree rotation + some extra for continuous feel
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const smoothScrollRotation = useSpring(scrollRotation, { damping: 100, stiffness: 100 });

  // Manual Drag Rotation
  const dragRotation = useMotionValue(0);
  const smoothDragRotation = useSpring(dragRotation, { damping: 100, stiffness: 100 });

  // Combine rotations: Scroll + Drag
  const totalRotation = useTransform(
    [smoothScrollRotation, smoothDragRotation],
    ([scroll, drag]) => scroll + drag
  );

  const radius = 1200; // Increased radius for better spacing

  return (
    // Height 400vh means the user has to scroll 4 screen heights to get through this section
    <section ref={containerRef} className="relative h-[300vh] bg-[#050505]">

      {/* Sticky Container: Stays fixed in viewport while parent scrolls */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">

        <div className="relative z-20 text-center mb-10 pointer-events-none">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-metallic">SOCIAL FEED</h2>
          <p className="text-gray-500 mt-4 text-sm uppercase tracking-widest">Scroll or Drag to Explore</p>
        </div>

        <div className="relative w-full flex items-center justify-center z-30 h-[600px] perspective-1000">
          {/* Draggable Area Wrapper */}
          <motion.div
            className="relative w-full h-full flex justify-center items-center cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDrag={(e, info) => {
               // Update rotation based on drag distance
               dragRotation.set(dragRotation.get() + info.delta.x * 0.3);
            }}
          >

            {/* The Rotating Wheel */}
            <motion.div
              className="absolute top-[1350px] w-0 h-0 flex items-center justify-center origin-center"
              style={{ rotate: totalRotation }}
            >
              {reels.map((reel, index) => {
                const count = reels.length;
                const angle = (360 / count) * index;

                return (
                  <div
                    key={reel.uniqueId}
                    className="absolute top-0 left-0 w-[220px] h-[350px] video-trigger origin-center"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                      marginLeft: '-110px', // Center the element (half width)
                      marginTop: '-175px'   // Center the element (half height)
                    }}
                  >
                    <div
                      className="w-full h-full bg-gray-900 rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer shadow-2xl transition-all duration-300 hover:scale-110 hover:border-white/30 hover:shadow-red-500/20 hover:z-50"
                      onMouseEnter={() => setActiveVideo(reel.uniqueId)}
                      onMouseLeave={() => setActiveVideo(null)}
                    >
                      <img
                        src={reel.img}
                        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${activeVideo === reel.uniqueId ? 'opacity-0' : 'opacity-100'}`}
                        alt="Reel"
                        loading="lazy"
                        draggable={false}
                      />

                      {activeVideo === reel.uniqueId && (
                          <video
                          src={reel.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover absolute inset-0"
                          />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      <div className={`absolute bottom-6 right-6 flex items-center justify-center pointer-events-none transition-all duration-300 ${activeVideo === reel.uniqueId ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Center Instagram Button - Fixed in the middle of the wheel */}
            <div className="absolute top-[420px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-auto">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-black/80 backdrop-blur-md border border-white/20 hover:scale-110 transition-transform duration-500 group shadow-[0_0_50px_rgba(255,0,0,0.2)]"
                onMouseDown={(e) => e.stopPropagation()}
              >
                <Instagram className="w-8 h-8 text-red-500 mb-2 group-hover:rotate-12 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Follow</span>
              </a>
            </div>

          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent z-40 pointer-events-none" />
      </div>
    </section>
  );
};
