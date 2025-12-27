import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
           <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">The Agency</h2>
           <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
             Driven by data.<br />
             Defined by <span className="text-white">creativity.</span>
           </h3>
           <div className="space-y-6 text-gray-400 leading-relaxed">
             <p>
               Escape Media isn't just another agency. We are a collective of visionaries, filmmakers, and strategists dedicated to elevating brands beyond the noise.
             </p>
             <p>
               In a world saturated with content, we create context. We build narratives that resonate on a human level while delivering business results that matter.
             </p>
           </div>
           
           <div className="mt-12 grid grid-cols-2 gap-8">
             <div>
               <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
               <p className="text-xs uppercase tracking-widest text-gray-500">Brands Elevated</p>
             </div>
             <div>
               <h4 className="text-3xl font-bold text-white mb-2">10M+</h4>
               <p className="text-xs uppercase tracking-widest text-gray-500">Views Generated</p>
             </div>
           </div>
        </div>
        
        <div className="relative h-[600px] w-full">
           <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 rounded-lg overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
               alt="Team working" 
               className="w-full h-full object-cover opacity-60 mix-blend-overlay"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
           </div>
        </div>
      </div>
    </section>
  );
};
