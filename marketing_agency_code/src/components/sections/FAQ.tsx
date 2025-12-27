import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "What is your typical project timeline?", a: "Most branding and production projects range from 4-8 weeks, depending on scope and complexity." },
  { q: "Do you work with international clients?", a: "Yes, we work globally. We have handled remote productions and strategy for clients across 3 continents." },
  { q: "What is your minimum engagement budget?", a: "To ensure the highest quality of work, our engagements typically start at $5,000 for production and branding projects." },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12 text-center">Common Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left hover:text-gray-300 transition-colors"
              >
                <span className="text-lg font-medium">{faq.q}</span>
                {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 pb-4 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
