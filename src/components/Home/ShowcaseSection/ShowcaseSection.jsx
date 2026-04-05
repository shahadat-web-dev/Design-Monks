import React from "react";

const topTexts = [
  "Framer", "Branding", "Dashboard", "Logos",
  "Webflow", "Slide Decks", "Mobile Apps", "Figma", "Social Media"
];

const bottomTexts = [
  "Dashboard", "Logos", "Webflow", "Slide Decks",
  "Mobile Apps", "Figma", "Social Media", "Framer", "Branding"
];

const images = [
  "/img1.png",
  "/img2.png",
  "/img3.png",
  "/img4.png",
  "/img5.png",
];

export default function ShowcaseSection() {
  return (
    <section className="bg-[#F1EAFF] py-16 mb-20 overflow-hidden">

      {/* Top Marquee */}
      <div className="whitespace-nowrap mb-10 animate-marquee">
        {topTexts.concat(topTexts).map((text, i) => (
          <span key={i} className="mx-6 text-gray-700 text-lg">
            • {text}
          </span>
        ))}
      </div>

      {/* Image Row */}
      <div className="flex gap-8 px-6 animate-marquee2">
        {images.concat(images).map((img, i) => (
          <img
            key={i}
            src={img}
            alt="design"
            className="md:h-100 rounded-3xl object-cover"
          />
        ))}
      </div>

      {/* Bottom Marquee */}
      <div className="whitespace-nowrap mt-10 animate-marquee-reverse">
        {bottomTexts.concat(bottomTexts).map((text, i) => (
          <span key={i} className="mx-6 text-gray-700 text-lg">
            • {text}
          </span>
        ))}
      </div>

    </section>
  );
}