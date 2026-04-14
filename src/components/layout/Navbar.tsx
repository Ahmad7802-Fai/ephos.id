"use client";

import { useState } from "react";
import { Button, Container } from "@/components";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-transparent">
      
      <Container className="h-full flex items-center justify-between text-white">
        
        {/* Logo */}
        <h1 className="font-bold text-lg">
          ephos.id
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-blue-300 transition">Home</a>
          <a href="#" className="hover:text-blue-300 transition">Services</a>
          <a href="#" className="hover:text-blue-300 transition">Portfolio</a>
          <a href="#" className="hover:text-blue-300 transition">Contact</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button size="sm">Konsultasi</Button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </Container>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur text-white px-6 py-6 space-y-4">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">Services</a>
          <a href="#" className="block">Portfolio</a>
          <a href="#" className="block">Contact</a>

          <Button fullWidth>Konsultasi</Button>
        </div>
      )}
    </nav>
  );
}