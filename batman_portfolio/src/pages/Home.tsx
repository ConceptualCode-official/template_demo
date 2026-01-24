import React from 'react';
import { CenteredBottomHero } from '../components/CenteredBottomHero';
import { SocialLinks } from '../components/SocialLinks';
import { SelectedWork } from '../components/SelectedWork';
import { Services } from '../components/Services';
import { AboutSection } from '../components/AboutSection';
import { ExperienceTable } from '../components/ExperienceTable';
import { AfterHours } from '../components/AfterHours';
import { AwardsTable } from '../components/AwardsTable';
import { ContactFooter } from '../components/ContactFooter';
import { smoothScrollTo } from '../utils/scroll';

export const Home: React.FC = () => {
  const BRUCE_IMG = "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/person-1.webp";
  // Updated Overlay Image
  const BATMAN_IMG = "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/freepik__background__14191-1.webp";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId, 1200); // 1.2s duration for "deliberate" feel
  };

  return (
    <div className="w-full bg-white overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* HERO SECTION - Full Screen Wrapper */}
      <header className="relative w-full h-screen overflow-hidden">
        {/* Navigation */}
        <nav className="absolute top-8 right-0 w-full md:w-auto flex justify-center md:justify-end md:right-12 lg:right-20 z-40 pointer-events-auto">
          <div className="flex flex-row gap-6 md:gap-8 bg-white/80 md:bg-transparent px-4 py-2 rounded-full backdrop-blur-sm md:backdrop-blur-none">
            {['About', 'Work', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-xs md:text-sm font-sans tracking-[0.2em] font-medium text-gray-900 hover:text-gray-600 transition-colors uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Typography */}
        <div className="absolute top-32 md:top-24 w-full md:w-auto md:left-20 z-30 pointer-events-none">
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-4">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-black">
              <span className="block">BRUCE</span>
              <span className="block">WAYNE</span>
            </h1>
            <p className="mt-4 md:mt-6 text-xs md:text-sm font-sans tracking-[0.15em] text-gray-500 uppercase">
              Creative Overall
            </p>

            {/* Mobile Only: CTA */}
            <div className="flex flex-col items-center mt-8 md:hidden animate-bounce opacity-80">
              <span className="font-handwritten text-2xl text-gray-600 rotate-[-5deg]">
                Tap me for a surprise
              </span>
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 50 50" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 text-gray-500 ml-4"
              >
                <path 
                  d="M10 5 C 15 25, 35 15, 25 40" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  fill="none"
                />
                <path 
                  d="M20 35 L 25 40 L 32 32" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Hero Image Component */}
        <CenteredBottomHero 
          baseImage={BRUCE_IMG}
          overlayImage={BATMAN_IMG}
          alt="Bruce Wayne Portrait"
        />

        {/* Social Icons */}
        <div className="absolute bottom-6 right-0 w-full md:w-auto flex justify-center md:justify-end md:bottom-12 md:right-12 lg:right-20 z-30 pointer-events-auto">
          <SocialLinks />
        </div>
      </header>

      {/* REST OF THE WEBSITE */}
      <SelectedWork />
      <Services />
      <AboutSection />
      <ExperienceTable />
      <AfterHours />
      <AwardsTable />
      <ContactFooter />

    </div>
  );
}
