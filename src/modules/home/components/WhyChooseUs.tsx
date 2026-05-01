"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Clock,
  Layers,
} from "lucide-react";
import { useTranslations } from "next-intl";
import WhyDashboard from "./WhyDashboard";

export default function WhyChooseUs() {
  const t = useTranslations("Why");

  const reasons = [
    {
      icon: ShieldCheck,
      title: t("r1Title"),
      desc: t("r1Desc"),
    },
    {
      icon: Zap,
      title: t("r2Title"),
      desc: t("r2Desc"),
    },
    {
      icon: Clock,
      title: t("r3Title"),
      desc: t("r3Desc"),
    },
    {
      icon: Layers,
      title: t("r4Title"),
      desc: t("r4Desc"),
    },
  ];

  const chips = [t("chip1"), t("chip2"), t("chip3")];

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_50%)]" />

      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT ================= */}
          <div>

            {/* BADGE */}
            <span className="inline-flex px-4 py-1.5 text-xs rounded-full bg-[var(--accent-soft)] text-[var(--primary)] mb-5">
              {t("badge")}
            </span>

            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text)] leading-tight">
              {t("title1")}
              <span className="block text-[var(--primary)]">
                {t("title2")}
              </span>
            </h2>

            {/* DESC */}
            <p className="mt-5 text-[var(--text-muted)] max-w-md leading-relaxed">
              {t("desc")}
            </p>

            {/* CHIPS */}
            {/* CHIPS */}
<div className="mt-6 flex flex-wrap gap-3">
  {chips.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.08 }}
      viewport={{ once: true }}
      className="
        relative px-4 py-1.5 rounded-full
        text-[11px] font-semibold
        text-black overflow-hidden

        bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500

        shadow-[0_8px_25px_rgba(251,191,36,0.5)]
        hover:scale-105 transition-all duration-300
      "
    >
      {/* SHIMMER GLOW */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-r from-white/40 via-transparent to-white/30
          opacity-0 hover:opacity-100
          transition duration-700
        "
      />

      {/* DOT */}
      <span className="w-1.5 h-1.5 bg-black rounded-full inline-block mr-2 relative z-10" />

      {/* TEXT */}
      <span className="relative z-10">
        {item}
      </span>
    </motion.div>
  ))}
</div>

            {/* LIST */}
            <div className="mt-10 space-y-5">
              {reasons.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 group"
                  >

                    {/* ICON */}
                    <div className="
                      w-11 h-11 rounded-xl
                      bg-[var(--card)]
                      border border-[var(--border)]
                      flex items-center justify-center
                      group-hover:bg-[var(--accent-soft)]
                      transition
                    ">
                      <Icon className="w-5 h-5 text-[var(--primary)]" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-[var(--text)] font-medium">
                        {item.title}
                      </p>
                      <p className="text-[var(--text-muted)] text-sm">
                        {item.desc}
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="
                mt-10 px-6 py-3 rounded-xl
                bg-gradient-to-r from-[var(--primary)] to-blue-600
                text-white text-sm font-medium
                shadow-[0_10px_30px_rgba(59,130,246,0.4)]
                transition
              "
            >
              {t("cta")}
            </motion.button>

          </div>

          {/* ================= RIGHT (INTERACTIVE DASHBOARD) ================= */}
          <WhyDashboard t={t} />

        </div>

      </Container>
    </section>
  );
}