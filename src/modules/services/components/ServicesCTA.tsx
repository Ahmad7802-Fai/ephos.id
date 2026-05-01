"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const WHATSAPP_NUMBER = "6285285579492";

export default function ServicesCTA() {
  const t = useTranslations("ServicesCTA");

  const message = encodeURIComponent(t("waMessage"));
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* 🔥 PREMIUM BACKGROUND (BEDA DARI SECTION LAIN) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* glow kiri */}
        <div className="
          absolute -top-40 -left-40
          w-[600px] h-[600px]
          bg-[var(--primary)]/20
          rounded-full blur-[140px]
        " />

        {/* glow kanan */}
        <div className="
          absolute bottom-[-200px] right-[-150px]
          w-[500px] h-[500px]
          bg-indigo-500/15
          rounded-full blur-[140px]
        " />

        {/* radial center */}
        <div className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)]
        " />

      </div>

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="
              text-3xl md:text-5xl font-semibold
              text-[var(--text)]
              leading-tight
            "
          >
            {t("title")}
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="
              mt-5 text-[var(--text-muted)]
              text-base md:text-lg
              leading-relaxed
            "
          >
            {t("desc1")}{" "}
            <span className="text-[var(--primary)] font-medium">
              {t("highlight")}
            </span>{" "}
            {t("desc2")}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            <a
              href={waLink}
              target="_blank"
              className="
                px-7 py-3 rounded-xl
                bg-gradient-to-r from-[var(--primary)] to-blue-600
                text-white font-medium
                shadow-[0_10px_30px_rgba(59,130,246,0.4)]
                hover:scale-[1.05]
                transition
              "
            >
              {t("cta")} →
            </a>
          </motion.div>

          {/* TRUST BADGE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-center flex-wrap gap-3"
          >
            {[t("stat1"), t("stat2"), t("stat3"), t("stat4")].map((item, i) => (
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