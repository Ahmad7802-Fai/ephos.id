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

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.15),transparent_60%)]" />

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">
            <span className="inline-flex px-4 py-1.5 text-xs rounded-full bg-[var(--accent-soft)] text-[var(--primary)] mb-4">
              {t("badge")}
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text)] leading-tight">
              {t("title1")}
              <span className="block text-[var(--primary)]">
                {t("title2")}
              </span>
            </h2>

            <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
              {t("desc")}
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-4 gap-8">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center group"
                >

                  {/* NUMBER */}
                  <div className="mb-6 flex justify-center">
                    <div className="
                      w-12 h-12 rounded-full
                      bg-gradient-to-br from-[var(--primary)] to-blue-600
                      text-white
                      flex items-center justify-center
                      font-semibold
                      shadow-[0_10px_30px_rgba(59,130,246,0.4)]
                    ">
                      {i + 1}
                    </div>
                  </div>

                  {/* CARD */}
                  <div className="
                    relative p-6 rounded-2xl
                    bg-[var(--card)]
                    border border-[var(--border)]
                    hover:shadow-xl
                    transition-all duration-300
                  ">

                    {/* ICON */}
                    <div className="mb-4 flex justify-center">
                      <div className="
                        w-12 h-12 rounded-xl
                        bg-[var(--accent-soft)]
                        flex items-center justify-center
                        group-hover:scale-110
                        transition
                      ">
                        <Icon className="w-5 h-5 text-[var(--primary)]" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-[var(--text)] font-medium">
                      {step.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-[var(--text-muted)] text-sm mt-2 leading-relaxed">
                      {step.desc}
                    </p>

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