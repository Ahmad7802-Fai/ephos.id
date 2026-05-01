"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { Server, Cloud, Layers, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

const WHATSAPP_NUMBER = "6285285579492";

export default function ServicesGrid() {
  const t = useTranslations("ServicesGrid");

  const message = encodeURIComponent(t("waMessage"));
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  const services = [
    {
      title: t("infraTitle"),
      desc: t("infraDesc"),
      icon: Server,
    },
    {
      title: t("cloudTitle"),
      desc: t("cloudDesc"),
      icon: Cloud,
    },
    {
      title: t("enterpriseTitle"),
      desc: t("enterpriseDesc"),
      icon: Layers,
    },
    {
      title: t("securityTitle"),
      desc: t("securityDesc"),
      icon: Shield,
    },
  ];

  return (
    <section className="relative py-28 bg-[var(--bg)] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]" />

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)]">
              {t("title")}
            </h2>

            <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
              {t("desc")}
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={i}
                  href={waLink}
                  target="_blank"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    group relative p-6 rounded-2xl
                    border border-[var(--border)]
                    bg-[var(--card)] backdrop-blur-xl
                    hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)]
                    transition-all duration-300
                    overflow-hidden
                  "
                >

                  {/* 🔥 GLOW HOVER */}
                  <div className="
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition
                    bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent
                  " />

                  {/* ICON */}
                  <div className="
                    relative z-10
                    w-12 h-12 rounded-xl
                    bg-gradient-to-br from-blue-500 to-indigo-500
                    text-white
                    flex items-center justify-center
                    mb-5
                    shadow-[0_10px_25px_rgba(59,130,246,0.4)]
                    group-hover:scale-110
                    transition
                  ">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* TITLE */}
                  <h3 className="relative z-10 font-semibold text-[var(--text)]">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="relative z-10 text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* CTA MINI */}
                  <span className="
                    relative z-10 inline-block mt-4 text-sm font-medium
                    text-[var(--primary)]
                    opacity-0 group-hover:opacity-100 transition
                  ">
                    {t("cta")}
                  </span>

                </motion.a>
              );
            })}

          </div>

        </div>
      </Container>
    </section>
  );
}