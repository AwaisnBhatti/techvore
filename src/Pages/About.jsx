import React from "react";
import Counter from "../Component/Counter";
import Container from "../Component/Container";
import { ChevronRight, Video } from "lucide-react";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import HeroWithImage from "../Component/HeroWithImage";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Container>
        <section>
          <HeroWithImage
            title={
              <>
                We're Here to <br /> Help You Help Others
              </>
            }
            description="At Techvore, our mission is to empower visionaries, creators, and changemakers with intelligent systems that scale impact. Whether you’re optimizing logistics, streamlining workflows, or leading digital transformation, we build the tools that help you lead with purpose and precision."
            imageSrc={about1}
            buttonText="Contact Us"
            buttonLink="/contact"
          />

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
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 my-20">
            {/* Image Side (2nd Image) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center order-2 lg:order-1">
              <img
                src={about2}
                alt="About Us"
                className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] object-contain"
              />
            </div>

            {/* Text Side - Added items-center and text-center for mobile */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-brand-blue font-semibold text-base sm:text-lg md:text-lg tracking-widest">
                Our Story
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-snug md:leading-tight">
                Abou
                <span className="inline-block bg-brand-blue rounded-xl py-0">
                  t Us
                </span>
              </h2>

              <div className="leading-relaxed text-base sm:text-lg md:text-lg my-6">
                <p className="mb-4">
                  Born at the crossroads of digital innovation and real world
                  complexity, Techvore exists to solve the challenges that
                  others overlook. We fuse deep tech AI, automation, and smart
                  mobility with business-first thinking. Our story isn’t just
                  about code, it’s about building the digital engines that drive
                  industries forward.
                </p>
              </div>

              <Link to="/contact">
                <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-800 transition-colors group">
                  <span className="text-base sm:text-lg font-medium">
                    Talk to our Team
                  </span>
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
            </div>
          </div>
        </section>
        <Counter />
      </Container>
    </>
  );
};

export default About;
