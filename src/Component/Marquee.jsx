import React from "react";

const Marquee = ({ items }) => {
  const defaultItems = [
    { label: "Techvore", icon: "🌐" },
    { label: "UI/UX", icon: "🎨" },
    { label: "Figma", icon: "💠" },
    { label: "Adobe XD", icon: "📁" },
    { label: "Sketch", icon: "💎" },
  ];

  const displayItems = items || defaultItems;

  // TRIPLE the items to ensure no gaps on large screens
  const tripleItems = [...displayItems, ...displayItems, ...displayItems];

  return (
    <div className="relative flex overflow-hidden bg-black py-3">
      {/* 1. w-max: Important so the container doesn't shrink.
          2. flex-nowrap: Ensures everything stays in one line.
      */}
      <div className="flex animate-marquee whitespace-nowrap w-max flex-nowrap">
        {tripleItems.map((item, index) => (
          <div key={index} className="flex items-center mx-6 sm:mx-10">
            <span className="text-white text-base sm:text-lg font-bold uppercase tracking-wider">
              {item.label}
            </span>
            <span className="ml-3 text-xl sm:text-2xl">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
