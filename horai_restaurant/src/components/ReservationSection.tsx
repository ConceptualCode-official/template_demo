import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  return (
    <section id="reservations" className="relative w-full min-h-[80vh] flex items-center justify-center bg-rich-black overflow-hidden py-24 md:py-32">
      
      {/* Top Gradient: Blends from rich-black (section above) to transparent */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-rich-black to-transparent z-10 pointer-events-none" />
      
      {/* Bottom Gradient: Blends within rich-black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rich-black to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center">
        
        <div className="mb-12 md:mb-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream-50 uppercase tracking-[0.15em] mb-2 font-light"
          >
            Reserve Your Table
          </motion.h2>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="w-full max-w-3xl flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input placeholder="Name" type="text" />
            <Input placeholder="Phone" type="tel" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input placeholder="Email" type="email" />
            <Input 
              placeholder="Date (dd/mm/yyyy)" 
              type="text" 
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.type = 'date'} 
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => e.target.type = 'text'} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Select defaultValue="">
              <option value="" disabled>Time</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
            </Select>
            <Select defaultValue="">
              <option value="" disabled>Seats</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7 Guests</option>
              <option value="8">8 Guests</option>
            </Select>
          </div>

          <textarea 
            placeholder="Message (Special requests, allergies...)"
            className="w-full bg-cream-50/5 border border-cream-50/20 rounded-sm px-5 py-4 text-cream-50 placeholder:text-cream-50/30 font-sans text-sm focus:outline-none focus:border-cream-50/40 focus:bg-cream-50/10 transition-all duration-300 resize-none h-32"
          />

          <div className="mt-8 flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(253, 251, 247, 1)", color: "#0C0A10" }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 border border-cream-50/40 bg-transparent text-cream-50 font-sans text-xs md:text-sm uppercase tracking-[0.25em] transition-all duration-500 rounded-sm"
            >
              Book Table
            </motion.button>
          </div>

        </motion.form>

      </div>
    </section>
  );
};

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    {...props}
    className="w-full bg-cream-50/5 border border-cream-50/20 rounded-sm px-5 py-4 text-cream-50 placeholder:text-cream-50/30 font-sans text-sm focus:outline-none focus:border-cream-50/40 focus:bg-cream-50/10 transition-all duration-300"
  />
);

const Select = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <div className="relative w-full">
    <select 
      {...props}
      className="w-full bg-cream-50/5 border border-cream-50/20 rounded-sm px-5 py-4 text-cream-50 font-sans text-sm focus:outline-none focus:border-cream-50/40 focus:bg-cream-50/10 transition-all duration-300 appearance-none cursor-pointer"
    >
      {children}
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cream-50/40">
      <ChevronDown className="w-4 h-4" />
    </div>
  </div>
);
