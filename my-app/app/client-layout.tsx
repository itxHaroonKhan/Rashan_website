'use client';

import React from 'react';
import { CartProvider } from '../lib/cart-context-localstorage';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </CartProvider>
  );
};

export default ClientLayout;