import React from "react";
import { Check } from "lucide-react";
import truckingCard from "../assets/trucking2.jpg";

const TruckingCard = () => {
  const features = [
    "Dedicated Dispatcher Assigned to You",
    "24/7 Support",
    "No Contracts — Cancel Anytime",
    "Setup Assistance with Top Brokers",
    "Transparent Weekly Reports",
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full bg-black rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center shadow-2xl xl:px-24">
        {/* Left Side: Truck Image */}
        <div className="w-full flex justify-center">
          <img src={truckingCard} alt="Volvo FH16 Truck" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full flex flex-col items-center xl:items-start p-6 sm:px-4 sm:py-8 lg:px-8">
          <p className="text-brand-blue tracking-widest text-sm text-center">
            strategic approach.
          </p>

          <h2 className="text-white text-xl md:text-3xl font-bold my-4 mb-6 lg:mb-8 leading-tight text-center xl:text-start">
            Why Choose{" "}
            <span className="bg-brand-blue p-2 rounded-2xl inline-block mt-1">
              Techvore
            </span>
          </h2>

          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-white text-lg">
                <Check
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
      </div>
    </div>
  );
};

export default TruckingCard;
