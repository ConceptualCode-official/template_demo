import React from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { Portfolio } from '../components/sections/Portfolio';

export const WorkPage = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">SELECTED WORK</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            A curation of our most impactful campaigns, films, and brand identities.
          </p>
        </div>
        
        {/* Reusing the Portfolio component but we could expand it here */}
        <Portfolio />
      </div>
    </PageTransition>
  );
};
