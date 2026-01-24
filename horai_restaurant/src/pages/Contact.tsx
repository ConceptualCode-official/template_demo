import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PageWrapper } from '../components/PageWrapper';
import { ContactHero } from '../components/ContactHero';
import { ContactFormSection } from '../components/ContactFormSection';
import { LocationsSection } from '../components/LocationsSection';
import { ReservationSection } from '../components/ReservationSection';

export const Contact: React.FC = () => {
  return (
    <PageWrapper>
      <div className="w-full min-h-screen bg-rich-black text-cream-50 selection:bg-cream-50/20">
        <Navbar />
        
        <ContactHero />
        
        <ContactFormSection />
        
        <LocationsSection />

        {/* Global Reservation Section */}
        <ReservationSection />
        
        <div className="relative z-10">
           <Footer />
        </div>
      </div>
    </PageWrapper>
  );
};
