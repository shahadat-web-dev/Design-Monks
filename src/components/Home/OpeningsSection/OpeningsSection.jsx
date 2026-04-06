import React from "react";

export default function OpeningsSection() {
  return (
    <section className="bg-[#0d0d12] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="border border-green-500 text-green-400  py-1 rounded-full  px-4 l text-sm">
            Openings
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl red-hat pb-10 pt-2 font-bold text-white mb-6">
          Be a <span className="italic playfair"> Monk!</span> Like us
        </h2>

        {/* Job Card */}
        <div className="bg-[#11111a] border border-[#1e1e2e] rounded-2xl p-8 
                transition-all duration-300 group
                hover:border-transparent
                ring-1 ring-[#7C40FD]
                hover:shadow-[0_0_200px_rgba(124,64,253,0.8)]
                flex items-center gap-6 shadow-[0_0_70px_rgba(124,64,253,0.8)]">

  {/* LEFT ICON */}
  <div className="
                  rounded-xl ">
    {/* Speaker Icon */}
    <img className="w-22" src="/spker.png" alt="" />
  </div>

  {/* RIGHT CONTENT */}
  <div className="flex-1">

    {/* Title */}
    <h3 className="text-2xl red-hat md:text-3xl font-bold text-left text-white mb-4 leading-snug">
      Key Account Manager (Marketplace Bidding & Lead Generation)
    </h3>

    {/* Description */}
    <p className="text-[#D0D0D0] red-hat text-left text-sm md:text-lg leading-relaxed mb-6">
      We’re on the hunt for a Key Account Manager who doesn’t just send proposals but knows how to win them.
      Someone who understands the game of Upwork & Dribbble, can turn opportunities into consistent revenue,
      and thrives on building strong client relationships from the very first message.
    </p>

    {/* Bottom Info */}
    <div className="flex flex-wrap items-center justify-between gap-4">

      {/* Left Info */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 ">
        <span className="bg-[#242325] px-3 py-1 rounded-lg">
          UPTO BDT 40K
        </span>
        <span className="bg-[#242325] px-3 py-1 rounded-lg">1 Vacancy</span>
        <span className="bg-[#242325] px-3 py-1 rounded-lg">Full Time</span>
        <span className="bg-[#242325] px-3 py-1 rounded-lg">Remote</span>
      </div>

      {/* Button */}
      <button className="bg-[#11111a] border border-[#1e1e2e] rounded-xl px-5 py-2.5 
                         transition-all duration-300
                         hover:border-transparent
                         hover:ring-2 hover:ring-[#7C40FD]">
        Apply Now
      </button>

    </div>
  </div>
</div>

      </div>
    </section>
  );
}