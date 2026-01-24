import React from 'react';
import { motion } from 'framer-motion';

export const ContactFooter: React.FC = () => {
  return (
    <section id="contact" className="w-full min-h-[60vh] md:min-h-[80vh] bg-white text-black flex flex-col justify-center items-center relative overflow-hidden px-4">
      
      {/* Main Interactive Text */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="font-serif text-[12vw] md:text-[10vw] leading-[0.9] tracking-tight mb-8">
          <span className="block text-gray-300">DROP ME</span>
          <span className="block text-black">AN EMAIL</span>
        </h2>
        
        <a 
          href="mailto:bruce@wayneent.com" 
          className="group relative inline-block"
        >
          <span className="font-sans text-xl md:text-3xl font-medium tracking-widest uppercase transition-colors duration-300 group-hover:text-gray-500">
            bruce@wayneent.com
          </span>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 origin-left" />
        </a>
      </div>

      <div className="absolute bottom-12 flex gap-8 font-sans text-xs tracking-widest uppercase text-gray-400">
        <a href="#" className="hover:text-black transition-colors">Instagram</a>
        <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-black transition-colors">Twitter</a>
      </div>
    </section>
  );
};
