import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { PageTransition } from '../../components/layout/PageTransition';
import { Reveal } from '../../components/ui/Reveal';
import { Button } from '../../components/ui/Button';

export const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-slate-950 pt-20">
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Info */}
              <div>
                <Reveal>
                  <h1 className="text-4xl font-bold text-slate-900 dark:text-white font-display mb-8">GET IN TOUCH</h1>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
                    Have questions about admissions, fees, or our programs? Reach out to us and our team will get back to you within 24 hours.
                  </p>
                </Reveal>

                <div className="space-y-8">
                  {[
                    { icon: MapPin, title: 'Visit Us', desc: '123 Stadium Road, Sports City Complex, Mumbai 400001' },
                    { icon: Phone, title: 'Call Us', desc: '+91 98765 43210' },
                    { icon: Mail, title: 'Email Us', desc: 'admissions@elitecricket.com' },
                    { icon: Clock, title: 'Office Hours', desc: 'Mon - Sat: 9:00 AM - 6:00 PM' },
                  ].map((item, i) => (
                    <Reveal key={i} delay={0.3 + i * 0.1}>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <Button className="w-full py-4 text-lg">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
