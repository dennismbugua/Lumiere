export interface Product {
  id: number;
  name: string;
  price: number;
  colors: string[];
  sizes: string[];
  description: string;
  highlights: string[];
  details: string;
  images: {
    src: string;
    alt: string;
  }[];
  reviews: {
    average: number;
    totalCount: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}