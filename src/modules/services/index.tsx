"use client";

import ServicesHero from "./components/ServicesHero";
import ServicesGrid from "./components/ServicesGrid";
import ServiceDetail from "./components/ServiceDetail";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import ServicesCTA from "./components/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceDetail />
      <Process />
      <TechStack />
      <ServicesCTA />
    </>
  );
}