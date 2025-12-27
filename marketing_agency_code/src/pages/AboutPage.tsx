import React from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { About } from '../components/sections/About';
import { ScrollGlowText } from '../components/ui/ScrollGlowText';
import { TiltCard } from '../components/ui/TiltCard';
import { HolographicCard } from '../components/ui/HolographicCard';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export const AboutPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">THE AGENCY</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are a team of obsessives. Obsessed with quality, obsessed with story, and obsessed with results.
          </p>
        </div>

        <About />

        {/* Founder Section with 3D Profile Card */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 md:order-1 flex justify-center">
              <TiltCard className="w-full max-w-md">
                <HolographicCard className="rounded-2xl">
                  <div className="relative aspect-[3/4] bg-gray-900 shadow-2xl border border-white/10 group">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
                      alt="Founder" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-40">
                      <h3 className="text-3xl font-bold text-white mb-1">James Carter</h3>
                      <p className="text-red-500 uppercase tracking-widest text-xs font-bold mb-4">Founder & Creative Director</p>
                      
                      <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        "My vision is to bridge the gap between cinematic art and commercial strategy."
                      </p>

                      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors backdrop-blur-md border border-white/10"><Linkedin size={18} /></a>
                        <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors backdrop-blur-md border border-white/10"><Twitter size={18} /></a>
                        <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors backdrop-blur-md border border-white/10"><Mail size={18} /></a>
                      </div>
                    </div>
                  </div>
                </HolographicCard>
              </TiltCard>
            </div>
            
            <div className="order-1 md:order-2">
              <ScrollGlowText className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                "We don't just build brands. We build legacies."
              </ScrollGlowText>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                Escape Media was born from a frustration with the ordinary. I wanted to create an agency that treated marketing not as a commodity, but as a cinematic art form.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Today, we work with brands that are ready to step out of the shadows and command their industry with authority and style.
              </p>
              <div className="mt-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" className="h-12 invert opacity-50" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
