'use client';

import React from 'react';
import Link from 'next/link';
import { enLabels } from '../lib/i18n';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rashan Grocery</h3>
            <p className="text-gray-300 dark:text-gray-400">
              Your trusted online grocery store for fresh and quality products delivered to your doorstep.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{enLabels.contactInfo}</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li>📞 +92-xxx-xxxxxxx</li>
              <li>✉️ contact@rashangrocery.com</li>
              <li>📍 Karachi, Pakistan</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link href="/categories" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-300 transition-colors">Categories</Link></li>
              <li><Link href="/cart" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-300 transition-colors">Cart</Link></li>
              <li><Link href="/bill" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-300 transition-colors">{enLabels.bill}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-300 transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-300 transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-300 transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Rashan Grocery. {enLabels.allRightsReserved}. {enLabels.trademark}</p>
          <div className="flex items-center">
            <span className="mr-2">Theme:</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;