"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function OrganizationStructure() {
  const t = useTranslations("OrganizationStructure");

  const leaders = [
    {
      name: t("ceoName"),
      role: t("ceoRole"),
    },
    {
      name: t("cfoName"),
      role: t("cfoRole"),
    },
    {
      name: t("directorName"),
      role: t("directorRole"),
    },
  ];

  const departments = [
    t("dept1"),
    t("dept2"),
    t("dept3"),
  ];

  return (
    <section className="relative py-32 bg-[var(--bg)] text-[var(--text)] overflow-hidden">

      {/* 🔥 BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.08),transparent_50%)]" />

      <Container>
        <div className="max-w-5xl mx-auto text-center">

          {/* HEADER */}
          <div className="mb-20">
            <span className="px-4 py-1 text-xs rounded-full bg-[var(--accent-soft)] text-[var(--primary)]">
              {t("badge")}
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
              {t("title")}
            </h2>
          </div>

          {/* ================= LEADERS ================= */}
          <div className="space-y-6">

            {leaders.map((item, i) => (
              <div key={i}>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex justify-center"
                >
                  <div className="
                    relative px-8 py-4 rounded-full
                    bg-[var(--card)]
                    border border-[var(--border)]
                    backdrop-blur-xl
                    shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                  ">

                    {/* glow hover */}
                    <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition
                      bg-gradient-to-r from-blue-500/20 to-transparent blur-xl" />

                    <p className="relative font-semibold">
                      {item.name}
                    </p>

                    <p className="relative text-sm text-[var(--text-muted)]">
                      {item.role}
                    </p>
                  </div>
                </motion.div>

                {/* LINE */}
                {i !== leaders.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-[2px] h-14 bg-[var(--border)]" />
                  </div>
                )}

              </div>
            ))}

          </div>

          {/* ================= SPLIT ================= */}
          <div className="relative mt-20">

            {/* vertical */}
            <div className="absolute left-1/2 top-0 w-[2px] h-16 bg-[var(--border)] -translate-x-1/2" />

            {/* horizontal */}
            <div className="absolute top-16 left-0 right-0 h-[2px] bg-[var(--border)]" />

            {/* departments */}
            <div className="grid md:grid-cols-3 gap-10 pt-28">

              {departments.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >

                  {/* line */}
                  <div className="w-[2px] h-10 bg-[var(--border)]" />

                  {/* card */}
                  <div className="
                    relative px-6 py-4 rounded-xl
                    bg-[var(--card)]
                    border border-[var(--border)]
                    text-sm font-medium
                    text-[var(--text)]
                    backdrop-blur-xl
                    hover:border-[var(--primary)]
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                    transition-all duration-300
                  ">
                    {item}
                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}