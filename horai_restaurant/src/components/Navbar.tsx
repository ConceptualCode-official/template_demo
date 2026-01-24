import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navLinks = [
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] bg-gradient-to-b from-black/60 to-transparent transition-all duration-300"
    >
      <div className="flex justify-between items-center px-6 py-5 md:px-12 md:py-6">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-cream-50 font-serif text-2xl tracking-widest font-light hover:opacity-80 transition-opacity relative z-50 mix-blend-difference"
        >
          H.
        </Link>

        {/* Navigation - Visible on all screens */}
        <nav>
          <ul className="flex gap-6 md:gap-12">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to}
                  className="text-cream-50/80 hover:text-cream-50 text-[10px] md:text-xs uppercase tracking-[0.2em] transition-colors duration-300 font-sans font-medium mix-blend-difference"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
