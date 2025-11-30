"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGridSection from '@/components/collections/ProductGridSection';
import { Product } from '@/config/types';

import { tops, bottoms, dresses, outerwear } from '@/data/products';

export default function Collections() {
  return (
    <div className="min-h-screen bg-oraleo-50 selection:bg-nature-green selection:text-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-nature-dark/20 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/images/hero4.jpeg')" }}
          ></div>
          
          <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
            <span className="block text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-4 text-black">
              Essence of Earth
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
              Our Collections
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto font-light leading-relaxed">
              Timeless pieces crafted from natural fibers, designed to breathe with you and the world around you.
            </p>
          </div>
        </section>

        {/* Category Sections */}
        <div className="py-20 space-y-24">
          
          <ProductGridSection 
            title="Breathable Tops" 
            subtitle="Light & Airy" 
            products={tops}
          />

          <ProductGridSection 
            title="Grounded Bottoms" 
            subtitle="Comfort & Flow" 
            products={bottoms}
          />

          <ProductGridSection 
            title="Natural Silhouettes" 
            subtitle="Dresses & Jumpsuits" 
            products={dresses}
          />

          <ProductGridSection 
            title="Layered Warmth" 
            subtitle="Outerwear" 
            products={outerwear}
          />

        </div>

        {/* Quote Section */}
        <section className="py-24 px-6 bg-nature-dark text-center text-white">
            <div className="container mx-auto max-w-3xl">
                <blockquote className="font-serif text-3xl md:text-5xl italic leading-relaxed opacity-90">
                    "In every walk with nature one receives far more than he seeks."
                </blockquote>
                <cite className="block mt-8 text-sm font-bold uppercase tracking-widest text-oraleo-300 not-italic">
                    — John Muir
                </cite>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}