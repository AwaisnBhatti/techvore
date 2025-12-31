import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="w-full relative overflow-hidden pt-28 lg:pt-36 pb-28 lg:pb-36 flex justify-center">
      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeZoom {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes drift {
          0% { transform: translate(0,0); }
          50% { transform: translate(8px, -6px); }
          100% { transform: translate(0,0); }
        }
        .float { animation: float 4s ease-in-out infinite; }
        .fadeZoom { animation: fadeZoom 1.2s ease-out forwards; }
        .wiggle:hover { animation: wiggle 0.4s ease-in-out; }
        .drift { animation: drift 6s ease-in-out infinite; }
      `}</style>

      <div className="w-[90%] lg:w-[80%] text-center fadeZoom">
        <p className="text-[#7d82ec] text-sm lg:text-md font-medium px-4">
          Smart Software. Powerful Data. Seamless Automation. Intelligent
          Logistics.
        </p>

        <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-tight text-black mt-4">
          Architecting Intelligence
          <br />
          Orchestrating Global Operations
        </h1>

        <p className="text-black text-[14px] lg:text-[15px] max-w-2xl mx-auto mt-8 lg:mt-10 leading-relaxed px-4">
          We integrate high-tier Digital Engineering with Smart Mobility
          Solutions. From Python-driven automation to AI-powered logistics, we
          build the systems that move the global economy.
        </p>

        <div className="mt-8 lg:mt-10">
          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-4 py-3 rounded-full text-base lg:text-lg font-medium flex items-center gap-2 mx-auto hover:bg-gray-900 transition duration-300 group"
          >
            Talk to our Team
            <ChevronRight
              size={16}
              className="mt-1 transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </div>
      </div>

      {/* FLOATING ICONS — RESPONSIVE POSITIONS */}

      <img
        src="/icons/material.png"
        className="absolute left-[1%] top-[5%] sm:left-[1%] sm:top-[5%] lg:left-[1%] lg:top-[12%]
        w-[30px] sm:w-[40px] lg:w-[60px] float drift wiggle fadeZoom"
      />

      <img
        src="/icons/python.png"
        className="absolute left-[10%] top-[13%] sm:left-[10%] sm:top-[13%] lg:left-[10%] lg:top-[15%]
        w-[35px] sm:w-[45px] lg:w-[70px] float drift wiggle fadeZoom"
      />

      <img
        src="/icons/figma.png"
        className="absolute left-[1%] top-[24%] sm:left-[1%] sm:top-[24%] lg:left-[8%] lg:top-[40%]
        w-[25px] sm:w-[40px] lg:w-[55px] float drift wiggle fadeZoom"
      />

      <img
        src="/icons/flutter.png"
        className="absolute left-[-6%] top-[35%] sm:left-[3%] sm:top-[40%] lg:left-[-1.5%] lg:top-[35%]
        w-[30px] sm:w-[50px] lg:w-[70px] drift float wiggle fadeZoom"
      />

      <img
        src="/icons/next.png"
        className="absolute right-[5%] top-[1%] sm:right-[2%] sm:top-[20%] lg:right-[5%] lg:top-[10%]
        w-[60px] sm:w-[80px] lg:w-[100px] drift float fadeZoom wiggle"
      />

      <img
        src="/icons/diamond.png"
        className="absolute right-[5%] top-[45%] sm:right-[6%] sm:top-[42%] lg:right-[12%] lg:top-[45%]
        w-[30px] sm:w-[50px] lg:w-[80px] drift float fadeZoom wiggle"
      />

      <img
        src="/icons/fox.png"
        className="absolute  right-[5%] top-[22%] sm:right-[4%] sm:top-[70%] lg:right-[2%] lg:top-[58%]
        w-[40px] sm:w-[80px] lg:w-[100px] drift float wiggle fadeZoom"
      />

      <img
        src="/icons/github.png"
        className="absolute left-[-8%] top-[53%] sm:left-[11%] sm:top-[63%] lg:left-[12%] lg:top-[55%]
        w-[65px] sm:w-[75px] lg:w-[110px] drift float wiggle fadeZoom"
      />

      <img
        src="/icons/react.png"
        className="absolute left-[3%] top-[68%] sm:left-[1%] sm:top-[70%] lg:left-[2%] lg:top-[65%]
        w-[70px] sm:w-[80px] lg:w-[100px] drift float wiggle fadeZoom"
      />
      <div
        className="absolute right-[10%] top-[14%] sm:right-[20%] sm:top-[14%] lg:right-[23%] lg:top-[12%]
        bg-yellow-200 text-black text-[12px] font-medium px-2 py-0.5 rounded-full shadow-md drift float wiggle fadeZoom"
      >
        Machine Learning
      </div>

      <div
        className="absolute right-[8%] top-[85%] sm:right-[18%] sm:top-[68%] lg:right-[20%] lg:top-[70%]
        bg-green-200 text-black text-sm font-medium px-2 py-0.5 rounded-full shadow-md drift float wiggle fadeZoom"
      >
        UI/UX Design
      </div>

      <div
        className="hidden sm:absolute sm:top-[70%] sm:left-[18%] lg:left-[20%] lg:top-[85%]
    bg-orange-200 text-black text-sm font-medium px-2 py-0.5 rounded-full shadow-md drift float wiggle fadeZoom"
      >
        Backend Development
      </div>
    </section>
  );
}
