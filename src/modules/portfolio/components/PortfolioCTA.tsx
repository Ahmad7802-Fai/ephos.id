"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const WA = "6285285579492";

export default function PortfolioCTA() {
  const t = useTranslations("PortfolioCTA");

  const message = encodeURIComponent(t("waMessage"));

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* glow center */}
        <div className="
          absolute top-[-120px] left-1/2 -translate-x-1/2
          w-[600px] h-[600px]
          bg-[var(--primary)]/20
          blur-[140px] rounded-full
        " />

        {/* glow kiri */}
        <div className="
          absolute bottom-[-120px] left-[-120px]
          w-[400px] h-[400px]
          bg-indigo-500/10
          blur-[120px] rounded-full
        " />

      </div>

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-semibold leading-tight text-[var(--text)]"
          >
            {t("title1")}
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              {t("title2")}
            </span>
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-[var(--text-muted)] text-base md:text-lg leading-relaxed"
          >
            {t("desc1")}{" "}
            <span className="text-[var(--primary)] font-medium">
              {t("descHighlight")}
            </span>{" "}
            {t("desc2")}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <a
              href={`https://wa.me/${WA}?text=${message}`}
              target="_blank"
              className="
                inline-flex items-center gap-2
                px-8 py-4 rounded-xl
                bg-gradient-to-r from-green-500 to-green-600
                text-white font-semibold text-sm
                shadow-[0_10px_30px_rgba(34,197,94,0.4)]
                hover:scale-[1.05]
                hover:shadow-[0_20px_50px_rgba(34,197,94,0.5)]
                transition-all duration-300
              "
            >
              {t("cta")} →
            </a>
          </motion.div>

          {/* TRUST BADGE */}
          <div className="mt-8 flex justify-center flex-wrap gap-3">
            {[t("b1"), t("b2"), t("b3")].map((item, i) => (
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
          </div>

        </div>
      </Container>
    </section>
  );
}