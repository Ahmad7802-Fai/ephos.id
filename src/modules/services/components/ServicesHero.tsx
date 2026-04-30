"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "6285285579492";

export default function ServicesHero() {
  const message = encodeURIComponent(
    "Halo Ephos Tech, saya ingin konsultasi terkait layanan IT."
  );

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <section className="relative py-32 overflow-hidden bg-[#020617] text-white">

      {/* 🔥 BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617] to-black" />

      {/* 🔥 RADIAL LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.25),transparent_60%)]" />

      {/* 🔥 FLOATING GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full bottom-[-80px] left-[-80px]" />

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              inline-flex items-center gap-2
              px-4 py-1.5 rounded-full text-xs
              bg-blue-500/10 border border-blue-400/20
              text-blue-300 mb-6
              backdrop-blur
            "
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Enterprise IT Services
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-4xl md:text-5xl lg:text-6xl
              font-semibold tracking-tight leading-[1.2]
            "
          >
            Layanan IT

            <span className="block">
              yang{" "}
              <span className="
                bg-gradient-to-r from-blue-300 to-blue-500
                bg-clip-text text-transparent
              ">
                End-to-End
              </span>
            </span>
          </motion.h1>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              mt-5 text-white/60 text-base md:text-lg
              leading-relaxed max-w-2xl mx-auto
            "
          >
            Kami membantu bisnis membangun, mengelola, dan mengembangkan
            infrastruktur IT yang scalable, secure, dan siap menghadapi pertumbuhan.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            {/* 🔥 PRIMARY CTA → WA */}
            <a
              href={waLink}
              target="_blank"
              className="
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-500 to-blue-600
                text-white font-medium
                shadow-[0_10px_30px_rgba(37,99,235,0.4)]
                hover:scale-[1.05]
                transition
              "
            >
              Konsultasi Gratis →
            </a>

            {/* SECONDARY */}
            <a
              href="/portfolio"
              className="
                px-6 py-3 rounded-xl
                border border-white/15
                text-white/80
                hover:bg-white/10
                transition
              "
            >
              Lihat Portfolio
            </a>
          </motion.div>

          {/* TRUST BADGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-center flex-wrap gap-3"
          >
            {["100+ Client", "99.9% Uptime", "24/7 Support"].map((item, i) => (
              <span
                key={i}
                className="
                  px-4 py-2 rounded-full text-xs font-semibold
                  bg-gradient-to-r from-yellow-400 to-amber-500
                  text-black
                  shadow-[0_6px_20px_rgba(251,191,36,0.5)]
                "
              >
                {item}
              </span>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}