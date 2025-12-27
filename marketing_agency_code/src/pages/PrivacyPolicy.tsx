import React from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { motion, useScroll } from 'framer-motion';

export const PrivacyPolicy = () => {
  const { scrollYProgress } = useScroll();

  return (
    <PageTransition>
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-12">Last Updated: January 2025</p>
          
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p className="lead text-xl text-white mb-8">
              At Escape Media, we value your privacy as much as we value creativity. This policy outlines how we collect, use, and protect your data.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">1. Information We Collect</h3>
            <p>
              We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and company details.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">2. How We Use Your Information</h3>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Provide, maintain, and improve our services.</li>
              <li>Communicate with you about projects, updates, and offers.</li>
              <li>Analyze trends and usage to optimize our website experience.</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">3. Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">4. Cookies</h3>
            <p>
              We use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect site functionality.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@escapemedia.in" className="text-white underline">privacy@escapemedia.in</a>.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
