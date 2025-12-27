import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/ui/PageTransition';

export const NotFound = () => {
  return (
    <PageTransition>
      <div className="h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        <h1 className="text-[12rem] font-bold leading-none tracking-tighter text-white/5 select-none absolute z-0">404</h1>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Lost in the Void?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
            The page you are looking for has been moved, deleted, or never existed.
          </p>
          <Link 
            to="/" 
            className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-transform hover:scale-105"
          >
            Return Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};
