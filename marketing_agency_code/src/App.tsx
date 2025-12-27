import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Cursor } from './components/ui/Cursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import { Preloader } from './components/ui/Preloader';
import { Snowfall } from './components/ui/Snowfall';

// Pages
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { NotFound } from './pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  return (
    <Router>
      {/* Removed overflow-x-hidden from here to rely on body style, preventing scroll container conflicts */}
      <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black relative">

        {/* Cursor & Effects */}
        <Cursor />
        <ScrollToTop />

        <AnimatePresence>
          {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        <Navbar />

        {/* Global Cinematic Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 gradient-mesh opacity-30" />
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
            <div className="bg-noise" />
            <Snowfall />
        </div>

        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          animate={{
            opacity: isLoading ? 0 : 1,
            scale: isLoading ? 1.05 : 1,
            filter: isLoading ? "blur(10px)" : "blur(0px)"
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          onAnimationComplete={() => setIsAnimationComplete(true)}
          // Ensure this wrapper also doesn't break sticky positioning
          style={isAnimationComplete ? { transform: 'none', filter: 'none' } : undefined}
          className="relative z-10"
        >
          <main>
            <AnimatedRoutes />
          </main>

          <Footer />
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
