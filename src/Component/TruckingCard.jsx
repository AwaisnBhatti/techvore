import { Check } from "lucide-react";
import truckingCard from "../assets/trucking2.webp";

const FEATURES = [
  "Dedicated Dispatcher Assigned to You",
  "24/7 Support",
  "No Contracts — Cancel Anytime",
  "Setup Assistance with Top Brokers",
  "Transparent Weekly Reports",
];

export default function TruckingCard() {
  return (
    <section className="w-full bg-black rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center shadow-2xl xl:px-10">
      {/* The source image is portrait (1024x1350), so width is what makes it bigger. */}
      <div className="flex justify-center w-full md:w-3/5">
        <img
          src={truckingCard}
          alt="Volvo FH16 truck"
          width="1024"
          height="1350"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="w-full md:w-2/5 flex flex-col items-center xl:items-start p-6 sm:px-4 sm:py-8 lg:px-8">
        <p className="text-brand-blue tracking-widest text-sm text-center uppercase">
          Strategic approach
        </p>

        <h2 className="text-white text-xl md:text-3xl font-bold mt-4 mb-6 lg:mb-8 leading-tight text-center xl:text-start">
          Why Choose{" "}
          <span className="bg-brand-blue p-2 rounded-2xl inline-block mt-1">
            Techvore
          </span>
        </h2>

        <ul className="space-y-6">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-center text-white text-lg">
              <Check
                aria-hidden="true"
                className="text-brand-blue mr-4 shrink-0"
                size={20}
                strokeWidth={3}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-gray-400 italic text-lg">
          We Keep You Rolling, So You Keep Earning.
        </p>
      </div>
    </section>
  );
}
