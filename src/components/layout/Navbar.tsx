"use client";

import { useState, useEffect } from "react";
import { Button, Container } from "@/components";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-[#0B0F14]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"}
      `}
    >
      <Container className="h-16 flex items-center justify-between text-white">

        {/* LOGO */}
        <h1 className="font-semibold text-lg tracking-tight">
          ephos<span className="text-blue-400">.id</span>
        </h1>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">

          {["Home", "About", "Services", "Portfolio", "Contact"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="
                relative
                hover:text-white
                transition
              "
            >
              {item}

              {/* underline hover */}
              <span className="
                absolute left-0 -bottom-1 h-[2px] w-0
                bg-blue-400
                transition-all duration-300
                group-hover:w-full
              " />
            </a>
          ))}

        </div>

        {/* CTA DESKTOP */}
        <div className="hidden md:block">
          <Button size="sm">
            Konsultasi
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </Container>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-[400px]" : "max-h-0"}
        `}
      >
        <div className="bg-[#0B0F14]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-5 text-white">

          {["Home", "About", "Services", "Portfolio", "Contact"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="block text-white/80 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

          <Button fullWidth>
            Konsultasi Gratis
          </Button>

        </div>
      </div>
    </nav>
  );
}