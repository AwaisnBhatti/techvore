import { useEffect, useRef, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Trucking", path: "/trucking" },
];

function CtaLink({ className = "", ...props }) {
  return (
    <Link
      to="/contact"
      className={`group items-center gap-2 rounded-full bg-brand-blue text-base font-medium text-white transition duration-300 hover:bg-brand-blue-dark ${className}`}
      {...props}
    >
      Consult Our Experts
      <ChevronRight
        aria-hidden="true"
        size={16}
        className="mt-1 transition-transform duration-300 group-hover:translate-x-2"
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // Close the mobile menu on outside click or Escape.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className="bg-black text-white pl-6 pr-3 py-2 rounded-2xl flex items-center justify-between shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_10px_30px_-10px_rgba(0,0,0,0.5)] relative z-50"
    >
      <Link to="/" className="flex items-center gap-2 text-xl font-bold">
        <img
          src={logo}
          alt="Techvore logo"
          width="326"
          height="247"
          className="w-16 h-auto"
        />
        <span className="text-2xl font-bold">Techvore</span>
      </Link>

      {/* Desktop menu */}
      <ul className="hidden lg:flex items-center lg:gap-6 xl:gap-10 text-base font-medium">
        {NAV_LINKS.map(({ name, path }) => (
          <li key={name}>
            <Link to={path} className="hover:text-blue-400 transition">
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <CtaLink className="hidden lg:flex px-4 py-3 whitespace-nowrap" />

      {/* Mobile menu button */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className={`lg:hidden relative z-[60] transition ${
          open ? "text-blue-400" : "text-white"
        }`}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu. `inert` removes hidden links from tab order and screen readers. */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`bg-black/30 fixed inset-0 z-[55] flex flex-col items-center justify-center gap-6 border border-white/[0.08] text-lg backdrop-blur-[10px] transition-all duration-300 ease-out lg:hidden ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            onClick={closeMenu}
            className="w-full py-2 text-center text-xl font-[410] text-white hover:text-blue-400"
          >
            {name}
          </Link>
        ))}

        <CtaLink onClick={closeMenu} className="flex px-6 py-3" />
      </div>
    </nav>
  );
}
