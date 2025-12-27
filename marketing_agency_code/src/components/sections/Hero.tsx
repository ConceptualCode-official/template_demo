import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { HeroObject } from '../3d/HeroObject';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.5 }
    )
    .fromTo(subRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=1"
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 gradient-mesh z-0 pointer-events-none" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-80">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <HeroObject />
          <Environment preset="city" />
        </Canvas>
      </div>

      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 mix-blend-difference opacity-0 text-metallic"
        >
          WE CRAFT <br />
          DIGITAL LEGACIES
        </h1>
        
        <p 
          ref={subRef}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light tracking-wide opacity-0"
        >
          Escape Media is a premium creative agency bridging the gap between art and business. We build authority for serious brands.
        </p>

        <div ref={ctaRef} className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-0">
          <a 
            href="#portfolio" 
            className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            View Work
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Start Project
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="text-white/30 w-6 h-6" />
      </div>
    </section>
  );
};
