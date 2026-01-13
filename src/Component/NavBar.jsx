import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/", dropdown: false },
    { name: "About Us", path: "/about", dropdown: false },
    {
      name: "Services",
      dropdown: false,
      path: "/services",
      items: [
        { label: "Web Dev", path: "/services/web-development" },
        { label: "App Dev", path: "/services/app-development" },
        { label: "Cloud", path: "/services/cloud" },
      ],
    },
    { name: "Careers", path: "/", dropdown: false },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
        setOpenSection(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={menuRef}
      className="bg-black text-white pl-6 pr-3 py-2 rounded-2xl flex items-center justify-between shadow-lg relative z-50"
    >
      {/* Logo */}
      <div
        className="flex items-center gap-2 text-white text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="w-16 h-8 rounded-sm flex items-center justify-center text-black font-bold">
          <img src={logo} alt="techvore logo" />
        </div>
        <span className="text-white font-bold text-2xl">Techvore</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center lg:gap-6 xl:gap-10 text-base font-medium">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            {!link.dropdown ? (
              <Link
                to={link.path}
                className="hover:text-blue-400 transition"
                onClick={() => setOpenSection(null)}
              >
                {link.name}
              </Link>
            ) : (
              <>
                <button
                  className={`flex items-center gap-1 cursor-pointer transition ${
                    openSection === link.name
                      ? "text-blue-400"
                      : "hover:text-blue-400"
                  }`}
                  onClick={() =>
                    setOpenSection(openSection === link.name ? null : link.name)
                  }
                >
                  {link.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      openSection === link.name ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 py-4 px-6 rounded-lg shadow-2xl z-50 min-w-[160px]
                  transition-all duration-300 ease-out ${
                    openSection === link.name
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                  style={{
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  {link.items.map((item) => (
                    <div
                      key={item.label}
                      className="py-2 text-black hover:text-brand-blue cursor-pointer text-sm font-semibold transition-colors"
                      onClick={() => {
                        navigate(item.path);
                        setOpenSection(null);
                      }}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <button
        onClick={() => navigate("/contact")}
        className="hidden lg:flex bg-brand-blue hover:bg-brand-blue-dark text-white px-4 py-3 rounded-full items-center gap-2 text-base font-medium whitespace-nowrap transition duration-300 group"
      >
        Consult Our Experts
        <ChevronRight
          size={16}
          className="mt-1 transition-transform duration-300 group-hover:translate-x-2"
        />
      </button>

      {/* Mobile Menu Button */}
      <button
        className={`lg:hidden relative z-[60] transition ${
          openMenu ? "text-blue-400" : "text-white"
        }`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`bg-black/30 fixed text-lg inset-0 flex flex-col items-center justify-center gap-6 lg:hidden
          transition-all duration-300 ease-out ${
            openMenu
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        style={{
          zIndex: 55,
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="relative w-full flex flex-col items-center"
          >
            {!link.dropdown ? (
              <Link
                to={link.path}
                className="text-white text-xl font-[410] hover:text-blue-400 w-full text-center py-2"
                onClick={() => setOpenMenu(false)}
              >
                {link.name}
              </Link>
            ) : (
              <>
                <button
                  className={`flex items-center gap-1 text-black cursor-pointer w-full justify-center ml-4 ${
                    openSection === link.name
                      ? "text-blue-400"
                      : "hover:text-blue-400"
                  }`}
                  onClick={() =>
                    setOpenSection(openSection === link.name ? null : link.name)
                  }
                >
                  {link.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      openSection === link.name ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {openSection === link.name && (
                  <div
                    className="flex flex-col w-full mt-2 text-black py-2 rounded-lg"
                    style={{
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    {link.items.map((item) => (
                      <div
                        key={item.label}
                        className="py-2 hover:text-brand-blue cursor-pointer text-sm font-medium text-center"
                        onClick={() => {
                          navigate(item.path);
                          setOpenMenu(false);
                          setOpenSection(null);
                        }}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}

        <button
          onClick={() => {
            navigate("/contact");
            setOpenMenu(false);
          }}
          className="bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-3 rounded-full flex items-center gap-2 text-base font-medium transition duration-300 group"
        >
          Consult Our Experts
          <ChevronRight
            size={16}
            className="mt-1 transition-transform duration-300 group-hover:translate-x-2"
          />
        </button>
      </div>
    </nav>
  );
}
