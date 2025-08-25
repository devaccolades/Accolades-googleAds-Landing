import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="containers py-7 px-5 border-t border-gray-400">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p className="font-normal text-[#546e7a] text-center md:text-left text-sm md:text-base">
          © 2025 By Accolades Integrated
        </p>
        <div className="flex gap-3 md:gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="flex justify-center items-center bg-[#009689] text-white p-3 rounded-full hover:bg-[#00796b] transition"
          >
            <FiFacebook />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="flex justify-center items-center bg-[#009689] text-white p-3 rounded-full hover:bg-[#00796b] transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="flex justify-center items-center bg-[#009689] text-white p-3 rounded-full hover:bg-[#00796b] transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex justify-center items-center bg-[#009689] text-white p-3 rounded-full hover:bg-[#00796b] transition"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
