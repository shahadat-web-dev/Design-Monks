import React from 'react';

const Hero = () => {
  return (
    <div className='bg-linear-to-t to-50% from-green-800 to-black min-h-screen'>
      <div className='text-white flex justify-center items-center text-3xl  pt-6 font-medium'>designm<img className='w-4 h-4 rounded-full mt-2' src="/center.png" alt="" />nks</div>


      <div className='flex justify-between pt-18'>

        {/* left image */}
        <div className=''>
          <img className='' src="/public/left.png" alt="" />
        </div>

        {/* Center Text */}
        <div className=''>
          <div className='pl-72'>
            <img className='w-30' src="/google.png" alt="" />
            <h4 className='text-white text-sm'>4.9 ⭐⭐⭐⭐⭐</h4>
          </div>
          <h1 className='text-white pt-4 text-xl font-semibold pl-54'>Leading UI/UX Design Agency</h1>
          <h1 className='text-white pt-10 font-bold text-6xl'>We <span className='italic'>Design</span> Products That <br />
            Drive<span className='italic'>Results</span></h1>
        </div>

        {/* Right image */}
        <div>
          <img src="/right.png" alt="" />
        </div>

      </div>

    </div>
  );
};

export default Hero;