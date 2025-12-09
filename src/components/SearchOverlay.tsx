"use client"
import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { allProducts } from '@/data/products';
import Link from 'next/link';
import { Product } from '@/config/types';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = allProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    // Deduplicate by ID
    const uniqueResults = Array.from(new Map(filtered.map(item => [item.id, item])).values());
    setResults(uniqueResults);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-oraleo-50/95 backdrop-blur-xl animate-fade-in">
      <div className="container mx-auto px-6 pt-8">
        <div className="flex justify-end mb-8">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-oraleo-200 rounded-full transition-colors"
          >
            <X size={32} className="text-nature-dark" />
          </button>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative mb-16">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-b-2 border-nature-dark/20 py-4 text-3xl md:text-5xl font-serif text-nature-dark placeholder:text-nature-dark/30 focus:outline-none focus:border-nature-dark transition-colors"
            />
            <Search size={32} className="absolute right-0 top-1/2 -translate-y-1/2 text-nature-dark/40" />
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {results.map(product => (
                <Link 
                  key={product.id} 
                  href={`/collections/${product.id}`}
                  onClick={onClose}
                  className="flex gap-4 p-4 bg-white border border-oraleo-200 hover:border-nature-dark transition-all group"
                >
                  <div className="w-20 h-24 bg-oraleo-100 flex-shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-serif text-lg text-nature-dark group-hover:text-nature-green transition-colors">{product.name}</h4>
                    <p className="text-sm text-nature-dark/60">{product.category}</p>
                    <span className="mt-2 font-medium text-nature-dark">${product.price}</span>
                  </div>
                  <div className="flex items-center text-nature-dark/20 group-hover:text-nature-dark transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </Link>
              ))}
            </div>
          ) : query.trim() !== '' ? (
            <div className="text-center text-nature-dark/60 mt-12">
              <p className="text-xl">No results found for "{query}"</p>
              <p className="mt-2 text-sm">Try checking your spelling or using different keywords.</p>
            </div>
          ) : (
            <div className="text-center text-nature-dark/40 mt-12">
              <p>Start typing to discover our collection</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
