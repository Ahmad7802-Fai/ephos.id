"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function GalleryHero() {
  const t = useTranslations("Gallery");

  return (
    <section className="relative -mt-16 pt-32 pb-28 overflow-visible">

      {/* BASE BG */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* 🔥 PREMIUM GLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.15),transparent_60%)]" />
      </div>

      <Container className="relative z-10 text-center">

        {/* BADGE */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            inline-flex items-center gap-2
            px-4 py-1.5 text-xs font-medium
            rounded-full
            bg-[var(--accent-soft)]
            text-[var(--primary)]
            mb-6
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
          {t("badge")}
        </motion.span>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            text-3xl md:text-4xl lg:text-[40px]
            font-semibold
            tracking-tight
            leading-[1.2]
            text-[var(--text)]
          "
        >
          {t("title")}
        </motion.h1>

        {/* DESC */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-4 max-w-xl mx-auto
            text-[var(--text-muted)]
            text-sm md:text-base
            leading-relaxed
          "
        >
          {t("desc")}
        </motion.p>

        {/* 🔥 MINI STATS / CHIP */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[t("chip1"), t("chip2"), t("chip3")].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="
                px-4 py-1.5 rounded-full text-xs font-medium
                bg-[var(--card)]
                border border-[var(--border)]
                text-[var(--text-muted)]
                hover:border-[var(--primary)]
                transition
              "
            >
              {item}
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}