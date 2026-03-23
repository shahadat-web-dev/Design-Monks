import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    title: "EdTech",
    desc: "Proven success designing education platforms.",
    img: "https://i.ibb.co.com/V044rcWf/1.png",
    bg: "bg-[#C6CFFF]",
    bg2:"https://i.ibb.co.com/8g4bDLrG/Screenshot-2-Photoroom.png",
  },
  {
    title: "Fitness",
    desc: "Modern UI for fitness platforms.",
    img: "https://i.ibb.co.com/VWvk6Rs8/2.png",
    bg: "bg-[#FFB8B0]",
    bg2:"https://i.ibb.co.com/HDRmdM1p/red.png",

  },
  {
    title: "Logistics",
    desc: "Dashboard design for logistics systems.",
    img: "https://i.ibb.co.com/2Th3RDf/3.png",
    bg: "bg-[#FBE8A4]",
    bg2:"https://i.ibb.co.com/ZRP1wCsp/yellow.png",

  },
  {
    title: "IT Solutions",
    desc: "Scalable SaaS UI/UX systems.",
    img: "https://i.ibb.co.com/BHJPmFjw/4.png",
    bg: "bg-[#ABF5FF]",
    bg2:"https://i.ibb.co.com/v4Zc74fP/akasi.png",

  },
  {
    title: "IT Solutions",
    desc: "Scalable SaaS UI/UX systems.",
    img: "https://i.ibb.co.com/ymVwrTcG/5.png",
    bg: "bg-[#C9FFF7]",
    bg2:"https://i.ibb.co.com/gMHrZ6by/Gemini-Generated-Image-clxlscclxlscclxl-Photoroom.png",

  },
];
function Card({ card, index }) {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(
    scrollYProgress,
    [index * 0.15, 1],
    [1, 0.85]
  );

  return (
    <motion.div
      style={{ scale, zIndex: 10 + index }}
      className="sticky top-28 mb-24"
    >
      <div className={`grid md:grid-cols-2 gap-10 ${card.bg} border p-10 rounded-2xl hover:scale-[1.02] transition duration-500`}>

        {/* Text */}
        <div>
          <h3 className="text-3xl text-black font-bold mb-4">{card.title}</h3>
          <p className="text-black">{card.desc}</p>
        </div>


        {/* Image */}
        <div className="relative flex justify-center md:justify-end">

          {/* Background image */}
          <img
            src={card.bg2}
            alt=""
            className="w-full  max-w-105 h-55 md:h-75 object-contain rounded-[20px]"
          />

          {/* Main image */}
          <img
            src={card.img}
            alt={card.title}
            className="
      absolute 
      bottom-5 md:bottom-12.5
      right-4 md:right-10
      w-40 md:w-[320px]
      h-50 md:h-50
      object-cover
      rounded-xl
      shadow-lg
    "
          />
        </div>

      </div>
    </motion.div>
  );
}

export default function IndustrySection() {
  return (
    <section className=" text-white bg-[#FAFAFA] py-32">
      <div className="max-w-7xl mx-auto ">
        <div className="pl-10">
          <h4 className="text-green-600 border border-green-400 pl-2 rounded-full w-30 text-x">Industry Wins</h4>
          <h1 className="text-black text-5xl font-medium pt-3">Proven Success in</h1>
          <h1 className="text-black text-5xl font-semibold pb-12 pt-2 italic playfair">Every Industry</h1>
        </div>

        {cards.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}