"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product, CartItem } from "../types";

interface CartContextType {
  cartItems: CartItem[];
  savedItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  cartCount: number;
  addToSaved: (item: CartItem) => void;
  savedCount: number;

  removeFromSaved: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [savedItems, setSavedItems] = useState<CartItem[]>([]);

  const removeFromSaved = (productId: number) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const addToSaved = (item: CartItem) => {
    setSavedItems((prev) => {
      if (!prev.find((savedItem) => savedItem.id === item.id)) {
        return [...prev, item];
      }
      return prev;
    });
  };

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        savedItems,
        addToCart,
        removeFromCart,
        cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
        addToSaved,
        savedCount: savedItems.length,
        removeFromSaved,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
