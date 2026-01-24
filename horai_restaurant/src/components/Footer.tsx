import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-rich-black overflow-hidden pt-32 pb-12 flex flex-col items-center justify-end min-h-[50vh]">
      {/* Gradient blending from section above */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rich-black to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-script text-[35vw] text-cream-50 opacity-[0.02] leading-none translate-y-[-10%] blur-sm">
          hōrai
        </span>
      </div>

      <div className="relative z-20 flex flex-col items-center gap-8">
        <nav>
          <ul className="flex gap-8 md:gap-12">
            <li>
              <Link
                to="/menu"
                className="text-cream-50/60 hover:text-cream-50 text-[10px] md:text-xs uppercase tracking-[0.25em] transition-colors duration-300 font-sans font-medium"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-cream-50/60 hover:text-cream-50 text-[10px] md:text-xs uppercase tracking-[0.25em] transition-colors duration-300 font-sans font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-cream-50/60 hover:text-cream-50 text-[10px] md:text-xs uppercase tracking-[0.25em] transition-colors duration-300 font-sans font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-cream-50/30 font-sans text-[10px] uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Hōrai
        </div>
      </div>
    </footer>
  );
};
