import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TruckingAbout = () => {
  const navigate = useNavigate();
  return (
    <div className=" my-20 flex flex-col items-center text-center">
      {/* Subheading */}
      <span className="text-brand-blue uppercase tracking-[0.3em] text-sm font-bold mb-4">
        Who we are
      </span>

      {/* Main Heading with Overlap */}
      <div className="relative mb-12">
        <h2 className="text-5xl md:text-6xl font-black text-black relative z-10">
          About Us
        </h2>
        {/* The Blue Background Pill behind "Us" */}
        <div
          className="absolute right-[-10px] top-[-5px] w-[130px] h-[65px] bg-brand-blue rounded-2xl z-0 opacity-80"
          style={{ transform: "rotate(-2deg)" }} // Optional slight tilt for that organic feel
        ></div>
      </div>

      {/* Content Body */}
      <div className="max-w-4xl space-y-8 leading-relaxed text-lg md:text-xl ">
        <p>
          At Techvore, we believe your wheels should never stop turning. We are
          a U.S.-based professional truck dispatch service that helps
          owner-operators and small fleets find profitable loads, manage
          paperwork, and negotiate top-paying rates.
        </p>

        <p>
          Whether you drive a Box Truck, Reefer, Dry Van, or Flatbed, our
          dispatchers handle everything — from booking loads to managing broker
          setup and rate confirmations.
        </p>

        <p className="pb-4">
          Our mission is simple: Keep your truck loaded, reduce your stress, and
          help you earn more every mile.
        </p>
      </div>

      {/* Contact Us Button */}
      <button
        className="mt-8 bg-black text-white px-10 py-4 rounded-full flex items-center gap-4 hover:bg-gray-800 transition-colors text-xl group"
        onClick={() => navigate("/contact")}
      >
        Contact Us
        <ChevronRight
          size={24}
          strokeWidth={2.5}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>
    </div>
  );
};

export default TruckingAbout;
