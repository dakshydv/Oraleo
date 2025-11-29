import React from 'react';
import { Product } from '@/config/types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group min-w-[280px] md:min-w-[320px] snap-start">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-oraleo-200">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-nature-dark text-[10px] font-bold uppercase px-3 py-1 tracking-widest">
            {product.badge}
          </span>
        )}
        <button className="absolute bottom-4 right-4 bg-white text-nature-dark p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-nature-dark hover:text-white shadow-lg">
          <Plus size={20} />
        </button>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg text-nature-dark">{product.name}</h3>
          <p className="text-sm text-nature-green mt-1">{product.category}</p>
        </div>
        <span className="font-serif text-lg">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;