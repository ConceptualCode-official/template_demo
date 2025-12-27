import React from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { Services } from '../components/sections/Services';
import { ScrollGlowText } from '../components/ui/ScrollGlowText';
import { Check } from 'lucide-react';

export const ServicesPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">OUR EXPERTISE</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive creative solutions designed to elevate your brand's authority and market position.
          </p>
        </div>

        <Services />

        <div className="max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">The Process</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              We don't believe in guesswork. Every project follows a rigorous methodology ensuring consistency, quality, and impact.
            </p>
            <div className="space-y-4">
              {['Discovery & Strategy', 'Creative Concepting', 'Production & Execution', 'Post-Production & Polish', 'Distribution Strategy'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-white/5 bg-white/5 rounded-lg">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black font-bold text-xs">{i + 1}</span>
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[400px] bg-gray-900 rounded-lg overflow-hidden">
             <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000" className="w-full h-full object-cover opacity-60" alt="Process" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8">
               <ScrollGlowText>
                 <h4 className="text-2xl font-bold">Precision in every pixel.</h4>
               </ScrollGlowText>
             </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
