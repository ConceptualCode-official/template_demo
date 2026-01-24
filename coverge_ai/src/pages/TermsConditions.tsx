import React from 'react';
import { motion } from 'framer-motion';
import { CTA } from '../components/CTA';

const Section = ({ title, children, delay }: { title: string, children: React.ReactNode, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="mb-16"
  >
    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 tracking-tight">
      {title}
    </h2>
    <div className="text-gray-400 text-lg leading-relaxed space-y-4">
      {children}
    </div>
  </motion.div>
);

export const TermsConditions = () => {
  return (
    <div className="relative w-full min-h-screen pt-32 bg-[#050505] overflow-x-hidden">
      
      {/* Background Ambient Glows (Top) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-orange-600/10 blur-[120px] rounded-full opacity-60" />
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-600/10 blur-[120px] rounded-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 mb-24">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-white uppercase">
              LEGAL
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6"
          >
            Terms & Conditions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base"
          >
            Last Updated: November 15, 2024
          </motion.p>
        </div>

        {/* --- CONTENT --- */}
        <div className="border-t border-white/5 pt-16">
          <Section title="Overview" delay={0.3}>
            <p>
              By downloading or using this template ("Converge AI"), you agree to these Terms. If you're acting for a company, you confirm you're authorized to bind it.
            </p>
          </Section>

          <Section title="License & Permitted Use" delay={0.4}>
            <p>
              One license = use in <strong className="text-white">one</strong> end project (personal or commercial). You may modify the Product to fit your brand, export assets, and publish your finished site.
            </p>
          </Section>

          <Section title="Restrictions" delay={0.5}>
            <p>
              Do not resell, redistribute, share the source, or claim authorship. Don't use the Product to create competing templates/themes or offer it as a downloadable asset.
            </p>
          </Section>

          <Section title="Payments, Updates & Support" delay={0.6}>
            <p>
              The Product is provided "<strong className="text-white">as is</strong>" without warranties. We're not liable for any indirect or consequential losses. We may update these Terms; continued use means acceptance.
            </p>
          </Section>

          <Section title="Contact Us" delay={0.7}>
            <p>
              If you have questions, need assistance, or want to know more about our data practices, we encourage you to contact us. Transparency is integral to our approach, and we are here to provide clarity whenever needed. Whether it's a simple query or a detailed concern, our team is ready to address your inquiries promptly and professionally.
            </p>
          </Section>
        </div>

      </div>

      {/* --- CTA SECTION --- */}
      <CTA />

    </div>
  );
};
