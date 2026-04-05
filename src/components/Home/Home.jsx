import React from 'react';
import Hero from './Banner/Hero';
import WhyUsSection from './WhyUsSection/WhyUsSection';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import WhyChooseUsSection from './WhyChooseUsSection/WhyChooseUsSection';
import ShowcaseSection from './ShowcaseSection/ShowcaseSection';
import PricingSection from './PricingSection/PricingSection';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <WhyUsSection></WhyUsSection>
      <WhatWeDo></WhatWeDo>
      <WhyChooseUsSection></WhyChooseUsSection>
      <ShowcaseSection></ShowcaseSection>
      <PricingSection></PricingSection>
    </div>
  );
};

export default Home;