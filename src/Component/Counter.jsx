import React, { useEffect, useState, useRef } from "react";

// Define the data for the counter section
const counters = [
  {
    value: "382+",
    labelBold: "Digital Solutions Delivered",
    labelNormal: "and counting more.",
    shape: "circle",
    shapeClass: "fill-brand-blue",
    number: 382,
  },
  {
    value: "14+",
    labelBold: "Industries Served",
    labelNormal: " (Logistics, Fintech, Retail)",
    shape: "diamond",
    shapeClass: "fill-brand-blue",
    number: 14,
  },
  {
    value: "98+",
    labelBold: "Satisfied Clients",
    labelNormal: "and counting more.",
    shape: "triangle",
    shapeClass: "fill-brand-blue",
    number: 98,
  },
];

// Counter animation hook
const useCountOnView = (endValue, duration = 1200) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const increment = endValue / (duration / 16.6);

    const animate = () => {
      current += increment;
      if (current < endValue) {
        setCount(Math.floor(current));
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [start, endValue, duration]);

  return [count, ref];
};

// CounterShape Component
const CounterShape = ({
  shape,
  labelBold,
  labelNormal,
  shapeClass,
  number,
}) => {
  const [animatedNumber, ref] = useCountOnView(number);

  const shapeSize = "w-28 h-28 sm:w-36 sm:h-36";

  let shapeContent;
  switch (shape) {
    case "diamond":
      shapeContent = (
        <svg className={shapeSize} viewBox="0 0 100 100">
          <polygon points="50,0 100,50 50,100 0,50" className={shapeClass} />
        </svg>
      );
      break;
    case "triangle":
      shapeContent = (
        <svg className={shapeSize} viewBox="0 0 100 100">
          <polygon points="10,10 90,50 10,90" className={shapeClass} />
        </svg>
      );
      break;
    case "circle":
    default:
      shapeContent = (
        <svg className={shapeSize} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" className={shapeClass} />
        </svg>
      );
  }

  const containerHeightClass = "h-20 sm:h-24";

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-4 pb-20 w-full sm:w-1/2 md:w-1/3 lg:w-1/3"
    >
      <div
        className={`relative flex items-center justify-center ${containerHeightClass} mb-4`}
      >
        <div
          className="absolute z-10 opacity-90"
          style={{
            transform: "translate(0px, 0px)",
            ...(shape === "circle" && { transform: "translate(-115px, 55px)" }),
            ...(shape === "diamond" && { transform: "translate(-55px,55px)" }),
            ...(shape === "triangle" && {
              transform: "translate(-40px, 40px)",
            }),
          }}
        >
          {shapeContent}
        </div>
      </div>

      {/* Animated number */}
      <p className="text-6xl sm:text-7xl font-extrabold text-black/90 mt-[-10px] sm:mt-0 z-20">
        {animatedNumber}+
      </p>

      {/* Label */}
      <p className="text-left text-lg text-gray-700 mt-5 max-w-[250px] font-medium leading-snug">
        <span className="font-bold">{labelBold}</span>
        <br />
        <span className="font-normal">{labelNormal}</span>
      </p>
    </div>
  );
};

// Main CounterSection
const CounterSection = () => {
  return (
    <section className="font-sans pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6 lg:gap-12 md:pl-20">
          {counters.map((counter, index) => (
            <CounterShape key={index} {...counter} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
