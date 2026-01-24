import React from 'react';
import { motion } from 'framer-motion';

const services = [
  "Interior Design",
  "Visual Design",
  "Architecture",
  "Systems",
  "Communication Design"
];

export const Services: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-white text-black px-4 md:px-12 lg:px-20 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-gray-400">// Services //</span>
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-10">
          {services.map((service, index) => (
            <motion.h2 
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl cursor-pointer hover:text-gray-500 hover:italic transition-all duration-300"
            >
              {service}
            </motion.h2>
          ))}
        </div>
      </div>
    </section>
  );
};
