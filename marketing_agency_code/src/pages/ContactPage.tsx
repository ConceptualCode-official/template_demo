import React from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { Contact } from '../components/sections/Contact';
import { FAQ } from '../components/sections/FAQ';

export const ContactPage = () => {
  return (
    <PageTransition>
      <div className="pt-32">
         <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">GET IN TOUCH</h1>
            <p className="text-xl text-gray-400">Let's build something extraordinary together.</p>
         </div>
         <Contact />
         <FAQ />
      </div>
    </PageTransition>
  );
};
