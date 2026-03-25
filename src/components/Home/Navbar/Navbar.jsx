import React from "react";

const Navbar = () => {
  return (
    <div className="fixed md:bottom-6 bottom-0 left-1/2 -translate-x-1/2 z-1000">
      <div className="flex items-center md:gap-10 gap-6 bg-black text-white md:px-8 px-4 md:py-4 py-5 rounded-2xl shadow-2xl border border-purple-500/20">
        
        <p className="cursor-pointer opacity-80 hover:text-purple-500 hover:opacity-100">
          Projects
        </p>

        <p className="cursor-pointer opacity-80 hover:text-purple-500  hover:opacity-100">
          Services
        </p>

        <button className="bg-linear-to-r from-purple-500 to-indigo-500 px-6 py-3 rounded-xl cursor-pointer flash-button font-semibold shadow-lg">
          Start a Project
        </button>

        <p className="cursor-pointer opacity-80 hover:text-purple-500  hover:opacity-100">
          Pricing
        </p>

        <p className="cursor-pointer opacity-80 hover:text-purple-500  hover:opacity-100">
          More
        </p>
      </div>
    </div>
  );
};

export default Navbar;