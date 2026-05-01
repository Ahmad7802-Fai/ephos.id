"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const WHATSAPP_NUMBER = "6285285579492";

export default function ContactHero() {
  const t = useTranslations("ContactHero");

  const message = encodeURIComponent(t("waMessage"));

  return (
    <section className="relative -mt-16 pt-32 pb-28 overflow-visible">

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
          absolute top-[20%] left-[-120px]
          w-[400px] h-[400px]
          bg-indigo-500/10
          blur-[120px] rounded-full
        " />

        {/* glow kanan */}
        <div className="
          absolute bottom-[-120px] right-[-120px]
          w-[400px] h-[400px]
          bg-blue-500/10
          blur-[120px] rounded-full
        " />

      </div>

      <Container>
        <div className="relative z-10 text-center max-w-2xl mx-auto">

          {/* BADGE */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              inline-flex items-center gap-2
              px-4 py-1.5 mb-6
              text-xs font-medium
              rounded-full
              bg-[var(--accent-soft)]
              text-[var(--primary)]
            "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
            {t("badge")}
          </motion.span>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-3xl md:text-5xl
              font-semibold tracking-tight
              leading-[1.2]
              text-[var(--text)]
            "
          >
            {t("title1")}

            <span className="
              block
              bg-gradient-to-r from-blue-400 to-indigo-500
              bg-clip-text text-transparent
            ">
              {t("title2")}
            </span>
          </motion.h1>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-[var(--text-muted)] leading-relaxed"
          >
            {t("desc")}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
              target="_blank"
              className="
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-green-500 to-green-600
                text-white font-medium
                shadow-[0_10px_30px_rgba(34,197,94,0.4)]
                hover:scale-[1.05]
                transition
              "
            >
              {t("cta1")} →
            </a>

            {/* PORTFOLIO */}
            <a
              href="/#portfolio"
              className="
                px-6 py-3 rounded-xl
                border border-[var(--border)]
                text-[var(--text)]
                hover:bg-[var(--accent-soft)]
                transition
              "
            >
              {t("cta2")}
            </a>

          </motion.div>

          {/* TRUST */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {[t("b1"), t("b2"), t("b3")].map((item, i) => (
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