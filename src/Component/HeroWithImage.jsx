import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for routing

export default function Hero({
  title,
  description,
  buttonText,
  buttonLink = "/", // New prop for the destination path
  imageSrc,
  imageAlt = "Illustration",
  imagePosition = "right",
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="py-12 sm:py-16 md:16">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col items-center gap-8 sm:gap-10 md:gap-12 
            ${isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-snug md:leading-tight">
              {title}
            </h1>

            <p className="text-md sm:text-lg md:text-xl my-6">{description}</p>

            {buttonText && (
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 pt-4">
                {/* Wrap button in Link */}
                <Link to={buttonLink} className="block w-full sm:w-auto">
                  <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-800 transition-colors group whitespace-nowrap w-full">
                    <span className="text-base sm:text-lg font-medium">
                      {buttonText}
                    </span>
                    <ChevronRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Image Side */}
          <div
            className={`w-full lg:w-1/2 flex justify-center items-center 
              ${isImageLeft ? "lg:justify-start" : "lg:justify-end"}`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full max-w-[450px] object-contain transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
