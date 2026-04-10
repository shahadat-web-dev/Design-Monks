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
  <span className="flex items-center gap-10 px-6 text-xl italic text-[#1a3a00] whitespace-nowrap">
    <div className="flex  -space-x-1">
      {["/av1.png", "/av2.png", "/av3.png", "/av4.png"].map((src, i) => (
        <img
          key={i}
          src={src}
          alt="avatar"
          className="w-10 h-10 p-1 bg-[#F8CD7A] rounded-full border-2 border-[#a8f55c] object-cover"
        />
      ))}
    </div>
    <div className="pl-15">
    {marqueeText}
    </div>
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

        <div className="text-left mt-20 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-300 py-7">
              <div
                onClick={() => toggle(i)}
                className="flex justify-between red-hat  items-center cursor-pointer text-2xl font-bold text-black"
              >
                {faq.q}
                <div
                  className={`w-7 h-7 flex items-center justify-center border border-[#6c47ff] rounded-full transition-transform ${openIndex === i ? "rotate-180" : ""
                    }`}
                >
                  ▼
                </div>
              </div>

              <div
                className={`text-sm text-gray-500 overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 mt-2" : "max-h-0"
                  }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8 pb-5">
        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-gradient-to-tr from-[#0A0A0A] via-[#16213e] to-[#705521] p-8">

          <div className="p-6 sm:p-8 flex-1 text-white">
            <span className="border border-green-400 text-green-400 px-4 py-1 rounded-full text-sm">
              Claim a $799 Consultation, on Us
            </span>

            <h3 className="text-3xl sm:text-4xl red-hat  lg:text-5xl font-bold mt-6 leading-tight">
              Enhance Your Brand <br /> Potential <span className="italic playfair">At No Cost!</span>
            </h3>

            <ul className="mt-6 space-y-2 text-xs sm:text-sm md:text-lg text-[#CECECE]">
              <li>✓ Expect a response from us within 24 hours.</li>
              <li>✓ We're happy to sign an NDA upon request.</li>
              <li>✓ Get access to a team of dedicated product specialists.</li>
            </ul>

            <div className="mt-6">
              <img src="/person.png" alt="person" className="w-32 md:w-55 sm:w-40 rounded-lg" />
            </div>
            <div>
              <div className="pt-2">
                <h2 className="text-2xl red-hat font-bold">Abdullah Al Noma</h2>
                <p className="text-[#595859]">COO & Co-founder</p>
              </div>
              <div className="pt-5">
                <h3 className="text-[#7F7E7F] text-lg">📞 +880 178809.....</h3>
                <p className="text-lg font-bold text-[#A87FFF]">Book a Call Directly</p>
              </div>
            </div>
          </div>



          <div className="p-6 sm:p-8 flex-1 text-white">

            {/* Full Name */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Full Name</label>
              <input
                placeholder="John Doe"
                className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-white/40"
              />
            </div>

            {/* Email + Whatsapp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

              <div>
                <label className="block mb-2 font-semibold">Your Email</label>
                <input
                  placeholder="yourmail@gmail.com"
                  className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Whatsapp Number</label>
                <input
                  placeholder="1 123 1234567"
                  className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-white/40"
                />
              </div>

            </div>

            {/* Budget */}
            <div className="mb-6">
              <label className="block mb-3 font-semibold">Project Budget</label>

              <div className="flex flex-wrap gap-3">
                {budgets.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`px-4 py-2 rounded-lg border text-sm transition ${selectedBudget === b
                        ? "bg-white text-black border-white"
                        : "border-white/20 text-white hover:border-white/40"
                      }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Project Details</label>
              <textarea
                placeholder="I want to redesign my website.."
                className="w-full h-32 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 outline-none resize-none focus:border-white/40"
              />
            </div>

            {/* Button */}
            <button className="bg-gradient-to-r cursor-pointer from-[#7b3fe4] to-[#9b5cff] px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition">
              Let's Connect
              <span>→</span>
            </button>

          </div>

        </div>
      </div>

      {/* Marquee */}
      <div className="lg:w-305  md:w-170 mx-auto border-1 border-[#E5E5E5] bg-gradient-to-r from-[#D8FF84] via-[#FFFFFF] to-[#D8FF84] p-5 overflow-hidden rounded-full">
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
            <span key={i} className="w-10 h-10 flex items-center justify-center bg-[#E1E1E1] rounded-xl text-lg  hover:border-purple-500 hover:text-purple-500 cursor-pointer">
              {icon}
            </span>
          ))}
        </div>

        <div className="flex gap-1 max-w-120 pb-10 pt-5  mx-auto">
          <input
            placeholder="✉ Your email here"
            className="flex-1 border border-gray-300 rounded-lg md:px-10 py-4 text-sm"
          />
          <button className="bg-[#6c47ff] text-white md:px-10 rounded-lg py-2 rounded-r-md text-sm">
            Subscribe
          </button>
        </div>
      </footer>

      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
    </div>
  );
}
