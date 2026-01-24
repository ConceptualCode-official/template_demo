import React from 'react';
import { Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  const iconClass = "w-5 h-5 text-gray-800 hover:text-black transition-colors duration-300 cursor-pointer";
  
  return (
    <div className="flex gap-6 items-center">
      <a href="#" aria-label="Instagram"><Instagram className={iconClass} strokeWidth={1.5} /></a>
      <a href="#" aria-label="Twitter"><Twitter className={iconClass} strokeWidth={1.5} /></a>
      <a href="#" aria-label="YouTube"><Youtube className={iconClass} strokeWidth={1.5} /></a>
      <a href="#" aria-label="LinkedIn"><Linkedin className={iconClass} strokeWidth={1.5} /></a>
    </div>
  );
};
