import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="h-24 w-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Order Confirmed!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
          Thank you for your purchase. We've sent a confirmation email to your inbox. Your order ID is <span className="font-mono font-medium text-gray-900 dark:text-white">#ORD-{Math.floor(Math.random() * 100000)}</span>.
        </p>

        <div className="space-y-4">
          <Link to="/projects">
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none">
              Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="w-full dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
