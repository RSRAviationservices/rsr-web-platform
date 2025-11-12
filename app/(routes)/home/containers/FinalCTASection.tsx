import React from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="w-full bg-zinc-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200/50 lg:grid lg:grid-cols-5 lg:gap-x-12">
          {/* --- Image Column (40%) --- */}
          {/* This now appears first in the code for mobile stacking, but `lg:order-last` moves it to the right on large screens */}
          <div className="relative h-64 w-full lg:col-span-2 lg:h-full lg:order-last">
            <Image
              src="/images/home/cta/cta-banners2.jpg"
              alt="Aerospace facility with specialized equipment"
              className="h-full w-full object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* --- Content Column (60%) --- */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-3">
            <div>
              <p className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Move from requirement to quote—fast.
              </p>
              <p className="mt-4 max-w-2xl text-base md:text-lg text-zinc-600">
                Add items to the quote cart, attach specs, and get a clear SLA
                with status tracking and support when needed.
              </p>
              <div className="mt-8 flex items-center gap-x-4">
                <Link
                  href="/contact-us"
                  className="hidden md:inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                >
                  Request Instant Quote
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="#" // Replace with your contact/support link
                  className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  <MessageSquare size={16} />
                  Talk to a specialist
                </a>
              </div>
            </div>

            {/* The trust nudge is now simpler and better spaced */}
            <p className="mt-10 md:block hidden pt-6 border-t border-zinc-200 text-xs text-zinc-500">
              <strong>Reviewed by procurement and QA</strong> — documentation
              and traceability included with every order.
            </p>
            <Link
              href="/team"
              className=" w-full flex items-center justify-center md:hidden"
            >
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 text-zinc-50 font-medium rounded-full hover:bg-zinc-200 transition">
                Meet Our Team
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
