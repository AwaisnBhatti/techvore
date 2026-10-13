import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TruckingAbout() {
  return (
    <section className="my-20 flex flex-col items-center text-center">
      <span className="text-brand-blue uppercase tracking-[0.3em] text-sm font-bold mb-4">
        Who we are
      </span>

      <h2 className="relative mb-12 text-5xl md:text-6xl font-black text-black">
        About Us
        {/* Decorative highlight behind "Us" */}
        <span
          aria-hidden="true"
          className="absolute -right-2.5 -top-1 -z-10 h-[65px] w-[130px] -rotate-2 rounded-2xl bg-brand-blue opacity-80"
        />
      </h2>

      <div className="max-w-4xl space-y-8 leading-relaxed text-lg md:text-xl">
        <p>
          At Techvore, we believe your wheels should never stop turning. We are
          a U.S.-based professional truck dispatch service that helps
          owner-operators and small fleets find profitable loads, manage
          paperwork, and negotiate top-paying rates.
        </p>

        <p>
          Whether you drive a Box Truck, Reefer, Dry Van, or Flatbed, our
          dispatchers handle everything — from booking loads to managing broker
          setup and rate confirmations.
        </p>

        <p>
          Our mission is simple: Keep your truck loaded, reduce your stress, and
          help you earn more every mile.
        </p>
      </div>

      <Link
        to="/contact"
        className="group mt-12 inline-flex items-center gap-4 rounded-full bg-black px-10 py-4 text-xl text-white transition-colors hover:bg-gray-800"
      >
        Contact Us
        <ChevronRight
          aria-hidden="true"
          size={24}
          strokeWidth={2.5}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </section>
  );
}
