import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Check, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/Button';
import { formatCurrency } from '../lib/utils';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useApp();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white dark:bg-gray-950">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Product not found</h2>
        <Button variant="ghost" onClick={() => navigate('/projects')} className="mt-4">
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/projects")}
          className="mb-8 pl-0 hover:bg-transparent hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
              <img
                src={product.image_url}
                alt={product.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-blue-600 dark:text-blue-400 font-bold">
                {formatCurrency(product.price)}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
              <div className="flex items-center space-x-2 text-sm text-green-600 dark:text-green-400 mb-6 font-medium">
                <Check className="h-5 w-5" />
                <span>In Stock and ready to ship</span>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white border-none h-14 text-lg"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                <Button
                  onClick={() => addToCart(product)}
                  size="lg"
                  variant="secondary"
                  className="flex-1 h-14 text-lg dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
