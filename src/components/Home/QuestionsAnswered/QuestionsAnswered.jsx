import { useState } from "react";

const faqs = [
  { q: "How can I start a project with Design Monks?", a: "Simply reach out via our contact form or book a free consultation call. We'll discuss your goals and create a tailored plan for your project." },
  { q: "Why is Design Monks different?", a: "We combine strategic thinking with beautiful design. Our team does deep industry research before any pixel is placed, ensuring results that are both stunning and effective." },
  { q: "How Long Does a Design Project Take?", a: "Project timelines vary based on scope, but most projects are completed within 2–6 weeks. We always provide a clear timeline upfront." },
  { q: "Is Design Monks a start-up-friendly agency?", a: "Absolutely! We love working with startups and offer flexible packages that grow with your business." },
  { q: "What design tools do you use?", a: "We primarily use Figma for UI/UX, along with Adobe Creative Suite for branding and motion design work." },
  { q: "Do you provide UX audits or redesigns for existing products?", a: "Yes! We offer comprehensive UX audits and full redesign services to modernize and improve existing digital products." },
];

const budgets = ["Less than $5K", "$5K - $10K", "$10K - $20K", "$20K - $50K", "More than $50K"];
const socialIcons = ["𝔻", "𝔹", "Ig", "in", "𝕡", "𝕏", "✈"];
const marqueeText = "Value And Guarantee. Don't Miss Out - Secure Your Brand's Future Today.";

const MarqueeItem = () => (
  <span className="flex items-center gap-2 px-6 text-xl italic text-[#1a3a00] whitespace-nowrap">
    <div className="flex -space-x-1">
      {["/av1.png", "/av2.png", "/av3.png", "/av4.png"].map((src, i) => (
        <img
          key={i}
          src={src}
          alt="avatar"
          className="w-5 h-5 rounded-full border-2 border-[#a8f55c] object-cover"
        />
      ))}
    </div>
    <span>40+</span>
    {marqueeText}
    <span className="w-1 h-1 bg-[#1a3a00] rounded-full opacity-50" />
  </span>
);

export default function QuestionsAnswered() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState("$5K - $10K");

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="bg-[#F3F4F6]">
      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <span className="border border-green-500 text-green-600 px-4 py-1 rounded-full text-sm">
          Frequently Asked Questions
        </span>

        <h2 className="pt-7 text-4xl sm:text-5xl red-hat  font-bold leading-tight">
          Your Questions <br />
          <span className="italic playfair">Answered!</span>
        </h2>

        <div className="text-left mt-10 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-300 py-7">
              <div
                onClick={() => toggle(i)}
                className="flex justify-between red-hat  items-center cursor-pointer text-2xl font-bold text-black"
              >
                {faq.q}
                <div
                  className={`w-7 h-7 flex items-center justify-center border border-[#6c47ff] rounded-full transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </div>
              </div>

              <div
                className={`text-sm text-gray-500 overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5">
        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#2d4a1e]">
          <div className="p-6 sm:p-8 flex-1 text-white">
            <span className="border border-green-400 text-green-400 px-4 py-1 rounded-full text-sm">
              Claim a $799 Consultation, on Us
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 leading-tight">
              Enhance Your Brand <br /> Potential <span>At No Cost!</span>
            </h3>

            <ul className="mt-6 space-y-2 text-xs sm:text-sm text-gray-300">
              <li>✓ Expect a response within 24 hours</li>
              <li>✓ NDA available on request</li>
              <li>✓ Dedicated specialists</li>
            </ul>

            <div className="mt-6">
              <img src="/person.png" alt="person" className="w-32 sm:w-40 rounded-lg" />
            </div>
          </div>

          <div className="p-6 sm:p-8 flex-1">
            <input placeholder="Full Name" className="w-full mb-4 p-3 rounded bg-white/10 text-white text-sm" />

            <div className="flex flex-col sm:flex-row gap-3">
              <input placeholder="Email" className="w-full mb-4 p-3 rounded bg-white/10 text-white text-sm" />
              <input placeholder="Whatsapp" className="w-full mb-4 p-3 rounded bg-white/10 text-white text-sm" />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {budgets.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBudget(b)}
                  className={`px-3 py-1 text-xs sm:text-sm rounded border transition ${
                    selectedBudget === b
                      ? "bg-[#6c47ff] text-white border-[#6c47ff]"
                      : "text-gray-300 border-white/20"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            <textarea placeholder="Project details" className="w-full mb-4 p-3 rounded bg-white/10 text-white text-sm" />

            <button className="bg-[#6c47ff] text-white px-6 py-2 rounded text-sm font-semibold">
              Let's Connect →
            </button>
          </div>
        </div>
      </div>

    {/* Marquee */}
      <div className="lg:w-300  md:w-170 mx-auto bg-gradient-to-r from-[#D8FF84] via-[#FFFFFF] to-[#D8FF84] p-5 overflow-hidden rounded-4xl">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {Array.from({ length: 6 }).map((_, i) => (
            <MarqueeItem key={i} />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <MarqueeItem key={`b${i}`} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <p className="text-lg text-gray-500 max-w-4xl mx-auto mb-6">
          Say goodbye to outdated enterprise software and welcome the smoother one. We lead you from design to product innovation to shape your path from idea to success.
        </p>

        <div className="flex justify-center gap-3 mb-6">
          {socialIcons.map((icon, i) => (
            <span key={i} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-sm text-gray-500 hover:border-purple-500 hover:text-purple-500 cursor-pointer">
              {icon}
            </span>
          ))}
        </div>

        <div className="flex max-w-xs mx-auto">
          <input
            placeholder="✉ Your email here"
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 text-sm"
          />
          <button className="bg-[#6c47ff] text-white px-4 py-2 rounded-r-md text-sm">
            Subscribe →
          </button>
        </div>
      </footer>

      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
    </div>
  );
}
