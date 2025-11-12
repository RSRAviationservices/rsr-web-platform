import { create } from "zustand";
import { Cart, CartItem } from "../api/cart/types";

interface CartState {
  items: CartItem[];
  specialInstructions: string;
  isOpen: boolean;
  setCart: (cart: Cart) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  // Initial State
  items: [],
  specialInstructions: "",
  isOpen: false,
  setCart: (cart) =>
    set({
      items: cart.items,
      specialInstructions: cart.specialInstructions,
    }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
}));
