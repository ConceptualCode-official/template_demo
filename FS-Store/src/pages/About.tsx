import React from 'react';

export const About = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
            alt="Team working"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About FS-Store</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            We are building the future of commerce with a focus on quality, transparency, and design.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              At FS-Store, our mission is to provide professionals with the tools they need to succeed. 
              We believe that the environment you work in directly impacts the quality of your work. 
              That's why we curate only the finest products that blend aesthetics with functionality.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded in 2025, we have served over 10,000 satisfied customers globally. Our commitment to 
              excellence extends beyond our products to our customer service and sustainable business practices.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
             <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
                alt="Office interior" 
                className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </div>
  );
};
