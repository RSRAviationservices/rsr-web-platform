import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin, Phone, Clock } from "lucide-react";

const BrochureSection = () => (
  <div>
    <h3 className="text-sm font-semibold leading-6 text-white">Our Brochure</h3>
    <p className="mt-4 text-sm text-zinc-300">
      Get a comprehensive overview of our products and services.
    </p>
    <a
      href="https://f003.backblazeb2.com/file/rsr-aviation-test/RSR+New+Brochure+Aug+25.pdf"
      download="RSR-Aviation-Brochure.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/20"
    >
      <Download size={16} />
      Download Brochure
    </a>
  </div>
);

export default function Footer() {
  const certifications = ["ISO 9001:2015", "AS9100D", "DGCA CAR 145"];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about-us" },
    { name: "Team", href: "/team" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="bg-zinc-950" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {/* --- Brand, Brochure (Mobile), & Quick Links --- */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4 md:space-y-8">
              <div className=" flex flex-row space-x-5">
                <Image
                  src="/images/logo.png"
                  alt="RSR Aviation Logo"
                  width={140}
                  height={32}
                  className="h-8 w-auto"
                />
                <p className="font-bold text-2xl text-zinc-50">
                  RSR Aviation
                </p>
              </div>
              <p className="text-sm leading-6 text-zinc-300">
                Trusted supplier of aircraft consumables for manufacturing, MRO,
                and defense programs.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-zinc-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <Image
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="text-zinc-400 hover:text-white">
                  <span className="sr-only">X</span>
                  <Image src="/icons/x.svg" alt="X" width={24} height={24} />
                </a>
                <a href="#" className="text-zinc-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
              {/* Brochure section visible only on mobile */}
              <div className="sm:hidden">
                <BrochureSection />
              </div>
            </div>

            <div className="mt-8 sm:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-white">
                Quick Links
              </h3>
              <ul role="list" className="mt-6 grid grid-cols-2 gap-4">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-zinc-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- Reach Us --- */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold leading-6 text-white">
              Reach Us
            </h3>
            <div className="space-y-4 text-sm text-zinc-300">
              <div className="flex gap-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-zinc-400" />
                <address className="not-italic">
                  Unit B-68-71, Platinum Spring, Plot 6, Taloja, Panvel, Navi
                  Mumbai, Maharashtra - 410208
                </address>
              </div>
              <div className="flex gap-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-zinc-400" />
                <span>+91 74001 82337 / 022 4455 5321</span>
              </div>
              <div className="flex gap-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-zinc-400" />
                <a
                  href="mailto:SALES@RSRAVIATION.COM"
                  className="hover:text-white"
                >
                  SALES@RSRAVIATION.COM
                </a>
              </div>
              <div className="flex gap-x-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-zinc-400" />
                <span>Monday – Saturday: 10AM to 6PM</span>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-zinc-300"
            >
              See on Maps <ArrowRight size={16} />
            </a>
          </div>

          {/* Brochure section hidden on mobile, visible on desktop */}
          <div className="hidden sm:block">
            <BrochureSection />
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col-reverse items-start gap-8 lg:flex-row lg:justify-between">
            <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-4">
              <p className="text-sm font-semibold text-white">
                Certifications:
              </p>
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300"
                >
                  {cert}
                </span>
              ))}
            </div>
            <p className="text-xs leading-5 text-zinc-400">
              &copy; {new Date().getFullYear()} RSR Aviation Services Private
              Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
