import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Cpu,
  Zap,
  Server,
  Cloud,
  Smartphone,
  Scale,
  Lock,
  Users,
  AlertCircle,
  Database,
  Bot,
  RefreshCw,
  ShieldCheck,
  Gauge,
  Workflow,
  Lightbulb,
  FileCode,
  Coins,
  Network,
  Eye,
  Blocks,
  Layers,
  FileCog,
  Radar,
  Route,
  Truck,
} from "lucide-react";

const Services = [
  {
    id: "digital-engineering",
    title: "Digital Product Engineering",
    description:
      "Transforming visionary concepts into market dominant digital products through modern, scalable engineering.",
    icon: Cpu,
    bgAccent: "bg-brand-blue",
    lightBg: "from-sky-50 to-white",
    logoGradient: "from-blue-500 to-cyan-400",
    problemsSolutions: [
      {
        problem: "Ideas stalled by poor execution",
        solution:
          "We transform visionary concepts into market dominant digital products.",
        icon: Zap,
      },
      {
        problem: "Outdated or limiting technology",
        solution:
          "We build on modern, future ready tech stacks designed for long term growth.",
        icon: Server,
      },
      {
        problem: "Products that fail under real world traffic",
        solution:
          "We engineer high traffic Web platforms that scale from day one.",
        icon: Cloud,
      },
      {
        problem: "Unreliable or fragile mobile ecosystems",
        solution:
          "We deliver mission critical Mobile systems built for stability and performance.",
        icon: Smartphone,
      },
      {
        problem: "Lack of scalability planning",
        solution:
          "Scalability is embedded into the architecture from the very beginning.",
        icon: Scale,
      },
      {
        problem: "Low availability and security risks",
        solution:
          "We build high availability, secure systems by design not as afterthoughts.",
        icon: Lock,
      },
      {
        problem: "Poor user experience and weak retention",
        solution:
          "We create intuitive digital assets that capture market share and drive user retention.",
        icon: Users,
      },
    ],
  },
  {
    id: "data-intelligence",
    title: "Data Intelligence & Architecture",
    description:
      "Turning raw data into actionable insights and strategic advantages through robust architecture and predictive intelligence.",
    icon: Database, // replace with your chosen database icon
    bgAccent: "bg-brand-blue",
    lightBg: "from-sky-50 to-white",
    logoGradient: "from-blue-500 to-cyan-400",
    problemsSolutions: [
      {
        problem: "You have data, but still guessing",
        solution:
          "We turn raw information into actionable insights through advanced analytics and predictive intelligence.",
        icon: Zap, // or another relevant icon
      },
      {
        problem: "Disorganized or messy databases",
        solution:
          "We architect robust, well structured database environments for reliability and scalability.",
        icon: Server,
      },
      {
        problem: "Data not driving decisions",
        solution:
          "We streamline your data infrastructure so leadership can make decisions backed by real time intelligence.",
        icon: Cloud,
      },
      {
        problem: "Lack of competitive advantage from data",
        solution:
          "We transform data into strategic assets that give you measurable market advantage.",
        icon: Scale,
      },
    ],
  },
  {
    id: "autonomous-operations",
    title: "Autonomous Business Operations",
    description:
      "Building intelligent, self running systems that eliminate operational friction and unlock organizational momentum.",
    icon: Bot, // or Settings / Workflow icon
    bgAccent: "bg-brand-blue",
    lightBg: "from-sky-50 to-white",
    logoGradient: "from-blue-500 to-cyan-400",
    problemsSolutions: [
      {
        problem: "Human talent tied up in repetitive, manual work",
        solution:
          "We automate routine workflows using sophisticated Python driven systems.",
        icon: RefreshCw,
      },
      {
        problem: "Creativity and innovation stifled by low value tasks",
        solution:
          "By automating the repetitive, we free your people to focus on growth and strategy.",
        icon: Lightbulb,
      },
      {
        problem: "Slow, friction filled internal processes",
        solution:
          "We rebuild internal workflows to run efficiently and without friction.",
        icon: Workflow,
      },
      {
        problem: "Operational drag limiting organizational momentum",
        solution:
          "Through Business Process Transformation, we create systems that execute autonomously at scale.",
        icon: Gauge,
      },
      {
        problem: "Lack of sustainable operational advantage",
        solution:
          "We turn efficiency into a competitive moat with smart, self running systems.",
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: "blockchain-web3",
    title: "Blockchain Architecture & Web3",
    description:
      "Designing decentralized, trustless systems that enable transparency, security, and frictionless global value exchange.",
    icon: Blocks, // or Link / Cube icon
    bgAccent: "bg-brand-blue",
    lightBg: "from-sky-50 to-white",
    logoGradient: "from-blue-500 to-cyan-400",
    problemsSolutions: [
      {
        problem: "Opaque asset management systems",
        solution:
          "We create transparent, verifiable blockchain based architectures.",
        icon: Eye,
      },
      {
        problem: "Slow and inefficient legacy processes",
        solution:
          "We design decentralized systems that enable fast, frictionless global exchange.",
        icon: Zap,
      },
      {
        problem: "Centralized points of failure",
        solution:
          "We build distributed, tamper resistant frameworks that remove single points of control.",
        icon: Network,
      },
      {
        problem: "Risk of data manipulation or loss of trust",
        solution:
          "We ensure immutability and data integrity through blockchain truths.",
        icon: ShieldCheck,
      },
      {
        problem: "Illiquid physical and digital assets",
        solution:
          "We tokenize assets like real estate to enable fractional ownership and liquidity.",
        icon: Coins,
      },
      {
        problem: "Dependence on intermediaries",
        solution:
          "We deploy smart contracts and decentralized frameworks that eliminate middlemen.",
        icon: FileCode,
      },
    ],
  },
  {
    id: "integrated-mobility",
    title: "Integrated Mobility & Supply Chain",
    description:
      "Transforming logistics and supply chain operations into transparent, automated, and tech enabled mobility platforms for scalable efficiency.",
    icon: Truck, // or Logistics / Map icon
    bgAccent: "bg-brand-blue",
    lightBg: "from-sky-50 to-white to-white",
    logoGradient: "from-blue-500 to-cyan-400",
    problemsSolutions: [
      {
        problem: "“Black box” logistics operations",
        solution:
          "We introduce data driven systems that bring transparency and control to fleet operations.",
        icon: Eye,
      },
      {
        problem: "Manual dispatching and guesswork",
        solution:
          "We deploy custom, automated dispatching to optimize decisions in real time.",
        icon: Cpu,
      },
      {
        problem: "Empty miles reducing profitability",
        solution:
          "We optimize routing so vehicles move more freight with less effort.",
        icon: Route,
      },
      {
        problem: "Lack of real time visibility",
        solution:
          "We connect fleets with live operational data to improve oversight and margins.",
        icon: Radar,
      },
      {
        problem: "Time consuming back office processes",
        solution:
          "We automate administrative workflows to eliminate operational drag.",
        icon: FileCog,
      },
      {
        problem: "Traditional trucking models hitting growth limits",
        solution:
          "We transform logistics businesses into high yield, tech enabled mobility platforms where code meets the concrete.",
        icon: Layers,
      },
    ],
  },
];

const DURATION = 8000;

// --------------------- Reusable Service Card ---------------------
function ServiceCard({ service }) {
  const [index, setIndex] = useState(0);
  const [rightHeight, setRightHeight] = useState(0);
  const startRef = useRef(Date.now());
  const frameRef = useRef(null);
  const rightRef = useRef(null);

  const currentProblem = service.problemsSolutions[index];
  const ProblemIcon = currentProblem.icon;

  // Animate problem rotation
  useEffect(() => {
    const animate = () => {
      if (Date.now() - startRef.current >= DURATION) {
        setIndex((prev) => (prev + 1) % service.problemsSolutions.length);
        startRef.current = Date.now();
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [service.problemsSolutions.length]);

  // Update left card height to match right column
  useEffect(() => {
    const updateHeight = () => {
      if (rightRef.current) {
        setRightHeight(rightRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [index]);

  return (
    <motion.div
      className="w-full flex items-center justify-center px-4 sm:px-6 py-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* LEFT CARD */}
        <div className="col-span-1 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-4 flex flex-col">
          <div
            className="bg-white rounded-2xl border border-slate-200 p-5 relative overflow-hidden flex flex-col"
            style={{ minHeight: rightHeight }}
          >
            <div
              className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-b ${service.lightBg} to-transparent`}
            />
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`p-2 rounded-xl bg-gradient-to-br ${service.logoGradient} flex items-center justify-center text-white`}
                >
                  <service.icon size={26} />
                </div>
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-slate-900">
                  {service.title}
                </h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-sm md:text-md lg:text-md mt-4 mb-4 flex-1">
                {service.description}
              </p>
              <button className="w-fit flex items-center gap-4 border border-slate-300 px-4 py-2 rounded-xl hover:bg-slate-50 text-sm sm:text-sm md:text-sm lg:text-sm group transition">
                Learn more
                <ArrowUpRight
                  size={14}
                  className="transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          ref={rightRef}
          className="col-span-1 md:col-span-5 lg:col-span-4 flex flex-col gap-4 mt-6 md:mt-0"
        >
          {/* PROBLEM CARD */}
          <div className="bg-slate-100 rounded-2xl px-6 py-5 min-h-[130px] relative overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 px-2 rounded-full bg-slate-700 flex items-center justify-center">
                <span className="text-white text-xs font-semibold tracking-wide">
                  Problem
                </span>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={"problem-" + index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex items-center"
              >
                <div className="flex items-start gap-3 w-full">
                  <div className="p-1 rounded-xl bg-slate-400 flex-shrink-0 flex items-center justify-center text-white">
                    <AlertCircle size={18} />
                  </div>
                  <p className="text-sm sm:text-sm md:text-md lg:text-md font-medium text-slate-700 line-clamp-3">
                    {currentProblem.problem}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SOLUTION CARD */}
          <div className="bg-white rounded-2xl border border-slate-200 px-6 py-5 min-h-[180px] relative overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`h-6 px-2 rounded-full ${service.bgAccent} flex items-center justify-center`}
              >
                <span className="text-white text-xs font-semibold tracking-wide">
                  Solution
                </span>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={"solution-" + index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex items-center"
              >
                <div className="flex items-start gap-3 w-full">
                  <div
                    className={`p-2 rounded-xl ${service.bgAccent} flex-shrink-0 flex items-center justify-center text-white`}
                  >
                    <ProblemIcon size={18} />
                  </div>
                  <p className="text-sm sm:text-sm md:text-md lg:text-md font-medium text-slate-700">
                    {currentProblem.solution}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --------------------- Main Rotating Services ---------------------
export default function RotatingServices() {
  return (
    <>
      {Services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </>
  );
}
