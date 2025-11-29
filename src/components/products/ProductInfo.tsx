"use client"
import React, { useState } from 'react';
import { ProductDetails } from '@/config/types';
import { Star, Minus, Plus, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductInfoProps {
  product: ProductDetails;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity, selectedSize, selectedColor);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="lg:py-8">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          {product.badge && (
            <span className="bg-nature-green text-white text-[10px] font-bold uppercase px-3 py-1 tracking-widest">
              {product.badge}
            </span>
          )}
          <div className="flex items-center gap-1 text-nature-dark">
            <Star size={16} className="fill-nature-dark" />
            <span className="font-medium text-sm">{product.rating}</span>
            <span className="text-nature-dark/60 text-sm">({product.reviewCount} reviews)</span>
          </div>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl text-nature-dark mb-4">{product.name}</h1>
        
        <div className="flex items-end gap-4 mb-6">
          {product.originalPrice && (
            <span className="font-serif text-xl line-through decoration-[#FEECDO] text-nature-dark/60">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="font-serif text-3xl text-nature-dark">${product.price.toFixed(2)}</span>
        </div>

        <p className="text-nature-dark/80 leading-relaxed mb-8">
          {product.description}
        </p>
      </div>

      <div className="space-y-8 border-t border-oraleo-200 pt-8">
        {/* Colors */}
        <div>
          <span className="block text-sm font-bold uppercase tracking-widest text-nature-dark mb-4">
            Color: <span className="text-nature-dark/60 font-normal normal-case">{selectedColor?.name}</span>
          </span>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-full border border-oraleo-300 flex items-center justify-center transition-all ${selectedColor?.name === color.name ? 'ring-2 ring-nature-dark ring-offset-2' : ''}`}
                style={{ backgroundColor: color.value }}
                aria-label={`Select color ${color.name}`}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="block text-sm font-bold uppercase tracking-widest text-nature-dark">
              Size: <span className="text-nature-dark/60 font-normal normal-case">{selectedSize}</span>
            </span>
            <button className="text-xs underline text-nature-dark/60 hover:text-nature-dark">Size Guide</button>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 flex items-center justify-center border transition-all ${selectedSize === size ? 'bg-nature-dark text-white border-nature-dark' : 'border-oraleo-300 text-nature-dark hover:border-nature-dark'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <div className="flex items-center border border-oraleo-300 w-max">
            <button 
              onClick={() => handleQuantityChange(-1)}
              className="p-4 hover:bg-oraleo-100 transition-colors"
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <button 
              onClick={() => handleQuantityChange(1)}
              className="p-4 hover:bg-oraleo-100 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button 
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`flex-1 text-white py-4 px-8 font-medium tracking-wider transition-all flex items-center justify-center gap-2 ${isAdding ? 'bg-nature-green' : 'bg-nature-dark hover:bg-nature-green'}`}
          >
            <ShoppingBag size={20} />
            {isAdding ? 'ADDED' : 'ADD TO CART'}
          </button>
          
          <button className="p-4 border border-oraleo-300 hover:border-nature-dark hover:text-nature-green transition-all">
            <Heart size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
