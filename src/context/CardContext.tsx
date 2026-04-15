import { createContext, useContext, useState, ReactNode } from "react";

interface CardContextType {
  cartCount: number;
  likeCount: number;
  addToCart: (item: any) => void;
  toggleLike: (isAdding: boolean) => void;
}

const CartContext = createContext<CardContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  const addToCart = (item: any) => {
    setCartCount((prev) => prev + 1);
    console.log("Savatchaga qo'shildi:", item);
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