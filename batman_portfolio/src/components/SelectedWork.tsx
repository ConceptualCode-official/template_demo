import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  client: string;
  description: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: '01',
    client: 'Wayne Ent.',
    description: 'Rebranding the future of Gotham’s technology sector with a focus on clean energy and defense systems.',
    year: '2024',
    image: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_02_21-PM.webp'
  },
  {
    id: '02',
    client: 'Gotham City',
    description: 'A comprehensive digital overhaul for the city’s transit and public information systems.',
    year: '2023',
    image: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_45_01-PM.webp'
  },
  {
    id: '03',
    client: 'The Daily Planet',
    description: 'Editorial design and layout restructuring for Metropolis’s leading news publication.',
    year: '2023',
    image: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_48_28-PM.webp'
  },
  {
    id: '04',
    client: 'Arkham Rehab',
    description: 'Identity design for a new initiative focused on mental health and rehabilitation.',
    year: '2022',
    image: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_51_01-PM.webp'
  }
];

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="w-full py-24 md:py-40 bg-white text-black px-4 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 border-b border-gray-200 pb-4"
        >
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500">// Selected Work //</span>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-20 w-full"
            >
              {/* Left: Index & Client */}
              <div className="w-full lg:w-1/4 flex flex-row lg:flex-col justify-between lg:justify-start items-baseline lg:items-start gap-4 border-t lg:border-t-0 border-gray-200 pt-4 lg:pt-0">
                <span className="font-sans text-xs font-medium text-gray-400">
                  // {project.id}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-black mt-2 lg:mt-8 group-hover:italic transition-all duration-300">
                  {project.client}
                </h3>
                <span className="hidden lg:block mt-4 font-sans text-xs text-gray-400">{project.year}</span>
              </div>

              {/* Center: Image */}
              <Link to={`/case-study/${project.id}`} className="w-full lg:w-2/4 aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-sm relative cursor-pointer">
                <motion.img 
                  src={project.image} 
                  alt={project.client}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </Link>

              {/* Right: Description */}
              <div className="w-full lg:w-1/4 flex flex-col justify-between h-full">
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">
                  {project.description}
                </p>
                <div className="mt-8 lg:mt-auto pt-8">
                  <Link to={`/case-study/${project.id}`} className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:text-gray-600 hover:border-gray-400 transition-all">
                    View Case <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
