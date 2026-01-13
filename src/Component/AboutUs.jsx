import React from "react";
import aboutUsBgImage from "../assets/AboutUs.png";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutUsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full flex justify-center pt-8 sm:pt-2 lg:pt-8 pb-12 sm:pb-12 lg:pb-12">
      <div className="relative w-full">
        {/* Background Image Card */}
        <div
          className="
            shadow-xl
            h-[500px]
            md:h-[600px]
            lg:h-[500px]
            rounded-lg
            rounded-tr-[80px]
            overflow-visible
            block
            bg-[position:20%_center]
            sm:bg-[position:40%_center]
          "
          style={{
            backgroundImage: `url(${aboutUsBgImage})`,
            backgroundSize: "cover",
          }}
        >
          {/* Frosted Card */}
          <div
            className="absolute z-40 w-[22rem] top-[25rem] md:w-[30rem] md:top-[30rem] lg:w-[29rem] lg:top-[23rem] xl:w-[36rem] xl:top-[27rem] -translate-y-1/2"
            style={{
              right: "0",
              minHeight: "450px",
            }}
          >
            <div
              className="rounded-tl-[80px] rounded-bl-[80px] p-8 md:p-14 relative overflow-hidden hidden sm:block"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              {/* Rounded Cutout */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  left: -40,
                  top: -18,
                  width: 120,
                  height: 120,
                  borderRadius: "0 60px 0 0",
                  background: "transparent",
                  pointerEvents: "none",
                }}
              />

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                Techvore Philosophy
              </h2>

              <p className="text-white/90 leading-relaxed text-[13px] md:text-[15px] mb-4 text-center">
                Techvore operates at the intersection of digital ingenuity and
                physical execution. We don't just build software, we engineer
                the systems that move industries. By synthesizing high-tier
                Python automation, blockchain security, and data-driven
                logistics, we provide a unified ecosystem where complex code
                drives real-world results. For us, innovation isn't a goal, it
                is the engine that powers global operations, ensuring our
                partners stay agile in an increasingly automated world.
              </p>
            </div>
          </div>

          {/* Vertical ABOUT US Label - Clickable and Hidden on Mobile */}
          <div
            onClick={() => navigate("/about")}
            className="absolute bottom-24 left-[-50px] z-50 sm:pl-12 sm:pb-10 hidden sm:block cursor-pointer group"
          >
            <p className="text-xl font-semibold text-[#382f68] uppercase tracking-widest flex items-center whitespace-nowrap -rotate-90 origin-bottom-left transition-colors hover:text-brand-blue">
              <span className="text-[#382f68] mr-4 text-3xl group-hover:text-brand-blue">
                &larr;
              </span>{" "}
              ABOUT US
            </p>
          </div>
        </div>

        {/* Mobile-only Frosted Card (Visible below 640px) */}
        <div className="sm:hidden relative z-40 -mt-[150px] shadow-xl rounded-lg rounded-tr-[80px] p-6 bg-black/50 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-white mb-4">
            Techvore Philosophy
          </h2>
          <p className="text-white/90 leading-relaxed text-[14px]">
            We go beyond traditional development. We are partners in your
            digital transformation, offering a full spectrum of modern digital
            needs. Whether it is enhancing operational speed through automation,
            building competitive advantages with advanced data analytics, or
            streamlining supply chains with our dedicated Truck Dispatch
            Services, we deliver industry-specific systems designed for tangible
            growth.
          </p>
        </div>

        {/* Button below card */}
        <div className="mt-[2rem] md:mt-[5rem] lg:mt-[2rem] flex justify-center sm:justify-start">
          <button
            onClick={() => navigate("/about")}
            className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold 
            py-3 px-4 rounded-full inline-flex items-center transition duration-300 group"
          >
            Learn More About Us
            <ChevronRight
              size={16}
              className="mt-1 ml-3 transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
