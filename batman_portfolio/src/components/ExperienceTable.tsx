import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface Experience {
  role: string;
  year: string;
  company: string;
}

const experiences: Experience[] = [
  { role: "Visual Design Lead", year: "2023 - Current", company: "Wayne Ent." },
  { role: "Art Director", year: "2020 - Current", company: "Freelance" },
  { role: "Graphic Designer", year: "2019 - 2021", company: "Gotham Gazette" },
  { role: "Brand Strategist", year: "2018 - 2019", company: "Queen Ind." },
  { role: "Design Intern", year: "2018 - 2019", company: "Stark Ind." },
  { role: "Video Editor", year: "2016 - 2017", company: "Daily Planet" },
];

export const ExperienceTable: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white text-black px-4 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-12">
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500">// Experience //</span>
        </div>

        <div className="w-full border-t border-gray-200">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300 px-2"
            >
              <div className="w-full md:w-1/3 font-serif text-xl md:text-2xl">{exp.role}</div>
              <div className="w-full md:w-1/3 font-sans text-sm text-gray-500 mt-2 md:mt-0">{exp.year}</div>
              <div className="w-full md:w-1/3 flex justify-between items-center mt-2 md:mt-0">
                <span className="font-sans font-medium">{exp.company}</span>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
