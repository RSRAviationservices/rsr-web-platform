import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import * as quoteService from "./quoteService";
import { useCartStore } from "@/app/store/useCartStore";
import { Cart } from "../cart/types";
import { getErrorMessage } from "@/app/lib/utils";

const CART_QUERY_KEY = ["cart"];
const QUOTES_QUERY_KEY = ["myQuotes"];

export const useSubmitQuote = () => {
  const queryClient = useQueryClient();
  const { closeCart, setCart } = useCartStore();

  return useMutation({
    mutationFn: () => quoteService.submitQuote(),
    onSuccess: (data) => {
      toast.success("Quote request submitted!", {
        description: `Your quote number is ${data.data?.quoteNumber}. We will get back to you shortly.`,
      });
      const emptyCart: Cart = { id: "", items: [], specialInstructions: "", user: "", createdAt: "", updatedAt: "" };
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

export const useMyQuotes = () => {
  return useQuery({
    queryKey: QUOTES_QUERY_KEY,
    queryFn: async () => {
      const response = await quoteService.getMyQuotes();
      return response.data;
    },
    enabled: false, // We will trigger this manually
  });
};