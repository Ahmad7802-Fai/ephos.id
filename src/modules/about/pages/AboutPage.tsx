import AboutHero from "../components/AboutHero";
import ExecutiveSummary from "../components/ExecutiveSummary";
import EphosVisual from "../components/EphosVisual";
// import Timeline from "../components/Timeline";
// import ValuesSplit from "../components/ValuesSplit";
// import ImpactSection from "../components/ImpactSection";
import Organization from "../components/Organization";
import OrganizationStructure from "../components/OrganizationStructure";

export default function AboutPage() {
  return (
    <>
      <EphosVisual />
      <AboutHero />
      <ExecutiveSummary />
      {/* <Timeline /> */}
      {/* <ValuesSplit /> */}
      {/* <ImpactSection /> */}
      <Organization />
      <OrganizationStructure />
      {/* <EphosVisual /> */}
    </>
  );
}
