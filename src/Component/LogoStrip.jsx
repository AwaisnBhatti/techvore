import React from "react";

// Logo definitions with height/width
const PARTNER_LOGOS = [
  {
    name: "loveholidays",
    src: "/logos/loveholidays.webp",
    height: "1.25rem",
    width: "auto",
  },
  { name: "voi", src: "/logos/voi.webp", height: "1.5rem", width: "auto" },
  {
    name: "Printify",
    src: "/logos/printify.webp",
    height: "3rem",
    width: "auto",
  },
  {
    name: "NEW LOOK",
    src: "/logos/newlook.webp",
    height: "4rem",
    width: "auto",
  },
  { name: "veeps", src: "/logos/veeps.webp", height: "2rem", width: "auto" },
  {
    name: "LA MARTINA",
    src: "/logos/lamartina.webp",
    height: "8rem",
    width: "auto",
  },
];

const LogoStrip = () => {
  return (
    <div className="w-full py-8 mt-auto border-t">
      <div className="flex flex-wrap justify-center items-center gap-x-5 sm:gap-x-8 md:gap-x-6 gap-y-4 opacity-80">
        {PARTNER_LOGOS.map((partner) => (
          <img
            key={partner.name}
            src={partner.src}
            alt={`${partner.name} logo`}
            className="transition-opacity duration-300 hover:opacity-100"
            style={{
              height: partner.height,
              width: partner.width,
              filter: "grayscale(100%) brightness(0%)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoStrip;
