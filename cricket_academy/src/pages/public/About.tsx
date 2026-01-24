import { motion } from 'framer-motion';
import { Target, Users, Award, History, ArrowRight } from 'lucide-react';
import { PageTransition } from '../../components/layout/PageTransition';
import { Reveal } from '../../components/ui/Reveal';
import { TiltCard } from '../../components/ui/TiltCard';

export const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-slate-950 pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-bold text-white font-display mb-6">OUR LEGACY</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light">
                Founded in 2010, Elite Cricket Academy has been the launchpad for over 500 professional cricketers, blending traditional discipline with modern technology.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <Reveal>
                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 h-full">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-primary dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">Our Vision</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    To be the global standard in cricket education, creating a ecosystem where talent meets opportunity through scientific training and holistic development.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 h-full">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                    <History className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">Our History</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Started by former Ranji Trophy players, we've grown from a single net facility to a 5-acre sports complex with state-of-the-art infrastructure.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Students Trained', value: '2,500+' },
                { label: 'State Players', value: '150+' },
                { label: 'National Players', value: '12' },
                { label: 'Years of Excellence', value: '15' },
              ].map((stat, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-4">
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-display">{stat.value}</div>
                    <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center font-display">LEADERSHIP TEAM</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Rajesh Kumar", role: "Director of Cricket", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80" },
                { name: "David Miller", role: "Head of Operations", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
                { name: "Sarah Jenkins", role: "Head Physiotherapist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" }
              ].map((person, i) => (
                <Reveal key={i} delay={i * 0.2}>
                  <TiltCard>
                    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img src={person.img} alt={person.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{person.name}</h4>
                        <p className="text-primary dark:text-blue-400 text-sm font-medium">{person.role}</p>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
