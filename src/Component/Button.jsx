import React from "react";
import { ChevronRight } from "lucide-react";

const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 px-5 md:px-3 rounded-full inline-flex items-center gap-3 shadow-md transition duration-300 group ${className}`}
    >
      {text}
      <ChevronRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-2"
      />
    </button>
  );
};

export default Button;
