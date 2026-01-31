import React from 'react';
import { enLabels } from '../lib/i18n';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  className?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  className = ''
}) => {
  return (
    <div className={`flex items-center border rounded ${className}`}>
      <button
        onClick={onDecrease}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-l disabled:opacity-50"
        aria-label={enLabels.updateQuantity}
      >
        -
      </button>
      <span className="px-3 py-1 min-w-[30px] text-center">{quantity}</span>
      <button
        onClick={onIncrease}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-r"
        aria-label={enLabels.updateQuantity}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;