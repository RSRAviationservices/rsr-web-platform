"use client";

import React, { useState, useEffect } from "react";
import { useCartStore } from "@/app/store/useCartStore";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/app/components/ui/sheet";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { FileSpreadsheet, Loader2 } from "lucide-react";
import CartItemCard from "./CartItemCard";
import { useSubmitQuote, useUpdateCartDetails } from "@/app/api/cart/cartHooks";
import { useDebouncedCallback } from "use-debounce";

export default function CartSheet() {
  const isOpen = useCartStore((state) => state.isOpen);
  const onOpenChange = useCartStore((state) => state.toggleCart);

  const { items, specialInstructions } = useCartStore();

  const { mutate: submitQuote, isPending: isSubmitting } = useSubmitQuote();
  const { mutate: updateDetails } = useUpdateCartDetails();

  const [notes, setNotes] = useState(specialInstructions);

  useEffect(() => {
    setNotes(specialInstructions);
  }, [specialInstructions]);

  const debouncedUpdate = useDebouncedCallback((value: string) => {
    updateDetails({ specialInstructions: value });
  }, 1000);

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
    debouncedUpdate(e.target.value);
  };

  const handleSubmit = () => {
    submitQuote();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="z-100 flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="px-6 pt-6">
          <SheetTitle>Request for Quotation ({items.length})</SheetTitle>
        </SheetHeader>

        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-1 px-6 py-4">
              <div className="divide-y divide-zinc-200">
                {items.map((item, index) => (
                  <div
                    key={item.product.id}
                    className={index > 0 ? "pt-6" : ""}
                  >
                    <CartItemCard item={item} />
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <label
                  htmlFor="notes"
                  className="text-sm font-medium text-zinc-900"
                >
                  Special Instructions
                </label>
                <Textarea
                  id="notes"
                  placeholder="e.g., specific compliance needs, delivery window..."
                  className="mt-2"
                  value={notes}
                  onChange={handleNotesChange}
                />
              </div>
            </ScrollArea>

            <SheetFooter className="p-6 bg-stone-50 border-t">
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                size="lg"
                className="w-full"
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit for Quotation
              </Button>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center p-6">
            <div className="rounded-full bg-zinc-100 p-4">
              <FileSpreadsheet className="h-10 w-10 text-zinc-500" />
            </div>
            <h3 className="text-xl font-semibold">Your Quote Cart is Empty</h3>
            <p className="text-zinc-500">
              Add products from our catalog to get started.
            </p>
            <SheetClose asChild>
              <Button variant="outline">Continue Browsing</Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
