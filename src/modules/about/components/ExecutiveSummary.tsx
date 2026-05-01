"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ExecutiveSummary() {
  const t = useTranslations("ExecutiveSummary");

  const values = [
    { letter: "E", title: t("eTitle"), desc: t("eDesc") },
    { letter: "P", title: t("pTitle"), desc: t("pDesc") },
    { letter: "H", title: t("hTitle"), desc: t("hDesc") },
    { letter: "O", title: t("oTitle"), desc: t("oDesc") },
    { letter: "S", title: t("sTitle"), desc: t("sDesc") }
  ];

  return (
    <section className="relative py-28 bg-[var(--bg)] overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.06),transparent_60%)]" />

      <Container>
        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <div className="mb-20">
            <p className="text-sm text-[var(--primary)] font-medium mb-3">
              {t("badge")}
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[var(--text)] leading-[1.2] tracking-[-0.015em]">
              {t("title")}
            </h1>

            <p className="mt-4 text-[var(--text-muted)] max-w-xl">
              {t("desc")}
            </p>
          </div>

          {/* VISION & MISSION */}
          <div className="relative mb-20">

            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[var(--primary)] to-blue-400 rounded-full" />

            <div className="pl-8 space-y-10">

              {/* VISION */}
              <motion.div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <h3 className="text-[var(--primary)] font-semibold text-xs tracking-widest mb-3">
                  {t("visionTitle")}
                </h3>
                <p className="text-[var(--text-muted)] text-[15px] leading-relaxed">
                  {t("visionDesc")}
                </p>
              </motion.div>

              {/* MISSION */}
              <motion.div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <h3 className="text-[var(--primary)] font-semibold text-xs tracking-widest mb-3">
                  {t("missionTitle")}
                </h3>

                <ul className="text-[var(--text-muted)] text-[14px] space-y-2">
                  <li>• {t("mission1")}</li>
                  <li>• {t("mission2")}</li>
                  <li>• {t("mission3")}</li>
                  <li>• {t("mission4")}</li>
                  <li>• {t("mission5")}</li>
                </ul>
              </motion.div>

            </div>
          </div>

          {/* CORE VALUES */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-[var(--primary)] tracking-wide mb-6">
              {t("coreTitle")}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={i}
                className="group relative p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:shadow-lg transition"
              >

                {/* glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent)]" />

                {/* letter */}
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-blue-600 text-white flex items-center justify-center text-sm font-semibold shadow">
                  {item.letter}
                </div>

                <div className="mt-4 relative z-10">
                  <h4 className="text-[var(--text)] font-semibold text-sm mb-2">
                    {item.title}
                  </h4>

                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}