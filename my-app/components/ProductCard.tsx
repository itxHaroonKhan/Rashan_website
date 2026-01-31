'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '../lib/cart-context-localstorage';
import { enLabels, formatCurrency } from '../lib/i18n';
import { CartItem } from '../types';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  imageUrl?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      productId: product._id,
      title: product.title,
      description: product.description,
      price: product.price,
      priceWithoutDiscount: product.priceWithoutDiscount,
      badge: product.badge,
      imageUrl: product.imageUrl || '',
      categoryId: '', // Will be populated when we have category info
      quantity: 1,
    };

    addToCart(cartItem);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {product.imageUrl ? (
        <div className="h-48 w-full">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{product.title}</h3>
          {product.badge && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              {product.badge}
            </span>
          )}
        </div>

        <p className="text-gray-600 text-sm mt-1">{product.description}</p>

        <div className="mt-3 flex justify-between items-center">
          <div>
            {product.priceWithoutDiscount && product.priceWithoutDiscount > product.price ? (
              <>
                <span className="text-red-600 font-bold">{formatCurrency(product.price)}</span>
                <span className="line-through text-gray-500 ml-2 text-sm">{formatCurrency(product.priceWithoutDiscount)}</span>
              </>
            ) : (
              <span className="font-bold">{formatCurrency(product.price)}</span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
          >
            {enLabels.addToCart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;