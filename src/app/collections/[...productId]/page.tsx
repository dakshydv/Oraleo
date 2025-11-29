"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ProductDetails } from '@/config/types';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ProductImageGallery from '@/components/products/ProductImageGallery';
import ProductInfo from '@/components/products/ProductInfo';
import ProductReviews from '@/components/products/ProductReviews';

// Mock Data
const product: ProductDetails = {
  id: 'p1',
  name: 'Moss Linen Shirt',
  price: 90,
  originalPrice: 120,
  category: 'Tops',
  image: '/images/products/product1.jpg',
  badge: 'New',
  description: "Crafted from 100% organic linen, the Moss Linen Shirt is designed for breathability and effortless style. Its relaxed fit and natural texture make it a versatile staple for any wardrobe, perfect for layering or wearing on its own.",
  images: [
    '/images/products/product1.jpg',
    '/images/products/product5.jpg',
    '/images/products/product4.jpg',
    '/images/products/product6.jpg',
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: [
    { name: 'Moss', value: '#4a6755' },
    { name: 'Sand', value: '#e8e4dc' },
    { name: 'Clay', value: '#c28869' },
  ],
  rating: 4.8,
  reviewCount: 124,
  reviews: [
    {
      id: 'r1',
      author: 'Sarah M.',
      rating: 5,
      date: 'October 15, 2023',
      title: 'Absolutely love it!',
      content: 'The fabric is so soft and breathable. Perfect for summer days. The color is exactly as shown in the pictures.'
    },
    {
      id: 'r2',
      author: 'James L.',
      rating: 4,
      date: 'September 28, 2023',
      title: 'Great quality',
      content: 'Really well made shirt. The fit is slightly loose, which I like. Would definitely recommend.'
    },
    {
      id: 'r3',
      author: 'Emily R.',
      rating: 5,
      date: 'September 10, 2023',
      title: 'New favorite staple',
      content: 'I find myself reaching for this shirt constantly. It washes well and gets softer with time.'
    }
  ]
};

export default function ProductDetailsPage({ params }: { params: { productId: string[] } }) {
  return (
    <div className="min-h-screen bg-oraleo-50 selection:bg-nature-green selection:text-white">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-nature-dark/60">
            <Link href="/" className="hover:text-nature-dark">Home</Link>
            <ChevronRight size={14} />
            <Link href="/collections" className="hover:text-nature-dark">Collections</Link>
            <ChevronRight size={14} />
            <span className="text-nature-dark font-medium">{product.name}</span>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative">
            
            {/* Left Column: Images */}
            <ProductImageGallery images={product.images} productName={product.name} />

            {/* Right Column: Product Info */}
            <ProductInfo product={product} />
          </div>

          {/* Reviews Section */}
          <ProductReviews reviews={product.reviews} />
        </div>
      </main>

      <Footer />
    </div>
  );
}