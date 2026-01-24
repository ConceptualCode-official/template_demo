import React from 'react';
import { motion } from 'framer-motion';

export const ContactFormSection: React.FC = () => {
  return (
    <section className="relative w-full bg-rich-black py-24 md:py-32 flex flex-col items-center">
      
      {/* Soft Gradient Fades */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rich-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rich-black to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 container mx-auto px-4 max-w-2xl">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-10%" }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="flex flex-col items-center gap-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-cream-50 uppercase tracking-[0.15em] font-light">
            Get In Touch
          </h2>

          <form className="w-full flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Phone" type="tel" />
            
            <textarea 
              placeholder="Message"
              className="w-full bg-cream-50/5 border border-cream-50/10 rounded-sm px-5 py-4 text-cream-50 placeholder:text-cream-50/30 font-sans text-sm focus:outline-none focus:border-cream-50/30 focus:bg-cream-50/10 transition-all duration-300 resize-none h-40"
            />

            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(253, 251, 247, 1)", color: "#0C0A10" }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 px-12 py-4 border border-cream-50/40 bg-transparent text-cream-50 font-sans text-xs md:text-sm uppercase tracking-[0.25em] transition-all duration-500 rounded-sm"
            >
              Send
            </motion.button>
          </form>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center mt-8 pt-12 border-t border-cream-50/10">
            <ContactInfo label="General Inquiries" value="hello@horai.co" />
            <ContactInfo label="Reservations" value="book@horai.co" />
            <ContactInfo label="Phone" value="+12 345 678 90" />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    {...props}
    className="w-full bg-cream-50/5 border border-cream-50/10 rounded-sm px-5 py-4 text-cream-50 placeholder:text-cream-50/30 font-sans text-sm focus:outline-none focus:border-cream-50/30 focus:bg-cream-50/10 transition-all duration-300"
  />
);

const ContactInfo = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-2">
    <span className="font-sans text-[10px] md:text-xs text-cream-50/40 uppercase tracking-[0.2em]">
      {label}
    </span>
    <span className="font-serif text-lg text-cream-50 tracking-wide">
      {value}
    </span>
  </div>
);
