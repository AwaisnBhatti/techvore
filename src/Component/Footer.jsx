import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.webp";

// TODO: replace "#" with the real profile URLs.
const SOCIALS = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "Instagram", href: "#", Icon: FaInstagram },
];

const CONTACTS = [
  {
    Icon: MapPin,
    text: "Office: 30 N Gould St, Ste 100 Sheridan, WY 82801 USA",
    href: "https://www.google.com/maps/search/?api=1&query=30+N+Gould+St+Ste+100+Sheridan+WY+82801",
    external: true,
  },
  { Icon: Mail, text: "info@techvorellc.com", href: "mailto:info@techvorellc.com" },
  { Icon: Phone, text: "Primary: (214) 307-2930", href: "tel:+12143072930" },
  { Icon: Phone, text: "Secondary: (210) 201-5745", href: "tel:+12102015745" },
];

const COLUMNS = [
  {
    title: "Company",
    items: ["Why Techvore?", "Careers", "Hire Us", "Products", "Blog"],
  },
  {
    title: "Services",
    items: [
      "Web Development",
      "Mobile App Development",
      "UI UX Design",
      "Desktop App Development",
      "CRM Solutions",
      "Odoo",
    ],
  },
  {
    title: "Dedicated Resources",
    items: [
      ".Net Developer",
      "Mobile Developer",
      "PHP Developer",
      "Front-End Developer",
      "Web & Graphics Designer",
      "Technical Resource Outsourcing",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 px-8 md:px-20 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand + contact */}
        <div className="space-y-6 md:col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <img
              src={logo}
              alt=""
              width="326"
              height="247"
              loading="lazy"
              decoding="async"
              className="w-20 h-auto"
            />
            <div>
              <p className="text-xl font-bold text-white uppercase">techvore</p>
              <p className="text-xs uppercase tracking-widest text-white">
                IT Solutions
              </p>
            </div>
          </div>

          <ul className="flex gap-3 justify-center lg:justify-start">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-brand-blue transition"
                >
                  <Icon aria-hidden="true" size={18} className="text-white" />
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-4 text-sm leading-relaxed flex flex-col items-center lg:items-start">
            {CONTACTS.map(({ Icon, text, href, external }) => (
              <li
                key={text}
                className="flex items-start gap-3 justify-center lg:justify-start text-center lg:text-left"
              >
                <Icon
                  aria-hidden="true"
                  size={18}
                  className="text-white shrink-0 mt-0.5"
                />
                <a
                  href={href}
                  className="hover:text-white transition"
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {COLUMNS.map(({ title, items }) => (
          <div key={title}>
            <h3 className="text-white font-bold text-lg mb-6">{title}</h3>
            <ul className="space-y-3 text-sm">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
