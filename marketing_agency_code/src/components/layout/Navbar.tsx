import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Agency', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6",
          isScrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-lg" : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Professional Logo */}
          <Link to="/" className="relative group flex items-center gap-3 z-[101]">
            <div className="relative w-10 h-10 flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-600 opacity-20 rotate-45 transform group-hover:rotate-90 transition-transform duration-700" />
               <div className="absolute inset-0 border border-white/30 rotate-45 transform group-hover:rotate-0 transition-transform duration-700" />
               <span className="font-serif text-2xl font-bold text-white relative z-10">E</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold tracking-[0.2em] text-white leading-none font-sans">
                ESCAPE
              </span>
              <span className="text-[8px] font-bold tracking-[0.4em] text-gray-400 uppercase group-hover:text-red-500 transition-colors leading-none mt-1">
                MEDIA AGENCY
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest hover:text-white transition-colors relative group py-2",
                  location.pathname === link.href ? "text-white" : "text-gray-400"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-full",
                  location.pathname === link.href ? "w-full" : ""
                )} />
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-gray-200 transition-all hover:scale-105 border border-white"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-[101] relative text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-8 bg-black/95 backdrop-blur-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter hover:text-red-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 px-10 py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Start Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
