import React from "react";
import { Button } from "@/app/components/ui/button";
import { Mail } from "lucide-react";

export function NoOpenings() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 md:p-12">
      <div className="mx-auto max-w-lg text-center">
        <h3 className="text-xl font-semibold text-zinc-900">
          No open positions right now
        </h3>
        <p className="mt-2 text-zinc-600">
          We're not actively hiring for any specific roles at the moment, but
          we're always interested in hearing from talented people.
        </p>
        <Button asChild className="mt-6 bg-zinc-950 hover:bg-zinc-900" size="lg">
          <a
            href="mailto:hr@rsraviation.com"
            className="inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
        </Button>
      </div>
    </div>
  );
}