// app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "./components/ui/sonner";
import AnalyticsTracker from "./components/common/AnalyticsTracker";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const SITE_NAME = "RSR Aviation Services Pvt Ltd";
const SITE_URL = "https://www.rsraviation.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Official Distributor`,
    template: `%s | ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  description:
    "Powering global aerospace excellence with world-class consumables. Trusted by Boeing, Airbus, and defense contractors worldwide.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Official Distributor`,
    description:
      "Powering global aerospace excellence with world-class consumables. Trusted by Boeing, Airbus, and defense contractors worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Official Distributor`,
    description:
      "Powering global aerospace excellence with world-class consumables. Trusted by Boeing, Airbus, and defense contractors worldwide.",
  },
  verification: {
    google: "4kvmsaTVt8ylx7VRWQ0qxAY19TXNwMyv0QV8j4l0X-0",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "RSR Aviation",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: "RSR Aviation",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>
          <AnalyticsTracker />
          {children}
        </Providers>
        <Toaster richColors/>
      </body>
      <GoogleAnalytics gaId="G-QKX9X18902" />
    </html>
  );
}
