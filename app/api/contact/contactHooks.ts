import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import * as contactService from "./contactService";
import { ContactFormPayload } from "./types";

export const useSubmitContactForm = () => {
  return useMutation({
    mutationFn: (data: ContactFormPayload) =>
      contactService.submitContactForm(data),
    onSuccess: (response) => {
      toast.success("Message Sent!", {
        description: response.data?.message || "We'll get back to you shortly.",
      });
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.error?.message ||
        "Failed to send message. Please try again.";
      toast.error(message);
    },
  });
};
