"use client";

import { Container } from "@/components";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0F14] text-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 py-20">

        {/* 🔥 TOP GRID */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              ephostech.id
            </h2>

            {/* 🔥 COMPANY NAME */}
            <p className="mt-1 text-xs text-blue-400 font-medium">
              PT EPHOS INDONESIA SEJAHTERA
            </p>

            <p className="mt-4 text-sm text-white/60 max-w-sm leading-relaxed">
              Solusi digital untuk membantu bisnis berkembang melalui
              infrastruktur IT, cloud, dan sistem enterprise yang scalable.
            </p>

            {/* SOCIAL / TRUST */}
            <div className="mt-6 flex gap-3 text-xs text-white/40">
              <span>✔ 100+ Client</span>
              <span>✔ 99.9% Uptime</span>
            </div>
          </div>

          {/* MENU */}
          <div>
            <h3 className="font-semibold mb-4 text-white">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CTA + CONTACT */}
          <div>
            <h3 className="font-semibold mb-4 text-white">
              Konsultasi Gratis
            </h3>

            <p className="text-sm text-white/60 leading-relaxed">
              Diskusikan kebutuhan IT bisnis Anda bersama tim kami dan dapatkan solusi terbaik.
            </p>

            <a
              href="#"
              className="
                inline-block mt-5 px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-500 to-blue-600
                text-white text-sm font-medium
                shadow-[0_10px_30px_rgba(37,99,235,0.4)]
                hover:scale-[1.05]
                transition-all duration-300
              "
            >
              Mulai Konsultasi →
            </a>

            {/* CONTACT INFO */}
            <div className="mt-6 text-xs text-white/50 space-y-1">
              <p>Email: hello@ephos.id</p>
              <p>WhatsApp: +62 812-xxxx-xxxx</p>
            </div>
          </div>

        </div>

        {/* 🔥 DIVIDER */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} EphosTech — PT EPHOS INDONESIA SEJAHTERA
          </p>

          {/* RIGHT SIDE */}
          <div className="flex flex-col md:flex-row items-center gap-3 text-xs text-white/40">

            <div className="flex gap-5">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>

            {/* 🔥 CREDIT */}
            <p className="text-[11px] text-white/30">
              Crafted by{" "}
              <a
                href="https://ditelaga.digital"
                target="_blank"
                className="hover:text-white transition"
              >
                Ditelaga Creative Digital
              </a>
            </p>

          </div>

        </div>
      </Container>
    </footer>
  );
}