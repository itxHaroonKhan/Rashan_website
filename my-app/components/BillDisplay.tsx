import React from 'react';
import { Bill } from '../types';
import CartItem from './CartItem';
import PrintableBill from './PrintableBill';
import { enLabels, formatCurrency } from '../lib/i18n';

interface BillDisplayProps {
  bill: Bill;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

const BillDisplay: React.FC<BillDisplayProps> = ({ bill, onUpdateQuantity, onRemove }) => {
  if (bill.items.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold mb-2">{enLabels.emptyCart}</h2>
        <p>{enLabels.continueShopping}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">{enLabels.bill}</h2>
      </div>

      <div className="divide-y">
        {bill.items.map((item, index) => (
          <CartItem
            key={`${item.productId}-${index}`}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>{enLabels.total}:</span>
          <span>{formatCurrency(bill.total)}</span>
        </div>
      </div>
    </div>
  );
};

export default BillDisplay;