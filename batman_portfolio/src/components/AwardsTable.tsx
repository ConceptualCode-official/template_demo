import React from 'react';
import { motion } from 'framer-motion';

interface Award {
  project: string;
  platform: string;
  award: string;
}

const awards: Award[] = [
  { project: "Wayne Foundation", platform: "Awwwards", award: "SOTD" },
  { project: "Gotham Transit", platform: "Behance", award: "Featured" },
  { project: "Arkham Asylum", platform: "Dribbble", award: "Weekly Pick" },
  { project: "Bat-Tech Interface", platform: "FWA", award: "Innovation Award" },
  { project: "Justice League", platform: "Awwwards", award: "HM" },
  { project: "The Cave", platform: "ArchDaily", award: "Best Interior" },
];

export const AwardsTable: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white text-black px-4 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-12">
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500">// Awards //</span>
        </div>

        <div className="w-full border-t border-gray-200">
          {awards.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300 px-2"
            >
              <div className="w-full md:w-1/3 font-serif text-lg">{item.project}</div>
              <div className="w-full md:w-1/3 font-sans text-sm text-gray-500 mt-1 md:mt-0">{item.platform}</div>
              <div className="w-full md:w-1/3 font-sans text-sm font-medium text-right mt-1 md:mt-0">{item.award}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
