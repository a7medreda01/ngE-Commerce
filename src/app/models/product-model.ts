import { Review } from "./review-model";

export interface Product {
  id: number;
  name: string;
  description: string;
  details: string;
  price: number;
  stockQuantity: number;
  images: string[];
  reviews: Review[];
  oldPrice: number;
  sale: number | null;
  rating: number;
  quantity: number;
  brandName: string;
  typeName: string;
}