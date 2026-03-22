import React from 'react';

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
          <div className='lg:pl-80 md:pl-10 pl-30'>
            <img className='w-30' src="/google.png" alt="" />
            <h4 className='text-white text-sm'>4.9 ⭐⭐⭐⭐⭐</h4>
          </div>
          <h1 className='text-white pt-4 lg:text-xl font-semibold lg:pl-60 pl-15'>Leading UI/UX Design Agency</h1>
          <h1 className='text-white pt-5 font-bold text-3xl lg:text-[60px] md:text-2xl'>We <span className='italic playfair'>Design</span> Products That <br />
            Drive <span className='italic playfair'>Results</span></h1>
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