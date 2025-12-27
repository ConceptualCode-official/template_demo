import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
}

export const HolographicCard: React.FC<HolographicCardProps> = ({ children, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    let isHovered = false;

    const resize = () => {
      if (containerRef.current && canvas) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
      }
    };

    const initParticles = () => {
      particles = [];
      const count = 50;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2,
          alpha: Math.random() * 0.5
        });
      }
    };

    const drawLogo = (ctx: CanvasRenderingContext2D, width: number, height: number, alpha: number) => {
      const centerX = width / 2;
      const centerY = height / 2;
      const size = 60;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(Math.PI / 4); // 45deg rotation for the diamond shape
      
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.lineWidth = 2;
      ctx.strokeRect(-size/2, -size/2, size, size);
      
      // Inner "E" stylization (abstract lines)
      ctx.beginPath();
      ctx.moveTo(-size/4, -size/4);
      ctx.lineTo(size/4, -size/4);
      ctx.moveTo(-size/4, 0);
      ctx.lineTo(size/6, 0);
      ctx.moveTo(-size/4, size/4);
      ctx.lineTo(size/4, size/4);
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(p => {
        p.x += p.vx * (isHovered ? 4 : 1); // Speed up on hover
        p.y += p.vy * (isHovered ? 4 : 1);

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${isHovered ? p.alpha + 0.3 : p.alpha})`;
        ctx.fill();
        
        // Connect particles if close
        if (isHovered) {
            particles.forEach(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 50) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - dist/500})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        }
      });

      // Draw Logo on Hover
      if (isHovered) {
        drawLogo(ctx, canvas.width, canvas.height, 0.8);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();
    window.addEventListener('resize', resize);

    const handleMouseEnter = () => isHovered = true;
    const handleMouseLeave = () => isHovered = false;

    containerRef.current?.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      containerRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-20 mix-blend-screen opacity-60"
      />
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none z-30 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-10" />
    </div>
  );
};
