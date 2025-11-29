"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '@/config/types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, size: string, color: { name: string; value: string }) => void;
  removeFromCart: (id: string, size: string, colorName: string) => void;
  updateQuantity: (id: string, size: string, colorName: string, quantity: number) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('oraleo_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart data", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('oraleo_cart', JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addToCart = (product: Product, quantity: number, size: string, color: { name: string; value: string }) => {
    setItems(prev => {
      const existingItemIndex = prev.findIndex(item => 
        item.id === product.id && 
        item.selectedSize === size && 
        item.selectedColor.name === color.name
      );

      if (existingItemIndex > -1) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      return [...prev, { ...product, quantity, selectedSize: size, selectedColor: color }];
    });
  };

  const removeFromCart = (id: string, size: string, colorName: string) => {
    setItems(prev => prev.filter(item => 
      !(item.id === id && item.selectedSize === size && item.selectedColor.name === colorName)
    ));
  };

  const updateQuantity = (id: string, size: string, colorName: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === size && item.selectedColor.name === colorName) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
