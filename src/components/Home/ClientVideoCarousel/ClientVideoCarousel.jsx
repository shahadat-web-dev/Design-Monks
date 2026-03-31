import React, { useState } from "react";
import { motion } from "framer-motion";
const videos = [
  { video: "/video1.mp4" },
  { video: "/video2.mp4" },
  { video: "/video3.mp4" },
  { video: "/video4.mp4" },
  { video: "/video5.mp4" },
  { video: "/video6.mp4" },

];

export default function ClientVideoCarousel() {
const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section className="py-20 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="flex gap-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {videos.map((item, index) => (
  <div
    key={index}
    className="relative min-w-70 md:min-w-85 aspect-[3/5] rounded-2xl overflow-hidden shadow-lg group"
  >
    <video
      src={item.video}
      className="w-full h-full object-cover"
      muted
      loop
      playsInline
      onMouseEnter={(e) => {
        e.currentTarget.play();
        setPlayingIndex(index);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.pause();
        setPlayingIndex(null);
      }}
    />

    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition pointer-events-none" />

    {playingIndex !== index && (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md transition">
          ▶
        </div>
      </div>
    )}
  </div>
))}
        </motion.div>

      </div>
    </section>
  );
}