import { Product } from "@/app/types/category";
// =================================
// CART TYPES
// =================================
export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  id: string;
  user: string;
  items: CartItem[];
  specialInstructions: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddItemPayload {
  productId: string;
  quantity: number;
}

export interface UpdateItemQuantityPayload {
  productId: string;
  quantity: number;
}

export interface UpdateCartDetailsPayload {
  specialInstructions: string;
}