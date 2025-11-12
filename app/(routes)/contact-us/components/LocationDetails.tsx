import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function LocationDetails() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 my-[5%]">
      <div className="overflow-hidden rounded-md md:rounded-2xl ring-1 ring-zinc-200 lg:grid lg:grid-cols-2 lg:gap-0">
        {/* Map */}
        <div className="h-60 md:h-96 w-full lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7542.190150458803!2d73.119027!3d19.059557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9d7f525cad1%3A0x2049828996a93ba0!2sRSR%20AVIATION%20SERVICES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1758969175692!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-stone-50 p-5 md:p-12">
          <h2 className="text-xl md:text-2xl font-bold text-zinc-900">RSR Aviation HQ</h2>
          <p className="mt-1 text-zinc-600">Navi Mumbai, India</p>
          <div className="mt-8 space-y-4 text-sm text-zinc-700">
            <div className="flex gap-x-4">
              <MapPin className="h-5 w-5 flex-shrink-0 text-zinc-500" />
              <address className="not-italic">
                Unit B-68-71, Platinum Spring, Plot 6, Taloja, Panvel, Navi
                Mumbai, Maharashtra - 410208
              </address>
            </div>
            <div className="flex gap-x-4">
              <Phone className="h-5 w-5 flex-shrink-0 text-zinc-500" />
              <span>+91 74001 82337 / 022 4455 5321</span>
            </div>
            <div className="flex gap-x-4">
              <Mail className="h-5 w-5 flex-shrink-0 text-zinc-500" />
              <a
                href="mailto:SALES@RSRAVIATION.COM"
                className="hover:text-zinc-900"
              >
                SALES@RSRAVIATION.COM
              </a>
            </div>
            <div className="flex gap-x-4">
              <Clock className="h-5 w-5 flex-shrink-0 text-zinc-500" />
              <span>Monday – Saturday: 10AM to 6PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
