import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, User as UserIcon, Sun, Moon, Search } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export const Navbar = () => {
  const { cartCount, isAuthenticated, logout, user, setIsCartOpen, setAuthModalOpen, setAuthView } = useApp();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const openAuth = (view: 'login' | 'signup') => {
    setAuthView(view);
    setAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Collections
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            About
          </Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
          >
            <ShoppingCart className="h-5 w-5 group-hover:text-blue-600 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white ring-2 ring-white dark:ring-gray-900">
                {cartCount}
              </span>
            )}
          </button>

          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2" />

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</span>
                <span className="text-xs text-gray-500">Member</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => openAuth('login')}>Login</Button>
              <Button size="sm" onClick={() => openAuth('signup')} className="bg-blue-600 hover:bg-blue-700 text-white border-none">
                Sign Up
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-1 text-gray-700 dark:text-gray-300"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-6 space-y-4 animate-in slide-in-from-top-5">
          <Link to="/" className="block text-base font-medium text-gray-900 dark:text-white" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/projects" className="block text-base font-medium text-gray-900 dark:text-white" onClick={() => setIsMenuOpen(false)}>
            Collections
          </Link>
          <Link to="/about" className="block text-base font-medium text-gray-900 dark:text-white" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          
          <div className="flex items-center justify-between py-4 border-t border-gray-100 dark:border-gray-800">
            <span className="text-sm text-gray-500">Appearance</span>
            <button 
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-medium"
            >
              {theme === 'light' ? <><Moon className="h-4 w-4" /> Dark Mode</> : <><Sun className="h-4 w-4" /> Light Mode</>}
            </button>
          </div>

          <div className="pt-2">
            {isAuthenticated ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <UserIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={() => { handleLogout(); setIsMenuOpen(false); }}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" onClick={() => openAuth('login')}>Login</Button>
                <Button onClick={() => openAuth('signup')} className="bg-blue-600 text-white border-none">Sign Up</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
