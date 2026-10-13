import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutUsBgImage from "../assets/AboutUs.webp";

export default function AboutUsSection() {
  return (
    <section className="w-full flex justify-center pt-8 sm:pt-2 lg:pt-8 pb-12">
      <div className="relative w-full">
        {/* Background image card */}
        <div
          className="shadow-xl h-[500px] md:h-[600px] lg:h-[500px] rounded-lg rounded-tr-[80px] bg-cover bg-[position:20%_center] sm:bg-[position:40%_center]"
          style={{ backgroundImage: `url(${aboutUsBgImage})` }}
        >
          {/* Frosted card (tablet and up) */}
          <div className="absolute right-0 z-40 min-h-[450px] w-[22rem] top-[25rem] md:w-[30rem] md:top-[30rem] lg:w-[29rem] lg:top-[23rem] xl:w-[36rem] xl:top-[27rem] -translate-y-1/2">
            <div className="hidden sm:block relative overflow-hidden rounded-l-[80px] border border-white/[0.08] p-8 md:p-14 backdrop-blur-[14px]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                Techvore Philosophy
              </h2>
              <p className="text-white/90 leading-relaxed text-[13px] md:text-[15px] mb-4 text-center">
                Techvore operates at the intersection of digital ingenuity and
                physical execution. We don’t just build software, we engineer
                the systems that move industries. By synthesizing high-tier
                Python automation, blockchain security, and data-driven
                logistics, we provide a unified ecosystem where complex code
                drives real-world results. For us, innovation isn’t a goal, it
                is the engine that powers global operations, ensuring our
                partners stay agile in an increasingly automated world.
              </p>
            </div>
          </div>

          {/* Vertical "About Us" label (hidden on mobile) */}
          <Link
            to="/about"
            className="group absolute bottom-24 left-[-50px] z-50 hidden sm:block sm:pl-12 sm:pb-10"
          >
            <span className="flex items-center whitespace-nowrap -rotate-90 origin-bottom-left text-xl font-semibold uppercase tracking-widest text-[#382f68] transition-colors group-hover:text-brand-blue">
              <span aria-hidden="true" className="mr-4 text-3xl">
                &larr;
              </span>
              About Us
            </span>
          </Link>
        </div>

        {/* Mobile card (below 640px) */}
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

        <div className="mt-[2rem] md:mt-[5rem] lg:mt-[2rem] flex justify-center sm:justify-start">
          <Link
            to="/about"
            className="group inline-flex items-center rounded-full bg-brand-blue px-4 py-3 font-semibold text-white transition duration-300 hover:bg-brand-blue-dark"
          >
            Learn More About Us
            <ChevronRight
              aria-hidden="true"
              size={16}
              className="mt-1 ml-3 transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
