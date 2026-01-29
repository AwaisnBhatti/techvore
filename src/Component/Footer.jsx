import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-8 md:px-20 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 relative z-10">
        {/* Column 1 */}
        <div className="space-y-6 md:col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Logo */}
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <div className="w-20 h-10 flex items-center justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white uppercase">
                techvore
              </h2>
              <p className="text-xs uppercase tracking-widest text-white">
                IT Solutions
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center lg:justify-start">
            {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-brand-blue transition"
              >
                <Icon size={18} className="text-white" />
              </a>
            ))}
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-sm leading-relaxed flex flex-col items-center lg:items-start">
            {/* Location */}
            <div className="flex items-start gap-3 justify-center lg:justify-start text-center lg:text-left">
              <div className="w-5 flex justify-center">
                <MapPin
                  size={20}
                  className="text-white shrink-0 ml-3 sm:ml-4 lg:mt-2 lg:ml-0"
                />
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Office: 30 N Gould St, Ste 100 Sheridan,
                <br />
                WY 82801 USA
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 justify-center lg:justify-start text-center lg:text-left">
              <div className="w-5 flex justify-center">
                <Mail size={18} className="text-white shrink-0 ml-3 lg:ml-0" />
              </div>
              <a
                href="mailto:info@techvorellc.com"
                className="hover:text-white transition"
              >
                info@techvorellc.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 justify-center lg:justify-start text-center lg:text-left mr-3 lg:mr-0 ">
              <div className="w-5 flex justify-center">
                <Phone
                  size={18}
                  className="text-white shrink-0 mr-5 lg:mr-0 lg:ml-1"
                />
              </div>
              <a
                href="tel:+12143072930"
                className="hover:text-white transition"
              >
                Primary: (214) 307-2930
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start text-center lg:text-left mr-3 lg:mr-0 ">
              <div className="w-5 flex justify-center">
                <Phone size={18} className="text-white shrink-0 lg:ml-1" />
              </div>
              <a
                href="tel:+12102015745"
                className="hover:text-white transition"
              >
                Secondary: (210) 201-5745
              </a>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="text-left">
          <h3 className="text-white font-bold text-lg mb-6">Company</h3>
          <ul className="space-y-3 text-sm">
            {["Why Techvore?", "Careers", "Hire Us", "Products", "Blog"].map(
              (item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-left">
          <h3 className="text-white font-bold text-lg mb-6">Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Web Development",
              "Mobile App Development",
              "UI UX Design",
              "Desktop App Development",
              "CRM Solutions",
              "Odoo",
            ].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="text-left">
          <h3 className="text-white font-bold text-lg mb-6">
            Dedicated Resources
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              ".Net Developer",
              "Mobile Developer",
              "PHP Developer",
              "Front-End Developer",
              "Web & Graphics Designer",
              "Technical Resource Outsourcing",
            ].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
