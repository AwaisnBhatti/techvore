import React from "react";
import ourStrength from "../assets/ourStrength.jpg";

const EngagementModel = () => {
  const models = [
    {
      id: "01/06",
      title: "Our Strength",
      description:
        "We are a full spectrum IT solutions team delivering secure, scalable digital systems. Our engineers and specialists collaborate across web, data, automation, and emerging technologies to turn business requirements into reliable, high impact solutions.",
      image: ourStrength,
    },
    {
      id: "04/06",
      title: "Product Consultation",
      description:
        "We help founders and leadership teams turn ideas clear or still forming into scalable digital products. By validating concepts, defining roadmaps, and selecting the right technology, we bring early stage clarity that reduces risk, accelerates delivery, and sets products up for long term growth.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "05/06",
      title: "Support & Maintenance",
      description:
        "We ensure your digital products remain secure, scalable, and high performing. From updates and fixes to performance optimization, we provide reliable ongoing support whether we built the product or are taking over an existing one so your technology continues to deliver value.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <section className="min-h-screen">
      {/* Top Border */}
      <div className="border-t border-gray-500/50 w-full mb-0"></div>

      {models.map((model, index) => (
        <div key={index} className="group relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-12 transition-all duration-300">
            {/* Left Side: Title & ID */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {model.title}
              </h3>
              {/* <span className="text-brand-blue font-bold tracking-widest text-sm">
                {model.id}
              </span> */}
            </div>

            {/* Tilted Floating Image (appears on hover) */}
            <div className="hidden lg:block absolute left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-rotate-12 scale-90 group-hover:scale-100">
              <img
                src={model.image}
                alt={model.title}
                className="w-48 h-48 object-cover rounded-2xl shadow-2xl border-4 border-white/20 shadow-black/40"
              />
            </div>

            {/* Right Side: Description */}
            <div className="w-full md:w-1/2">
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                {model.description}
              </p>
            </div>
          </div>

          {/* Bottom Border for each item */}
          <div className="border-b border-gray-500/50 w-full"></div>
        </div>
      ))}
    </section>
  );
};

export default EngagementModel;
