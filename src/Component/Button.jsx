import { ChevronRight } from "lucide-react";

export default function Button({ text, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 px-5 md:px-3 rounded-full inline-flex items-center gap-3 shadow-md transition duration-300 group ${className}`}
    >
      {text}
      <ChevronRight
        aria-hidden="true"
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-2"
      />
    </button>
  );
}
