import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { SocialProof } from '../components/sections/SocialProof';
import { Testimonials } from '../components/sections/Testimonials';
import { PageTransition } from '../components/ui/PageTransition';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TextGlowScroll } from '../components/ui/TextGlowScroll';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
      
      {/* Introduction Statement */}
      <section className="py-32 px-6 bg-black/50 relative">
        <div className="max-w-4xl mx-auto text-center">
          <TextGlowScroll 
            text="We are the architects of digital perception. Bridging the gap between cinematic art and strategic growth."
            className="text-3xl md:text-5xl font-light leading-tight text-white/20"
          />
        </div>
      </section>

      <Services />
      
      {/* Featured Work Teaser */}
      <section className="py-32 px-6 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Selected Works</h2>
             <h3 className="text-4xl md:text-6xl font-bold">Visual Excellence</h3>
           </div>
           <Link to="/work" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest mt-6 md:mt-0 hover:text-gray-400 transition-colors">
             View Full Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative group cursor-none">
              <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" alt="Work 1" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-xl font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">NEON HORIZON</span>
              </div>
           </div>
           <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative group cursor-none">
              <img src="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=1000" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" alt="Work 2" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-xl font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">URBAN PULSE</span>
              </div>
           </div>
        </div>
      </section>

      <SocialProof />
      <Testimonials />
    </PageTransition>
  );
};
