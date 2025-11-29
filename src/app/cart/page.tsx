"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const shipping = 15;
  const total = cartTotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-oraleo-50 flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center pt-32 mb-20us ">
          <div className="bg-oraleo-100 p-8 rounded-full mb-6">
            <ShoppingBag size={48} className="text-nature-dark/40" />
          </div>
          <h1 className="font-serif text-4xl text-nature-dark mb-4">Your Cart is Empty</h1>
          <p className="text-nature-dark/60 mb-8 max-w-md">
            Looks like you haven't added any pieces to your collection yet.
          </p>
          <Link 
            href="/collections" 
            className="px-8 py-3 bg-nature-dark text-white hover:bg-nature-green transition-all font-bold uppercase tracking-widest"
          >
            Continue Shopping
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-oraleo-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <SectionHeader title="Your Cart" alignment="left" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor.name}`} className="bg-white p-6 border border-oraleo-200 flex gap-6">
                  <div className="w-24 h-32 bg-oraleo-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-xl text-nature-dark mb-1">{item.name}</h3>
                        <p className="text-sm text-nature-dark/60">{item.category}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor.name)}
                        className="text-nature-dark/40 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-nature-dark/80 mt-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold uppercase text-xs tracking-wider">Size:</span>
                        <span>{item.selectedSize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold uppercase text-xs tracking-wider">Color:</span>
                        <span className="flex items-center gap-1">
                          <span className="w-3 h-3 rounded-full border border-oraleo-300" style={{ backgroundColor: item.selectedColor.value }}></span>
                          {item.selectedColor.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center border border-oraleo-300">
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor.name, item.quantity - 1)}
                          className="p-2 hover:bg-oraleo-100 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor.name, item.quantity + 1)}
                          className="p-2 hover:bg-oraleo-100 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-serif text-xl text-nature-dark">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 border border-oraleo-200 sticky top-32">
                <h3 className="font-serif text-2xl text-nature-dark mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-nature-dark/80">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-nature-dark/80">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-oraleo-200 pt-4 flex justify-between font-bold text-lg text-nature-dark">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-nature-dark text-white py-4 font-bold uppercase tracking-widest hover:bg-nature-green transition-all flex items-center justify-center gap-2 group">
                  Checkout
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-xs text-center text-nature-dark/40 mt-4">
                  Secure Checkout • Free Returns within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
