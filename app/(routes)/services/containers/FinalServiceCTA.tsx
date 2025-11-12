import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function FinalServiceCTA() {
  const trustPoints = [
    "ISO 9001 & AS9100 certified processes",
    "Full lot/batch traceability with every order",
    "AOG priority response available",
  ];

  return (
    <section className="bg-zinc-800 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200/50 lg:grid lg:grid-cols-5">
          {/* --- Image Column (appears first in code for mobile) --- */}
          <div className="relative h-64 w-full lg:col-span-2 lg:h-full lg:order-last">
            <Image
              src="/images/services/cta-service.jpg"
              alt="Aerospace parts and documentation"
              className="h-full w-full object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* --- Content Column (appears second in code for mobile) --- */}
          <div className="flex flex-col p-4 md:p-8 sm:p-12 lg:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Ready to move from requirement to quote?
            </h2>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-zinc-600">
              Submit an RFQ with specifications and delivery needs—receive clear
              SLAs and audit-ready documentation with every shipment.
            </p>
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 sm:w-auto"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-10 border-t border-zinc-200 pt-6">
              <ul className="space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-x-3">
                    <ShieldCheck
                      className="h-5 w-5 flex-none text-zinc-600"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-zinc-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
