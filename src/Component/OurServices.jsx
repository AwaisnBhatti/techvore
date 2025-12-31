import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import CounterSection from "./Counter";
import Test from "./Test";
import Transcend from "./Transcend";

export default function ServicesSection() {
  const navigate = useNavigate();
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Top heading + button row */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          <div className="max-w-xl">
            <p className="text-brand-blue font-semibold text-base md:text-lg mb-2">
              Our Core Services
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Our Core Servi
              <span className="inline-block bg-brand-blue rounded-xl py-0">
                ces
              </span>
            </h2>

            <p className="text-black mt-4 md:mt-5 text-sm md:text-base">
              Comprehensive digital services engineered for scalability, speed,
              and strategic growth.
            </p>
          </div>

          <div className="self-start md:self-end mt-6 md:mt-0">
            <button
              onClick={() => navigate("/contact")}
              className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 px-5 md:px-3 rounded-full inline-flex items-center gap-3 shadow-md transition duration-300 group"
            >
              Contact Us
              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </div>
        </div>
      </div>
      <Test />
      {/* <Transcend /> */}
      <div className="mt-8 md:mt-0">{/* <CounterSection /> */}</div>
    </section>
  );
}
