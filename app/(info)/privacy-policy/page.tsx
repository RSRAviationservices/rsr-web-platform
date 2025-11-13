import React from "react";
import Link from "next/link";

// Helper component for consistent styling
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

export default function PrivacyPolicyPage() {
  return (
    <article>
      {/* Page Header */}
      <H1>Privacy Policy</H1>
      <P>Last updated: November 13, 2025</P>

      {/* Main Content */}
      <P>
        Welcome to RSR Aviation. We are committed to protecting your
        privacy. This Privacy Policy governs your use of our website,{" "}
        <Link href="/" className="font-medium text-zinc-900 underline">
          rsraviation.com
        </Link>
        , (the "Site"), and explains how RSR Aviation ("we," "us," or "our")
        collects, uses, shares, and protects your information.
      </P>

      <H2>1. Information We Collect</H2>
      <P>We collect information you provide directly to us and information we
        collect automatically when you use our Site.</P>
      <P>
        <strong>Information You Provide:</strong>
      </P>
      <UL>
        <li>
          <strong>Account Information:</strong> When you register for an account,
          we collect your name, email address, and password.
        </li>
        <li>
          <strong>Google OAuth Login:</strong> If you choose to log in using
          Google, we will receive your name, email address, and profile
          picture from Google to authenticate your account. We only use this
          information for login and account management.
        </li>
        <li>
          <strong>Quote Requests:</strong> When you request a quote, we collect
          your name, company name (if applicable), email, phone number, and
          details about the parts or services you are interested in.
        </li>
        <li>
          <strong>Contact Submissions:</strong> When you use our contact form,
          we collect your name, email, and any message you send to us.
        </li>
      </UL>
      <P>
        <strong>Information We Collect Automatically:</strong>
      </P>
      <UL>
        <li>
          <strong>Usage Data:</strong> We collect information about your
          interaction with our Site, such as the pages you visit, the links
          you click, and the duration of your visit.
        </li>
        <li>
          <strong>Cookies and Similar Technologies:</strong> We use cookies to
          manage your session, remember your preferences, and track site
          usage.
        </li>
      </UL>

      <H2>2. How We Use Your Information</H2>
      <P>We use the information we collect for the following purposes:</P>
      <UL>
        <li>To provide, operate, and maintain our Site.</li>
        <li>To process and respond to your quote requests and inquiries.</li>
        <li>To create and manage your user account.</li>
        <li>
          To authenticate you, including through Google OAuth, and prevent
          fraud.
        </li>
        <li>
          To communicate with you, including sending service-related updates
          and marketing communications (which you can opt out of).
        </li>
        <li>To analyze and improve the user experience on our Site.</li>
      </UL>

      <H2>3. How We Share Your Information</H2>
      <P>
        We do not sell, trade, or otherwise transfer your personally
        identifiable information to outside parties except in the following
        cases:
      </P>
      <UL>
        <li>
          <strong>Service Providers:</strong> We may share information with
          third-party vendors who perform services on our behalf, such as
          website hosting, data analysis, and email delivery.
        </li>
        <li>
          <strong>Legal Compliance:</strong> We may disclose information if
          required to do so by law or in response to a valid request from a
          public authority (e.g., a court or government agency).
        </li>
      </UL>
      
      <H2>4. Google OAuth Data Usage</H2>
      <P>
        Our Site's use and transfer of information received from Google APIs
        will adhere to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-900 underline"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. Information received via
        Google OAuth (your name, email, and profile picture) is used solely to
        create and access your user account on our platform and is not shared
        with any other service or third party.
      </P>

      <H2>5. Data Security</H2>
      <P>
        We implement a variety of security measures to maintain the safety of
        your personal information. Your personal information is contained
        behind secured networks and is only accessible by a limited number of
        persons who have special access rights to such systems.
      </P>

      <H2>6. Your Data Rights</H2>
      <P>
        You have the right to access, correct, or delete your personal
        information at any time. You can manage your account settings by
        logging into your profile or by contacting us directly.
      </P>

      <H2>7. Changes to This Privacy Policy</H2>
      <P>
        We may update this Privacy Policy from time to time. We will notify
        you of any changes by posting the new policy on this page. We
        encourage you to review this Privacy Policy periodically for any
        changes.
      </P>

      <H2>8. Contact Us</H2>
      <P>
        If you have any questions about this Privacy Policy, please contact
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