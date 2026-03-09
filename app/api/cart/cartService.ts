import axiosClient, { ApiResponse } from "../axiosClient";
import { QuoteRequest } from "../quote/types";
import {
  AddItemPayload,
  Cart,
  UpdateCartDetailsPayload,
  UpdateItemQuantityPayload,
} from "./types";

// =================================
// CART API CALLS
// =================================

/**
 * Fetches the current user's cart.
 * GET /cart
 */
export const getCart = async (): Promise<ApiResponse<Cart>> => {
  return axiosClient.get<ApiResponse<Cart>>("/cart");
};

/**
 * Adds an item to the cart.
 * POST /cart/items
 */
export const addItem = async (
  payload: AddItemPayload
): Promise<ApiResponse<Cart>> => {
  return axiosClient.post<ApiResponse<Cart>>("/cart/items", payload);
};

/**
 * Updates an item's quantity in the cart.
 * PATCH /cart/items/:productId
 */
export const updateItemQuantity = async ({
  productId,
  quantity,
}: UpdateItemQuantityPayload): Promise<ApiResponse<Cart>> => {
  return axiosClient.patch<ApiResponse<Cart>>(`/cart/items/${productId}`, {
    quantity,
  });
};

/**
 * Removes an item from the cart.
 * DELETE /cart/items/:productId
 */
export const removeItem = async (
  productId: string
): Promise<ApiResponse<Cart>> => {
  return axiosClient.delete<ApiResponse<Cart>>(`/cart/items/${productId}`);
};

/**
 * Updates the cart's special instructions.
 * PATCH /cart
 */
export const updateCartDetails = async (
  payload: UpdateCartDetailsPayload
): Promise<ApiResponse<Cart>> => {
  return axiosClient.patch<ApiResponse<Cart>>("/cart", payload);
};

/**
 * Clears all items from the cart.
 * DELETE /cart
 */
export const clearCart = async (): Promise<ApiResponse<Cart>> => {
  return axiosClient.delete<ApiResponse<Cart>>("/cart");
};

// =================================
// QUOTE REQUEST API CALLS
// =================================

/**
 * Submits the current cart as a new quote request.
 * POST /quotes
 */
export const submitQuote = async (): Promise<ApiResponse<QuoteRequest>> => {
  return axiosClient.post<ApiResponse<QuoteRequest>>("/quotes");
};

/**
 * Fetches all quote requests for the current user.
 * GET /quotes
 */
export const getMyQuotes = async (): Promise<ApiResponse<QuoteRequest[]>> => {
  return axiosClient.get<ApiResponse<QuoteRequest[]>>("/quotes");
};
