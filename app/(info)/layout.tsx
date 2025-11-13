import React from "react";

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-zinc-900">
      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        {children}
      </div>
    </div>
  );
}