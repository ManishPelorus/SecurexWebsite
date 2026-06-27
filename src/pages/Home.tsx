import React from "react";
import { HeroGeometric } from "../components/ui/shape-landing-hero";
import PlatformHero from "../components/Platform/PlatformHero";
import WhyTraditional from "../components/Platform/WhyTraditional";
import ProofBlock from "../components/Platform/ProofBlock";
import CTEMLifecycle from "../components/Platform/CTEMLifecycle";
import PlatformOverview from "../components/Platform/PlatformOverview";
import Outcomes from "../components/Platform/Outcomes";
import SovereignDesign from "../components/Platform/SovereignDesign";
import Contrast from "../components/Platform/Contrast";
import IndustryPreview from "../components/Platform/IndustryPreview";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <HeroGeometric
        badge="SecureXLabs Intelligence"
        title1="Secure Your"
        title2="Enterprise Future"
      />
      <PlatformHero />
      <WhyTraditional />
      <ProofBlock />
      <CTEMLifecycle />
      <PlatformOverview />
      <Outcomes />
      <SovereignDesign />
      <Contrast />
      <IndustryPreview />
      {/* Removed Intelligence Section - if required in the future, simply uncomment the Intelligence Component below this line */}
      {/* <IntelligenceSection /> */}
      {/* <TrustSection /> */}
      {/* <Testimonials /> */}
      {/* <ResearchSection /> */}
      <Newsletter />
    </>
  );
};

export default Home;
