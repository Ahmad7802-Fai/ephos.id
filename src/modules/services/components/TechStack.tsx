"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Shield,
  Cpu,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function TechStack() {
  const t = useTranslations("Tech");

  const stacks = [
    {
      title: t("cloudTitle"),
      icon: Cloud,
      items: ["AWS", "Google Cloud", "Azure"],
    },
    {
      title: t("networkTitle"),
      icon: Server,
      items: ["MikroTik", "Cisco", "Ubiquiti"],
    },
    {
      title: t("systemTitle"),
      icon: Cpu,
      items: ["Linux", "Docker", "Kubernetes"],
    },
    {
      title: t("securityTitle"),
      icon: Shield,
      items: ["Firewall", "VPN", "Monitoring"],
    },
  ];

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* 🔥 BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_50%)]" />

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

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {stacks.map((stack, i) => {
              const Icon = stack.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    group relative p-6 rounded-2xl
                    bg-[var(--card)]
                    border border-[var(--border)]
                    overflow-hidden
                    hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]
                    transition-all duration-300
                  "
                >

                  {/* 🔥 HOVER GLOW */}
                  <div className="
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition
                    bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent)]
                  " />

                  {/* 🔥 TOP LINE ACCENT */}
                  <div className="
                    absolute top-0 left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent
                    opacity-0 group-hover:opacity-100 transition
                  " />

                  <div className="relative z-10">

                    {/* ICON */}
                    <div className="
                      w-12 h-12 rounded-xl
                      bg-gradient-to-br from-[var(--primary)] to-indigo-600
                      text-white
                      flex items-center justify-center
                      mb-5
                      shadow-[0_10px_30px_rgba(59,130,246,0.4)]
                      group-hover:scale-110
                      transition
                    ">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* TITLE */}
                    <h3 className="font-semibold text-[var(--text)] mb-4">
                      {stack.title}
                    </h3>

                    {/* ITEMS */}
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="
                            px-3 py-1 text-xs rounded-full
                            bg-[var(--accent-soft)]
                            text-[var(--primary)]
                            border border-[var(--border)]
                          "
                        >
                          {item}
                        </span>
                      ))}
                    </div>

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