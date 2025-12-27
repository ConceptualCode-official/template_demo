import React from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { FAQ } from '../components/sections/FAQ';
import { Link } from 'react-router-dom';

export const FAQPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">FAQ</h1>
          <p className="text-xl text-gray-400">
            Answers to common questions about our process, pricing, and philosophy.
          </p>
        </div>
        
        <FAQ />
        
        <div className="max-w-2xl mx-auto mt-20 p-8 border border-white/10 rounded-lg bg-white/5 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-8">
            We're here to help. Reach out to our team directly.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};
