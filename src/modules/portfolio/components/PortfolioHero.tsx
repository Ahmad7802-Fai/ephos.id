"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function PortfolioHero() {
  const t = useTranslations("PortfolioHero");

  return (
    <section className="relative -mt-16 pt-32 pb-28 overflow-visible">

      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* glow kanan */}
        <div className="
          absolute -top-40 -right-40
          w-[600px] h-[600px]
          bg-[var(--primary)]/25
          rounded-full blur-[140px]
        " />

        {/* glow kiri */}
        <div className="
          absolute bottom-[-150px] left-[-150px]
          w-[500px] h-[500px]
          bg-indigo-500/15
          rounded-full blur-[140px]
        " />

        {/* radial center */}
        <div className="
          absolute inset-0
          bg-[radial-gradient(circle_at_60%_30%,rgba(59,130,246,0.18),transparent_60%)]
        " />

        {/* grid overlay (lebih halus) */}
        <div className="
          absolute inset-0 opacity-[0.02]
          bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          bg-[size:50px_50px]
        " />

      </div>

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              inline-flex items-center gap-2
              px-4 py-1.5 rounded-full text-xs
              bg-[var(--accent-soft)] border border-[var(--border)]
              text-[var(--primary)] mb-6 backdrop-blur
            "
          >
            <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse" />
            {t("badge")}
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-4xl md:text-6xl font-semibold
              leading-[1.2] tracking-tight
              text-[var(--text)]
            "
          >
            {t("title1")}

            <span className="block">
              {t("title2")}{" "}
              <span className="
                bg-gradient-to-r from-blue-400 to-indigo-500
                bg-clip-text text-transparent
              ">
                {t("titleHighlight")}
              </span>
            </span>
          </motion.h1>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              mt-5 text-[var(--text-muted)]
              text-base md:text-lg
              leading-relaxed max-w-2xl mx-auto
            "
          >
            {t("desc1")}{" "}
            <span className="text-[var(--primary)]">
              {t("highlight")}
            </span>{" "}
            {t("desc2")}
          </motion.p>

          {/* TRUST BADGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-center flex-wrap gap-3"
          >
            {[t("stat1"), t("stat2"), t("stat3")].map((item, i) => (
              <span
                key={i}
                className="
                  px-4 py-2 rounded-full text-xs font-semibold
                  bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500
                  text-black
                  shadow-[0_6px_20px_rgba(251,191,36,0.5)]
                  hover:scale-105 transition
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