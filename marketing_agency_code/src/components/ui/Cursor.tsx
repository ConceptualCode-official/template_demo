import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const Cursor = () => {
  const [hoverState, setHoverState] = useState<'default' | 'pointer' | 'text' | 'video' | 'link'>('default');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Enhanced "Gradient Smoke Wave" Effect
  useEffect(() => {
    // PERFORMANCE: Detect Touch Device and abort completely
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
      size: number;
      angle: number;
    }[] = [];

    const colors = ['100, 200, 255', '180, 100, 255', '255, 100, 150', '255, 255, 255'];

    let lastX = 0;
    let lastY = 0;
    let animationFrameId: number;

    const addParticle = (x: number, y: number) => {
      const dist = Math.hypot(x - lastX, y - lastY);
      if (dist < 3) return;

      lastX = x;
      lastY = y;

      const colorBase = colors[Math.floor(Math.random() * colors.length)];

      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2 - 0.5,
        life: 1,
        color: colorBase,
        size: Math.random() * 20 + 10,
        angle: Math.random() * Math.PI * 2
      });

      if (particles.length > 60) particles.shift();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'screen';

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= 0.015;
        p.angle += 0.05;
        p.x += Math.sin(p.angle) * 0.5 + p.vx;
        p.y += p.vy;
        p.size += 0.3;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `rgba(${p.color}, ${p.life * 0.4})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      addParticle(e.clientX, e.clientY);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  // Hover detection
  useEffect(() => {
    // Disable hover detection on touch devices to save resources
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.tagName === 'BUTTON') setHoverState('pointer');
      else if (target.closest('a') || target.tagName === 'A') setHoverState('link');
      else if (['P', 'H1', 'H2', 'H3'].includes(target.tagName)) setHoverState('text');
      else if (target.closest('.video-trigger')) setHoverState('video');
      else setHoverState('default');
    };
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9999] hidden md:block" />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10001] flex items-center justify-center hidden md:flex"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <motion.div
          className="bg-white/80 border-[4px] border-white rounded-full flex items-center justify-center text-black font-bold uppercase tracking-widest overflow-hidden mix-blend-difference"
          animate={{
            width: hoverState === 'video' ? 80 : hoverState === 'pointer' || hoverState === 'link' ? 60 : 12,
            height: hoverState === 'video' ? 80 : hoverState === 'pointer' || hoverState === 'link' ? 60 : 12,
            opacity: hoverState === 'text' ? 0.5 : 1,
            scale: hoverState === 'default' ? 1 : 1.1
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: hoverState === 'video' ? 1 : 0 }}
            className="text-[10px]"
          >
            PLAY
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: (hoverState === 'pointer' || hoverState === 'link') ? 1 : 0 }}
            className="text-[8px] absolute"
          >
            VIEW
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
};
