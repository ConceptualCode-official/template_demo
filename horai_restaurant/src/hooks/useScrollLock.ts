import { useEffect } from 'react';

export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      // Save original overflow style
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      
      // Cleanup function to restore scrolling
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isLocked]);
};
