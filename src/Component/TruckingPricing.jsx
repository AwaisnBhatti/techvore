import React from "react";

const PricingSection = () => {
  const data = [
    {
      type: "Cargo / Sprinter Van",
      fee: "7%",
      mile: "$1.50 - $2.00",
      gross5: "$1,875 - $2,500",
      gross6: "$2,250 - $3,000",
    },
    {
      type: "Box Truck",
      fee: "7%",
      mile: "$2.00 - $2.50",
      gross5: "$4,000 - $5,000",
      gross6: "$4,800 - $6,000",
    },
    {
      type: "Hot Shot",
      fee: "7%",
      mile: "$2.50 - $3.00",
      gross5: "$6,250 - $7,500",
      gross6: "$7,500 - $9,000",
    },
    {
      type: "Dry Van",
      fee: "6%",
      mile: "$2.00 - $2.50",
      gross5: "$5,000 - $6,250",
      gross6: "$6,000 - $7,500",
    },
    {
      type: "Reefer",
      fee: "6%",
      mile: "$2.50 - $3.00",
      gross5: "$6,250 - $7,500",
      gross6: "$7,500 - $9,000",
    },
    {
      type: "Flatbed",
      fee: "6%",
      mile: "$2.00 - $2.50",
      gross5: "$6,250 - $7,500",
      gross6: "$7,500 - $9,000",
    },
    {
      type: "Step Deck",
      fee: "6%",
      mile: "$2.50 - $3.00",
      gross5: "$7,500 - $8,750",
      gross6: "$9,000 - $10,500",
    },
    {
      type: "Power Only",
      fee: "6%",
      mile: "$2.50 - $3.00",
      gross5: "$5,000 - $6,250",
      gross6: "$6,000 - $7,500",
    },
  ];

  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto bg-white rounded-[30px] md:rounded-[40px] p-6 md:p-10 lg:p-16 shadow-sm">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-brand-blue uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold lg:block">
            strategic approach.
          </span>
          <div className="relative inline-block mt-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black relative z-10 leading-tight">
              Our Services &{" "}
              <span className="inline-block bg-brand-blue rounded-3xl p-2">
                Pricing
              </span>
            </h2>
          </div>
        </div>

        {/* 1. MOBILE & TABLET VIEW (Cards) - Visible until 1024px (lg) */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((row, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl p-6 bg-gray-50 flex flex-col justify-between"
            >
              <h3 className="text-xl font-black text-black mb-4 border-b border-gray-200 pb-2">
                {row.type}
              </h3>
              <div className="grid grid-cols-2 gap-y-5 text-sm">
                <div>
                  <p className="text-brand-blue font-bold uppercase text-[10px] tracking-wider mb-1">
                    Fee
                  </p>
                  <p className="font-bold text-black text-base">{row.fee}</p>
                </div>
                <div>
                  <p className="text-brand-blue font-bold uppercase text-[10px] tracking-wider mb-1">
                    Avg/Mile
                  </p>
                  <p className="font-bold text-black text-base">{row.mile}</p>
                </div>
                <div>
                  <p className="text-brand-blue font-bold uppercase text-[10px] tracking-wider mb-1">
                    Weekly (5-Day)
                  </p>
                  {/* flex flex-col ensures the two prices stack vertically on mobile/tablet */}
                  <div className="flex flex-col font-bold text-black text-base leading-tight">
                    <span>{row.gross5.split(" - ")[0]} -</span>
                    <span>{row.gross5.split(" - ")[1]}</span>
                  </div>
                </div>
                <div>
                  <p className="text-brand-blue font-bold uppercase text-[10px] tracking-wider mb-1">
                    Weekly (6-Day)
                  </p>
                  {/* flex flex-col ensures the two prices stack vertically on mobile/tablet */}
                  <div className="flex flex-col font-bold text-black text-base leading-tight">
                    <span>{row.gross6.split(" - ")[0]} -</span>
                    <span>{row.gross6.split(" - ")[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. DESKTOP VIEW (Full Table) - Visible from 1024px upwards */}
        <div className="hidden lg:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-md border-b border-gray-300">
                <th className="py-6 px-4">Truck Type</th>
                <th className="py-6 px-4">Dispatch Fee</th>
                <th className="py-6 px-4">Avg. Per Mile</th>
                <th className="py-6 px-4">Weekly Gross (5-Day)</th>
                <th className="py-6 px-4">Weekly Gross (6-Day)</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {data.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 hover:bg-gray-50 transition-colors group"
                >
                  <td className="py-6 px-4 font-black text-lg">{row.type}</td>
                  <td className="py-6 px-4">{row.fee}</td>
                  <td className="py-6 px-4 whitespace-nowrap">{row.mile}</td>
                  <td className="py-6 px-4 whitespace-nowrap">{row.gross5}</td>
                  <td className="py-6 px-4 whitespace-nowrap">{row.gross6}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
