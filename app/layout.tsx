// app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "./components/ui/sonner";
import AnalyticsTracker from "./components/common/AnalyticsTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "RSR Aviation - Official Distributor",
  description:
    "Powering global aerospace excellence with world-class consumables. Trusted by Boeing, Airbus, and defense contractors worldwide.",
  verification: {
    google: "4kvmsaTVt8ylx7VRWQ0qxAY19TXNwMyv0QV8j4l0X-0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-white`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LT4ZFTXPJC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LT4ZFTXPJC');
          `}
        </Script>
        <Providers>
          <AnalyticsTracker />
          {children}
        </Providers>
        <Toaster richColors/>
      </body>
    </html>
  );
}
