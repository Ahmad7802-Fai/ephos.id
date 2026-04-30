import {
  Hero,
  Services,
  WhyChooseUs,
  Portfolio,
  Clients,
  Process,
  // Technology,
  FAQ,
} from "../components";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Clients />
      <Process />
      {/* <Technology /> */}
      <FAQ />
    </>
  );
}