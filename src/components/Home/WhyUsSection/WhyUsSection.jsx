import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhyUsSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // 🔥 use vw instead of %
  const width = useTransform(scrollYProgress, [0, 0.8], ["80vw", "100vw"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.8], [20, 0]);

  return (
    <section ref={sectionRef} className="min-h-[200vh] bg-white">
      
      <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-20 overflow-hidden">

        {/* Content */}
         {/* Tag */}
        <span className="border border-green-500 text-green-400 px-4 py-1 rounded-full text-sm">
          What Sets Us Apart
        </span>

        {/* Title */}
        <h2 className="mt-6 red-hat  text-3xl md:text-5xl font-semibold">
          Why Us? Because Your <span className="italic playfair">Growth Is Our Mission</span>
        </h2>

        <p className="text-[#666666] text-center text-lg mt-7 mb-20 max-w-2xl mx-auto">
          See the difference thoughtfull design makes. Our works highlight the dedication <br /> we bring to every client partnership.
        </p>

        {/* 🎬 Video */}
        <motion.div
          style={{ width, borderRadius }}
          className="h-[80vh] overflow-hidden"
        >
          <video
            src="/your-video.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}