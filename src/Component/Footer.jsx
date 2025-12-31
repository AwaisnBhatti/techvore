import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row justify-between items-center bg-white py-4 px-6 md:px-20 lg:px-60 gap-4 md:gap-0">
        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img src="\images\logo.png" alt="Logo" className="h-32" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-6 w-full md:w-auto">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-black-600 text-lg hover:text-brand-blue"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-black-400 text-lg hover:text-brand-blue"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-black-600 text-lg hover:text-brand-blue"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </footer>

      <div className="bg-black text-white text-center py-2 text-sm w-full">
        <span>© All Rights Reserved By 2024-2025 | Design under</span>
      </div>
    </>
  );
};

export default Footer;
