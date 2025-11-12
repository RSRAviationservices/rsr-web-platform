"use client";

import React from "react";
import { Button } from "@/app/components/ui/button";
import { Plus, Minus, Loader2 } from "lucide-react";
import { useCartStore } from "@/app/store/useCartStore";
import { Product } from "@/app/types/category";
import {
  useAddItem,
  useRemoveItem,
  useUpdateItemQuantity,
} from "@/app/api/cart/cartHooks";
interface ProductQuoteCTAProps {
  product: Product;
}

export default function ProductQuoteCTA({ product }: ProductQuoteCTAProps) {
  const { items, openCart } = useCartStore();
  const { mutate: addItem, isPending: isAdding } = useAddItem();
  const { mutate: updateQuantity, isPending: isUpdating } =
    useUpdateItemQuantity();
  const { mutate: removeItem, isPending: isRemoving } = useRemoveItem();

  const cartItem = items.find((item) => item.product.id === product.id);
  const isInCart = !!cartItem;
  const isMutating = isAdding || isUpdating || isRemoving;

  const handleAddToCart = () => {
    addItem(
      { productId: product.id, quantity: 1 },
      {
        onSuccess: () => {
          openCart();
        },
      }
    );
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(product.id);
    } else {
      updateQuantity({ productId: product.id, quantity: newQuantity });
    }
  };

  // --- RENDER LOGIC ---
  if (isInCart) {
    return (
      <div className="flex h-10 items-center rounded-lg border border-zinc-300 w-full sm:w-auto">
        <button
          onClick={() => handleQuantityChange(cartItem.quantity - 1)}
          disabled={isMutating}
          className="px-4 text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>

        <div className="w-14 h-full border-x border-zinc-300 bg-transparent text-center text-sm font-medium flex items-center justify-center">
          {isMutating ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            cartItem.quantity
          )}
        </div>

        <button
          onClick={() => handleQuantityChange(cartItem.quantity + 1)}
          disabled={isMutating}
          className="px-4 text-zinc-600 transition hover:bg-zinc-100"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
    );
  }

  return (
    <Button
      size="lg"
      className="gap-2 bg-zinc-900 hover:bg-zinc-700 w-full sm:w-auto"
      onClick={handleAddToCart}
      disabled={isMutating}
    >
      {isMutating ? (
        <Loader2 size={18} className="animate-spin" />
      ) : (
        <Plus size={18} />
      )}
      Add to Quote
    </Button>
  );
}
