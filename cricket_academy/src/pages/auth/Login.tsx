import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trophy, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const Login = () => {
  const [role, setRole] = useState<'student' | 'coach' | 'admin'>('student');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (role === 'admin') navigate('/admin');
    else navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-slate-900">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 bg-primary relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-primary/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
          alt="Cricket Training" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-white text-center p-12">
          <h2 className="text-4xl font-bold mb-4 font-display">Welcome Back!</h2>
          <p className="text-lg text-slate-200">Ready to break some records today?</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-2 mb-8">
              <div className="bg-accent p-2 rounded-lg">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-display tracking-wider text-slate-900 dark:text-white">
                PRO<span className="text-accent">CRICKET</span>
              </span>
            </Link>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Sign in to your account</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Access your dashboard, stats, and schedules</p>
          </div>

          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg mb-6">
            {(['student', 'coach', 'admin'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2 text-sm font-medium rounded-md capitalize transition-all ${
                  role === r 
                    ? 'bg-white dark:bg-slate-700 text-accent shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex justify-end mt-1">
                <a href="#" className="text-sm text-accent hover:text-accent-hover">Forgot password?</a>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Sign In <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-accent hover:text-accent-hover">
                Apply for Admission
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
