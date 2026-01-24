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

export const PrivacyPolicy = () => {
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
              PRIVACY POLICY
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6"
          >
            Privacy Policy
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
          <Section title="Information We Collect" delay={0.3}>
            <p>
              We collect data to ensure seamless interactions and personalized experiences. When you use our services, we may collect personal details such as your name, email, and phone number. Additionally, we track your interactions with our website, including the pages you visit, the device you use, and the time spent on specific sections. Cookies are also used to store preferences and enhance functionality. All data collected is handled responsibly to maintain transparency and build trust.
            </p>
          </Section>

          <Section title="How We Use Your Data" delay={0.4}>
            <p>
              The information you share with us is used to improve and personalize your experience. It helps us communicate effectively, optimize our services, and understand user preferences. Whether we're tailoring recommendations, sending updates, or improving website functionality, your data remains secure and confidential.
            </p>
          </Section>

          <Section title="Your Rights" delay={0.5}>
            <p>
              We believe in empowering users to manage their personal data. You have the right to request access, update inaccuracies, or delete your information when necessary. If you no longer wish to receive updates or want to manage your cookie preferences, you can do so easily. Our commitment is to give you full control over your data while ensuring you remain informed about how it's used.
            </p>
          </Section>

          <Section title="Data Protection" delay={0.6}>
            <p>
              We employ state-of-the-art measures to protect the information entrusted to us. From encryption to secure servers, your data is stored and managed with industry-leading security protocols. We also conduct regular system checks to prevent unauthorized access. While no system is completely immune to threats, our continuous efforts minimize risks and provide you with a safe online environment.
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
