import { createContext, useContext, useState } from "react";
import type { CartContextType, CartItem } from "../types/cart";
import type { ReactNode } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prev) => [...prev, product]);
    toast.success('Product Added To Cart',{ position: "top-right" })
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    toast.success('Product Remove From Cart',{ position: "top-right" })
  };

  const clearCart = () => {
    setCart([]);
    toast.success('All Products Remove From Cart',{ position: "top-right" })
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};
