// app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "./components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "RSR Aviation - Official Distributor",
  description:
    "Powering global aerospace excellence with world-class consumables. Trusted by Boeing, Airbus, and defense contractors worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-white`}>
        <Providers>{children}</Providers>
        <Toaster richColors/>
      </body>
    </html>
  );
}
