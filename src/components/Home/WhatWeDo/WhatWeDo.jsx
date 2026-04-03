

import React, { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { TiArrowRight } from "react-icons/ti";

const services = [
  {
    title: "UI/UX Design",
    desc: "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.",
    images: [
      "https://i.ibb.co.com/gMwLJ2zW/Screenshot-1.png",
      "https://i.ibb.co.com/5hzfmj8J/Screenshot-2.png",
    ],
  },
  {
    title: "Web Development",
    desc: "Frontend Development, Backend Development, Full Stack Solutions, Mobile App Development, Custom Web Applications, API Integration.",
    images: [
      "https://i.ibb.co.com/6h5Vz2m/Screenshot-3.png",
      "https://i.ibb.co.com/Q73mcb83/Screenshot-4.png",
    ],
  },
  {
    title: "Logo & Branding",
    desc: "Logo Design, Full Branding, Business Branding, 3D Logo, Visual Identity, Brand Strategy, Social Media Branding.",
    images: [
      "https://i.ibb.co.com/MDD7QM2T/Screenshot-5.png",
      "https://i.ibb.co.com/39DQGkJz/Screenshot-6.png",
    ],
  },
  {
    title: "Webflow & Framer",
    desc: "Custom Webflow Websites, Webflow Plugin, Framer Prototypes, Framer Material, Framer App, CMS Integration, Rapid Development.",
    images: [
      "https://i.ibb.co.com/dsQF7p1w/Screenshot-7.png",
      "https://i.ibb.co.com/358rSVff/Screenshot-8.png",
    ],
  },
];

export default function WhatWeDoAdvanced() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scroll detect
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      services.length - 1,
      Math.floor(latest * services.length)
    );
    setActiveIndex(index);
  });

  return (
    <section ref={containerRef} className="w-full bg-black text-white py-28">
      {/* HEADER */}
      <div className="max-w-7xl pb-10 mx-auto px-6">
        <span className="border border-green-500 text-green-400 px-4 py-1 rounded-full text-sm">What We Do</span>
        <h2 className="text-4xl red-hat  pt-10 md:text-5xl font-bold text-white leading-tight">
          We Design <span className="italic playfair">Brands</span> That <span className="italic playfair">Speak</span> to Audiences
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* LEFT STICKY CONTENT */}
        <div className="sticky md:pt-30 top-24 h-fit">
          {services.map((item, index) => (
            <div
              key={index}
              className={`mb-10 w-90  transition-opacity duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <h2 className="md:text-4xl border-[#34007A] border-b md:pb-8 font-bold mb-2">{item.title}</h2>
              <p className="text-[#CDCDCD] pt-5 mb-3">{item.desc}</p>
              <button className="text-sm font-semibold text-[#743CEC]  flex ">
                See More <TiArrowRight className="" size={26} />
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT IMAGES (ALWAYS VISIBLE) */}
        <div className="space-y-32">
          {services.map((item, index) => (
            <div
              key={index}
              className="h-[50vh] flex items-center justify-center"
            >
              <div className="flex items-start gap-8">
                <img
                  src={item.images[0]}
                  alt=""
                  className="w-64 md:w-90 md:h-120 rounded-xl shadow-xl -translate-y-6"
                />
                <img
                  src={item.images[1]}
                  alt=""
                  className="w-64 md:w-90 md:h-120 rounded-xl shadow-xl translate-y-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book a Call Button*/}
      <div className="flex justify-center md:pt-20">
        <a
          href="/Book"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-gray-300  bg-[#592DB5] text-white font-bold"
        >
          Book a Call
          <span className="text-lg">→</span>
        </a>
      </div>

    </section>
  );
}