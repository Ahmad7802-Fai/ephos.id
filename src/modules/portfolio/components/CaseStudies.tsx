"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const WHATSAPP_NUMBER = "6285285579492";

export default function CaseStudies() {
  const t = useTranslations("Case");

  const message = encodeURIComponent(t("waMessage"));
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  const projects = [
    {
      title: t("p1Title"),
      problem: t("p1Problem"),
      solution: t("p1Solution"),
      result: t("p1Result"),
      tag: t("p1Tag"),
    },
    {
      title: t("p2Title"),
      problem: t("p2Problem"),
      solution: t("p2Solution"),
      result: t("p2Result"),
      tag: t("p2Tag"),
    },
  ];

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* 🔥 PREMIUM BACKGROUND */}
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

        {/* radial tengah */}
        <div className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]
        " />

      </div>

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-20">

            <span className="inline-flex px-4 py-1.5 text-xs rounded-full bg-[var(--accent-soft)] text-[var(--primary)] mb-4">
              {t("badge")}
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)]">
              {t("title")}
            </h2>

            <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
              {t("desc")}
            </p>

          </div>

          {/* ================= LIST ================= */}
          <div className="space-y-10">

            {projects.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  group relative rounded-3xl
                  border border-[var(--border)]
                  bg-[var(--card)]
                  backdrop-blur-xl
                  overflow-hidden
                  hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]
                  transition-all duration-300
                "
              >

                {/* 🔥 HOVER GLOW */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition
                  bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent)]
                " />

                <div className="relative z-10 grid md:grid-cols-2 gap-10 p-8 md:p-10">

                  {/* ================= LEFT ================= */}
                  <div>

                    {/* TAG */}
                    <span className="
                      inline-block text-xs px-3 py-1 rounded-full
                      bg-[var(--accent-soft)]
                      text-[var(--primary)]
                      mb-4
                    ">
                      {item.tag}
                    </span>

                    {/* TITLE */}
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--text)]">
                      {item.title}
                    </h3>

                    {/* CTA */}
                    <a
                      href={waLink}
                      target="_blank"
                      className="
                        inline-flex items-center gap-2
                        text-sm text-[var(--primary)] font-medium
                        mt-4 hover:gap-3 transition-all
                      "
                    >
                      {t("cta")}
                      <ArrowRight className="w-4 h-4" />
                    </a>

                  </div>

                  {/* ================= RIGHT ================= */}
                  <div className="space-y-4 text-sm">

                    {/* PROBLEM */}
                    <div className="
                      p-4 rounded-xl
                      bg-red-500/10
                      border border-red-400/20
                    ">
                      <p className="font-semibold text-red-400 mb-1">
                        {t("problem")}
                      </p>
                      <p className="text-[var(--text-muted)]">
                        {item.problem}
                      </p>
                    </div>

                    {/* SOLUTION */}
                    <div className="
                      p-4 rounded-xl
                      bg-blue-500/10
                      border border-blue-400/20
                    ">
                      <p className="font-semibold text-blue-400 mb-1">
                        {t("solution")}
                      </p>
                      <p className="text-[var(--text-muted)]">
                        {item.solution}
                      </p>
                    </div>

                    {/* RESULT */}
                    <div className="
                      p-4 rounded-xl
                      bg-green-500/10
                      border border-green-400/20
                    ">
                      <p className="font-semibold text-green-400 mb-1">
                        {t("result")}
                      </p>
                      <p className="text-[var(--text-muted)]">
                        {item.result}
                      </p>
                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}