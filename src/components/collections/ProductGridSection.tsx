import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/config/types';

interface ProductGridSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  alignment?: 'left' | 'center' | 'right';
}

export default function ProductGridSection({ title, subtitle, products, alignment = 'left' }: ProductGridSectionProps) {
  return (
    <section className="container mx-auto px-6">
      <SectionHeader 
        title={title} 
        subtitle={subtitle} 
        alignment={alignment}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
