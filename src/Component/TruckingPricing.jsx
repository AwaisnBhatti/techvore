const PRICING = [
  {
    type: "Cargo / Sprinter Van",
    fee: "7%",
    mile: "$1.50 - $2.00",
    gross5: ["$1,875", "$2,500"],
    gross6: ["$2,250", "$3,000"],
  },
  {
    type: "Box Truck",
    fee: "7%",
    mile: "$2.00 - $2.50",
    gross5: ["$4,000", "$5,000"],
    gross6: ["$4,800", "$6,000"],
  },
  {
    type: "Hot Shot",
    fee: "7%",
    mile: "$2.50 - $3.00",
    gross5: ["$6,250", "$7,500"],
    gross6: ["$7,500", "$9,000"],
  },
  {
    type: "Dry Van",
    fee: "6%",
    mile: "$2.00 - $2.50",
    gross5: ["$5,000", "$6,250"],
    gross6: ["$6,000", "$7,500"],
  },
  {
    type: "Reefer",
    fee: "6%",
    mile: "$2.50 - $3.00",
    gross5: ["$6,250", "$7,500"],
    gross6: ["$7,500", "$9,000"],
  },
  {
    type: "Flatbed",
    fee: "6%",
    mile: "$2.00 - $2.50",
    gross5: ["$6,250", "$7,500"],
    gross6: ["$7,500", "$9,000"],
  },
  {
    type: "Step Deck",
    fee: "6%",
    mile: "$2.50 - $3.00",
    gross5: ["$7,500", "$8,750"],
    gross6: ["$9,000", "$10,500"],
  },
  {
    type: "Power Only",
    fee: "6%",
    mile: "$2.50 - $3.00",
    gross5: ["$5,000", "$6,250"],
    gross6: ["$6,000", "$7,500"],
  },
];

const formatRange = ([low, high]) => `${low} - ${high}`;

function Stat({ label, children }) {
  return (
    <div>
      <dt className="text-brand-blue font-bold uppercase text-[10px] tracking-wider mb-1">
        {label}
      </dt>
      <dd className="font-bold text-black text-base leading-tight">
        {children}
      </dd>
    </div>
  );
}

function StackedRange({ range: [low, high] }) {
  return (
    <span className="flex flex-col">
      <span>{low} -</span>
      <span>{high}</span>
    </span>
  );
}

export default function PricingSection() {
  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto bg-white rounded-[30px] md:rounded-[40px] p-6 md:p-10 lg:p-16 shadow-sm">
        <div className="text-center mb-10 md:mb-16">
          <span className="block text-brand-blue uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">
            Strategic approach
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight">
            Our Services{" "}
            <span className="inline-block bg-brand-blue rounded-3xl p-2">
              Pricing
            </span>
          </h2>
        </div>

        {/* Mobile & tablet: cards */}
        <ul className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRICING.map(({ type, fee, mile, gross5, gross6 }) => (
            <li
              key={type}
              className="border border-gray-100 rounded-2xl p-6 bg-gray-50 flex flex-col justify-between"
            >
              <h3 className="text-xl font-black text-black mb-4 border-b border-gray-200 pb-2">
                {type}
              </h3>
              <dl className="grid grid-cols-2 gap-y-5 text-sm">
                <Stat label="Fee">{fee}</Stat>
                <Stat label="Avg/Mile">{mile}</Stat>
                <Stat label="Weekly (5-Day)">
                  <StackedRange range={gross5} />
                </Stat>
                <Stat label="Weekly (6-Day)">
                  <StackedRange range={gross6} />
                </Stat>
              </dl>
            </li>
          ))}
        </ul>

        {/* Desktop: table */}
        <div className="hidden lg:block">
          <table className="w-full text-left border-collapse">
            <caption className="sr-only">
              Dispatch pricing by truck type
            </caption>
            <thead>
              <tr className="border-b border-gray-300">
                <th scope="col" className="py-6 px-4">
                  Truck Type
                </th>
                <th scope="col" className="py-6 px-4">
                  Dispatch Fee
                </th>
                <th scope="col" className="py-6 px-4">
                  Avg. Per Mile
                </th>
                <th scope="col" className="py-6 px-4">
                  Weekly Gross (5-Day)
                </th>
                <th scope="col" className="py-6 px-4">
                  Weekly Gross (6-Day)
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              {PRICING.map(({ type, fee, mile, gross5, gross6 }) => (
                <tr
                  key={type}
                  className="border-b border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <th scope="row" className="py-6 px-4 font-black text-lg">
                    {type}
                  </th>
                  <td className="py-6 px-4">{fee}</td>
                  <td className="py-6 px-4 whitespace-nowrap">{mile}</td>
                  <td className="py-6 px-4 whitespace-nowrap">
                    {formatRange(gross5)}
                  </td>
                  <td className="py-6 px-4 whitespace-nowrap">
                    {formatRange(gross6)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
