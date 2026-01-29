import React from "react";

const EngagementModel = ({ models = [] }) => {
  return (
    <section>
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
