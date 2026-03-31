import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    title: "Travel",
    desc: "Easy Booking for Dream Trips",
    descreption: "Triply is a hassle-free &  effective tour solution for travelers.It's an all-inclusive booking and planning webdite that helps people make their dream trips easier.",
    img: "https://i.ibb.co.com/V044rcWf/1.png",
    bg: "bg-[#C6CFFF]",
    bg2: "https://i.ibb.co.com/8g4bDLrG/Screenshot-2-Photoroom.png",
    duration: "8 Weeks",
    scope: "Mobile App",
    author: "Shubho Al-Farooque",
    role: "Zantrik CEO",
    profile: "https://i.pravatar.cc/100?img=1",
    profileBg: "bg-[#9AABFF]",
  },
  {
    title: "Restaurant",
    desc: "Transform Your Dining",
    descreption: "At Plate, we bring you a handpicked selection of premium restaurants that offter not just meals, but memorable dining eexperiences, you'|| cherish.",
    img: "https://i.ibb.co.com/VWvk6Rs8/2.png",
    bg: "bg-[#FFB8B0]",
    bg2: "https://i.ibb.co.com/HDRmdM1p/red.png",
    duration: "8 Weeks",
    scope: "Mobile App",
    author: "Shubho Al-Farooque",
    role: "Zantrik CEO",
    profile: "https://i.pravatar.cc/100?img=1",
    profileBg: "bg-[#FE8F83]",

  },
  {
    title: "SaaS",
    desc: "Reducing Carbon Footprints",
    descreption: "Yenex is a smart and sustainable energy platform. It empowers users with distributed energy solutions to reduce carbon footprints effortlessly.",
    img: "https://i.ibb.co.com/2Th3RDf/3.png",
    bg: "bg-[#FBE8A4]",
    bg2: "https://i.ibb.co.com/ZRP1wCsp/yellow.png",
    duration: "8 Weeks",
    scope: "Mobile App",
    author: "Shubho Al-Farooque",
    role: "Zantrik CEO",
    profile: "https://i.pravatar.cc/100?img=1",
    profileBg: "bg-[#F7BB48]",

  },
  {
    title: "Healthcare",
    desc: "Revolutionize Fitness Goals",
    descreption: "Fitmate transforms fitness in Australia with flexible gym access, personalized schedules, and Al-driven insights to solve common workout limitations for users.",
    img: "https://i.ibb.co.com/BHJPmFjw/4.png",
    bg: "bg-[#ABF5FF]",
    bg2: "https://i.ibb.co.com/v4Zc74fP/akasi.png",
    duration: "8 Weeks",
    scope: "Mobile App",
    author: "Shubho Al-Farooque",
    role: "Zantrik CEO",
    profile: "https://i.pravatar.cc/100?img=1",
    profileBg: "bg-[#76EBFB]",
  },
  {
    title: "Vehicle Maintenance Platform",
    desc: "Simplifying Vehicle Care",
    descreption: "Zantrik is an innovative vehicle maintenace app. We revamped it with a fresh design, gamificaiton, and intuitive ffeatures o boost user engagement.",
    img: "https://i.ibb.co.com/ymVwrTcG/5.png",
    bg: "bg-[#C9FFF7]",
    bg2: "https://i.ibb.co.com/gMHrZ6by/Gemini-Generated-Image-clxlscclxlscclxl-Photoroom.png",
    duration: "8 Weeks",
    scope: "Mobile App",
    author: "Shubho Al-Farooque",
    role: "Zantrik CEO",
    profile: "https://i.pravatar.cc/100?img=1",
    profileBg: "bg-[#57E6D8]",

  },
];
function Card({ card, index }) {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(
    scrollYProgress,
    [index * 0.15, 1],
    [1, 0.8]
  );

  return (
    <motion.div
      style={{ scale, zIndex: 100 + index }}
      className="sticky top-28 mb-24"
    >
      <div className={`grid md:grid-cols-2 gap-10 ${card.bg} border p-10 rounded-2xl hover:scale-[1.02] transition duration-500`}>

        {/* Text */}
        <div>
          <h3 className="text-2xl text-black playfair italic font-bold mb-4">{card.title}</h3>
          <p className="text-black md:text-4xl font-bold red-hat ">{card.desc}</p>
          <p className="text-[#52586E] md:text-xl pt-6">{card.descreption}</p>

          {/* Info Section */}
          <div className="mt-8 space-y-6">

            {/* Top Info */}
            <div className="flex gap-16">
              <div>
                <p className="text-[#4b5563] text-sm">Project Duration</p>
                <h3 className="text-black text-2xl font-bold">
                  {card.duration}
                </h3>
              </div>

              <div>
                <p className="text-[#4b5563] text-sm">Work Scope</p>
                <h3 className="text-black text-2xl font-bold">
                  {card.scope}
                </h3>
              </div>
            </div>

            {/* Profile Card */}
            <div className={`flex items-center justify-between ${card.profileBg}  rounded-xl px-4 py-3 max-w-md`}>
              <div className="flex items-center gap-3">
                <img
                  src={card.profile}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-black font-semibold">
                    {card.author}
                  </h4>
                  <p className="text-[#1f2937] text-sm">
                    {card.role}
                  </p>
                </div>
              </div>

              <span className="text-[#525252] text-2xl">→</span>
            </div>

          </div>
        </div>




        {/* Image */}
        <div className="relative flex justify-center md:justify-end">

          {/* Background image */}
          <img
            src={card.bg2}
            alt=""
            className="w-full  max-w-105 h-55 md:h-95 object-contain md:rounded-[60px]"
          />

          {/* Main image */}
          <img
            src={card.img}
            alt={card.title}
            className="
      absolute 
      bottom-5 md:bottom-20.5
      right- md:right-10
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
    <section className=" text-white z-10 bg-[#FAFAFA] py-32">
      <div className="max-w-7xl mx-auto ">
        <div className="pl-10">
          <h4 className="text-green-600 border border-green-400 pl-2 rounded-full w-30 text-x">Industry Wins</h4>
          <h1 className="text-black md:text-5xl text-4xl font-medium md:pt-3 pt-4">Proven Success in</h1>
          <h1 className="text-black md:text-5xl text-4xl font-semibold pb-12 pt-2 italic playfair">Every Industry</h1>
        </div>

        {cards.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>

      {/* See All Projects Button*/}
      <div className="flex justify-center md:-mt-20 -mt-30">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-gray-300  bg-[#592DB5] text-white font-bold"
        >
          See All Projects
          <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  );
}