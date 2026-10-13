import { useNavigate } from "react-router-dom";
import sme from "../assets/sme.webp";
import startup from "../assets/startup.webp";
import agencies from "../assets/agencies.webp";

export default function ClientsSection() {
  const navigate = useNavigate();

  return (
    <section className="pb-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-blue font-semibold text-lg mb-2">
          Our Clients
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight sm:text-left">
          We Work wi
          <span className="inline-block bg-brand-blue rounded-xl py-0">th</span>
        </h2>

        {/* Card 1 */}
        <div className="relative mt-12 bg-black text-white rounded-tl-[80px] p-12 flex flex-col md:flex-row items-center gap-10 min-h-[450px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 md:hidden bg-center bg-no-repeat bg-contain opacity-20 pointer-events-none"
            style={{ backgroundImage: `url(${sme})` }}
          />

          <div className="flex-1 relative text-center md:text-left">
            <h3 className="text-4xl font-bold mb-6">Enterprises</h3>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              We empower large-scale organizations with robust Data Management
              and Analytics Engineering. We help enterprises leverage their data
              to maintain a competitive edge and streamline complex operations.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <button
                type="button"
                onClick={() => navigate("/services")}
                className="bg-gray-200 text-black px-6 py-3 font-semibold hover:bg-gray-300 transition-all"
              >
                ENTERPRISE SOLUTIONS
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <img
              src={sme}
              alt="Enterprise data and analytics illustration"
              width="453"
              height="340"
              loading="lazy"
              decoding="async"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative mt-12 bg-black text-white p-12 flex flex-col md:flex-row items-center gap-10 min-h-[350px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 md:hidden bg-center bg-no-repeat bg-contain opacity-20 pointer-events-none"
            style={{ backgroundImage: `url(${startup})` }}
          />

          <div className="flex-1 md:flex-[2] relative text-center md:text-left">
            <h3 className="text-4xl font-bold mb-6">Startups</h3>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              We provide agile Bespoke Software and Automation Services that
              allow growing businesses to scale rapidly without the overhead of
              bloatware. Efficient, fast, and growth-oriented.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <button
                type="button"
                onClick={() => navigate("/services")}
                className="bg-gray-200 text-black px-6 py-3 font-semibold hover:bg-gray-300 transition-all"
              >
                SCALE WITH US
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <img
              src={startup}
              alt="Startup growth illustration"
              width="340"
              height="340"
              loading="lazy"
              decoding="async"
              className="max-h-72 w-auto object-contain"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative mt-12 bg-black text-white p-12 flex flex-col md:flex-row rounded-br-[80px] items-center gap-10 min-h-[350px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 md:hidden bg-center bg-no-repeat bg-contain opacity-20 pointer-events-none"
            style={{ backgroundImage: `url(${agencies})` }}
          />

          <div className="flex-1 md:flex-[2] relative text-center md:text-left">
            <h3 className="text-4xl font-bold mb-6">Logistics & Agencies</h3>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              Specialized support for the logistics sector. Our Truck Dispatch
              Services and database solutions ensure your fleet moves
              efficiently, minimizing downtime and maximizing profit.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <button
                type="button"
                onClick={() => navigate("/trucking")}
                className="bg-gray-200 text-black px-6 py-3 font-semibold hover:bg-gray-300 transition-all"
              >
                VIEW LOGISTICS TECH
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <img
              src={agencies}
              alt="Logistics and agencies illustration"
              width="294"
              height="340"
              loading="lazy"
              decoding="async"
              className="w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
