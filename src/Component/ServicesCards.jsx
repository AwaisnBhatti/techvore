import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SERVICES = [
  {
    id: "product-engineering",
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
    id: "data-intelligence",
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
    id: "business-operations",
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
    id: "blockchain",
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
    id: "supply-chain",
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

// Same breakpoints as before: 1 slide below 640px, 2 below 1280px, 3 above.
function getSlidesToShow() {
  if (window.matchMedia("(min-width: 1280px)").matches) return 3;
  if (window.matchMedia("(min-width: 640px)").matches) return 2;
  return 1;
}

// Updates only when a breakpoint is crossed, not on every resize pixel.
function useSlidesToShow() {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);

  useEffect(() => {
    const queries = [
      window.matchMedia("(min-width: 640px)"),
      window.matchMedia("(min-width: 1280px)"),
    ];
    const update = () => setSlidesToShow(getSlidesToShow());

    queries.forEach((q) => q.addEventListener("change", update));
    return () =>
      queries.forEach((q) => q.removeEventListener("change", update));
  }, []);

  return slidesToShow;
}

const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  arrows: false,
};

export default function ServicesCards() {
  const sliderRef = useRef(null);
  const slidesToShow = useSlidesToShow();

  return (
    <section className="py-12 mb-12">
      <div className="relative">
        <button
          type="button"
          aria-label="Previous service"
          onClick={() => sliderRef.current?.slickPrev()}
          className="group flex absolute -left-5 sm:-left-8 md:-left-10 lg:-left-20 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-white shadow-lg items-center justify-center text-gray-800 hover:bg-gray-100 active:scale-90 transition-all z-10"
        >
          <ArrowLeft
            aria-hidden="true"
            className="w-4 h-4 md:w-6 md:h-6 lg:w-9 lg:h-9 transition-transform duration-300 ease-in-out group-hover:-translate-x-1 lg:group-hover:-translate-x-2 group-active:-translate-x-1"
          />
        </button>

        <div className="px-2">
          <Slider
            key={slidesToShow}
            ref={sliderRef}
            slidesToShow={slidesToShow}
            {...SLIDER_SETTINGS}
          >
            {SERVICES.map(
              ({ id, title, subtitle, description, features, isDark }) => (
                <div key={id} className="px-3 py-4">
                  <div
                    className={`relative flex flex-col min-h-[400px] p-6 rounded-[40px] shadow-xl transition-transform hover:scale-[1.02] ${
                      isDark ? "bg-black text-white" : "bg-white text-gray-900"
                    }`}
                  >
                    <div className="mt-4">
                      <h3 className="text-2xl font-bold leading-tight">
                        {title} <br />
                        <span className="text-[#00aeef]">{subtitle}</span>
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed opacity-90">
                        {description}
                      </p>
                      <ul className="mt-8 space-y-3">
                        {features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-sm font-medium"
                          >
                            <span
                              aria-hidden="true"
                              className="text-[#00aeef] mr-3 font-bold text-lg"
                            >
                              »
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ),
            )}
          </Slider>
        </div>

        <button
          type="button"
          aria-label="Next service"
          onClick={() => sliderRef.current?.slickNext()}
          className="group flex absolute -right-5 sm:-right-8 md:-right-10 lg:-right-20 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-black shadow-lg items-center justify-center text-[#00aeef] hover:bg-gray-900 active:scale-90 transition-all z-10"
        >
          <ArrowRight
            aria-hidden="true"
            className="w-4 h-4 md:w-6 md:h-6 lg:w-9 lg:h-9 transition-transform duration-300 group-hover:translate-x-1 lg:group-hover:translate-x-2 group-active:translate-x-1"
          />
        </button>
      </div>
    </section>
  );
}
