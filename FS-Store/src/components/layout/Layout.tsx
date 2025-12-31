import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AuthModal } from '../auth/AuthModal';
import { CartSidebar } from '../cart/CartSidebar';
import { Logo } from '../ui/Logo';
import { useApp } from '../../context/AppContext';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  // Connect directly to the actual app loading state
  // This ensures the loader only shows while Supabase/Data is actually initializing
  const { isLoading } = useApp();

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Global Fixed Backgrounds */}
      <div className="fixed-bg" />
      <div className="grid-pattern" />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Pulsing Effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20"
              />
              <Logo className="scale-150" />
            </motion.div>
            
            {/* Minimal Spinner */}
            <motion.div 
              className="mt-12 h-1 w-24 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden"
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1, 
                  ease: "linear" 
                }}
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col min-h-screen relative z-10"
          >
            <Navbar />
            <main className="flex-grow relative">
              {children}
            </main>
            <Footer />
            <AuthModal />
            <CartSidebar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
