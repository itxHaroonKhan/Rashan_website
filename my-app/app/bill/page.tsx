'use client';

import React from 'react';
import { useCart } from '../../lib/cart-context-localstorage';
import CartItem from '../../components/CartItem';
import BillSummary from '../../components/BillSummary';
import { enLabels, formatCurrency } from '../../lib/i18n';
import Link from 'next/link';

const BillPage = () => {
  const { state, updateQuantity, removeFromCart, getBill } = useCart();
  const bill = getBill();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{enLabels.bill}</h1>
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
            <div className="divide-y">
              {bill.items.map((item, index) => (
                <CartItem
                  key={`${item.productId}-${index}`}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                  index={index}
                />
              ))}
            </div>
          </div>

          <BillSummary bill={bill} />
        </>
      )}
    </div>
  );
};

export default BillPage;