"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhatWeDeliver() {
  const t = useTranslations("Deliver");

  const items = [
    {
      title: t("i1Title"),
      desc: t("i1Desc"),
      icon: Server,
    },
    {
      title: t("i2Title"),
      desc: t("i2Desc"),
      icon: Cloud,
    },
    {
      title: t("i3Title"),
      desc: t("i3Desc"),
      icon: Layers,
    },
    {
      title: t("i4Title"),
      desc: t("i4Desc"),
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative py-28 bg-[var(--bg)] overflow-hidden">

      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* glow kiri */}
        <div className="
          absolute -top-32 -left-32
          w-[500px] h-[500px]
          bg-[var(--primary)]/15
          blur-[120px] rounded-full
        " />

        {/* glow kanan */}
        <div className="
          absolute bottom-[-150px] right-[-100px]
          w-[400px] h-[400px]
          bg-indigo-500/10
          blur-[120px] rounded-full
        " />

      </div>

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-16">

            <span className="
              inline-flex px-4 py-1.5 text-xs rounded-full
              bg-[var(--accent-soft)]
              text-[var(--primary)]
              mb-4
            ">
              {t("badge")}
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)]">
              {t("title")}
            </h2>

            <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
              {t("desc")}
            </p>

          </div>

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {items.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="
                    group relative p-6 rounded-2xl
                    bg-[var(--card)]
                    border border-[var(--border)]
                    backdrop-blur-xl
                    overflow-hidden
                    hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]
                    transition-all duration-300
                  "
                >

                  {/* 🔥 HOVER GLOW */}
                  <div className="
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition
                    bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent)]
                  " />

                  {/* ICON */}
                  <div className="
                    relative z-10 w-12 h-12 rounded-xl
                    bg-[var(--accent-soft)]
                    border border-[var(--border)]
                    flex items-center justify-center mb-5
                    group-hover:scale-110 transition
                  ">
                    <Icon className="w-5 h-5 text-[var(--primary)]" />
                  </div>

                  {/* TITLE */}
                  <h3 className="relative z-10 font-semibold text-[var(--text)]">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="relative z-10 text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* subtle bottom line */}
                  <div className="
                    mt-6 h-[1px]
                    bg-gradient-to-r from-transparent via-[var(--border)] to-transparent
                  " />

                </motion.div>
              );
            })}

          </div>

        </div>
      </Container>
    </section>
  );
}