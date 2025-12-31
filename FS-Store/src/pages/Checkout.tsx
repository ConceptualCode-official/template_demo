import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, CreditCard, Truck, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { formatCurrency } from '../lib/utils';

export const Checkout = () => {
  const { cart, clearCart, user, cartTotal } = useApp();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const shipping = 5.00;
  const tax = cartTotal * 0.08;
  const total = cartTotal + tax + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      setIsLoading(false);
      navigate('/order-success');
    }, 2000);
  };

  if (cart.length === 0) {
    navigate('/');
    return null;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Checkout</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Secure encrypted transaction</p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          {/* Checkout Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Shipping Information */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center mb-6">
                  <Truck className="h-5 w-5 text-blue-600 mr-2" />
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Shipping Information</h2>
                </div>
                
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                     <Input label="Full Name" required defaultValue={user?.name} placeholder="John Doe" className="dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                  </div>
                  <div className="sm:col-span-2">
                    <Input label="Address" required placeholder="123 Main St" className="dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                  </div>
                  <div>
                    <Input label="City" required placeholder="New York" className="dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                  </div>
                  <div>
                    <Input label="Postal Code" required placeholder="10001" className="dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                  </div>
                  <div className="sm:col-span-2">
                    <Input label="Country" required placeholder="United States" className="dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center mb-6">
                  <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Payment Details</h2>
                </div>

                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Input label="Card Number" required placeholder="0000 0000 0000 0000" className="dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                  </div>
                  <div>
                    <Input label="Expiration Date" required placeholder="MM/YY" className="dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                  </div>
                  <div>
                    <Input label="CVC" required placeholder="123" className="dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                  </div>
                </div>
                
                <div className="mt-6 flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <Lock className="h-4 w-4 mr-2 text-green-600" />
                  Payments are secure and encrypted.
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none" isLoading={isLoading}>
                Pay {formatCurrency(total)}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="mt-10 lg:mt-0 lg:col-span-5">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 sticky top-24">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Order Summary</h2>
              
              <ul className="divide-y divide-gray-200 dark:divide-gray-800 mb-6">
                {cart.map((item) => (
                  <li key={item.id} className="flex py-4">
                    <img
                      src={item.product.image_url}
                      alt={item.product.title}
                      className="h-16 w-16 rounded-md object-cover border border-gray-100 dark:border-gray-800"
                    />
                    <div className="ml-4 flex flex-1 flex-col justify-center">
                      <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                        <h3 className="line-clamp-1 mr-2">{item.product.title}</h3>
                        <p>{formatCurrency(item.product.price * item.quantity)}</p>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Qty {item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-4">
                <div className="flex items-center justify-between text-sm">
                  <p className="text-gray-600 dark:text-gray-400">Subtotal</p>
                  <p className="font-medium text-gray-900 dark:text-white">{formatCurrency(cartTotal)}</p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <p className="text-gray-600 dark:text-gray-400">Shipping</p>
                  <p className="font-medium text-gray-900 dark:text-white">{formatCurrency(shipping)}</p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <p className="text-gray-600 dark:text-gray-400">Tax</p>
                  <p className="font-medium text-gray-900 dark:text-white">{formatCurrency(tax)}</p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-4">
                  <p className="text-base font-bold text-gray-900 dark:text-white">Total</p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">{formatCurrency(total)}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="h-4 w-4" />
                <span>30-Day Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
