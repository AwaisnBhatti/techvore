import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item) => {
    setActive(item);
    setOpen(false);
  };

  return (
    <div className="w-full flex justify-center bg-transparent py-4">
      <nav
        ref={menuRef}
        className="w-[90%] lg:w-[80%] bg-black text-white pl-6 pr-3 py-2 rounded-2xl flex items-center justify-between shadow-lg relative z-50"
      >
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2 text-white text-xl font-bold">
            <div className="w-16 h-8 rounded-sm flex items-center justify-center text-black font-bold">
              <img src="\images\logo.png" alt="techvore logo" />
            </div>
            <span className="text-white font-bold text-2xl">Techvore</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center lg:gap-6 xl:gap-10 text-base font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Services", href: "/" },
            { name: "Career", href: "/" },
          ].map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer transition ${
                active === item.name ? "text-blue-400" : "hover:text-blue-400"
              } ${item.name === "Services" ? "flex items-center gap-1" : ""}`}
              onClick={() => setActive(item.name)}
            >
              <a href={item.href} className="flex items-center gap-1">
                {item.name}
                {item.name === "Services" && <ChevronDown size={18} />}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => navigate("/contact")}
          className="hidden lg:flex bg-brand-blue hover:bg-brand-blue-dark text-white px-4 py-3 
rounded-full items-center gap-2 text-base font-medium whitespace-nowrap transition duration-300 group"
        >
          Consult Our Experts
          <ChevronRight
            size={16}
            className="mt-1 transition-transform duration-300 group-hover:translate-x-2"
          />
        </button>

        {/* Mobile / Tablet Menu Button */}
        <button
          className={`lg:hidden transition ${
            open ? "text-blue-400" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile / Tablet Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-black rounded-2xl mt-3 py-6 flex flex-col items-center gap-6 lg:hidden
  transition-all duration-300 ease-out
  ${
    open
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-4 pointer-events-none"
  }`}
        >
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Career", href: "/career" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`cursor-pointer transition text-white ${
                active === item.name ? "text-blue-400" : "hover:text-blue-400"
              } ${item.name === "Services" ? "flex items-center gap-1" : ""}`}
              onClick={() => handleItemClick(item.name)}
            >
              {item.name}
              {item.name === "Services" && <ChevronDown size={18} />}
            </a>
          ))}

          <button
            onClick={() => navigate("/contact")}
            className="bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-3 
            rounded-full flex items-center gap-2 text-base font-medium transition duration-300 group"
          >
            Consult Our Experts
            <ChevronRight
              size={16}
              className="mt-1 transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </div>
      </nav>
    </div>
  );
}
