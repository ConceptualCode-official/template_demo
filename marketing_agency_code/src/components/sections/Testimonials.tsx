import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-16 text-center">Client Stories</h2>
        
        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="min-w-[85vw] md:min-w-[400px] bg-white/5 p-8 border border-white/10 relative group hover:bg-white/10 transition-colors flex flex-col justify-between rounded-lg snap-center"
            >
              <div>
                <Quote className="w-8 h-8 text-gray-600 mb-6" />
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  "Escape Media completely transformed our digital presence. The cinematic quality of their work is unmatched in the industry."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
                   <img src={`https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Alex Morgan</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">CEO, TechFlow</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
