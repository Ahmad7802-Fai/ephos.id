"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EphosVisual() {
  return (
    <section className="relative -mt-16 pt-32 pb-28 overflow-visible">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)]" />

        <div className="absolute w-[500px] h-[500px] bg-[var(--primary)]/20 blur-[140px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/15 blur-[120px] rounded-full bottom-[-80px] right-[-80px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.4))]" />

      </div>

      <Container>
        <div className="relative z-20 text-center">

          {/* 🔥 LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="
              w-16 h-16 md:w-20 md:h-20
              rounded-2xl
              bg-white/5
              border border-white/10
              backdrop-blur
              flex items-center justify-center
              shadow-lg
            ">
              <Image
                src="/assets/favicon/LOGO_EPHOS1.png"
                alt="Ephos Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* 🔥 BRAND */}
          <motion.h2
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              text-[44px] sm:text-[68px] md:text-[110px]
              font-semibold tracking-[-0.02em] leading-none
              bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500
              bg-clip-text text-transparent
            "
          >
            EPHOSTECH
          </motion.h2>

          {/* SUB */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="
              text-[var(--text-muted)]
              text-xs sm:text-sm
              tracking-[0.35em]
              mt-3
            "
          >
            TECH · INFRASTRUCTURE · SYSTEM
          </motion.p>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="
              text-[var(--text-muted)]
              max-w-xl mx-auto mt-6
              text-sm md:text-base
              leading-relaxed
            "
          >
            Built on values. Driven by innovation. Focused on impact.
          </motion.p>

          {/* LINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="
              mt-10 h-[2px]
              bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent
              mx-auto opacity-60
            "
          />

        </div>
      </Container>
    </section>
  );
}