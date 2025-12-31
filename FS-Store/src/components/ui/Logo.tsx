import React from 'react';
import { Command } from 'lucide-react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 ring-1 ring-white/10">
        <Command className="h-5 w-5" strokeWidth={2.5} />
      </div>
      <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">
        FS<span className="text-blue-600">.</span>Store
      </span>
    </div>
  );
};
