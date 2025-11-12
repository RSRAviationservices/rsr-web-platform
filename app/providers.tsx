"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { queryClient } from "./api/queryClient";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>{children}</Suspense>
    </QueryClientProvider>
  );
}
