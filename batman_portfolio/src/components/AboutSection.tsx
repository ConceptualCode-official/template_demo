import React from 'react';
import { motion } from 'framer-motion';

const clients = ["Wayne Enterprises", "Gotham Gazette", "LexCorp", "Queen Industries", "Stagg Ent.", "Kord Industries"];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-24 md:py-40 bg-white text-black px-4 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-24 md:mb-32 max-w-5xl"
        >
          Freelance creative designer turning ideas into experiences
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Intro & Clients */}
          <div className="w-full lg:w-1/2 flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-sans text-lg md:text-xl leading-relaxed text-gray-800">
                Hi, I'm Bruce—a creative designer passionate about crafting thoughtful visuals that do more than just look good.
              </p>
            </motion.div>

            <div className="mt-8">
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-gray-400 block mb-8">// Selected Clients //</span>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                {clients.map((client, i) => (
                  <motion.li 
                    key={client}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.05) }}
                    className="font-serif text-lg md:text-xl border-b border-gray-100 pb-2"
                  >
                    {client}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Philosophy & Image */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-sans text-sm md:text-base text-gray-500 leading-relaxed max-w-md ml-auto"
            >
              With a blend of artistry and problem-solving, I design for humans, not just brands. Whether it's building a visual identity or designing compelling digital experiences, my goal is to tell stories that feel authentic and leave a lasting impression. Collaboration fuels my creativity, and I thrive on working with clients who want to push boundaries.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm mt-auto"
            >
              <img 
                src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/freeman3.webp" 
                alt="Bruce Wayne Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
