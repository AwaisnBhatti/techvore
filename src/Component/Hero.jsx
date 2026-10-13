import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import diamond from "../assets/diamond.webp";
import figma from "../assets/figma.webp";
import flutter from "../assets/flutter.webp";
import fox from "../assets/fox.webp";
import github from "../assets/github.webp";
import html from "../assets/html.webp";
import material from "../assets/material.webp";
import next from "../assets/next.webp";
import python from "../assets/python.webp";
import react from "../assets/react.webp";

const ICONS = [
  { src: material, className: "left-[1%] top-[5%] lg:top-[12%] w-6 sm:w-8 lg:w-14" },
  { src: python, className: "left-[10%] top-[13%] lg:top-[18%] w-7 sm:w-9 lg:w-16" },
  { src: figma, className: "left-[1%] top-[24%] lg:left-[8%] lg:top-[40%] w-6 sm:w-8 lg:w-14" },
  { src: flutter, className: "left-[9%] top-[42%] sm:left-[3%] sm:top-[40%] lg:left-[-1.5%] lg:top-[30%] w-7 sm:w-10 lg:w-16" },
  { src: next, className: "right-[5%] top-[1%] sm:right-[2%] sm:top-[5%] lg:right-[5%] lg:top-[10%] w-12 sm:w-16 lg:w-24" },
  { src: diamond, className: "right-[5%] top-[73%] sm:right-[6%] sm:top-[42%] lg:right-[12%] lg:top-[45%] w-6 sm:w-10 lg:w-20" },
  { src: fox, className: "right-[5%] top-[45%] sm:right-[4%] sm:top-[70%] lg:right-[2%] lg:top-[58%] w-10 sm:w-20 lg:w-24" },
  { src: html, className: "right-[5%] top-[22%] sm:right-[8%] sm:top-[22%] lg:right-[2%] lg:top-[28%] w-10 sm:w-20 lg:w-24" },
  { src: github, className: "left-[-8%] top-[53%] sm:left-[11%] sm:top-[63%] lg:left-[8%] lg:top-[53%] w-12 sm:w-16 lg:w-28" },
  { src: react, className: "left-[3%] top-[70%] sm:left-[1%] sm:top-[70%] lg:left-[2%] lg:top-[65%] w-14 sm:w-20 lg:w-24" },
];

const TAGS = [
  {
    label: "Machine Learning",
    className: "right-[10%] top-[14%] sm:right-[12%] lg:right-[23%] lg:top-[12%]",
    color: "bg-yellow-200",
  },
  {
    label: "UI/UX Design",
    className: "right-[8%] top-[88%] sm:right-[18%] sm:top-[68%] lg:right-[20%] lg:top-[70%]",
    color: "bg-green-200",
  },
  {
    label: "Backend Development",
    className: "top-[90%] left-[-1%] sm:top-[84%] sm:left-[12%] lg:top-[78%] lg:left-[14%]",
    color: "bg-orange-200",
  },
];

// outer: position + fade-in, then drift, float, and an optional hover jiggle.
// Each animation sits on its own element so their transforms don't override each other.
function FloatingItem({ className, jiggle = false, children }) {
  return (
    <div className={`absolute fadeZoom ${className}`}>
      <div className="drift">
        <div className="float">
          <div className={jiggle ? "jiggle" : undefined}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full relative overflow-hidden pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 lg:pb-32 flex justify-center">
      <div className="w-full text-center fadeZoom px-4 sm:px-6 md:px-12 lg:px-32">
        <p className="text-[#7d82ec] text-xs sm:text-sm lg:text-base font-medium">
          Smart Software. Powerful Data. Seamless Automation. Intelligent
          Logistics.
        </p>

        <h1 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug lg:leading-tight text-black">
          Architecting Intelligence
          <br />
          Orchestrating Global
          <br />
          Operations
        </h1>

        <p className="mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl sm:max-w-2xl mx-auto text-black">
          We integrate high tier Digital Engineering with Smart Mobility
          Solutions. From Python driven automation to AI powered logistics, we
          build the systems that move the global economy.
        </p>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-black px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-medium text-white transition duration-300 hover:bg-gray-900"
          >
            Talk to our Team
            <ChevronRight
              aria-hidden="true"
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>

      {ICONS.map(({ src, className }) => (
        <FloatingItem key={src} className={className} jiggle>
          <img
            src={src}
            alt=""
            aria-hidden="true"
            width="64"
            height="64"
            decoding="async"
            className="w-full h-auto"
          />
        </FloatingItem>
      ))}

      {TAGS.map(({ label, className, color }) => (
        <FloatingItem key={label} className={className}>
          <div
            className={`${color} text-xs sm:text-sm px-2 py-0.5 rounded-full shadow-md whitespace-nowrap`}
          >
            {label}
          </div>
        </FloatingItem>
      ))}
    </section>
  );
}
