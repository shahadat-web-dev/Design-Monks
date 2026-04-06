import React from "react";
import BonusSection from "../BonusSection/BonusSection";
import WhyChooseSection from "../WhyChooseSection/WhyChooseSection";
import OpeningsSection from "../OpeningsSection/OpeningsSection";

const plans = [
  {
    price: "$1,800",
    des:"Website Design",
    title: "Ideal for Startup Owners, MVP ",
    features: [
      "Website Design",
      "Design Style Guide",
      "Responsive across all devices",
      "Unlimited Revisions",
      "Developer Handoff",
    ],
  },
  {
    price: "$3,500",
    des:"Web/Mobile App Design",
    title: "For SaaS & fast MVP launches.",
    features: [
      "Web/Mobile App Design",
      "UX Research",
      "Design System with token",
      "Unlimited Revisions",
      "Developer handoff",
      "Transparent communication",
      "Responsive across all devices",
    ],
    highlight: true,
  },
  {
    price: "$3,800+",
    des:"Monthly Subscription",
    title: "Ideal for Startup or MVP",
    features: [
      "Monthly Subscription",
      "Monthly dedicated designers",
      "Adhoc design support",
      "Right designer for right product",
      "Transparent communication",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-black rounded-4xl">
      <div className="max-w-7xl mx-auto px-6">

        {/* Rounded Container */}
        <div className=" rounded-[40px] p-10">

          <div className="text-center">
            {/* Content */}
            <span className="border  border-green-500 text-green-400 px-4 py-1 rounded-full text-sm">
              Pricing plans
            </span>
            {/* Title */}
            <h2 className="mt-6 text-white pb-30 red-hat  text-5xl md:text-5xl font-semibold">
              <span className="playfair italic">Unbeatable</span> Value <br />
              Unmatched <span className="playfair italic">Quality</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-13">

            {plans.map((plan, index) => (

              // 🔥 Gradient Border Wrapper
              <div
                key={index}
                className={`p-[1px] rounded-3xl bg-gradient-to-r from-[#7E70B1] via-purple-500 to-indigo-500 ${plan.highlight ? "scale-110" : ""
                  }`}
              >

                {/* Card */}
                <div className="rounded-3xl  p-10 bg-[#190930] backdrop-blur-md text-white h-full">

                  {/* Price */}
                  <h3 className="text-5xl red-hat font-bold mb-2">
                    {plan.price}
                  </h3>

                  {/* Title */}
                  <p className="text-lg py-3  text-gray-300">
                    {plan.title}
                  </p>

                  <p className="text-4xl border-b text-[#A0CF60] pb-8 red-hat font-bold border-b-[#42009A]">
                     {plan.des}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 pt-8">
                    {plan.features.map((item, i) => (
                      <li key={i} className="text-lg text-gray-200 flex items-start gap-2">
                        <span>✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button className="w-full cursor-pointer py-4 rounded-xl font-semibold  bg-[#592DB5] text-white hover:opacity-90 transition ">
                    Explore More  →
                  </button>

                </div>
              </div>

            ))}

          </div>

        </div>

      </div>
      <BonusSection></BonusSection>
      <WhyChooseSection></WhyChooseSection>
      <OpeningsSection></OpeningsSection>
    </section>
  );
}