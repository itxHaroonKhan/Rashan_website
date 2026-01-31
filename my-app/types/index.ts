// Types for cart and bill functionality

export interface CartItem {
  productId: string;
  title: string;
  description: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  imageUrl: string;
  categoryId: string;
  quantity: number;
}

export interface Bill {
  items: CartItem[];
  subtotals: number[];
  total: number;
}