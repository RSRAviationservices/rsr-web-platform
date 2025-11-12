import React from "react";
import ContactHeader from "./components/ContactHeader";
import LocationDetails from "./components/LocationDetails";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHeader />
      <ContactForm />
      <LocationDetails />
    </main>
  );
}
