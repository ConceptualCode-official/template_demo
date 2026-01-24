import React from 'react';
import { PageTransition } from '../../components/layout/PageTransition';
import { Reveal } from '../../components/ui/Reveal';
import { TiltCard } from '../../components/ui/TiltCard';

export const Facilities = () => {
  const facilities = [
    { title: 'International Standard Ground', desc: 'Full-sized turf ground with 5 center wickets.', img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80' },
    { title: 'Indoor Nets Complex', desc: '8-lane indoor facility with bowling machines.', img: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80' },
    { title: 'High Performance Gym', desc: 'Dedicated strength and conditioning zone.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80' },
    { title: 'Video Analysis Room', desc: 'Siliconcoach software with 4K playback.', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80' },
    { title: 'Recovery Pool', desc: 'Ice baths and hydrotherapy pool.', img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80' },
    { title: 'Hostel Facility', desc: 'Accommodation for outstation students.', img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-slate-950 pt-20">
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">WORLD CLASS FACILITIES</h1>
            </Reveal>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              We believe that champions need the best environment to grow. Our infrastructure matches international standards.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((fac, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <TiltCard className="h-full">
                    <div className="group relative h-full rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800">
                      <div className="h-48 overflow-hidden">
                        <img src={fac.img} alt={fac.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{fac.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{fac.desc}</p>
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
