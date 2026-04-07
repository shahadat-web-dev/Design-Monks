export default function FooterSection() {
  return (
    <footer className="relative w-full h-[550px] md:h-[650px] overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/footer-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
          Let’s build something amazing together
        </h2>

        {/* Subheading */}
        <p className="text-gray-300 max-w-2xl mb-8 text-lg md:text-xl">
          We help startups and businesses create stunning digital experiences that
          engage and convert.
        </p>

        {/* CTA Button */}
        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg md:text-xl hover:bg-gray-200 transition-all duration-300">
          Get in Touch
        </button>

        {/* Optional small text */}
        <p className="text-gray-400 text-sm md:text-base mt-6">
          © 2026 DesignMonks. All rights reserved.
        </p>

      </div>
    </footer>
  );
}