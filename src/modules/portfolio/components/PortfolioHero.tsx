"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#020617] text-white">

      {/* 🔥 BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617] to-black" />

      {/* 🔥 BLUE RADIAL GLOW (EPHOS STYLE) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.25),transparent_60%)]" />

      {/* 🔥 FLOATING ORBS */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full top-[-120px] right-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full bottom-[-80px] left-[-80px]" />

      {/* 🔥 GRID OVERLAY (TECH FEEL) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

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
              text-blue-300 mb-6 backdrop-blur
            "
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Portfolio & Case Study
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-4xl md:text-6xl font-semibold
              leading-[1.2] tracking-tight
            "
          >
            Solusi Nyata

            <span className="block">
              yang{" "}
              <span className="
                bg-gradient-to-r from-blue-300 to-blue-500
                bg-clip-text text-transparent
              ">
                Memberikan Dampak
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
            Kami telah membantu berbagai perusahaan dalam membangun{" "}
            <span className="text-blue-400">
              IT Infrastructure, Cloud System, dan Enterprise Solution
            </span>{" "}
            yang stabil, scalable, dan siap berkembang.
          </motion.p>

          {/* TRUST BADGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-center flex-wrap gap-3"
          >
            {[
              "100+ Project Delivered",
              "99.9% Uptime",
              "Enterprise Ready",
            ].map((item, i) => (
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