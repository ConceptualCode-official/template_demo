import React from 'react';
import { Hero } from '../components/Hero';
import { ExperienceSection } from '../components/ExperienceSection';
import { ExquisiteFlavorsSection } from '../components/ExquisiteFlavorsSection';
import { RolledToPerfectionSection } from '../components/RolledToPerfectionSection';
import { ReservationSection } from '../components/ReservationSection';
import { Footer } from '../components/Footer';
import { PageWrapper } from '../components/PageWrapper';

export const Home: React.FC = () => {
  return (
    <PageWrapper>
      <main className="w-full min-h-screen bg-rich-black">
        <Hero />
        <ExperienceSection />
        <ExquisiteFlavorsSection />
        <RolledToPerfectionSection />
        <ReservationSection />
        <Footer />
      </main>
    </PageWrapper>
  );
};
