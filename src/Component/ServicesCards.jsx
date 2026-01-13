import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceCards = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      id: "1",
      title: "Digital Product",
      subtitle: "Engineering",
      description: "Your ideas are stalled by bad execution or outdated tech",
      features: [
        "Web & App Development",
        "API Integration",
        "Cloud Solutions",
        "Quality Assurance",
        "UI/UX Design",
      ],
      isDark: true,
    },
    {
      id: "2",
      title: "Data Intelligence &",
      subtitle: "Architecture",
      description:
        "You have data, but you're still guessing, and your databases are a mess.",
      features: [
        "Data Architecture",
        "Data Warehousing",
        "Analytics & Insights",
        "Data Security",
      ],
      isDark: false,
    },
    {
      id: "3",
      title: "Autonomous Business",
      subtitle: "Operations",
      description:
        "Valuable talent is often trapped in repetitive manual work that slows progress.",
      features: [
        "Process Automation",
        "Smart Decision Systems",
        "Intelligent Monitoring",
        "Operational Efficiency",
      ],
      isDark: false,
    },
    {
      id: "4",
      title: "Blockchain",
      subtitle: "Architecture & Web3",
      description:
        "Legacy asset systems are opaque, slow, and prone to failure or tampering.",
      features: [
        "Web3 & Blockchain Strategy",
        "Asset Tokenization",
        "Smart Contract Development",
        "Digital Currency Launch",
        "Fractional Ownership Systems",
      ],
      isDark: true,
    },
    {
      id: "5",
      title: "Integrated Mobility &",
      subtitle: "Supply Chain",
      description:
        "Traditional logistics wastes margins with opaque, manual, and invisible operations.",
      features: [
        "Tech-enabled Logistics",
        "Route Optimization AI",
        "Real-time Visibility Tools",
        "Back-office Automation",
      ],
      isDark: false,
    },
  ];

  // Dynamically adjust slidesToShow based on current width
  const getSlidesToShow = () => {
    if (windowWidth < 640) return 1; // mobile
    if (windowWidth < 1280) return 2; // tablet
    return 3; // desktop
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="h-auto py-12 mb-12">
      <div className="relative">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="group flex absolute -left-5 sm:-left-8 md:-left-10 lg:-left-20 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-white shadow-lg items-center justify-center text-gray-800 hover:bg-gray-100 active:scale-90 transition-all z-10"
        >
          <ArrowLeft className="w-4 h-4 md:w-6 md:h-6 lg:w-9 lg:h-9 transition-transform duration-300 ease-in-out group-hover:-translate-x-1 lg:group-hover:-translate-x-2 group-active:-translate-x-1" />
        </button>

        <div className="px-2">
          <Slider key={windowWidth} ref={sliderRef} {...settings}>
            {services.map((service, index) => (
              <div key={index} className="px-3 py-4">
                <div
                  className={`relative p-6 rounded-[40px] shadow-xl flex flex-col transition-transform hover:scale-[1.02] min-h-[400px] ${
                    service.isDark
                      ? "bg-black text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  <div className="relative z-10 mt-4">
                    <h3 className="text-2xl font-bold leading-tight">
                      {service.title} <br />
                      <span className="text-[#00aeef]">{service.subtitle}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">
                      {service.description}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm font-medium"
                        >
                          <span className="text-[#00aeef] mr-3 font-bold text-lg">
                            »
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="group flex absolute -right-5 sm:-right-8 md:-right-10 lg:-right-20 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-black shadow-lg items-center justify-center text-[#00aeef] hover:bg-gray-900 active:scale-90 transition-all z-10"
        >
          <ArrowRight className="w-4 h-4 md:w-6 md:h-6 lg:w-9 lg:h-9 transition-transform duration-300 group-hover:translate-x-1 lg:group-hover:translate-x-2 group-active:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default ServiceCards;
