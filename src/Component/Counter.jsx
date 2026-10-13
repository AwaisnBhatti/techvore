import { useEffect, useRef, useState } from "react";

const COUNTERS = [
  {
    shape: "circle",
    number: 18,
    labelBold: "Digital Solutions Delivered",
    labelNormal: "and counting more.",
  },
  {
    shape: "diamond",
    number: 5,
    labelBold: "Industries Served",
    labelNormal: " (Logistics, Fintech, Retail)",
  },
  {
    shape: "triangle",
    number: 8,
    labelBold: "Satisfied Clients",
    labelNormal: "and counting more.",
  },
];

const SHAPES = {
  circle: { offset: "translate(-80px, 60px)", el: <circle cx="50" cy="50" r="50" /> },
  diamond: { offset: "translate(-55px, 55px)", el: <polygon points="50,0 100,50 50,100 0,50" /> },
  triangle: { offset: "translate(-20px, 70px)", el: <polygon points="10,10 90,50 10,90" /> },
};

// Counts up from 0 to `end` once the element is at least half visible.
function useCountOnView(end, duration = 1200) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [started, end, duration]);

  return [count, ref];
}

function CounterItem({ shape, number, labelBold, labelNormal }) {
  const [count, ref] = useCountOnView(number);
  const { offset, el } = SHAPES[shape];

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3"
    >
      <div className="relative flex items-center justify-center h-20 sm:h-24 mb-4">
        <div
          aria-hidden="true"
          className="absolute z-10 opacity-90"
          style={{ transform: offset }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-28 h-28 sm:w-36 sm:h-36 fill-brand-blue"
          >
            {el}
          </svg>
        </div>
      </div>

      <p className="text-6xl sm:text-7xl font-extrabold text-black/90 -mt-2.5 sm:mt-0 z-20">
        {count}+
      </p>

      <p className="text-left text-lg text-gray-700 mt-5 max-w-[250px] font-medium leading-snug">
        <span className="font-bold">{labelBold}</span>
        <br />
        <span className="font-normal">{labelNormal}</span>
      </p>
    </div>
  );
}

export default function Counter() {
  return (
    <section className="max-w-7xl mx-auto mb-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6 lg:gap-12 md:pl-20">
        {COUNTERS.map((counter) => (
          <CounterItem key={counter.shape} {...counter} />
        ))}
      </div>
    </section>
  );
}
