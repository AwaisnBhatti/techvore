import React from "react";
import { ChevronRight } from "lucide-react";

export default function Hero({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt = "Illustration",
}) {
  return (
    <section className="py-12 sm:py-16 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight">
              {title}
            </h1>

            <p className="text-md sm:text-lg md:text-xl my-6">{description}</p>

            {/* ✅ Button is optional */}
            {buttonText && (
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 pt-4">
                <button className="bg-black text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-800 transition-colors group whitespace-nowrap">
                  <span className="text-base sm:text-lg font-medium">
                    {buttonText}
                  </span>
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            )}
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
