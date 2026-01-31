'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../../lib/cart-context-localstorage';
import { enLabels, formatCurrency } from '../../lib/i18n';

const CheckoutPage = () => {
  const { getBill } = useCart();
  const bill = getBill();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">{enLabels.checkout}</h1>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{enLabels.bill}</h2>

        <div className="space-y-3 mb-6">
          {bill.items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.title} (x{item.quantity})</span>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>{enLabels.total}:</span>
            <span>{formatCurrency(bill.total)}</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="mb-6">Thank you for your order! Your order has been successfully completed.</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {enLabels.backToShop}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;