"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

export default function EphosVisual() {
  return (
    <section className="relative py-40 bg-[#020617] overflow-hidden">

      {/* 🔥 SMOOTH TRANSITION DARI SECTION ATAS */}
      <div className="absolute top-0 left-0 w-full h-48 
        bg-gradient-to-b from-white/80 via-white/30 to-transparent 
        blur-[2px] pointer-events-none z-10" 
      />

      {/* 🔥 BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617] to-black" />

      {/* 🔥 RADIAL CENTER LIGHT */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.25),transparent_60%)]" 
      />

      {/* 🔥 GLOW ORBS */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full bottom-[-80px] right-[-80px]" />

      {/* 🔥 VIGNETTE (DEPTH) */}
      <div className="absolute inset-0 bg-black/50" />

      <Container>
        <div className="relative z-20 text-center">

          {/* 🔥 BIG BRAND TEXT */}
          <motion.h2
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              text-[48px] sm:text-[72px] md:text-[120px]
              font-bold tracking-tight leading-none
              bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600
              bg-clip-text text-transparent
            "
          >
            EPHOSTECH.ID
          </motion.h2>

          {/* 🔥 SUB BRAND */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="
              text-blue-400/80 
              text-xs sm:text-sm 
              tracking-[0.4em] 
              mt-3
            "
          >
            TECH · INFRASTRUCTURE · SYSTEM
          </motion.p>

          {/* 🔥 TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="
              text-white/60
              max-w-xl mx-auto mt-6
              text-sm md:text-lg
              leading-relaxed
            "
          >
            Built on values. Driven by innovation. Focused on impact.
          </motion.p>

          {/* 🔥 SUBTLE LINE */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="
              mt-10 h-[2px]
              bg-gradient-to-r from-transparent via-blue-500 to-transparent
              mx-auto opacity-60
            "
          />

        </div>
      </Container>
    </section>
  );
}