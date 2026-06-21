import React from 'react';
import { HeroGeometric } from '../components/ui/shape-landing-hero';
import PlatformSection from '../components/PlatformSection';
import SolutionsSection from '../components/SolutionsSection';
import TrustSection from '../components/TrustSection';
import IntelligenceSection from '../components/IntelligenceSection';
import NavigatorSection from '../components/NavigatorSection';
import ResearchSection from '../components/ResearchSection';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <HeroGeometric
        badge="SecureXLabs Intelligence"
        title1="Secure Your"
        title2="Enterprise Futuree"
      />
      <PlatformSection />
      <IntelligenceSection />
      <NavigatorSection />
      <SolutionsSection />
      <TrustSection />
      <Testimonials />
      <ResearchSection />
      <Newsletter />
    </>
  );
};

export default Home;
