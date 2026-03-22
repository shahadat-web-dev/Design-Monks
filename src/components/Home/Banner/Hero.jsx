import React from 'react';

const Hero = () => {
  return (
    <div className='bg-linear-to-t to-50% from-green-800 to-black min-h-screen'>
      <div className='text-white flex justify-center items-center text-3xl  pt-6 font-medium'>designm<img className='w-4 h-4 rounded-full mt-2' src="/center.png" alt="" />nks</div>

      <div className='flex justify-between relative pt-18'>

        {/* left image */}
        <div>
          <img className='' src="/public/left.png" alt="" />
        </div>

        {/* Center Text */}
        <div className=''>
          <div className='pl-82'>
            <img className='w-30' src="/google.png" alt="" />
            <h4 className='text-white text-sm'>4.9 ⭐⭐⭐⭐⭐</h4>
          </div>
          <h1 className='text-white pt-4 text-xl font-semibold pl-60'>Leading UI/UX Design Agency</h1>
          <h1 className='text-white pt-5 font-bold text-[68px]'>We <span className='italic playfair'>Design</span> Products That <br />
            Drive <span className='italic playfair'>Results</span></h1>
        </div>

        {/* Right image */}
        <div className=''>
          <img className='' src="/right.png" alt="" />
        </div>

      </div>

    </div>
  );
};

export default Hero;