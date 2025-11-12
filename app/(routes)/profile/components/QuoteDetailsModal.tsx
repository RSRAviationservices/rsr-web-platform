"use client";

import React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/app/components/ui/dialog";
import { QuoteRequest } from "@/app/api/quote/types";
import { StatusBadge } from "./StatusBadge";

interface QuoteDetailsModalProps {
  quote: QuoteRequest | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function QuoteDetailsModal({ quote, isOpen, onOpenChange }: QuoteDetailsModalProps) {
  if (!quote) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{quote.quoteNumber}</DialogTitle>
          <DialogDescription>
            Requested on {new Date(quote.createdAt).toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          {/* --- 1. Enhanced Quote Summary Section --- */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-lg border bg-stone-50 p-4 text-sm">
            <div>
              <p className="font-medium text-zinc-500">Status</p>
              <div className="mt-1">
                <StatusBadge status={quote.status} />
              </div>
            </div>
            <div>
              <p className="font-medium text-zinc-500">Name</p>
              <p className="font-semibold text-zinc-900">{quote.customerInfo.name}</p>
            </div>
            <div>
              <p className="font-medium text-zinc-500">Email</p>
              <p className="text-zinc-900">{quote.customerInfo.email}</p>
            </div>
          </div>
          
          {/* --- User Notes Section --- */}
          {quote.customerNotes && (
            <div>
              <p className="font-medium text-zinc-500 text-sm">Your Notes</p>
              <p className="text-zinc-700 mt-1 p-3 bg-stone-50 rounded-md border text-sm">
                {quote.customerNotes}
              </p>
            </div>
          )}

          {/* --- 2. Added Section for Admin Notes --- */}
          {quote.adminNotes && (
            <div>
              <p className="font-medium text-zinc-500 text-sm">Notes from Our Team</p>
              <p className="text-blue-900 mt-1 p-3 bg-blue-50 rounded-md border border-blue-200 text-sm">
                {quote.adminNotes}
              </p>
            </div>
          )}

          {/* --- 3. Items List (no major changes) --- */}
          <div>
            <h4 className="font-semibold text-zinc-800 mb-2">
              Items ({quote.items.length})
            </h4>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2 border-t pt-4">
              {quote.items.map((item) => (
                <div key={item.product.id} className="flex items-start gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-stone-100">
                    <Image
                      src={item.product.images?.[0] || "/images/logo.png"}
                      alt={item.product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-zinc-900">{item.product.name}</p>
                    <p className="text-sm text-zinc-500">{item.product.partNumber}</p>
                    <p className="text-sm font-medium text-zinc-700 mt-1">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}