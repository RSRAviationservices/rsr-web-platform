"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContactForm } from "@/app/api/contact/contactHooks";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  companyName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const useContactForm = () => {
  const contactMutation = useSubmitContactForm();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      postalCode: "",
      country: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data, {
      onSuccess: () => {
        form.reset(); // Reset the form fields after successful submission
      },
    });
  };

  return {
    form,
    onSubmit,
    isLoading: contactMutation.isPending,
  };
};
