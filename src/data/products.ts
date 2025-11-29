import { Product } from '@/config/types';

export const tops: Product[] = [
  {
    id: 't1',
    name: 'Moss Linen Shirt',
    price: 90,
    originalPrice: 120,
    category: 'Tops',
    image: '/images/products/product1.jpg',
    badge: 'New'
  },
  {
    id: 't2',
    name: 'Clay Cotton Tee',
    price: 45,
    originalPrice: 60,
    category: 'Tops',
    image: '/images/products/product5.jpg',
  },
  {
    id: 't3',
    name: 'Sage Silk Blouse',
    price: 110,
    category: 'Tops',
    image: '/images/products/product6.jpg',
  },
  {
    id: 't4',
    name: 'Sand Knit Top',
    price: 75,
    category: 'Tops',
    image: '/images/products/product4.jpg',
  }
];

export const bottoms: Product[] = [
  {
    id: 'b1',
    name: 'Terra Trousers',
    price: 120,
    originalPrice: 160,
    category: 'Bottoms',
    image: '/images/products/product2.jpg',
  },
  {
    id: 'b2',
    name: 'Forest Culottes',
    price: 95,
    category: 'Bottoms',
    image: '/images/products/product3.jpg',
  },
  {
    id: 'b3',
    name: 'Dune Linen Shorts',
    price: 65,
    category: 'Bottoms',
    image: '/images/products/product1.jpg',
  },
  {
    id: 'b4',
    name: 'Bark Cargo Pants',
    price: 130,
    category: 'Bottoms',
    image: '/images/products/product2.jpg',
  }
];

export const dresses: Product[] = [
  {
    id: 'd1',
    name: 'River Stone Dress',
    price: 150,
    originalPrice: 200,
    category: 'Dresses',
    image: '/images/products/product3.jpg',
    badge: 'Best Seller'
  },
  {
    id: 'd2',
    name: 'Meadow Wrap Dress',
    price: 140,
    category: 'Dresses',
    image: '/images/products/product6.jpg',
  },
  {
    id: 'd3',
    name: 'Ocean Breeze Maxi',
    price: 180,
    category: 'Dresses',
    image: '/images/products/product2.jpg',
  }
];

export const outerwear: Product[] = [
  {
    id: 'o1',
    name: 'Pine Wool Cardigan',
    price: 110,
    originalPrice: 145,
    category: 'Outerwear',
    image: '/images/products/product4.jpg',
  },
  {
    id: 'o2',
    name: 'Cedar Trench Coat',
    price: 250,
    category: 'Outerwear',
    image: '/images/products/product1.jpg',
  },
  {
    id: 'o3',
    name: 'Mist Rain Jacket',
    price: 160,
    category: 'Outerwear',
    image: '/images/products/product5.jpg',
  }
];

export const newArrivals: Product[] = [
  {
    id: 'p1',
    name: 'Moss Linen Shirt',
    price: 90,
    originalPrice: 120,
    category: 'Tops',
    image: '/images/products/product1.jpg',
    badge: 'New'
  },
  {
    id: 'p2',
    name: 'Terra Trousers',
    price: 120,
    originalPrice: 160,
    category: 'Bottoms',
    image: '/images/products/product2.jpg',
  },
  {
    id: 'p3',
    name: 'River Stone Dress',
    price: 150,
    originalPrice: 200,
    category: 'Dresses',
    image: '/images/products/product3.jpg',
    badge: 'Best Seller'
  },
  {
    id: 'p4',
    name: 'Pine Wool Cardigan',
    price: 110,
    originalPrice: 145,
    category: 'Outerwear',
    image: '/images/products/product4.jpg',
  },
  {
    id: 'p5',
    name: 'Clay Cotton Tee',
    price: 45,
    originalPrice: 60,
    category: 'Essentials',
    image: '/images/products/product5.jpg',
  },
  {
    id: 'p6',
    name: 'Clay Cotton Tee',
    price: 45,
    originalPrice: 60,
    category: 'Essentials',
    image: '/images/products/product6.jpg',
  },
];

export const allProducts: Product[] = [
  ...tops,
  ...bottoms,
  ...dresses,
  ...outerwear,
  // Deduplicate new arrivals if they share IDs with others, or just include them. 
  // For now, we'll just include everything and let the search filter handle it.
  // Actually, let's try to be cleaner.
  // The IDs in newArrivals (p1, p2...) are different from category IDs (t1, b1...).
  // So we can just combine them.
  ...newArrivals
];
