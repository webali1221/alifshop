import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface CardContextType {
  cartCount: number;
  likeCount: number;
  addToCart: () => void; // Bu yerda ham argumentni olib tashladik
  toggleLike: (isAdding: boolean) => void;
}

const CartContext = createContext<CardContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  // 'item' olib tashlandi, chunki u faqat countni oshirish uchun kerak
  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const toggleLike = (isAdding: boolean) => {
    setLikeCount((prev) => (isAdding ? prev + 1 : prev - 1));
  };

  return (
    <CartContext.Provider value={{ cartCount, likeCount, addToCart, toggleLike }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};