import React, { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/", dropdown: false },
    { name: "About Us", path: "/about", dropdown: false },
    {
      name: "Services",
      dropdown: true,
      items: [
        { label: "Web Dev", path: "/services/web-development" },
        { label: "App Dev", path: "/services/app-development" },
        { label: "Cloud", path: "/services/cloud" },
      ],
    },
    { name: "Careers", path: "/careers", dropdown: false },
  ];

  return (
    <footer className="bg-black text-white p-10 md:px-10 md:py-10 lg:px-20 font-sans relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* ROW 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto min-w-[120px] md:min-w-[55px] lg:min-width-[100px]">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-28 lg:h-[100px] w-auto object-contain"
            />
          </div>

          {/* Nav */}
          <nav className="flex flex-col md:flex-row gap-6 md:gap-10 items-center w-full md:w-auto">
            <div className="flex flex-row justify-center gap-5 sm:gap-6 md:gap-10 items-center flex-nowrap">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <button
                    className="flex items-center gap-1 text-[11px] sm:text-sm font-semibold hover:text-cyan-400 transition-colors uppercase tracking-wider whitespace-nowrap"
                    onClick={() => {
                      if (link.dropdown) {
                        setOpenSection(
                          openSection === link.name ? null : link.name
                        );
                      } else {
                        navigate(link.path);
                      }
                    }}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ease-out ${
                          openSection === link.name ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-4 bg-white text-black py-4 px-6 rounded-lg shadow-2xl z-50 min-w-[160px]
                      transition-all duration-300 ease-out origin-top
                      ${
                        openSection === link.name
                          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {link.items.map((item) => (
                        <div
                          key={item.label}
                          onClick={() => {
                            navigate(item.path);
                            setOpenSection(null);
                          }}
                          className="py-2 hover:text-cyan-600 cursor-pointer text-sm font-medium"
                        >
                          {item.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => navigate("/contact")}
              className="bg-brand-blue hover:bg-brand-blue-dark text-white 
              px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide
              flex items-center gap-2 transition duration-300 group whitespace-nowrap"
            >
              Talk to our team
              <ChevronRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </nav>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-y-12 md:gap-x-24 lg:gap-x-32">
          {/* Column 1 */}
          <div className="space-y-10 md:w-1/3">
            <div>
              <p className="font-bold text-sm mb-2">
                Pakistan{" "}
                <span className="text-gray-500 font-normal">
                  (Global Delivery Center) PK
                </span>
              </p>
              <p className="text-white text-sm leading-relaxed max-w-[280px] mx-auto md:mx-0">
                Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore,
                Punjab
              </p>
            </div>
            <div>
              <p className="font-bold text-sm mb-2">
                UK{" "}
                <span className="text-gray-500 font-normal">
                  (Regional Office) GB
                </span>
              </p>
              <p className="text-white text-sm leading-relaxed max-w-[280px] mx-auto md:mx-0">
                128 City Road London EC1V 2NX, United Kingdom
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-10 md:w-1/3 md:flex md:flex-col md:items-center">
            <div className="md:w-fit">
              <div>
                <p className="font-bold text-sm mb-2">
                  USA{" "}
                  <span className="text-gray-500 font-normal">
                    (Regional Office) US
                  </span>
                </p>
                <p className="text-white text-sm leading-relaxed max-w-[280px] mx-auto md:mx-0">
                  12000 Market Street #120 Reston, VA, 95113, United States
                </p>
              </div>
              <div className="mt-10">
                <p className="font-bold text-sm mb-2">
                  KSA{" "}
                  <span className="text-gray-500 font-normal">
                    (Regional Office) SA
                  </span>
                </p>
                <p className="text-white text-sm leading-relaxed max-w-[280px] mx-auto md:mx-0">
                  3141 Anas Ibn Malik Rd, Al Malqa, Riyadh 13521 KSA
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="md:w-1/3 md:flex md:justify-end">
            <div className="md:max-w-[280px]">
              <p className="font-bold text-sm mb-2">
                UAE{" "}
                <span className="text-gray-500 font-normal">
                  (Regional Office) AE
                </span>
              </p>
              <p className="text-white text-sm leading-relaxed mx-auto md:mx-0">
                Concord Tower, Dubai Internet City, 9th floor, Black Sea
                Business Center
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-24 pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">
              global.business@devsinc.com
            </h3>
            <div className="flex justify-center md:justify-start gap-6 text-xs text-gray-500 font-medium">
              <a href="#" className="hover:text-brand-blue uppercase">
                Terms and Conditions
              </a>
              <a href="#" className="hover:text-brand-blue uppercase">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-5 text-white">
            <Facebook
              size={20}
              className="hover:text-brand-blue cursor-pointer"
            />
            <Linkedin
              size={20}
              className="hover:text-brand-blue cursor-pointer"
            />
            <Instagram
              size={20}
              className="hover:text-brand-blue cursor-pointer"
            />
            <Twitter
              size={20}
              className="hover:text-brand-blue cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
