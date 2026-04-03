import React from "react";

const cards = [
  {
    title: "UX Copy That Clicks",
    desc: "We use AI to create effective copies like CTAs and microcopy that speaks.",
    img: "/design1.png",
  },
  {
    title: "Visuals, Instantly On Point",
    desc: "We generate custom visuals using AI for faster concept directions, brand-ready",
    img: "/design2.png",
  },
  {
    title: "Data-Led Design Decisions",
    desc: "We Predict user behavior before launch with Al-powered heatmaps that help us",
    img: "/design3.png",
  },
  {
    title: "Smarter & Faster Wireframes",
    desc: "We rapidly turn ideas into wireframes using AI tools, with less",
    img: "/design4.png",
  },
  {
    title: "Launch Quicker, Spend Less",
    desc: "AI  reduce revisions and guesswork and makes your website ready to launch",
    img: "/design5.png",
  },
  {
    title: "No Blank Canvas Struggles",
    desc: "AI generates editable mockups from prompts so we can skip the slow start",
    img: "/design6.png",
  },
];

export default function AIDesignSection() {
  return (
    <section className="w-full -mt-24 bg-black text-white py-28 rounded-[60px]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Tag */}
        <span className="border border-green-500 text-green-400 px-4 py-1 rounded-full text-sm">
          AI-Powered Design
        </span>

        {/* Title */}
        <h2 className="mt-6 red-hat  text-3xl md:text-5xl font-semibold">
          Smarter Design, <span className="italic playfair">Supercharged By AI</span>
        </h2>

        <p className="text-[#D4D4D4] text-lg mt-4 max-w-2xl mx-auto">
          From wireframes to launch, we blend AI tools with strategy to deliver
          faster, <br /> sharper, and data-led design results.
        </p>

        {/* Layout */}
        <div className="relative mt-28">

          {/* Glow */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full" />

          {/* Center Logo */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 md:pt-0.5">
            <img
              src="/design.png"
              alt="AI Logo"
              className="w-28 h-28  object-contain"
            />
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:block space-y-40">

            {/* Top Cards */}
            <div className="grid grid-cols-3 gap-10">
              {cards.slice(0, 3).map((card, i) => (
                <div
                  key={i}
                  className="bg-[#140A24] border border-white/10 p-6 rounded-2xl text-left hover:scale-105 transition duration-300"
                >
                  <h3 className="font-semibold text-2xl">{card.title}</h3>
                  <p className="text-gray-400 text-lg mt-2">{card.desc}</p>

                  <div className="mt-6 lg:h-58  rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="md:h-60 pl-1"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-3 gap-10">
              {cards.slice(3, 6).map((card, i) => (
                <div
                  key={i}
                  className="bg-[#140A24] border border-white/10 p-6 rounded-2xl text-left hover:scale-105 transition duration-300"
                >
                  <h3 className="font-semibold text-lg">{card.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{card.desc}</p>

                  <div className="mt-6 h-58 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="md:h-60 pl-1"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ================= MOBILE ================= */}
          <div className="flex md:hidden gap-6 mt-16 overflow-x-auto snap-x snap-mandatory px-4">

  {cards.map((card, i) => (
    <div
      key={i}
      className="min-w-full max-w-full snap-center bg-[#140A24] border border-white/10 p-6 rounded-2xl"
    >
      <h3 className="font-semibold text-lg">{card.title}</h3>
      <p className="text-gray-400 text-sm mt-2">{card.desc}</p>

      <div className="mt-6 h-40 rounded-xl overflow-hidden border border-white/10">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  ))}

</div>

        </div>
      </div>
    </section>
  );
}