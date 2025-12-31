import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkTogetherSection = () => {
  const navigate = useNavigate();
  return (
    <div
      className="text-white pt-32 pb-16 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: 'url("/images/work.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10 md:mb-12">
        Let’s work together
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6">
        info@techvorellc.com
      </p>
      <button
        onClick={() => navigate("/contact")}
        className="mt-8 sm:mt-10 md:mt-14 bg-brand-blue hover:bg-brand-blue-dark text-white 
        px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3 rounded-full text-base sm:text-lg md:text-lg font-semibold 
        flex items-center gap-2 transition duration-300 group"
      >
        Talk to our team
        <ChevronRight
          size={16}
          className="mt-1 ml-1 transition-transform duration-300 group-hover:translate-x-2"
        />
      </button>
    </div>
  );
};

export default WorkTogetherSection;
