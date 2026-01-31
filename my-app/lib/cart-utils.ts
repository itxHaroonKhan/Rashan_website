import { CartItem, Bill } from '../types';

export const calculateSubtotal = (item: CartItem): number => {
  return item.price * item.quantity;
};

export const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + calculateSubtotal(item), 0);
};

export const getBill = (items: CartItem[]): Bill => {
  const subtotals = items.map(item => calculateSubtotal(item));
  const total = calculateTotal(items);
  
  return {
    items,
    subtotals,
    total
  };
};

export const validateQuantity = (quantity: number): boolean => {
  return Number.isInteger(quantity) && quantity > 0;
};