"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Layers,
  ShieldCheck,
  Users,
  Settings,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Services() {
  const t = useTranslations("Services");
  const [hovered, setHovered] = useState<number | null>(null);

  const mainServices = [
    {
      icon: Server,
      title: t("infraTitle"),
      desc: t("infraDesc"),
      impact: t("infraImpact"),
      featured: true,
    },
    {
      icon: Cloud,
      title: t("cloudTitle"),
      desc: t("cloudDesc"),
      impact: t("cloudImpact"),
    },
    {
      icon: Layers,
      title: t("enterpriseTitle"),
      desc: t("enterpriseDesc"),
      impact: t("enterpriseImpact"),
    },
  ];

  const secondaryServices = [
    { icon: ShieldCheck, title: t("sec1") },
    { icon: Users, title: t("sec2") },
    { icon: Settings, title: t("sec3") },
  ];

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* 🔥 SUPER PREMIUM BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_60%)]" />

        {/* noise texture */}
        <div
          className="
            absolute inset-0 pointer-events-none
            opacity-[0.04]
            mix-blend-overlay
          "
          style={{
            backgroundImage: `
              url("data:image/svg+xml;utf8,
              <svg xmlns='http://www.w3.org/2000/svg'>
                <filter id='n'>
                  <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/>
                </filter>
                <rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/>
              </svg>")
            `,
          }}
        />
      </div>

      <Container className="relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1 text-xs rounded-full bg-[var(--accent-soft)] text-[var(--primary)] font-medium mb-4">
            {t("badge")}
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] leading-tight">
            {t("title1")}
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {t("title2")}
            </span>
          </h2>

          <p className="mt-4 text-[var(--text-muted)]">
            {t("desc")}
          </p>
        </div>

        {/* 🔥 SERVICES GRID */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">

          {mainServices.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`
                  group relative rounded-3xl p-7 transition-all duration-500 overflow-hidden
                  backdrop-blur-xl
                  ${
                    item.featured
                      ? "lg:col-span-2 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white shadow-[0_40px_120px_rgba(59,130,246,0.5)]"
                      : "bg-white/60 border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  }
                `}
              >

                {/* 🔥 CURSOR GLOW */}
                {hovered === i && (
                  <div className="absolute inset-0 opacity-100 transition duration-500">
                    <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full -top-10 -left-10" />
                  </div>
                )}

                {/* LIGHT REFLECTION */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-white/20 via-transparent to-white/10" />

                <div className="relative z-10">

                  {/* ICON */}
                  <div className={`
                    w-14 h-14 mb-6 rounded-2xl flex items-center justify-center
                    transition-all duration-300
                    ${
                      item.featured
                        ? "bg-white/20 backdrop-blur"
                        : "bg-[var(--accent-soft)]"
                    }
                  `}>
                    <Icon className={`w-6 h-6 ${
                      item.featured ? "text-white" : "text-[var(--primary)]"
                    }`} />
                  </div>

                  {/* TITLE */}
                  <h3 className={`text-xl font-semibold ${
                    item.featured ? "text-white" : "text-[var(--text)]"
                  }`}>
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className={`mt-3 text-sm leading-relaxed ${
                    item.featured ? "text-white/80" : "text-[var(--text-muted)]"
                  }`}>
                    {item.desc}
                  </p>

                  {/* IMPACT */}
                  <div className={`
                    mt-5 inline-block px-3 py-1 text-xs rounded-full font-medium
                    ${
                      item.featured
                        ? "bg-white/20 text-white"
                        : "bg-[var(--accent-soft)] text-[var(--primary)]"
                    }
                  `}>
                    {item.impact}
                  </div>

                  {/* CTA */}
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 5 }}
                    className={`mt-6 text-sm font-medium ${
                      item.featured ? "text-white" : "text-[var(--primary)]"
                    }`}
                  >
                    {t("learnMore")}
                  </motion.p>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* 🔥 SECONDARY (GLASS PILLS) */}
       <div className="flex flex-wrap justify-center gap-4">
          {secondaryServices.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="
                  relative group flex items-center gap-3 px-5 py-3 rounded-full
                  bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500
                  text-black
                  shadow-[0_10px_25px_rgba(251,191,36,0.5)]
                  hover:shadow-[0_15px_35px_rgba(251,191,36,0.7)]
                  hover:scale-105
                  transition-all duration-300
                  overflow-hidden
                "
              >
                {/* SHIMMER EFFECT */}
                <span
                  className="
                    absolute inset-0
                    bg-gradient-to-r from-white/40 via-transparent to-white/30
                    opacity-0 group-hover:opacity-100
                    transition duration-700
                  "
                />

                {/* ICON */}
                <Icon className="w-4 h-4 text-black/70 group-hover:text-black relative z-10 transition" />

                {/* TEXT */}
                <span className="text-sm font-semibold relative z-10">
                  {item.title}
                </span>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}