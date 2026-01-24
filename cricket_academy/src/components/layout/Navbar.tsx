import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy, User, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          width: scrolled ? '90%' : '100%',
          maxWidth: scrolled ? '80rem' : '100%',
          top: scrolled ? '1rem' : '0rem',
          borderRadius: scrolled ? '9999px' : '0px',
          transform: `translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300',
          scrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-2xl border border-white/20 dark:border-slate-700/50 py-3 px-6'
            : 'bg-transparent py-6 px-4 sm:px-8'
        )}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group relative z-10 shrink-0">
            <div className={cn(
              "p-2 rounded-xl transform group-hover:rotate-12 transition-all duration-300 shadow-lg",
              scrolled ? "bg-primary shadow-primary/20" : "bg-primary shadow-black/20"
            )}>
              <Trophy className="h-5 w-5 text-white" />
            </div>
            <span className={cn(
              "text-xl font-bold font-display tracking-wider transition-colors duration-300",
              scrolled || !isHome ? "text-slate-900 dark:text-white" : "text-white"
            )}>
              ELITE<span className="text-secondary">CRICKET</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-white/10 group overflow-hidden",
                  scrolled || !isHome ? "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white" : "text-slate-200 hover:text-white"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Hover Glow Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4 relative z-10 shrink-0">
            <Link to="/login">
              <Button
                variant={scrolled || !isHome ? "primary" : "white"}
                size="sm"
                className={cn(
                  "shadow-lg transition-transform hover:scale-105 active:scale-95",
                  scrolled ? "shadow-primary/25" : "shadow-black/10"
                )}
              >
                <User className="w-4 h-4 mr-2" />
                Portal Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-full transition-colors relative z-50",
                scrolled || !isHome ? "text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800" : "text-white hover:bg-white/10"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "fixed z-50 md:hidden bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden",
                scrolled ? "top-20 inset-x-4" : "top-24 inset-x-4"
              )}
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800"
                >
                  <Link to="/login">
                    <Button className="w-full justify-center">Student / Coach Login</Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
