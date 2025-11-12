import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import * as cartService from "./cartService";
import { useCartStore } from "@/app/store/useCartStore";
import {
  AddItemPayload,
  Cart,
  UpdateCartDetailsPayload,
  UpdateItemQuantityPayload,
} from "./types";
import { getErrorMessage } from "@/app/lib/utils";
import { useEffect } from "react";
const CART_QUERY_KEY = ["cart"];
const QUOTES_QUERY_KEY = ["myQuotes"];

/**
 * Hook to fetch the user's cart and synchronize it with the Zustand store.
 */
export const useCart = () => {
  const { setCart } = useCartStore();

  const queryResult = useQuery({
    queryKey: CART_QUERY_KEY,
    queryFn: async () => {
      const response = await cartService.getCart();
      return response.data;
    },
    enabled: false,
  });

  useEffect(() => {
    if (queryResult.isSuccess && queryResult.data) {
      setCart(queryResult.data);
    }
  }, [queryResult.data, queryResult.isSuccess, setCart]);

  return queryResult;
};
/**
 * Hook to add an item to the cart.
 */
export const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: AddItemPayload) => cartService.addItem(payload),
    onSuccess: (data) => {
      toast.success("Item added to cart.");
      queryClient.setQueryData(CART_QUERY_KEY, data.data);
    },
    onError: (error) => {
      toast.error(getErrorMessage(error, "Failed to add item."));
    },
  });
};

/**
 * Hook to update an item's quantity in the cart.
 */
export const useUpdateItemQuantity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: UpdateItemQuantityPayload) =>
      cartService.updateItemQuantity(payload),
    onSuccess: (data) => {
      queryClient.setQueryData(CART_QUERY_KEY, data.data);
    },
    onError: (error) => {
      toast.error(getErrorMessage(error, "Failed to update quantity."));
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY }); // Revert on error
    },
  });
};

/**
 * Hook to remove an item from the cart.
 */
export const useRemoveItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId: string) => cartService.removeItem(productId),
    onSuccess: (data) => {
      toast.info("Item removed from cart.");
      queryClient.setQueryData(CART_QUERY_KEY, data.data);
    },
    onError: (error) => {
      toast.error(getErrorMessage(error, "Failed to remove item."));
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
    },
  });
};

/**
 * Hook to update the cart's special instructions.
 */
export const useUpdateCartDetails = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: UpdateCartDetailsPayload) =>
      cartService.updateCartDetails(payload),
    onSuccess: (data) => {
      queryClient.setQueryData(CART_QUERY_KEY, data.data);
    },
    onError: (error) => {
      toast.error(getErrorMessage(error, "Failed to save notes."));
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
    },
  });
};

/**
 * Hook to submit the cart for a quote.
 */
export const useSubmitQuote = () => {
  const queryClient = useQueryClient();
  const { closeCart, setCart } = useCartStore();

  return useMutation({
    mutationFn: () => cartService.submitQuote(),
    onSuccess: (data) => {
      toast.success("Quote request submitted!", {
        description: `Your quote number is ${data.data?.quoteNumber}. We will get back to you shortly.`,
      });
      const emptyCart: Cart = {
        id: "",
        items: [],
        specialInstructions: "",
        user: "",
        createdAt: "",
        updatedAt: "",
      };
      queryClient.setQueryData(CART_QUERY_KEY, emptyCart);
      setCart(emptyCart);
      queryClient.invalidateQueries({ queryKey: QUOTES_QUERY_KEY });
      closeCart();
    },
    onError: (error) => {
      toast.error(getErrorMessage(error, "Failed to submit quote request."));
    },
  });
};
/**
 * Hook to fetch the user's quote requests.
 */
export const useMyQuotes = () => {
  return useQuery({
    queryKey: QUOTES_QUERY_KEY,
    queryFn: async () => {
      const response = await cartService.getMyQuotes();
      return response.data;
    },
    enabled: false,
  });
};
