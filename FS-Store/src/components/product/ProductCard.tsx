import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { Button } from '../ui/Button';
import { useApp } from '../../context/AppContext';
import { ShoppingBag, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 backdrop-blur-sm"
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden bg-gray-50 dark:bg-gray-800 relative">
        <img
          src={product.image_url}
          alt={product.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <Link to={`/collection/${product.id}`}>
            <Button size="sm" className="bg-white text-black hover:bg-gray-100 border-none rounded-full h-11 w-11 p-0 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Eye className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="sm"
            className="bg-blue-600 text-white hover:bg-blue-700 border-none rounded-full h-11 w-11 p-0 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <Link to={`/collection/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2 flex-1 leading-relaxed">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
          <p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(product.price)}</p>
          <button
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};
