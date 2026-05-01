"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const WHATSAPP_NUMBER = "6285285579492";

export default function ServicesHero() {
  const t = useTranslations("ServicesHero");
  const params = useParams();
  const locale = params.locale as string;

  const message = encodeURIComponent(t("waMessage"));
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <section className="relative -mt-16 pt-32 pb-28 overflow-visible">

      {/* BASE */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* 🔥 PREMIUM LIGHTING */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="
            absolute -top-40 right-[-150px]
            w-[600px] h-[600px]
            bg-blue-500/25
            rounded-full blur-[140px]
          "
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 24, repeat: Infinity }}
          className="
            absolute bottom-[-200px] left-[-150px]
            w-[500px] h-[500px]
            bg-indigo-500/20
            rounded-full blur-[140px]
          "
        />

        <div className="
          absolute inset-0
          bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.18),transparent_60%)]
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
              bg-[var(--accent-soft)]
              border border-[var(--border)]
              text-[var(--primary)]
              mb-6
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
              text-3xl md:text-5xl lg:text-6xl
              font-semibold tracking-tight leading-[1.2]
            "
          >
            {t("title1")}

            <span className="block">
              {t("title2")}{" "}
              <span className="
                bg-gradient-to-r from-blue-400 to-indigo-500
                bg-clip-text text-transparent
              ">
                {t("highlight")}
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
            {t("desc")}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            {/* WA */}
            <a
              href={waLink}
              target="_blank"
              className="
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-500 to-indigo-500
                text-white font-medium
                shadow-[0_10px_30px_rgba(59,130,246,0.4)]
                hover:scale-[1.05]
                transition
              "
            >
              {t("cta1")} →
            </a>

            {/* PORTFOLIO FIXED LOCALE */}
            <a
              href={`/${locale}/portfolio`}
              className="
                px-6 py-3 rounded-xl
                border border-[var(--border)]
                text-[var(--text-muted)]
                hover:bg-[var(--accent-soft)]
                transition
              "
            >
              {t("cta2")}
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-center flex-wrap gap-3"
          >
            {[t("stat1"), t("stat2"), t("stat3")].map((item, i) => (
              <span
                key={i}
                className="
                  px-4 py-2 rounded-full text-xs font-semibold
                  bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500
                  text-black
                  shadow-[0_8px_25px_rgba(251,191,36,0.5)]
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