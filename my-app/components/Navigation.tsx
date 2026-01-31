'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../lib/cart-context-localstorage';
import { enLabels } from '../lib/i18n';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const { state } = useCart();
  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          Rashan
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-600 text-gray-700 dark:text-gray-300">
            Home
          </Link>

          <Link href="/cart" className="relative hover:text-blue-600 text-gray-700 dark:text-gray-300">
            {enLabels.cart}
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>

          <Link href="/bill" className="hover:text-blue-600 text-gray-700 dark:text-gray-300">
            {enLabels.bill}
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;