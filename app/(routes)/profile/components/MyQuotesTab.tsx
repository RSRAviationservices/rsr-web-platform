"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { QuoteRequest, QuoteStatus } from "@/app/api/quote/types";
import { useMyQuotes } from "@/app/api/quote/quoteHooks";
import QuoteDetailsModal from "./QuoteDetailsModal";
import { FileText } from "lucide-react";
import QuoteCardSkeleton from "./loaders/QuoteCardSkeleton";

// Color-Coded Badge Component
const StatusBadge = ({ status }: { status: QuoteStatus }) => {
  const statusStyles: Record<QuoteStatus, string> = {
    [QuoteStatus.PENDING]: "bg-amber-100 text-amber-800",
    [QuoteStatus.APPROVED]: "bg-blue-100 text-blue-800",
    [QuoteStatus.FULFILLED]: "bg-green-100 text-green-800",
    [QuoteStatus.REJECTED]: "bg-red-100 text-red-800",
  };
  return (
    <Badge
      className={`capitalize ${
        statusStyles[status] || "bg-zinc-100 text-zinc-800"
      }`}
    >
      {status}
    </Badge>
  );
};

export default function MyQuotesTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);

  // 1. Fetch live data using the useMyQuotes hook
  const { data: quotesData, isLoading, isError, refetch } = useMyQuotes();
  const quotes = quotesData || [];

  // 2. Trigger the fetch on component mount
  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-1">My Quote Requests</h2>
      <p className="text-zinc-500 mb-6">
        A history of all your requested quotations.
      </p>

      {/* 3. Render the new skeleton loading state */}
      {isLoading && (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <QuoteCardSkeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && isError && (
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
          <h3 className="text-xl font-semibold text-red-800">
            Failed to load quotes
          </h3>
          <p className="text-zinc-500 mt-2">
            There was an error. Please try again later.
          </p>
        </div>
      )}

      {/* 4. Render the improved empty state with a CTA button */}
      {!isLoading && !isError && quotes.length === 0 && (
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
          <FileText className="mx-auto h-12 w-12 text-zinc-400" />
          <h3 className="mt-4 text-xl font-semibold text-zinc-800">
            No Quote Requests Found
          </h3>
          <p className="text-zinc-500 mt-2">
            You haven't requested any quotes yet.
          </p>
          <Button asChild className="mt-4">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      )}

      {!isLoading && !isError && quotes.length > 0 && (
        <div className="space-y-4">
          {quotes.map((quote) => (
            <Card key={quote.id}>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-zinc-900">
                    {quote.quoteNumber}
                  </p>
                  <p className="text-sm text-zinc-500">
                    {quote.items.length} items · Requested on{" "}
                    {new Date(quote.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <StatusBadge status={quote.status} />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewDetails(quote)}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <QuoteDetailsModal
        quote={selectedQuote}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}
