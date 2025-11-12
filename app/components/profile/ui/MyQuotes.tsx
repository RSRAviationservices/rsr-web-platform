"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

// Mock data for user's quote history
const quoteHistory = [
  { id: "RFQ-2025-0012", date: "2025-09-15", status: "Completed", items: 5 },
  { id: "RFQ-2025-0011", date: "2025-08-22", status: "Processed", items: 2 },
  { id: "RFQ-2025-0010", date: "2025-07-30", status: "Pending", items: 8 },
];

export default function MyQuotes() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-1">My Quotes</h2>
      <p className="text-zinc-500 mb-6">
        A history of all your requested quotations.
      </p>
      <div className="space-y-4">
        {quoteHistory.map((quote) => (
          <Card key={quote.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-zinc-900">{quote.id}</p>
                <p className="text-sm text-zinc-500">
                  {quote.items} items · Requested on {quote.date}
                </p>
              </div>
              <Badge
                variant={quote.status === "Completed" ? "default" : "secondary"}
              >
                {quote.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
