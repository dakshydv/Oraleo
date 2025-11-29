export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
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