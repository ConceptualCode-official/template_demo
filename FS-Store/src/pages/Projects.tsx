import React from 'react';
import { ProductCard } from '../components/product/ProductCard';
import { useApp } from '../context/AppContext';

export const Projects = () => {
  const { products } = useApp();

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-10 mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Our Collections</h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Explore our curated selection of premium products designed for the modern professional.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
