import React from 'react';
import { Collection } from '@/config/types';

const collections: Collection[] = [
  {
    id: '1',
    title: 'Forest Dweller',
    subtitle: 'Deep Greens & Browns',
    image: 'https://picsum.photos/seed/nature-cloth/800/1000',
    link: '#',
  },
  {
    id: '2',
    title: 'Ocean Mist',
    subtitle: 'Linen & Light Blues',
    image: 'https://picsum.photos/seed/sea-cloth/800/1000',
    link: '#',
  },
  {
    id: '3',
    title: 'Desert Sand',
    subtitle: 'Warm Beiges & Textures',
    image: 'https://picsum.photos/seed/sand-cloth/800/1000',
    link: '#',
  },
];

const CollectionGrid: React.FC = () => {
  return (
    <section id="collections" className="py-20 md:py-32 bg-oraleo-50 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((col, index) => (
            <div 
              key={col.id} 
              className={`group relative overflow-hidden cursor-pointer ${index === 1 ? 'md:-mt-16' : ''}`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={col.image} 
                  alt={col.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="block text-xs uppercase tracking-widest mb-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {col.subtitle}
                </span>
                <h3 className="font-serif text-3xl italic group-hover:not-italic transition-all duration-300">
                  {col.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;