

import React, { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { TiArrowRight } from "react-icons/ti";

const services = [
  {
    title: "UI/UX Design",
    desc: "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.",
    images: [
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
    ],
  },
  {
    title: "Web Development",
    desc: "Frontend Development, Backend Development, Full Stack Solutions, Mobile App Development, Custom Web Applications, API Integration.",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    ],
  },
  {
    title: "Logo & Branding",
    desc: "Logo Design, Full Branding, Business Branding, 3D Logo, Visual Identity, Brand Strategy, Social Media Branding.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1503602642458-232111445657",
    ],
  },
  {
    title: "Webflow & Framer",
    desc: "Custom Webflow Websites, Webflow Plugin, Framer Prototypes, Framer Material, Framer App, CMS Integration, Rapid Development.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1503602642458-232111445657",
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
        <div className="sticky pt-30 top-24 h-fit">
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
              className="h-[80vh] flex items-center justify-center"
            >
              <div className="flex items-start gap-8">
                <img
                  src={item.images[0]}
                  alt=""
                  className="w-64 md:w-80 h-120 rounded-xl shadow-xl -translate-y-6"
                />
                <img
                  src={item.images[1]}
                  alt=""
                  className="w-64 md:w-80 h-120 rounded-xl shadow-xl translate-y-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}