import React from 'react';
import Hero from './Banner/Hero';
import WhyUsSection from './WhyUsSection/WhyUsSection';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import WhyChooseUsSection from './WhyChooseUsSection/WhyChooseUsSection';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <WhyUsSection></WhyUsSection>
      <WhatWeDo></WhatWeDo>
      <WhyChooseUsSection></WhyChooseUsSection>
    </div>
  );
};

export default Home;