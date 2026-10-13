import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const WORDS = ["Possibilities", "Perspectives", "Innovations", "Solutions"];

const SERVICES = [
  {
    title: "Digital Product Engineering",
    description:
      "We turn ideas into scalable, secure digital products that lead the market and retain users.",
    link: "/services",
  },
  {
    title: "Data Intelligence & Architecture",
    description:
      "Data becomes powerful when it delivers answers. We build smart databases and analytics systems.",
    link: "/services",
  },
  {
    title: "Autonomous Business Operations",
    description:
      "Efficiency is your real edge. With Python powered automation, we streamline your workflows.",
    link: "/services",
  },
  {
    title: "Blockchain Architecture & Web3",
    description:
      "We build the backbone of next gen global exchange using Web3 and Blockchain.",
    link: "/services",
  },
  {
    title: "Integrated Mobility & Supply Chain",
    description:
      "We merge software precision with fleet operations, using data-driven dispatching.",
    link: "/trucking",
  },
];

const HEADING_CLASS =
  "block text-5xl md:text-8xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-slate-900 text-center lg:text-left";

// Fades/slides each item in as it enters the viewport (and back out when it leaves).
function ServiceCard({ title, description, link, isFirst }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center lg:items-start transition-all duration-1000 motion-reduce:transition-none ${
        isFirst ? "pt-0" : "border-t border-gray-100 pt-12"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
    >
      <h3 className="text-3xl font-semibold mb-5 text-slate-800 tracking-tight text-center lg:text-left">
        {title}
      </h3>
      <p className="text-slate-500 text-xl leading-relaxed mb-6 max-w-md text-center lg:text-left">
        {description}
      </p>
      <Link
        to={link}
        className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#0091ff] transition-colors hover:text-[#00affe]"
      >
        Learn more
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </div>
  );
}

export default function ServicesShowcase() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setWordIndex((i) => (i + 1) % WORDS.length),
      3000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 lg:py-12 px-6 md:px-16 lg:px-0 text-slate-900 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:items-start">
        {/* Sticky left side. One heading instead of two <h1>s (the home page already has one). */}
        <h2 className="lg:sticky lg:top-24 self-center lg:self-start flex flex-col items-center lg:items-start gap-4">
          <span className={HEADING_CLASS}>
            Rede
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00affe] via-[#0091ff] to-slate-900">
              fining
            </span>
          </span>
          <span
            key={WORDS[wordIndex]}
            aria-hidden="true"
            className={`${HEADING_CLASS} animate-text-slide text-transparent bg-clip-text bg-gradient-to-r from-[#0091ff] via-[#00affe] to-slate-900`}
          >
            {WORDS[wordIndex]}
          </span>
          <span className="sr-only">Possibilities</span>
        </h2>

        <div className="lg:pl-12 space-y-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} {...service} isFirst={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
