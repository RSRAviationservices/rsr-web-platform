// =================================
// QUOTE REQUEST TYPES

import { Product } from "../inventory/types";

// =================================
export enum QuoteStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  FULFILLED = "fulfilled",
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}

export interface QuoteRequest {
  id: string;
  quoteNumber: string;
  status: QuoteStatus;
  user: string;
  customerInfo: {
    name: string;
    email: string;
    phoneNumber?: string;
  };
  items: QuoteItem[];
  customerNotes?: string;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}
