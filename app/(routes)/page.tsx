// app/(routes)/home/page.tsx
import CustomerReviews from "./home/containers/CustomerReviews";
import FinalCTASection from "./home/containers/FinalCTASection";
import HeroSection from "./home/containers/HeroSection";
import MetricsAndPartnerSection from "./home/containers/MetricsAndPartnerSection";
import OrderingProcess from "./home/containers/OrderingProcess";
import ProductsShowcase from "./home/containers/ProductsShowcase";
import TeamBehindSection from "./home/containers/TeamBehindSection";
import WhatWeOfferSection from "./home/containers/WhatWeOfferSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MetricsAndPartnerSection />
      <WhatWeOfferSection />
      <ProductsShowcase />
      <OrderingProcess />
      <CustomerReviews />
      <TeamBehindSection />
      <FinalCTASection />
    </main>
  );
}
