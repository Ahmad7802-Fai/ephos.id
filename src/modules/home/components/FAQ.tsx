"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("FAQ");
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
  ];

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* 🔥 BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_60%)]" />

      <Container className="relative z-10">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-20">

          <span className="
            inline-flex px-4 py-1.5 text-xs rounded-full
            bg-[var(--accent-soft)]
            text-[var(--primary)]
          ">
            {t("badge")}
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-[var(--text)] leading-tight">
            {t("title1")}
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {t("title2")}
            </span>
          </h2>

          <p className="mt-4 text-[var(--text-muted)]">
            {t("desc")}
          </p>

        </div>

        {/* ================= FAQ ================= */}
        <div className="max-w-3xl mx-auto space-y-4">

          {faqs.map((item, i) => {
            const isActive = active === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`
                  group relative rounded-2xl overflow-hidden
                  border transition-all duration-300

                  ${
                    isActive
                      ? "border-blue-400/40 bg-[var(--card)] shadow-[0_10px_40px_rgba(59,130,246,0.15)]"
                      : "border-[var(--border)] bg-[var(--card)] hover:shadow-md"
                  }
                `}
              >

                {/* subtle glow */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition
                  bg-gradient-to-br from-blue-500/10 to-transparent
                " />

                {/* QUESTION */}
                <button
                  onClick={() => setActive(isActive ? null : i)}
                  className="relative z-10 w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`
                    font-medium text-sm md:text-base
                    ${isActive ? "text-[var(--primary)]" : "text-[var(--text)]"}
                  `}>
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`
                      w-5 h-5 transition-all duration-300
                      ${isActive ? "rotate-180 text-[var(--primary)]" : "text-[var(--text-muted)]"}
                    `}
                  />
                </button>

                {/* ANSWER */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>

              </motion.div>
            );
          })}

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-24 text-center">

          <p className="text-[var(--text)] mb-6 text-lg">
            {t("ctaText")}
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            {/* PRIMARY (WA) */}
            <a
              href="https://wa.me/6285285579492"
              target="_blank"
              className="
                px-7 py-3 rounded-xl
                bg-gradient-to-r from-blue-500 to-indigo-600
                text-white font-medium
                shadow-[0_10px_30px_rgba(59,130,246,0.4)]
                hover:scale-[1.05]
                transition-all duration-300
              "
            >
              {t("cta1")} →
            </a>

            {/* SECONDARY */}
            <button className="
              px-7 py-3 rounded-xl
              border border-[var(--border)]
              text-[var(--text)]
              hover:bg-[var(--accent-soft)]
              transition
            ">
              {t("cta2")}
            </button>

          </div>

        </div>

      </Container>
    </section>
  );
}