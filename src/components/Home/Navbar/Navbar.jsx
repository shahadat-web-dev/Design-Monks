import React from "react";

const Navbar = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-1000">
      <div className="flex items-center md:gap-10 gap-6 bg-black text-white md:px-8 px-4 py-4 rounded-2xl shadow-2xl border border-purple-500/20">
        
        <p className="cursor-pointer opacity-80 hover:opacity-100">
          Projects
        </p>

        <p className="cursor-pointer opacity-80 hover:opacity-100">
          Services
        </p>

        <button className="bg-linear-to-r from-purple-500 to-indigo-500 px-6 py-3 rounded-xl font-semibold shadow-lg">
          Start a Project
        </button>

        <p className="cursor-pointer opacity-80 hover:opacity-100">
          Pricing
        </p>

        <p className="cursor-pointer opacity-80 hover:opacity-100">
          More
        </p>
      </div>
    </div>
  );
};

export default Navbar;