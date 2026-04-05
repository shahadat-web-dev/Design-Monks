import React from "react";

export default function WhyChooseUs() {
  const columns = ["Speed", "Flexibility", "Quality", "Scalability", "Affordability"];

  const rows = [
    {
      name: "Design Monks",
      description:
        "Expert‑driven & committed to higher quality. Get effective result & full support without hiring in‑house employees",
      checks: [true, true, true, true, true],
      highlighted: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path d="M12 2C9.8 2 8 3.8 8 6s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 10c-4.4 0-8 1.8-8 4v2h16v-2c0-2.2-3.6-4-8-4z" fill="white" />
        </svg>
      ),
    },
    {
      name: "In House Team",
      description:
        "A full‑time designer may ensure brand consistency, but there's a risk of limited expertise even though you pay regularly",
      checks: [false, false, false, true, false],
      highlighted: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <circle cx="9" cy="7" r="3" stroke="white" strokeWidth="1.5" />
          <circle cx="15" cy="7" r="3" stroke="white" strokeWidth="1.5" />
          <path d="M3 19c0-3.3 2.7-6 6-6h1M21 19c0-3.3-2.7-6-6-6h-1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 19c0-3.3 1.3-6 3-6s3 2.7 3 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Creative Agencies",
      description:
        "Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility for your projects",
      checks: [false, false, true, true, false],
      highlighted: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path d="M3 17l4-8 4 5 3-3 4 6H3z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="8" cy="8" r="1.5" fill="white" />
        </svg>
      ),
    },
    {
      name: "Freelancers",
      description:
        "Freelancers may provide affordable design services but they mostly lack consistency, reliability, and collaboration",
      checks: [false, true, false, false, true],
      highlighted: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <circle cx="12" cy="8" r="3" stroke="white" strokeWidth="1.5" />
          <path d="M6 20v-1a6 6 0 0112 0v1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 13l2 2-2 2M8 13l-2 2 2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Self-Service Tools",
      description:
        "DIY tools like website builders are budget‑friendly, but you can't expect strategic thinking & originality",
      checks: [false, false, true, true, false],
      highlighted: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="white" strokeWidth="1.5" />
          <path d="M8 20h8M12 18v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 9h2v5H7zM11 7h2v7h-2zM15 11h2v3h-2z" fill="white" />
        </svg>
      ),
    },
  ];

  return (
    <section className=" min-h-screen py-16 px-5 md:px-10 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="border  border-green-500 text-green-400 px-4 py-1 rounded-full text-sm">
            Why Choose Us
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl red-hat font-bold text-white leading-tight">
            <span className="italic playfair">Design</span> <span className="italic playfair">Monks’s</span> Alternative? <br />
            <span className="italic playfair">Think</span> One More Time!
          </h2>
        </div>

        {/* Table/Card */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="w-1/3 pr-6 pb-6 text-left text-white font-bold text-2xl red-hat">Platform</th>
                {columns.map((col) => (
                  <th key={col} className="px-4 pb-6 text-center red-hat text-white font-medium text-xl">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td colSpan={6}>
                    <div
                      className={`flex items-center gap-6 p-6 mb-4 rounded-2xl ${row.highlighted
                        ? "bg-gradient-to-r from-[#100D16] via-[#130C20] to-[#2C1755] border border-[#5a3fcf]"
                        : "bg-transparent border-b border-[#1e1e2e]"
                        }`}
                    >
                      {/* Icon */}
                      <div
                        className={`w-24 h-24 flex-shrink-0 flex items-center justify-center rounded-lg ${row.highlighted ? "bg-gradient-to-r from-[#6b3fe4] to-[#4422bb]" : "bg-[#1a1a2e]"
                          }`}
                      >
                        {React.cloneElement(row.icon, { className: "w-8 h-8" })}
                      </div>

                      {/* Name & Description */}
                      <div className="flex-0 min-w-[220px]">
                        <div className="text-2xl red-hat font-bold text-white mb-2">{row.name}</div>
                        <div className="text-base text-gray-300 leading-snug">{row.description}</div>
                      </div>

                      
                      {/* Check/Cross */}
                      <div className="flex-1 flex justify-around items-center">
                        {row.checks.map((checked, j) => (
                          <div key={j} className="w-12 h-12 flex items-center justify-center">
                            {checked ? (
                              <svg className="w-8 h-8" viewBox="0 0 22 22">
                                <path d="M5 11.5l4.5 4.5 7.5-9" stroke={row.highlighted ? "#fff" : "#ccccdd"} strokeWidth="2" />
                              </svg>
                            ) : (
                              <svg className="w-7 h-7" viewBox="0 0 18 18">
                                <path d="M4 4l10 10M14 4L4 14" stroke="#e05252" strokeWidth="2" />
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}