import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import material from "../assets/material.png";
import python from "../assets/python.png";
import figma from "../assets/figma.png";
import flutter from "../assets/flutter.png";
import fox from "../assets/fox.png";
import github from "../assets/github.png";
import next from "../assets/next.png";
import react from "../assets/react.png";
import diamond from "../assets/diamond.png";
import html from "../assets/html.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="w-full relative overflow-hidden pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 lg:pb-32 flex justify-center">
      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-0.75rem); }
          100% { transform: translateY(0); }
        }
        @keyframes fadeZoom {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0); }
          50% { transform: rotate(3deg); }
        }
        @keyframes drift {
          0% { transform: translate(0,0); }
          50% { transform: translate(0.5rem, -0.375rem); }
          100% { transform: translate(0,0); }
        }
        .float { animation: float 4s ease-in-out infinite; }
        .fadeZoom { animation: fadeZoom 1.2s ease-out forwards; }
        .wiggle:hover { animation: wiggle 0.4s ease-in-out; }
        .drift { animation: drift 6s ease-in-out infinite; }
      `}</style>

      {/* Content Container – same width logic as Navbar */}
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

        <div className="mt-8 sm:mt-10">
          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-5 sm:px-6 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-medium flex items-center gap-2 mx-auto hover:bg-gray-900 transition duration-300 group"
          >
            Talk to our Team
            <ChevronRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </div>
      </div>

      {/* Floating Icons */}
      <img
        src={material}
        className="absolute left-[1%] top-[5%] sm:top-[5%] lg:top-[12%] w-6 sm:w-8 lg:w-14 float drift wiggle fadeZoom"
      />
      <img
        src={python}
        className="absolute left-[10%] top-[13%] sm:top-[13%] lg:top-[18%] w-7 sm:w-9 lg:w-16 float drift wiggle fadeZoom"
      />
      <img
        src={figma}
        className="absolute left-[1%] top-[24%] lg:left-[8%] lg:top-[40%] w-6 sm:w-8 lg:w-14 float drift wiggle fadeZoom"
      />
      <img
        src={flutter}
        className="absolute left-[9%] top-[42%]  sm:left-[3%] sm:top-[40%] lg:left-[-1.5%] lg:top-[30%] w-7 sm:w-10 lg:w-16 float drift wiggle fadeZoom"
      />
      <img
        src={next}
        className="absolute right-[5%] top-[1%] sm:right-[2%] sm:top-[5%] lg:right-[5%] lg:top-[10%] w-12 sm:w-16 lg:w-24 drift float fadeZoom wiggle"
      />
      <img
        src={diamond}
        className="absolute right-[5%] top-[73%] sm:right-[6%] sm:top-[42%] lg:right-[12%] lg:top-[45%] w-6 sm:w-10 lg:w-20 drift float fadeZoom wiggle"
      />
      <img
        src={fox}
        className="absolute right-[5%] top-[45%] sm:right-[4%] sm:top-[70%] lg:right-[2%] lg:top-[58%] w-10 sm:w-20 lg:w-24 drift float wiggle fadeZoom"
      />
      <img
        src={html}
        className="absolute right-[5%] top-[22%] sm:right-[8%] sm:top-[22%] lg:right-[2%] lg:top-[28%] w-10 sm:w-20 lg:w-24 drift float wiggle fadeZoom"
      />
      <img
        src={github}
        className="absolute left-[-8%] top-[53%] sm:left-[11%] sm:top-[63%] lg:left-[8%] lg:top-[53%] w-12 sm:w-16 lg:w-28 drift float wiggle fadeZoom"
      />
      <img
        src={react}
        className="absolute left-[3%] top-[70%] sm:left-[1%] sm:top-[70%] lg:left-[2%] lg:top-[65%] w-14 sm:w-20 lg:w-24 drift float wiggle fadeZoom"
      />

      {/* Tags */}
      <div className="absolute right-[10%] top-[14%] sm:right-[12%] sm:top-[14%] lg:right-[23%] lg:top-[12%] bg-yellow-200 text-xs sm:text-sm px-2 py-0.5 rounded-full shadow-md drift float wiggle fadeZoom">
        Machine Learning
      </div>

      <div className="absolute right-[8%] top-[88%] sm:right-[18%] sm:top-[68%] lg:right-[20%] lg:top-[70%] bg-green-200 text-xs sm:text-sm px-2 py-0.5 rounded-full shadow-md drift float wiggle fadeZoom">
        UI/UX Design
      </div>

      <div className="absolute top-[90%] left-[-1%] sm:top-[84%] sm:left-[12%] lg:top-[78%] lg:left-[14%] bg-orange-200 text-xs sm:text-sm px-2 py-0.5 rounded-full shadow-md drift float wiggle fadeZoom">
        Backend Development
      </div>
    </section>
  );
}
