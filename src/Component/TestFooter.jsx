import React from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const offices = [
    {
      country: "Pakistan",
      type: "Global Delivery Center",
      flag: "🇵🇰",
      address:
        "Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore, Punjab",
    },
    {
      country: "USA",
      type: "Regional Office",
      flag: "🇺🇸",
      address: "18 S 2nd Street #120 San Jose, CA, 95113, United States",
    },
    {
      country: "UAE",
      type: "Regional Office",
      flag: "🇦🇪",
      address:
        "Concord Tower, Dubai Internet City, 9th floor, Black Sea Business Center",
    },
    {
      country: "UK",
      type: "Regional Office",
      flag: "🇬🇧",
      address: "128 City Road London EC1V 2NX, United Kingdom",
    },
    {
      country: "KSA",
      type: "Regional Office",
      flag: "🇸🇦",
      address: "3141 Anas Ibn Malik Rd, Al Malqa, Riyadh 13521 KSA",
    },
  ];

  return (
    <footer className="bg-black text-white p-8 md:p-16 font-sans relative">
      {/* Floating "Let's Talk Business" Tab */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="bg-[#00d1b2] text-black px-4 py-8 rounded-l-2xl font-bold [writing-mode:vertical-lr] rotate-180 cursor-pointer hover:bg-white transition-colors">
          Let's Talk Business
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Navigation Row */}
        <div className="flex flex-wrap gap-8 justify-between mb-16 border-b border-gray-800 pb-8">
          <div className="w-10 h-10 bg-[#00d1b2] rounded-full flex items-center justify-center">
            {/* Logo Placeholder */}
            <div className="w-6 h-6 bg-black rounded-bl-full"></div>
          </div>

          <nav className="flex gap-12 text-sm font-medium">
            {[
              "Company",
              "Industries We Serve",
              "Services and Solutions",
              "Resources",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 cursor-pointer hover:text-[#00d1b2]"
              >
                {item} <span className="text-[10px]">▼</span>
              </div>
            ))}
          </nav>
        </div>

        {/* Office Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16 mb-16">
          {offices.map((office, index) => (
            <div key={index} className="max-w-xs">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold">
                  {office.country}{" "}
                  <span className="text-gray-400 font-normal text-sm">
                    ({office.type})
                  </span>
                </h3>
                <span className="text-xl">{office.flag}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {office.address}
              </p>
            </div>
          ))}
        </div>

        {/* Email Section */}
        <div className="mb-16">
          <a
            href="mailto:global.business@devsinc.com"
            className="text-xl md:text-2xl font-bold hover:text-[#00d1b2] transition-colors"
          >
            global.business@devsinc.com
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:row justify-between items-center pt-8 border-t border-gray-800 gap-6">
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>

          <div className="flex gap-6 items-center">
            <Facebook className="w-6 h-6 cursor-pointer hover:text-[#00d1b2]" />
            <Linkedin className="w-6 h-6 cursor-pointer hover:text-[#00d1b2]" />
            <Instagram className="w-6 h-6 cursor-pointer hover:text-[#00d1b2]" />
            <span className="text-2xl font-bold cursor-pointer hover:text-[#00d1b2]">
              𝕏
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
