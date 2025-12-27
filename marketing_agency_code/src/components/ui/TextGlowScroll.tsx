import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface TextGlowScrollProps {
  text: string;
  className?: string;
}

const Letter = ({ children, progress, range, index }: { children: string, progress: MotionValue<number>, range: [number, number], index: number }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const blur = useTransform(progress, range, [4, 0]);
  const color = useTransform(progress, range, ["#333", "#fff"]);
  const glow = useTransform(progress, range, ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 10px rgba(255,255,255,0.5)"]);

  return (
    <motion.span
      style={{ 
        opacity, 
        filter: useTransform(blur, (b) => `blur(${b}px)`),
        color,
        textShadow: glow
      }}
      className="inline-block transition-colors duration-0"
    >
      {children === " " ? "\u00A0" : children}
    </motion.span>
  );
};

export const TextGlowScroll: React.FC<TextGlowScrollProps> = ({ text, className }) => {
  const elementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.9", "center 0.5"]
  });

  const words = text.split("");
  const step = 1 / words.length;

  return (
    <p ref={elementRef} className={className}>
      {words.map((char, i) => {
        const start = i * step;
        const end = start + step;
        return (
          <Letter key={i} index={i} progress={scrollYProgress} range={[start, end]}>
            {char}
          </Letter>
        );
      })}
    </p>
  );
};
