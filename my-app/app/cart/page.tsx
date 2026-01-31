'use client';

import React from 'react';
import { useCart } from '../../lib/cart-context-localstorage';
import BillDisplay from '../../components/BillDisplay';
import { enLabels, formatCurrency } from '../../lib/i18n';
import Link from 'next/link';

const CartPage = () => {
  const { state, updateQuantity, removeFromCart, getBill } = useCart();
  const bill = getBill();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{enLabels.cart}</h1>
        <p className="text-gray-600 mt-2">{state.items.length} {enLabels.product}{state.items.length !== 1 ? 's' : ''} in cart</p>
      </div>

      {bill.items.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">{enLabels.emptyCart}</h2>
          <p className="text-gray-600 mb-6">Your shopping cart is empty. Start adding some products!</p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {enLabels.backToShop}
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <BillDisplay
              bill={bill}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-xl font-bold">
                {enLabels.total}: <span className="text-green-600 text-2xl">{formatCurrency(bill.total)}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="px-5 py-2.5 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors text-center"
                >
                  {enLabels.backToShop}
                </Link>

                <Link
                  href="/checkout"
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  {enLabels.checkout}
                </Link>

                <Link
                  href="/bill"
                  className="px-5 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center"
                >
                  View Full Bill
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;