import React, { useState, useEffect, useRef } from "react";

const ServiceCard = ({ service, isFirst }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform flex flex-col items-center lg:items-start ${
        isFirst ? "border-t-0 pt-0" : "border-t border-gray-100 pt-12"
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <h3 className="text-3xl font-semibold mb-5 text-slate-800 tracking-tight text-center lg:text-left">
        {service.title}
      </h3>
      <p className="text-slate-500 text-xl leading-relaxed mb-6 max-w-md text-center lg:text-left">
        {service.description}
      </p>
      <a
        href={service.link}
        className="group text-[#0091ffff] font-bold text-sm tracking-widest flex items-center gap-2 hover:text-[#00affe] transition-colors uppercase"
      >
        Learn more
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </a>
    </div>
  );
};

const Test = () => {
  const words = ["Possibilities", "Perspectives", "Innovations", "Solutions"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words.length]);

  const services = [
    {
      title: "Digital Product Engineering",
      description:
        "We turn ideas into scalable, secure digital products that lead the market and retain users.",
      link: "#",
    },
    {
      title: "Data Intelligence & Architecture",
      description:
        "Data becomes powerful when it delivers answers. We build smart databases and analytics systems.",
      link: "#",
    },
    {
      title: "Autonomous Business Operations",
      description:
        "Efficiency is your real edge. With Python powered automation, we streamline your workflows.",
      link: "#",
    },
    {
      title: "Blockchain Architecture & Web3",
      description:
        "We build the backbone of next gen global exchange using Web3 and Blockchain.",
      link: "#",
    },
    {
      title: "Integrated Mobility & Supply Chain",
      description:
        "We merge software precision with fleet operations, using data-driven dispatching.",
      link: "#",
    },
  ];

  return (
    <section className="py-8 sm:py-8 lg:py-12 px-6 md:px-16 lg:px-0 text-slate-900 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:items-start">
        {/* Left Side: STICKY Content */}
        <div className="lg:sticky lg:top-24 space-y-4 self-center lg:self-start flex flex-col items-center lg:items-start">
          <h1 className="text-5xl md:text-8xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-slate-900 text-center lg:text-left">
            Rede
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00affe] via-[#0091ffff] to-slate-900">
              fining
            </span>
          </h1>

          <h1 className="text-5xl md:text-8xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-slate-900 text-center lg:text-left">
            <span
              key={words[index]}
              className="inline-block animate-text-slide text-transparent bg-clip-text bg-gradient-to-r from-[#0091ffff] via-[#00affe] to-slate-900"
            >
              {words[index]}
            </span>
          </h1>
        </div>

        {/* Right Side: Animated scrolling list */}
        <div className="lg:pl-12 space-y-24">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} isFirst={idx === 0} />
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes textSlide {
            0% { opacity: 0; transform: translateY(20px); }
            15% { opacity: 1; transform: translateY(0); }
            85% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
          .animate-text-slide {
            animation: textSlide 3s ease-in-out infinite;
          }
        `,
        }}
      />
    </section>
  );
};

export default Test;
