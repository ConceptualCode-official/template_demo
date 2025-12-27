import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';
import axios from 'axios';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: 'Video Production',
    budget: '$5k - $10k',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In production, point this to your actual PHP endpoint
      // const response = await axios.post('https://escapemedia.in/backend/api/submit_booking.php', formData);
      
      // Simulation for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#050505] border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0a0a] z-0" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Start a Project</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6">Ready to Escape the Ordinary?</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tell us about your vision. We'll help you build the legacy your brand deserves.
          </p>
        </div>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 border border-white/10 p-12 text-center rounded-lg backdrop-blur-sm"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h4 className="text-2xl font-bold mb-2">Message Sent</h4>
            <p className="text-gray-400">We'll be in touch within 24 hours.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="mt-8 text-sm font-bold uppercase tracking-widest border-b border-white pb-1"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:border-white focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:border-white focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Service Type</label>
                <select 
                  name="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:border-white focus:outline-none transition-colors appearance-none"
                >
                  <option className="bg-black">Video Production</option>
                  <option className="bg-black">Branding</option>
                  <option className="bg-black">Marketing Strategy</option>
                  <option className="bg-black">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Budget Range</label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:border-white focus:outline-none transition-colors appearance-none"
                >
                  <option className="bg-black">$5k - $10k</option>
                  <option className="bg-black">$10k - $25k</option>
                  <option className="bg-black">$25k - $50k</option>
                  <option className="bg-black">$50k+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:border-white focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project goals..."
              />
            </div>

            <div className="pt-8 text-center">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : 'Submit Request'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
