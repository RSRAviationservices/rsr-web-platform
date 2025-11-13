import React from "react";
import Link from "next/link";

// Helper components for consistent styling
const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl">
    {children}
  </h1>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-12 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-4 text-base leading-relaxed text-zinc-700 md:text-lg">
    {children}
  </p>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-zinc-700 md:text-lg">
    {children}
  </ul>
);

export default function TermsOfServicePage() {
  return (
    <article>
      {/* Page Header */}
      <H1>Terms of Service</H1>
      <P>Last updated: November 13, 2025</P>

      {/* Main Content */}
      <H2>1. Acceptance of Terms</H2>
      <P>
        Welcome to RSR Aviation Services Private Limited ("RSR Aviation," "we,"
        "us," or "our"). These Terms of Service ("Terms") govern your access to
        and use of our website,{" "}
        <Link href="/" className="font-medium text-zinc-900 underline">
          rsraviation.com
        </Link>
        , (the "Site"), and any products, services, or content provided
        therein (collectively, the "Services").
      </P>
      <P>
        By accessing or using our Services, you agree to be bound by these
        Terms and our{" "}
        <Link
          href="/privacy-policy"
          className="font-medium text-zinc-900 underline"
        >
          Privacy Policy
        </Link>
        . If you do not agree to these Terms, you may not access or use our
        Services.
      </P>

      <H2>2. User Accounts</H2>
      <P>
        To access certain features of our Site, such as requesting quotes, you
        may need to create an account. You agree to:
      </P>
      <UL>
        <li>
          Provide accurate, current, and complete information during the
          registration process.
        </li>
        <li>
          Maintain the security of your password and accept all risks of
          unauthorized access to your account.
        </li>
        <li>
          Promptly notify us if you discover or suspect any security breaches
          related to the Site.
        </li>
      </UL>
      <P>
        You may also register using your Google account (Google OAuth). By
        connecting via Google, you authorize us to access and use your basic
        profile information (name, email) in accordance with our Privacy
        Policy. Your use of Google OAuth is also subject to Google's Terms of
        Service.
      </P>

      <H2>3. Use of Services</H2>
      <P>
        <strong>Product Information and Quotes:</strong> The Site provides
        information on aviation parts and services. When you request a quote,
        you agree that:
      </P>
      <UL>
        <li>
          A quote request is an inquiry and not a binding order or contract
          to purchase.
        </li>
        <li>
          All quotes provided by RSR Aviation are subject to final
          confirmation, product availability, and may be changed or withdrawn
          at any time.
        </li>
        <li>
          Any purchase of products or services is governed by a separate
          purchase agreement, invoice, or other contract.
        </li>
      </UL>
      <P>
        <strong>Prohibited Conduct:</strong> You agree not to use the Services
        for any unlawful purpose or in any way that could harm RSR Aviation,
        its partners, or any third party. Prohibited activities include, but
        are not limited to:
      </P>
      <UL>
        <li>
          Scraping, data mining, or otherwise extracting data from the Site
          without our express written permission.
        </li>
        <li>
          Engaging in any fraudulent activity, including submitting false or
          misleading information.
        </li>
        <li>
          Attempting to interfere with the proper working of the Site,
          including by uploading viruses or malicious code.
        </li>
      </UL>

      <H2>4. Intellectual Property</H2>
      <P>
        All content on the Site, including text, graphics, logos, images,
        articles, (e.g., in our "Insights" section), and software, is the
        property of RSR Aviation or its licensors and is protected by
        international copyright, trademark, and other intellectual property
        laws. You may not use, reproduce, or distribute any content from the
        Site without our prior written permission.
      </P>

      <H2>5. Disclaimer of Warranties</H2>
      <P>
        The Site and Services are provided "AS IS" and "AS AVAILABLE" without
        warranties of any kind, either express or implied. RSR Aviation does
        not warrant that the Services will be uninterrupted, error-free, or
        secure. While we strive for accuracy, we do not guarantee that product
        information, pricing, or availability displayed on the Site is always
        complete or current.
      </P>

      <H2>6. Limitation of Liability</H2>
      <P>
        To the fullest extent permitted by law, RSR Aviation shall not be
        liable for any indirect, incidental, special, consequential, or
        punitive damages, or any loss of profits or revenues, whether
        incurred directly or indirectly, or any loss of data, use, goodwill,
        or other intangible losses, resulting from (a) your access to or use
        of or inability to access or use the Services; (b) any conduct or
        content of any third party on the Services.
      </P>

      <H2>7. Governing Law</H2>
      <P>
        These Terms shall be governed by and construed in accordance with the
        laws of India, without regard to its conflict of law principles. You
        agree to submit to the personal and exclusive jurisdiction of the
        courts located in Mumbai, Maharashtra, India.
      </P>

      <H2>8. Changes to Terms</H2>
      <P>
        We reserve the right to modify these Terms at any time. We will post
        the revised Terms on this page and update the "Last updated" date.
        Your continued use of the Services after such changes constitutes
        your acceptance of the new Terms.
      </P>

      <H2>9. Contact Us</H2>
      <P>
        If you have any questions about these Terms of Service, please contact
        us at:
      </P>
      <P>
        <a
          href="mailto:info@rsraviation.com"
          className="font-medium text-zinc-900 underline"
        >
          info@rsraviation.com
        </a>
      </P>
    </article>
  );
}