import React from 'react';
import { CartItem as CartItemType } from '../types';
import { enLabels, formatCurrency } from '../lib/i18n';
import Image from 'next/image';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  index: number;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove, index }) => {
  const subtotal = item.price * item.quantity;

  const handleIncrease = () => {
    onUpdateQuantity(item.productId, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.productId, item.quantity - 1);
    }
  };

  return (
    <div key={`${item.productId}-${index}`} className="py-4 flex items-start">
      <div className="w-16 h-16 flex-shrink-0 mr-4">
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={64}
            height={64}
            className="object-cover rounded"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500 text-xs">No Image</span>
          </div>
        )}
      </div>
      
      <div className="flex-grow">
        <h3 className="font-semibold">{item.title}</h3>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">{enLabels.quantity}:</span>
            <div className="flex items-center border rounded">
              <button
                onClick={handleDecrease}
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-l disabled:opacity-50"
                aria-label={enLabels.updateQuantity}
              >
                -
              </button>
              <span className="px-2 py-1 min-w-[30px] text-center">{item.quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-r"
                aria-label={enLabels.updateQuantity}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="text-right">
            <div>
              <span className="text-sm text-gray-500">{enLabels.price}:</span>
              <span className="ml-1">{formatCurrency(item.price)}</span>
            </div>
            <div className="font-semibold">
              <span className="text-sm text-gray-500">{enLabels.subtotal}:</span>
              <span className="ml-1">{formatCurrency(subtotal)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => onRemove(item.productId)}
        className="ml-4 text-red-500 hover:text-red-700"
        aria-label={enLabels.removeFromCart}
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;