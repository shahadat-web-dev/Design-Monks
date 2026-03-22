import React from 'react';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const Hero = () => {
  return (
    <div className='bg-linear-to-t to-50% from-green-800 to-black min-h-screen'>
      <div className='text-white flex justify-center items-center text-3xl  pt-6 font-medium'>designm<img className='w-4 h-4 rounded-full mt-2' src="/center.png" alt="" />nks</div>

      <div className='flex justify-between relative pt-18'>

        {/* left image */}
        <div>
          <img className='float-animation hidden md:block' src="/public/left.png" alt="" />
        </div>

        {/* Center Text */}
        <div className='md:pr-10 '>
          <div className='lg:pl-78 md:pl-10 pl-30'>
            <img className='w-30' src="/google.png" alt="" />
            <h4 className='text-white text-sm'>4.9 ⭐⭐⭐⭐⭐</h4>
          </div>
          <h1 className='text-white pt-4 lg:text-xl font-semibold lg:pl-60 pl-15'>Leading UI/UX Design Agency</h1>
          <h1 className='text-white pt-5 font-bold text-3xl lg:text-[60px] md:text-2xl'>
            We <span className='italic playfair'>Design</span> Products That <br />
            <span className="flex items-center justify-center gap-3">
              Drive
              <img className="w-24 h-12 lg:w-32 lg:h-16" src="/figma.png" alt="" />
              <span className='italic playfair'>Results</span>
            </span>
          </h1>


          <h1 className='text-white border mt-5 mx-auto md:w-105 rounded-full py-2 px-0 border-green-700 text-center'>🏳️‍⚧️🏳️‍🌈🏳️‍⚧️🏳️‍🌈 Designig across 8+ countries 🏳️‍⚧️🏳️‍🌈🏳️‍⚧️🏳️‍🌈</h1>
          
          {/* Button */}
          <div className='flex justify-center pt-10'>
             <button className='text-white md:py-3 md:px-10 bg-[#592DB5] font-bold flash-button cursor-pointer rounded-sm'>Book a Call</button>
          </div>

          <BrandCarousel></BrandCarousel>

        </div>

        {/* Right image */}
        <div className=''>
          <img className='float-animation hidden md:block' src="/right.png" alt="" />
        </div>

      </div>

      

    </div>
  );
};

export default Hero;