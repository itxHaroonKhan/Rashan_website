'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartItem, Bill } from '../types';

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'SET_CART'; payload: CartItem[] }
  | { type: 'RESET_CART'; payload: CartItem[] }
  | { type: 'CLEAR_CART' };

interface CartState {
  items: CartItem[];
}

const CART_STORAGE_KEY = 'rashan-cart';

const initialState: CartState = {
  items: [],
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  resetCart: (items: CartItem[]) => void;
  getBill: () => Bill;
}>({
  state: initialState,
  dispatch: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  resetCart: () => {},
  getBill: () => ({ items: [], subtotals: [], total: 0 }),
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newState = { ...state };

  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(item => item.productId === action.payload.productId);
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity
        };
        newState = { ...state, items: updatedItems };
      } else {
        newState = { ...state, items: [...state.items, action.payload] };
      }
      break;

    case 'REMOVE_ITEM':
      newState = {
        ...state,
        items: state.items.filter(item => item.productId !== action.payload.productId)
      };
      break;

    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        newState = {
          ...state,
          items: state.items.filter(item => item.productId !== action.payload.productId)
        };
      } else {
        newState = {
          ...state,
          items: state.items.map(item =>
            item.productId === action.payload.productId
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
        };
      }
      break;

    case 'SET_CART':
      newState = { ...state, items: action.payload };
      break;

    case 'RESET_CART':
      newState = { ...state, items: action.payload };
      // Save to localStorage after reset
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(action.payload));
      return newState;

    case 'CLEAR_CART':
      newState = { ...state, items: [] };
      break;

    default:
      return state;
  }

  // Save to localStorage after each update
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newState.items));
  return newState;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'SET_CART', payload: parsedCart });
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId } });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const resetCart = (items: CartItem[]) => {
    dispatch({ type: 'RESET_CART', payload: items });
  };

  const getBill = (): Bill => {
    const subtotals = state.items.map(item => item.price * item.quantity);
    const total = subtotals.reduce((sum, subtotal) => sum + subtotal, 0);

    return {
      items: state.items,
      subtotals,
      total
    };
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        resetCart,
        getBill
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};