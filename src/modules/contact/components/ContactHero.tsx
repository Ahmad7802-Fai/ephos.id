"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "6285285579492"; // tanpa spasi & tanpa +

const message = encodeURIComponent(
  "Halo EphosTech.id, saya ingin konsultasi terkait kebutuhan IT bisnis saya."
);

export default function ContactHero() {
  return (
    <section className="relative py-32 bg-[#020617] text-white overflow-hidden">

      {/* BASE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617] to-black" />

      {/* RADIAL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.25),transparent_60%)]" />

      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-black/40" />

      <Container>
        <div className="relative z-10 text-center max-w-2xl mx-auto">

          {/* BADGE */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              inline-flex items-center gap-2
              px-4 py-1.5 mb-6
              text-xs font-medium
              rounded-full
              bg-blue-500/10 border border-blue-400/20
              text-blue-300
              backdrop-blur-md
            "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Contact Us
          </motion.span>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-3xl md:text-5xl
              font-semibold tracking-tight
              leading-[1.2]
            "
          >
            Konsultasikan Kebutuhan IT Bisnis

            <span className="block bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              dengan Tim Profesional Kami
            </span>
          </motion.h1>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-white/60 leading-relaxed"
          >
            Kami membantu bisnis membangun sistem yang stabil, scalable,
            dan siap berkembang melalui solusi IT end-to-end.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >

            {/* WHATSAPP CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
              target="_blank"
              className="
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-green-500 to-green-600
                text-white font-medium
                shadow-[0_10px_30px_rgba(34,197,94,0.4)]
                hover:scale-[1.05]
                transition
              "
            >
              Chat WhatsApp →
            </a>

            {/* SECOND CTA */}
            <a
              href="/#portfolio"
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {["100+ Client", "99.9% Uptime", "24/7 Support"].map((item, i) => (
              <span
                key={i}
                className="
                  px-4 py-2 rounded-full text-xs font-semibold
                  bg-gradient-to-r from-yellow-400 to-amber-500
                  text-black
                  shadow-[0_8px_25px_rgba(251,191,36,0.5)]
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