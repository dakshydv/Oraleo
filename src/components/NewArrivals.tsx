"use client"
import React, { useRef } from 'react';
import { Product } from '@/config/types';
import ProductCard from './ProductCard';
import SectionHeader from './SectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products: Product[] = [
  {
    id: 'p1',
    name: 'Moss Linen Shirt',
    price: 89,
    category: 'Tops',
    image: 'https://picsum.photos/seed/shirt1/600/800',
    badge: 'New'
  },
  {
    id: 'p2',
    name: 'Terra Trousers',
    price: 120,
    category: 'Bottoms',
    image: 'https://picsum.photos/seed/pants1/600/800',
  },
  {
    id: 'p3',
    name: 'River Stone Dress',
    price: 150,
    category: 'Dresses',
    image: 'https://picsum.photos/seed/dress1/600/800',
    badge: 'Best Seller'
  },
  {
    id: 'p4',
    name: 'Pine Wool Cardigan',
    price: 110,
    category: 'Outerwear',
    image: 'https://picsum.photos/seed/knit/600/800',
  },
  {
    id: 'p5',
    name: 'Clay Cotton Tee',
    price: 45,
    category: 'Essentials',
    image: 'https://picsum.photos/seed/tee/600/800',
  },
];

const NewArrivals: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-white border-t border-oraleo-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <SectionHeader 
            title="Curated by Nature" 
            subtitle="New Arrivals" 
            alignment="left"
          />
          <div className="flex gap-4 mb-12 hidden md:flex">
            <button 
              onClick={() => scroll('left')}
              className="p-3 border border-oraleo-200 rounded-full hover:bg-nature-dark hover:text-white transition-all hover:border-nature-dark"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 border border-oraleo-200 rounded-full hover:bg-nature-dark hover:text-white transition-all hover:border-nature-dark"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;