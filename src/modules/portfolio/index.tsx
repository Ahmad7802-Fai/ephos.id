"use client";

import PortfolioHero from "./components/PortfolioHero";
import CaseStudies from "./components/CaseStudies";
import WhatWeDeliver from "./components/WhatWeDeliver";
import Impact from "./components/Impact";
import WhyEphos from "./components/WhyEphos";
import PortfolioCTA from "./components/PortfolioCTA";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <CaseStudies />
      <WhatWeDeliver />
      <Impact />
      <WhyEphos />
      <PortfolioCTA />
    </>
  );
}