"use client";

import React from "react";
import Image from "next/image";
import { X, Plus, Minus } from "lucide-react";
import { CartItem } from "@/app/api/cart/types";
import { useUpdateItemQuantity, useRemoveItem } from "@/app/api/cart/cartHooks";
import { useDebouncedCallback } from "use-debounce";

interface CartItemCardProps {
  item: CartItem;
}

export default function CartItemCard({ item }: CartItemCardProps) {
  const { mutate: updateQuantity, isPending: isUpdating } =
    useUpdateItemQuantity();
  const { mutate: removeItem } = useRemoveItem();

  const debouncedUpdate = useDebouncedCallback(
    (productId: string, newQuantity: number) => {
      updateQuantity({ productId, quantity: newQuantity });
    },
    500
  );

  const handleQuantityChange = (newQuantity: number) => {
    if (!isNaN(newQuantity) && newQuantity > 0) {
      debouncedUpdate(item.product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeItem(item.product.id);
  };

  return (
    <div className="flex items-start gap-4">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-stone-100 ring-1 ring-zinc-200/50">
        <Image
          src={item.product.images?.[0] || "/images/default-product.png"}
          alt={item.product.name}
          width={80}
          height={40}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold text-zinc-900">{item.product.name}</h3>
            <p className="text-sm text-zinc-500">{item.product.partNumber}</p>
          </div>
          <button
            onClick={handleRemove}
            className="p-1 text-zinc-400 hover:text-zinc-800"
          >
            <X size={16} />
            <span className="sr-only">Remove item</span>
          </button>
        </div>
        <div className="mt-4 flex h-9 items-center rounded-md border border-zinc-300 w-fit">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1 || isUpdating}
            className="px-2 text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50"
          >
            <Minus size={14} />
          </button>
          <span className="w-12 border-x border-zinc-300 bg-transparent text-center text-sm font-medium">
            {item.quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            disabled={isUpdating}
            className="px-2 text-zinc-600 transition hover:bg-zinc-100"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
