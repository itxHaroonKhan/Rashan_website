import React, { useEffect, useRef, useState } from 'react';
import { enLabels } from '../lib/i18n';
import { useCart } from '../lib/cart-context-localstorage';

interface PrintButtonProps {
  onClick: () => void;
}

const PrintButton: React.FC<PrintButtonProps> = ({ onClick }) => {
  const { clearCart, resetCart, state } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [originalCart, setOriginalCart] = useState<any[]>([]);
  const isPrinting = useRef(false);

  // Store original cart state when component mounts
  useEffect(() => {
    setOriginalCart([...state.items]);
  }, [state.items]);

  const handlePrint = () => {
    // Set the flag to indicate we're initiating a print
    isPrinting.current = true;
    // Trigger the print functionality
    onClick();
  };

  const handleAfterPrint = () => {
    if (isPrinting.current) {
      // Show confirmation dialog after print dialog closes
      setTimeout(() => {
        const confirmed = window.confirm("Did you successfully print the bill? Clear cart?");
        if (confirmed) {
          // Clear the cart if user confirms
          clearCart();
        } else {
          // Restore the original cart if user cancels
          resetCart(originalCart);
        }
        isPrinting.current = false;
      }, 100); // Small delay to ensure print dialog has closed
    }
  };

  // Add event listener for afterprint
  useEffect(() => {
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [clearCart, resetCart, originalCart]);

  return (
    <button
      onClick={handlePrint}
      className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center flex items-center justify-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
      </svg>
      {enLabels.printBill}
    </button>
  );
};

export default PrintButton;