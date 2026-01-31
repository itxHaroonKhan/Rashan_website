// English localization for UI labels

export const enLabels = {
  product: "Product",
  quantity: "Quantity",
  price: "Price",
  total: "Total",
  addToCart: "Add to Cart",
  removeFromCart: "Remove from Cart",
  updateQuantity: "Update Quantity",
  cart: "Cart",
  bill: "Bill",
  subtotal: "Subtotal",
  checkout: "Checkout",
  continueShopping: "Continue Shopping",
  emptyCart: "Cart is empty",
  goToCart: "Go to Cart",
  backToShop: "Back to Shop",
  printBill: "Print Bill",
  contactInfo: "Contact Info",
  allRightsReserved: "All Rights Reserved",
  trademark: "Trademark",
};

// Currency formatter for PKR
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};