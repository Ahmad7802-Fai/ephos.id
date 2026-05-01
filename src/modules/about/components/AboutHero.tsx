"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("AboutHero");

  return (
    <section className="relative pt-32 pb-20 bg-[var(--bg)] overflow-hidden">

      {/* subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />

      <Container>

        <div className="max-w-4xl">

          {/* LABEL */}
          <span className="
            inline-flex items-center gap-2
            px-4 py-1.5
            text-xs font-medium
            rounded-full
            bg-[var(--accent-soft)]
            text-[var(--primary)]
            mb-6
          ">
            {t("badge")}
          </span>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-3xl sm:text-4xl md:text-[42px]
              font-semibold
              text-[var(--text)]
              leading-[1.2]
              tracking-[-0.015em]
            "
          >
            {t("title1")}
            <span className="block text-[var(--primary)]">
              {t("title2")}
            </span>
          </motion.h1>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              mt-6
              text-[var(--text-muted)]
              max-w-xl
              leading-relaxed
              text-[15px]
            "
          >
            {t("desc")}
          </motion.p>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[t("stat1"), t("stat2"), t("stat3")].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="
                  relative inline-flex items-center gap-2
                  px-4 py-2 rounded-full text-xs font-semibold
                  text-black overflow-hidden

                  bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500
                  shadow-[0_8px_25px_rgba(251,191,36,0.5)]

                  hover:scale-[1.08]
                  transition-all duration-300
                "
              >
                {/* glow */}
                <span className="
                  absolute inset-0
                  bg-gradient-to-r from-white/40 via-transparent to-white/30
                  opacity-0 hover:opacity-100
                  transition duration-700
                " />

                <span className="relative w-1.5 h-1.5 bg-black rounded-full" />
                <span className="relative">{item}</span>
              </motion.span>
            ))}
          </motion.div>

        </div>

      </Container>
    </section>
  );
}