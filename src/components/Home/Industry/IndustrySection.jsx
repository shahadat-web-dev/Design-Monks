import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    title: "EdTech",
    desc: "Proven success designing education platforms.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Fitness",
    desc: "Modern UI for fitness platforms.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },
  {
    title: "Logistics",
    desc: "Dashboard design for logistics systems.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
  },
  {
    title: "IT Solutions",
    desc: "Scalable SaaS UI/UX systems.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
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
      <div className="grid md:grid-cols-2 gap-10 bg-[#C6CFFF] border p-10 rounded-2xl hover:scale-[1.02] transition duration-500">
        
        {/* Text */}
        <div>
          <h3 className="text-3xl text-black font-bold mb-4">{card.title}</h3>
          <p className="text-black">{card.desc}</p>
        </div>

        {/* Image */}
        <img
          src={card.img}
          alt=""
          className="w-full h-[260px] object-cover rounded-xl"
        />
      </div>
    </motion.div>
  );
}

export default function IndustrySection() {
  return (
    <section className=" text-white bg-[#FAFAFA] py-32">
      <div className="max-w-7xl mx-auto ">
        <div className="pl-10">
          <h4 className="text-green-600 border border-green-400 pl-2 rounded-full w-30 ">Industry Wins</h4>
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