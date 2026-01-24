import React from 'react';
import { Check, Zap } from 'lucide-react';
import { PageTransition } from '../../components/layout/PageTransition';
import { Reveal } from '../../components/ui/Reveal';
import { Button } from '../../components/ui/Button';

export const Programs = () => {
  const tiers = [
    {
      name: 'Grassroots',
      price: '60',
      period: '/month',
      desc: 'Perfect for beginners aged 8-12 starting their journey.',
      features: ['2 Sessions per week', 'Basic Technique Drills', 'Fitness Assessment', 'Quarterly Reports'],
      color: 'border-slate-200 dark:border-slate-700',
      btn: 'outline'
    },
    {
      name: 'Academy Pro',
      price: '90',
      period: '/month',
      desc: 'Intensive training for serious players aged 13-16.',
      features: ['4 Sessions per week', 'Video Analysis (Monthly)', 'League Match Exposure', 'Nutrition Plan', 'Mental Conditioning'],
      popular: true,
      color: 'border-primary dark:border-blue-500',
      btn: 'primary'
    },
    {
      name: 'Elite Performance',
      price: '150',
      period: '/month',
      desc: 'Professional grade coaching for U-19 and above.',
      features: ['Daily Sessions', 'Advanced Biomechanics', '1-on-1 Coaching', 'State Selection Prep', 'Physio Support', 'Kit Sponsorship Support'],
      color: 'border-slate-200 dark:border-slate-700',
      btn: 'outline'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-slate-950 pt-20">
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-6">TRAINING PROGRAMS</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Choose the right path for your cricketing journey. All programs are designed by certified Level-3 coaches.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, i) => (
                <Reveal key={i} delay={i * 0.1} className="h-full">
                  <div className={`relative h-full p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 ${tier.color} shadow-xl flex flex-col`}>
                    {tier.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold flex items-center shadow-lg">
                        <Zap className="w-3 h-3 mr-1 fill-current" /> MOST POPULAR
                      </div>
                    )}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                      <div className="flex items-baseline mb-4">
                        <span className="text-4xl font-bold text-primary dark:text-blue-400">${tier.price}</span>
                        <span className="text-slate-500 ml-1">{tier.period}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{tier.desc}</p>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {tier.features.map((feat, j) => (
                        <li key={j} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                          <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <Button variant={tier.btn as any} className="w-full">Choose Plan</Button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
