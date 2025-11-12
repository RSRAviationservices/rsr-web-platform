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
  const response = await axiosClient.get<ApiResponse<Cart>>("/cart");
  return response.data;
};

/**
 * Adds an item to the cart.
 * POST /cart/items
 */
export const addItem = async (
  payload: AddItemPayload
): Promise<ApiResponse<Cart>> => {
  const response = await axiosClient.post<ApiResponse<Cart>>(
    "/cart/items",
    payload
  );
  return response.data;
};

/**
 * Updates an item's quantity in the cart.
 * PATCH /cart/items/:productId
 */
export const updateItemQuantity = async ({
  productId,
  quantity,
}: UpdateItemQuantityPayload): Promise<ApiResponse<Cart>> => {
  const response = await axiosClient.patch<ApiResponse<Cart>>(
    `/cart/items/${productId}`,
    { quantity }
  );
  return response.data;
};

/**
 * Removes an item from the cart.
 * DELETE /cart/items/:productId
 */
export const removeItem = async (
  productId: string
): Promise<ApiResponse<Cart>> => {
  const response = await axiosClient.delete<ApiResponse<Cart>>(
    `/cart/items/${productId}`
  );
  return response.data;
};

/**
 * Updates the cart's special instructions.
 * PATCH /cart
 */
export const updateCartDetails = async (
  payload: UpdateCartDetailsPayload
): Promise<ApiResponse<Cart>> => {
  const response = await axiosClient.patch<ApiResponse<Cart>>("/cart", payload);
  return response.data;
};

/**
 * Clears all items from the cart.
 * DELETE /cart
 */
export const clearCart = async (): Promise<ApiResponse<Cart>> => {
  const response = await axiosClient.delete<ApiResponse<Cart>>("/cart");
  return response.data;
};

// =================================
// QUOTE REQUEST API CALLS
// =================================

/**
 * Submits the current cart as a new quote request.
 * POST /quotes
 */
export const submitQuote = async (): Promise<ApiResponse<QuoteRequest>> => {
  const response = await axiosClient.post<ApiResponse<QuoteRequest>>("/quotes");
  return response.data;
};

/**
 * Fetches all quote requests for the current user.
 * GET /quotes
 */
export const getMyQuotes = async (): Promise<ApiResponse<QuoteRequest[]>> => {
  const response = await axiosClient.get<ApiResponse<QuoteRequest[]>>(
    "/quotes"
  );
  return response.data;
};
