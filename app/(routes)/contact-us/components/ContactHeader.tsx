import React from "react";

export default function ContactHeader() {
  return (
    <div className="bg-zinc-50 py-10 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm md:text-base font-semibold text-zinc-600">Contact Us</p>
        <h1 className="mt-2 text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Get in touch with us
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-zinc-600">
          Whether you have a question, need support, or just want to learn more
          about RSR Aviation, our team is here to help.
        </p>
      </div>
    </div>
  );
}
