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
  const { setCart } = useCartStore();

  return useMutation({
    mutationFn: (payload: AddItemPayload) => cartService.addItem(payload),
    onSuccess: (response) => {
      toast.success("Item added to cart.");
      if (response.data) {
        setCart(response.data);
        queryClient.setQueryData(CART_QUERY_KEY, response.data);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

/**
 * Hook to update an item's quantity in the cart.
 */
export const useUpdateItemQuantity = () => {
  const queryClient = useQueryClient();
  const { setCart } = useCartStore();

  return useMutation({
    mutationFn: (payload: UpdateItemQuantityPayload) =>
      cartService.updateItemQuantity(payload),
    onSuccess: (response) => {
      if (response.data) {
        setCart(response.data);
        queryClient.setQueryData(CART_QUERY_KEY, response.data);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
    },
  });
};

/**
 * Hook to remove an item from the cart.
 */
export const useRemoveItem = () => {
  const queryClient = useQueryClient();
  const { setCart } = useCartStore();

  return useMutation({
    mutationFn: (productId: string) => cartService.removeItem(productId),
    onSuccess: (response) => {
      toast.info("Item removed from cart.");
      if (response.data) {
        setCart(response.data);
        queryClient.setQueryData(CART_QUERY_KEY, response.data);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
    },
  });
};

/**
 * Hook to update the cart's special instructions.
 */
export const useUpdateCartDetails = () => {
  const queryClient = useQueryClient();
  const { setCart } = useCartStore();

  return useMutation({
    mutationFn: (payload: UpdateCartDetailsPayload) =>
      cartService.updateCartDetails(payload),
    onSuccess: (response) => {
      if (response.data) {
        setCart(response.data);
        queryClient.setQueryData(CART_QUERY_KEY, response.data);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
    },
  });
};

/**
 * Hook to submit the current cart as a quote request.
 */
export const useSubmitQuote = () => {
  const queryClient = useQueryClient();
  const { setCart, closeCart } = useCartStore();

  return useMutation({
    mutationFn: () => cartService.submitQuote(),
    onSuccess: (response) => {
      const quoteNumber = response.data?.quoteNumber;
      toast.success("Quote request submitted successfully!", {
        description: quoteNumber ? `Your quote number is ${quoteNumber}` : "Our team will contact you soon.",
      });
      // The backend clears the cart upon successful quote creation.
      // We also update our local state to reflect that.
      setCart({ items: [], specialInstructions: "" });
      queryClient.setQueryData(CART_QUERY_KEY, {
        items: [],
        specialInstructions: "",
      });
      queryClient.invalidateQueries({ queryKey: QUOTES_QUERY_KEY });
      closeCart();
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

/**
 * Hook to clear all items from the cart.
 */
export const useClearCart = () => {
  const queryClient = useQueryClient();
  const { setCart } = useCartStore();

  return useMutation({
    mutationFn: () => cartService.clearCart(),
    onSuccess: (response) => {
      toast.info("Cart has been cleared.");
      setCart(response.data!);
      queryClient.setQueryData(CART_QUERY_KEY, response.data);
    },
    onError: (error: Error) => {
      toast.error(error.message);
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
    },
  });
};
