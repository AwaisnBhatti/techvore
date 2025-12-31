import React from "react";

export default function ClientsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-blue font-semibold text-lg mb-2">
          Our Clients
        </p>
        <h2 className=" text-4xl sm:text-5xl font-extrabold text-black leading-tight">
          We Work wi
          <span className="inline-block bg-brand-blue rounded-xl py-0">th</span>
        </h2>

        {/* Card 1 */}
        <div className="mt-12 bg-black text-white rounded-tl-[80px] p-12 flex flex-col md:flex-row items-center gap-10 min-h-[450px]">
          {/* Text Section */}
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-6">Enterprises</h3>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              We empower large-scale organizations with robust Data Management
              and Analytics Engineering. We help enterprises leverage their data
              to maintain a competitive edge and streamline complex operations.
            </p>

            <div className="flex gap-4">
              <button className="bg-gray-200 text-black px-6 py-3 font-semibold hover:bg-gray-300 transition-all">
                ENTERPRISE SOLUTIONS
              </button>
            </div>
          </div>

          {/* Image - hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-center">
            <img
              src="\images\sme.png"
              alt="SME Illustration"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="mt-12 bg-black text-white p-12 flex flex-col md:flex-row items-center gap-10 min-h-[350px]">
          {/* Text Section */}
          <div className="flex-1 md:flex-[2]">
            <h3 className="text-4xl font-bold mb-6">Startups</h3>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              We provide agile Bespoke Software and Automation Services that
              allow growing businesses to scale rapidly without the overhead of
              bloatware. Efficient, fast, and growth-oriented.
            </p>

            <div className="flex gap-4">
              <button className="bg-gray-200 text-black px-6 py-3 font-semibold hover:bg-gray-300 transition-all">
                SCALE WITH US
              </button>
            </div>
          </div>

          {/* Image - hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-center max-h-72 overflow-hidden">
            <img
              src="\images\startup.png"
              alt="SME Illustration"
              className="w-auto max-w-md object-contain"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="mt-12 bg-black text-white p-12 flex flex-col md:flex-row rounded-br-[80px] items-center gap-10 min-h-[350px]">
          {/* Text Section */}
          <div className="flex-1 md:flex-[2]">
            <h3 className="text-4xl font-bold mb-6">Logistics & Agencies</h3>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              Specialized support for the logistics sector. Our Truck Dispatch
              Services and database solutions ensure your fleet moves
              efficiently, minimizing downtime and maximizing profit.
            </p>

            <div className="flex gap-4">
              <button className="bg-gray-200 text-black px-6 py-3 font-semibold hover:bg-gray-300 transition-all">
                VIEW LOGISTICS TECH
              </button>
            </div>
          </div>

          {/* Image - hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-center max-h-72 overflow-hidden">
            <img
              src="/images/agencies.png"
              alt="Agencies Illustration"
              className="h-50 w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
