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
    <section className="w-full bg-black rounded-[40px] overflow-hidden flex flex-col sm:flex-row items-center shadow-2xl xl:px-10">
      {/* The source image is portrait (1024x1350), so width is what makes it bigger. */}
      <div className="flex justify-center w-full sm:w-[40%] lg:w-[45%]">
        <img
          src={truckingCard}
          alt="Volvo FH16 truck"
          width="1024"
          height="1350"
          loading="lazy"
          decoding="async"
          className="w-full max-w-sm sm:max-w-none h-auto object-contain"
        />
      </div>

      <div className="w-full sm:w-[60%] lg:w-[55%] flex flex-col items-center sm:items-start p-6 sm:px-4 sm:py-8 lg:px-8">
        <p className="text-brand-blue tracking-widest text-xs sm:text-sm uppercase">
          Strategic approach
        </p>

        <h2 className="text-white text-xl sm:text-[clamp(1.125rem,3vw,1.875rem)] font-bold mt-4 mb-6 lg:mb-8 leading-tight whitespace-nowrap">
          Why Choose{" "}
          <span className="bg-brand-blue p-2 rounded-2xl inline-block">
            Techvore
          </span>
        </h2>

        <ul className="space-y-6 sm:space-y-4 lg:space-y-6">
          {FEATURES.map((feature) => (
            <li
              key={feature}
              className="flex items-center whitespace-nowrap text-white text-[13px] sm:text-[clamp(0.75rem,1.9vw,1rem)]"
            >
              <Check
                aria-hidden="true"
                className="text-brand-blue mr-3 sm:mr-4 shrink-0"
                size={18}
                strokeWidth={3}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 sm:mt-12 text-gray-400 italic text-xs sm:text-[clamp(0.75rem,1.9vw,1rem)] whitespace-nowrap">
          We Keep You Rolling, So You Keep Earning.
        </p>
      </div>
    </section>
  );
}
