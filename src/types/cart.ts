import type { Product } from "./product";
export type CartItem = {
  id: string;
  title: string;
  price:number
  product?: Product
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};