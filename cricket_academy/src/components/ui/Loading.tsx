import React from 'react';
import { Trophy } from 'lucide-react';

interface LoadingProps {
  fullScreen?: boolean;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({ fullScreen = false, className = '' }) => {
  const content = (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        <div className="w-16 h-16 border-4 border-slate-200 dark:border-slate-800 border-t-primary dark:border-t-secondary rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Trophy className="w-6 h-6 text-accent animate-pulse" />
        </div>
      </div>
      <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse text-sm tracking-wider">LOADING ACADEMY...</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-slate-950 flex items-center justify-center z-50 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      {content}
    </div>
  );
};
