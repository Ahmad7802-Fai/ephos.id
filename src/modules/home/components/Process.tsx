"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Rocket,
  Activity,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Process() {
  const t = useTranslations("Process");

  const steps = [
    {
      icon: Search,
      title: t("s1Title"),
      desc: t("s1Desc"),
    },
    {
      icon: Lightbulb,
      title: t("s2Title"),
      desc: t("s2Desc"),
    },
    {
      icon: Rocket,
      title: t("s3Title"),
      desc: t("s3Desc"),
    },
    {
      icon: Activity,
      title: t("s4Title"),
      desc: t("s4Desc"),
    },
  ];

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* 🔥 SOFT PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_60%)]" />

      <Container>

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-24">

          <span className="
            inline-flex px-4 py-1.5 text-xs rounded-full
            bg-[var(--accent-soft)]
            text-[var(--primary)]
          ">
            {t("badge")}
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[var(--text)] leading-tight">
            {t("title1")}
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {t("title2")}
            </span>
          </h2>

          <p className="mt-4 text-[var(--text-muted)]">
            {t("desc")}
          </p>

        </div>

        {/* ================= FLOW ================= */}
        <div className="relative">

          {/* LINE */}
          <div className="hidden md:block absolute top-14 left-0 right-0 h-[2px]
            bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

          <div className="grid md:grid-cols-4 gap-10">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="relative group text-center"
                >

                  {/* DOT */}
                  <div className="hidden md:block absolute top-14 left-1/2 -translate-x-1/2
                    w-3 h-3 rounded-full
                    bg-[var(--primary)]
                    shadow-[0_0_20px_rgba(59,130,246,0.8)]
                  " />

                  {/* NUMBER */}
                  <div className="mb-6 flex justify-center">
                    <div className="
                      w-14 h-14 rounded-full
                      flex items-center justify-center
                      font-semibold text-white

                      bg-gradient-to-br from-blue-500 to-indigo-600
                      shadow-[0_10px_30px_rgba(59,130,246,0.4)]

                      group-hover:scale-110
                      transition
                    ">
                      {i + 1}
                    </div>
                  </div>

                  {/* CARD */}
                  <div className="
                    relative p-6 rounded-2xl
                    bg-[var(--card)]
                    border border-[var(--border)]
                    backdrop-blur-xl

                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                    transition-all duration-300
                  ">

                    {/* ICON */}
                    <div className="mb-4 flex justify-center">
                      <div className="
                        w-12 h-12 rounded-xl
                        bg-[var(--accent-soft)]
                        flex items-center justify-center
                      ">
                        <Icon className="w-5 h-5 text-[var(--primary)]" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-[var(--text)] font-semibold">
                      {step.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-[var(--text-muted)] text-sm mt-2 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* HOVER GLOW */}
                    <div className="
                      absolute inset-0 rounded-2xl
                      bg-gradient-to-br from-blue-500/10 to-transparent
                      opacity-0 group-hover:opacity-100
                      transition
                    " />

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
}