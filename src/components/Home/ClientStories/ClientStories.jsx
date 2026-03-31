import React from "react";
import ClientVideoCarousel from "../ClientVideoCarousel/ClientVideoCarousel";


export default function ClientStories() {
  return (
    <section className="bg-[#FAFAFA] py-24 md:py-32">
      <div className="max-w-7xl mx-auto">

      <div className="md:pl-25 pl-20">
          <h4 className="text-green-600 border border-green-400 pl-2 rounded-full w-30 text-x">Client Stories</h4>
          <h1 className="text-black md:text-5xl text-4xl md:pt-3 font-bold red-hat pt-4">Success <span className="italic playfair font-bold ">Stories</span></h1>
          <h1 className="text-black md:text-5xl text-4xl pb-12 pt-2 red-hat font-bold ">That <span className="italic playfair">Inspire Us</span></h1>
        </div>

       
      </div>
      <ClientVideoCarousel></ClientVideoCarousel>
    </section>
  );
}