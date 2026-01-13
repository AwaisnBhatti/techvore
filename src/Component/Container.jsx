import React from "react";

export default function LayoutContainer({ children, className = "" }) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="w-[90%] sm:w-[90%] lg:w-[80%]">{children}</div>
    </div>
  );
}
