import React from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function Nav() {
  const links = [
    { name: "Our Story", href: "/story" },
    { name: "Our Portfolio", href: "/portfolio" },
    { name: "Our Team", href: "/team" },
    { name: "Our Adventures", href: "/adventure" },
    { name: "Our Heritage", href: "/heritage" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-16 py-8 pointer-events-none">
      <Reveal>
        <Link to="/" className="pointer-events-auto">
          <img
            src="/assets/images/2024/Planning Logo_White.png"
            alt="Planning Logo"
            className="h-10 md:h-12 w-auto"
          />
        </Link>
      </Reveal>

      <div className="hidden lg:flex items-center gap-12 pointer-events-auto">
        {links.map((link, i) => (
          <Reveal key={link.name} delay={i * 50}>
            <Link
              to={link.href}
              className="text-sm text-white/80 hover:text-white tracking-widest uppercase transition-colors duration-300 font-light"
            >
              {link.name}
            </Link>
          </Reveal>
        ))}
        <Reveal delay={links.length * 50}>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full border border-white/30 text-white text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 font-light"
          >
            Contact Us
          </Link>
        </Reveal>
      </div>

      {/* Mobile Menu Trigger could go here */}
    </nav>
  );
}
