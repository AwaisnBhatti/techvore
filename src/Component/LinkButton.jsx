import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function LinkButton({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-gray-800 ${className}`}
    >
      {children}
      <ChevronRight
        aria-hidden="true"
        size={20}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}
