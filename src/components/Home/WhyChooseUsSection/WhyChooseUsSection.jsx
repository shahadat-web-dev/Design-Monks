import React from "react";

const features = [
  {
    title: "Unlimited Revisions",
    desc: "We’re committed to your satisfaction with unlimited revisions at every step. Our    mission is to make your vision come to life exactly as you imagine.",
    img: "/icon1.png",
  },
  {
    title: "Lifetime Support",
    desc: "With our lifetime support, you’re never alone. We’ll be there for you at every stage with necessary guidance and assistance whenever you need it",
    img: "/icon2.png",
  },
  {
    title: "Personalised Plans",
    desc: "Get top-quality service without breaking the bank. Our rates are designed to fit your budget so that you can get the best value for your investment..",
    img: "/icon3.png",
  },
  {
    title: "Custom Design Solutions",
    desc: "Our easy payment options are completely flexible. So, you can invest in your success while staying within your budget.",
    img: "/icon4.png",
  },
  {
    title: "24/7 Customer Support",
    desc: "Benefit from the expertise of our carefully chosen resources that are designed to make your journey smooth and effortless with outstanding results.",
    img: "/icon5.png",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="max-w-2xl mb-16">
          <span className="border border-green-500 text-green-400 px-4 py-1 rounded-full text-sm">Why Choose Us</span>
          <h2 className="text-4xl red-hat  md:text-5xl pt-10 font-bold leading-tight">
            We <span className="italic playfair">Design</span> for the <span className="italic playfair">Future</span> to Drive Today’s <span className="italic playfair">Success</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-8">

          {/* Top 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 border-2 border-gray-200 bg-gradient-to-b from-pink-100  via-white hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-40 h-25 flex mb-4"
                />

                <h3 className="text-3xl red-hat  font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-[#525252] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.slice(2, 5).map((item, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 border-2 border-gray-200 bg-gradient-to-b from-pink-100 via-white hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-40 h-25 mb-4"
                />

                <h3 className="text-3xl red-hat  font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-[#525252]  leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}