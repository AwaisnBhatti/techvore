import React from "react";
import Counter from "../Component/Counter";
import SupportForm from "../Component/Form";
import { ChevronRight, Star, Video } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="px-4 sm:px-6 md:px-12 lg:px-32 py-12 sm:py-16 md:py-24">
        {/* Main Container - flex-col with responsive gap */}
        <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20">
          {/* --- 1. Top Section: Text (Left) & Image (Right) --- */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12">
            {/* Text Side - Added items-center and text-center for mobile */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight">
                We're Here to <br /> Help You Help Others
              </h1>

              <p className="text-md sm:text-lg md:text-xl my-6 sm:my-10 lg:my-20">
                At Techvore, our mission is to empower visionaries, creators,
                and changemakers with intelligent systems that scale impact.
                Whether you’re optimizing logistics, streamlining workflows, or
                leading digital transformation, we build the tools that help you
                lead with purpose and precision.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 pt-4">
                <button className="bg-black text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-800 transition-colors group whitespace-nowrap">
                  <span className="text-base sm:text-lg font-medium">
                    Contact Us
                  </span>
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>

            {/* Image Side (1st Image) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
              <img
                src="/images/about1.png"
                alt="Illustration"
                className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] object-contain"
              />
            </div>
          </div>

          {/* --- 2. Middle Section: Video Element --- */}
          <div className="w-full flex justify-center py-6 sm:py-8 md:py-12 bg-gray-50 rounded-3xl">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <Video size={28} className="text-black ml-1 sm:ml-1.5" />
              </div>
              <p className="font-semibold text-gray-500 text-sm sm:text-base text-center">
                Watch our journey
              </p>
            </div>
          </div>

          {/* --- 3. Bottom Section: Image (Left) & Text (Right) --- */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12">
            {/* Image Side (2nd Image) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center order-2 lg:order-1">
              <img
                src="/images/aboutus2.png"
                alt="About Us"
                className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] object-contain"
              />
            </div>

            {/* Text Side - Added items-center and text-center for mobile */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-brand-blue font-semibold text-base sm:text-lg md:text-lg tracking-widest mb-3 sm:mb-5">
                Our Story
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-snug md:leading-tight">
                Abou
                <span className="inline-block bg-brand-blue rounded-xl py-0 px-1 sm:px-2">
                  t Us
                </span>
              </h2>

              <div className="leading-relaxed text-base sm:text-lg md:text-lg my-6 sm:my-10 lg:my-10">
                <p className="mb-4 sm:mb-6">
                  Born at the crossroads of digital innovation and real world
                  complexity, Techvore exists to solve the challenges that
                  others overlook. We fuse deep tech AI, automation, and smart
                  mobility with business-first thinking. Our story isn’t just
                  about code, it’s about building the digital engines that drive
                  industries forward.
                </p>
              </div>

              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-800 transition-colors group">
                <span className="text-base sm:text-lg font-medium">
                  Talk to our Team
                </span>
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Counter and Support Form */}
      <Counter />
    </>
  );
};

export default HeroSection;
