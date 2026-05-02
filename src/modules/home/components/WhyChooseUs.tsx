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
    <section className="relative py-24 bg-[var(--bg)] overflow-visible">

      {/* LIGHT BACKGROUND (RINGAN & PREMIUM) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.10),transparent_50%)]" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}
          <div>

            {/* BADGE */}
            <span className="inline-flex px-3 py-1 text-[11px] rounded-full bg-[var(--accent-soft)] text-[var(--primary)] mb-5">
              {t("badge")}
            </span>

            {/* TITLE (🔥 FIX 28px MAX) */}
            <h2 className="text-[24px] sm:text-[26px] md:text-[28px] font-semibold text-[var(--text)] leading-[1.3]">
              {t("title1")}
              <span className="block text-[var(--primary)]">
                {t("title2")}
              </span>
            </h2>

            {/* DESC */}
            <p className="mt-4 text-sm text-gray-600 max-w-md leading-relaxed">
              {t("desc")}
            </p>

            {/* CHIPS */}
            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="
                    relative px-3 py-1 rounded-full
                    text-[10px] font-medium
                    text-black overflow-hidden
                    bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500
                    shadow-[0_6px_18px_rgba(251,191,36,0.4)]
                    hover:scale-105 transition-all duration-300
                  "
                >
                  {/* SHIMMER */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/30 opacity-0 hover:opacity-100 transition duration-700" />

                  <span className="w-1 h-1 bg-black rounded-full inline-block mr-2 relative z-10" />
                  <span className="relative z-10">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* LIST */}
            <div className="mt-8 space-y-4">
              {reasons.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3 group"
                  >
                    {/* ICON */}
                    <div className="
                      w-10 h-10 rounded-lg
                      bg-[var(--card)]
                      border border-[var(--border)]
                      flex items-center justify-center
                      group-hover:bg-[var(--accent-soft)]
                      transition
                    ">
                      <Icon className="w-4 h-4 text-[var(--primary)]" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-[15px] font-medium text-[var(--text)]">
                        {item.title}
                      </p>
                      <p className="text-[13px] text-gray-500">
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
                mt-8 px-5 py-2.5 rounded-xl
                bg-gradient-to-r from-[var(--primary)] to-blue-600
                text-white text-sm font-medium
                shadow-[0_8px_20px_rgba(59,130,246,0.35)]
                hover:shadow-[0_15px_30px_rgba(59,130,246,0.45)]
                transition
              "
            >
              {t("cta")}
            </motion.button>

          </div>

          {/* ================= RIGHT ================= */}
          <WhyDashboard t={t} />

        </div>
      </Container>
    </section>
  );
}