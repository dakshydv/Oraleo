export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
  originalPrice?: number;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
}

export interface ProductDetails extends Product {
  description: string;
  images: string[];
  sizes: string[];
  colors: { name: string; value: string }[];
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: { name: string; value: string };
}