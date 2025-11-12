import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getErrorMessage = (error: any, defaultMessage: string): string => {
  const errorResponse = error?.response?.data;
  if (typeof errorResponse?.error?.message === "string") {
    return errorResponse.error.message;
  }
  return defaultMessage;
};
