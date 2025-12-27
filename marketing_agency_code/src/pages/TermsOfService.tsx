import React from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { motion, useScroll } from 'framer-motion';

export const TermsOfService = () => {
  const { scrollYProgress } = useScroll();

  return (
    <PageTransition>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Terms of Service</h1>
          <p className="text-gray-500 mb-12">Last Updated: January 2025</p>
          
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p className="lead text-xl text-white mb-8">
              By accessing or using the Escape Media website, you agree to be bound by these Terms of Service.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">1. Acceptance of Terms</h3>
            <p>
              By accessing this website, you agree to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">2. Intellectual Property</h3>
            <p>
              All content, designs, graphics, and code on this site are the intellectual property of Escape Media unless otherwise stated. You may not reproduce, distribute, or create derivative works without express written permission.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">3. Disclaimer</h3>
            <p>
              The materials on Escape Media's website are provided "as is". Escape Media makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">4. Limitations</h3>
            <p>
              In no event shall Escape Media or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Escape Media's website.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
