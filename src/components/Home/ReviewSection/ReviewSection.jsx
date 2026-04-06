// ReviewSection.jsx

const reviews = [
  [
    {
      text: "Design Monks delivered exactly as promised — transparent, professional, and prompt. Even with political situations affecting internet access they stayed on track and delivered on time, incorporating all our feedback. Would work with them again!",
      name: "Vimal Bhaya",
      role: "Founder @ Renergy Technologies",
      initials: "VB",
      color: "#7c6af7",
    },
    {
      text: "Fantastic experience working with Design Monks. They did more homework than I expected and actually studied details related to a whole new industry to iterate designs. Super professional, sleek, and fresh design output.",
      name: "Rifah Tasfia",
      role: "Product Consultant @ Carbabon",
      initials: "RT",
      color: "#f7a76a",
    },
    {
      text: "Amazing experience! The Design Monks team is experienced, diligent, and follows a solid process from research to design. They handled our redesign and user feedback perfectly. Truly a standout team in globally.",
      name: "Erfanul Hoque",
      role: "Founder @ Renergy Technologies",
      initials: "EH",
      color: "#6abff7",
    },
  ],
  [
    {
      text: "Working with Design Monks was a great experience. They were responsible, communicative, and delivered excellent design work as per my requirements. I appreciated their flexibility, professionalism, and quick turnaround on feedback. Would happily work together again!",
      name: "Nora Peng",
      role: "Marketing Manager @ Vac AI",
      initials: "NP",
      color: "#f76a6a",
    },
    {
      text: "Design Monks was a pleasure to work with. They were proactive, and efficient, and never hesitated to challenge me in my assumptions. The design they built for me was beautiful, and I would not hesitate to retain them again in the future.",
      name: "Jenna Carvalho",
      role: "Principal @ Guardian Estate Company",
      initials: "JC",
      color: "#6af7c8",
    },
    {
      text: "We used Design Monks for two projects and he was reliable and creative. His design solutions worked well for what we needed and he helped create a good theme/style for our websites. I would recommend.",
      name: "Sajan Devshi",
      role: "Founder @ Learndojo",
      initials: "SD",
      color: "#f7d96a",
    },
  ],
  [
    {
      text: "What I love most about Design Monks is they truly listen to their clients. They guided through each step, kept us informed, and made sure the final design was exactly what we envisioned. Their after-service support is amazing.",
      name: "Shakhawat Hossain",
      role: "Founder @ Carnesia",
      initials: "SH",
      color: "#b76af7",
    },
    {
      text: "Working with Design Monks transformed our workflow. Their adherence to guidelines increased efficiency and contributed to business growth. We can now focus more on strategic initiatives and client engagement, thanks to saved hours.",
      name: "Kunle Adetayo",
      role: "CEO & Founder @ Plentypay",
      initials: "KA",
      color: "#f76ab0",
    },
    {
      text: "Big shoutout to the Design Monks team. They brought our vision to life both visually and strategically. They nailed the balance between clean design and real business results, and their transparency made everything smooth. The unlimited revisions gave us real peace of mind.",
      name: "Victor Okon",
      role: "COO & Co-founder @ Dlicio",
      initials: "VO",
      color: "#6a9cf7",
    },
  ],
];

export default function ReviewSection() {
  return (
     <section className="bg-gray-100 py-24 px-4 md:px-10">
      <div className="text-center mb-16">
        <span className="border  border-green-500 text-green-600 px-4 py-1 rounded-full text-sm ">
          Referral From People
        </span>
        <h2 className="text-3xl red-hat pt-5 md:text-5xl font-bold text-gray-900 leading-tight">
          Trusted by People
          <em className="block font-serif italic playfair">Chosen By Brands</em>
        </h2>
      </div>

      <div className="overflow-hidden max-w-6xl mx-auto space-y-6">
        {/* 1st row: left → right */}
        <div className="flex animate-marquee gap-6">
          {reviews[0].concat(reviews[0]).map((card, i) => (
            <div key={i} className="flex-1 min-w-[300px]  rounded-xl p-6 border border-gray-300">
              <p className="text-gray-700 mb-4 text-sm">{card.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: card.color }}
                >
                  {card.initials}
                </div>
                <div>
                  <strong className="block red-hat text-gray-900">{card.name}</strong>
                  <span className="text-gray-500 text-sm">{card.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2nd row: right → left */}
        <div className="flex animate-marquee-reverse gap-6">
          {reviews[1].concat(reviews[1]).map((card, i) => (
            <div key={i} className="flex-1 min-w-[300px]  rounded-xl p-6 border border-gray-300">
              <p className="text-gray-700 mb-4 text-sm">{card.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: card.color }}
                >
                  {card.initials}
                </div>
                <div>
                  <strong className="block text-gray-900">{card.name}</strong>
                  <span className="text-gray-500 text-sm">{card.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3rd row: left → right */}
        <div className="flex animate-marquee gap-6">
          {reviews[2].concat(reviews[2]).map((card, i) => (
            <div key={i} className="flex-1 min-w-[300px]  rounded-xl p-6 border border-gray-300">
              <p className="text-gray-700 mb-4 text-sm">{card.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: card.color }}
                >
                  {card.initials}
                </div>
                <div>
                  <strong className="block text-gray-900">{card.name}</strong>
                  <span className="text-gray-500 text-sm">{card.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
}