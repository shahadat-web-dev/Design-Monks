export default function FooterSection() {
  const locations = [
    { country: "United States", address: "16 Cove Road, Mount Arlington, NJ 07856" },
    { country: "Australia", address: "155 Bennett Rd, St Clair NSW 2759" },
    { country: "South Africa", address: "55 Mons Rd, Bellevue East, Johannesburg, 2198" },
    { country: "Singapore", address: "6 Raffles Blvd, Marina Square" },
    { country: "Italy", address: "Via Bari, 9, 03043 Cassino, FR" },
    { country: "Dubai", address: "AlFattan Downtown - 32d St - Al Satwa" },
    { country: "Cyprus", address: "Estias 5, Strovolos 2001" },
    { country: "Bangladesh", address: "Ventura Iconia, Plot 37 Road No. 11, Banani, Dhaka 1213" },
  ];

  const links = [
    {
      title: "Important Links",
      items: ["Contact Us", "About Us", "Products", "Industry", "Blogs"],
    },
    {
      title: "Services",
      items: ["UI/UX Design", "Web Design", "Logo & Branding", "Webflow Design", "Framer Design"],
    },
    {
      title: "Specialized Industry",
      items: ["Fintech Industry", "Healthcare & Fitness Industry", "Edtech Industry", "Cybersecurity Industry", "Company Deck"],
    },
    {
      title: "Compare",
      items: ["Vs Agencies", "Vs Freelancers", "Vs Inhouse"],
    },
  ];

  const partners = [
    { name: "Framer", label: "Professional Partner", color: "text-blue-500" },
    { name: "Webflow", label: "Professional Partner", color: "text-indigo-500" },
    { name: "Behance", label: "Top Team On Behance", color: "text-blue-400" },
    { name: "dribbble", label: "Top Team On Dribbble", color: "text-pink-500" },
    { name: "Clutch", label: "Reviewed On ★★★★★", color: "text-white" },
    { name: "Google", label: "Reviewed On ★★★★★", color: "text-white" },
  ];

  return (
    <footer className="w-full bg-black text-white font-sans">

      {/* Globe / Video Background Section */}
      <div className="relative w-full min-h-[880px] flex items-center justify-center overflow-hidden">

        {/* Video Background */}
        <video
          className="absolute inset-0 z-10 w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/footer-video.mp4" type="video/mp4" />
        </video>

        {/* Fallback gradient if video fails */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#051525] to-[#0a1e2e] opacity-60 z-[1]" />

        {/* Teal glow at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-[radial-gradient(ellipse_80%_100%_at_50%_100%,rgba(0,200,180,0.15),transparent)] z-[2] pointer-events-none" />

        {/* Location Cards */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-14 flex flex-col items-center gap-4">

          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-4">
            {locations.slice(0, 4).map((loc) => (
              <div
                key={loc.country}
                className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-6 py-4 min-w-[210px] text-center hover:bg-white/15 transition-colors duration-200"
              >
                <h4 className="text-white font-semibold text-[15px] mb-1">{loc.country}</h4>
                <p className="text-white/55 text-[12px] leading-relaxed">{loc.address}</p>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-4">
            {locations.slice(4).map((loc) => (
              <div
                key={loc.country}
                className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-6 py-4 min-w-[210px] text-center hover:bg-white/15 transition-colors duration-200"
              >
                <h4 className="text-white font-semibold text-[15px] mb-1">{loc.country}</h4>
                <p className="text-white/55 text-[12px] leading-relaxed">{loc.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="bg-[#0a0a0a] py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {links.map((col) => (
            <div key={col.title}>
              <h5 className="text-white font-bold text-[14px] mb-5 tracking-wide">{col.title}</h5>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/50 text-[14px] hover:text-white transition-colors duration-150"
                    >
                      {item}
                      {item === "Company Deck" && (
                        <span className="ml-2 inline-block bg-white/10 rounded-full px-2 py-[2px] text-[10px] text-white/50">
                          P
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Partners / Badges Section */}
      <div className="bg-[#0a0a0a] border-t border-white/[0.07] py-7 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
          {partners.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-1">
              <span className={`font-bold text-xl ${p.color}`}>{p.name}</span>
              <span className="text-white/40 text-[11px] text-center">{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0a0a0a] border-t border-white/[0.07] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <a href="#" className="text-white/40 text-[13px] hover:text-white transition-colors">
            Terms & Conditions
          </a>
          <span className="text-white/40 text-[13px]">
            © 2026, Design Monks LLC, All Rights Reserved.
          </span>
          <a href="#" className="text-white/40 text-[13px] hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="">
        <img  src="/designmonks.png" alt="" />
      </div>

    </footer>
  );
}