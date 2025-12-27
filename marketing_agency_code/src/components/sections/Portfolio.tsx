import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Neon Horizon",
    category: "Brand Film",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop",
    video: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
  },
  {
    id: 2,
    title: "Urban Pulse",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=1000&auto=format&fit=crop",
    video: "https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4"
  },
  {
    id: 3,
    title: "Silent Echo",
    category: "Documentary",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    video: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4"
  },
  {
    id: 4,
    title: "Future Tech",
    category: "Product Launch",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-3456-large.mp4"
  }
];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-6xl font-bold">Visual Excellence</h3>
          </div>
          <a href="#" className="hidden md:block text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-gray-400 transition-colors">
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative aspect-video overflow-hidden cursor-none video-trigger bg-gray-900 rounded-lg border border-white/5"
              onClick={() => setSelectedProject(project.id)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/10 scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                <div className="overflow-hidden">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500">{project.category}</p>
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-3xl font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75 text-white">{project.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10002] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-red-500 z-50 flex items-center gap-2 group">
              <span className="text-sm font-bold uppercase tracking-widest group-hover:mr-2 transition-all">Close</span>
              <X className="w-6 h-6" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl aspect-video bg-black relative shadow-2xl shadow-white/5 rounded-lg overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
               <video 
                 src={projects.find(p => p.id === selectedProject)?.video} 
                 controls 
                 autoPlay 
                 muted
                 playsInline
                 loop
                 className="w-full h-full object-cover"
               />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
