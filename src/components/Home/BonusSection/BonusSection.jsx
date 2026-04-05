import React from "react";

const bonuses = [
  {
    title: "Free Design",
    desc: "Get expert insights to improve your conversions.",
    img: "/icon1.png",
  },
  {
    title: "UX Consultation",
    desc: "We help you optimize your product experience.",
    img: "/icon2.png",
  },
  {
    title: "Design Resources ",
    desc: "Premium UI kits & assets for your team.",
    img: "/icon3.png",
  },
  {
    title: "Priority Support",
    desc: "Get faster responses & dedicated help.",
    img: "/icon4.png",
  },
];

export default function BonusSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 Animated Border Wrapper */}
        <div className="relative p-0.5 rounded-[30px] overflow-hidden">

          {/* RGB Border */}
          <div className="absolute animate-border inset-0 animate-border bg-[linear-gradient(90deg,#A855F7,#3B82F6,#EC4899)]"></div>

          {/* Content */}
          <div className="relative bg-[#0F0F14] rounded-[30px] p-12 text-white">

            {/* Title + Icon */}
            <div className="text-center mb-12">
              

              <h2 className="bg-gradient-to-r from-[#D5D5D2] via-[#C3C3C1] to-[#D9D8D5] bg-clip-text text-transparent text-3xl md:text-5xl red-hat font-bold">
                Bonuses Worth Over 
              </h2>
              <h2 className="text-3xl pt-2 md:text-5xl red-hat font-bold bg-gradient-to-r from-[#56478C] via-[#9690AF] to-[#CAC9CC] bg-clip-text text-transparent">
                $2,500<span className="bg-gradient-to-r from-[#DCDA9C] via-[#E1DD24] to-[#828717] bg-clip-text text-transparent">-Yours Free!</span>
              </h2>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-4 gap-8">

              {bonuses.map((item, i) => (
                <div
                  key={i}
                  className="p-6  border border-[#7F21FE] border-b-0 rounded-t-2xl"
                >

                  {/* 🔥 Card Icon */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-10 h-10 mb-4"
                  />

                  <h3 className="text-xl red-hat font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-[#D4D4D4] text-lg pt-1">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}