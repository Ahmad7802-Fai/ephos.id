"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { Server, Cloud, Layers } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter, useParams } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations("Hero");

  const highlights = [
    {
      icon: Server,
      title: t("infraTitle"),
      desc: t("infraDesc"),
    },
    {
      icon: Cloud,
      title: t("cloudTitle"),
      desc: t("cloudDesc"),
    },
    {
      icon: Layers,
      title: t("enterpriseTitle"),
      desc: t("enterpriseDesc"),
    },
  ];

  return (
    <section className="relative -mt-16 pt-32 pb-28 overflow-visible">

      {/* BASE BG */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* PREMIUM LIGHTING */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-blue-500/30 rounded-full blur-[140px]"
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] bg-indigo-500/25 rounded-full blur-[140px]"
        />

        <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[100px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.25),transparent_60%)]" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[620px]">

          {/* ================= LEFT ================= */}
          <div className="max-w-[560px]">

            {/* BADGE */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium rounded-full bg-[var(--accent-soft)] text-[var(--accent)] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
              {t("badge")}
            </motion.span>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-[26px] sm:text-[28px] lg:text-[32px]
                font-semibold
                leading-[1.2]
                tracking-[-0.015em]
                text-[var(--text)]
              "
            >
              {t("title1")}
              <span className="block">{t("title2")}</span>

              <span className="
                block
                bg-gradient-to-r from-blue-500 to-indigo-500
                bg-clip-text text-transparent
              ">
                {t("title3")}
              </span>
            </motion.h1>

            {/* DESC (FIXED) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-[var(--text-muted)] text-base leading-relaxed max-w-[480px]"
            >
              {t("desc")}
            </motion.p>

            {/* HIGHLIGHTS */}
            <div className="mt-8 space-y-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--primary)]" />
                    </div>

                    <div>
                      <p className="font-medium text-[var(--text)]">{item.title}</p>
                      <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 flex gap-4">

              {/* PRIMARY (WA) */}
              <motion.a
                href="https://wa.me/6285285579492"
                target="_blank"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow-[0_10px_30px_rgba(59,130,246,0.4)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.5)] transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">
                  {t("cta1")} →
                </span>
              </motion.a>

              {/* SECONDARY (PORTFOLIO) */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  router.push(`/${locale}/portfolio`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text)] hover:bg-[var(--accent-soft)] transition"
              >
                {t("cta2")}
              </motion.button>

            </div>

            {/* STATS */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[t("stats1"), t("stats2"), t("stats3")].map((item, i) => (
                <div
                  key={i}
                  className="
                    relative flex items-center gap-2
                    px-4 py-2 rounded-full text-xs font-semibold
                    text-black overflow-hidden
                    bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500
                    shadow-[0_10px_25px_rgba(251,191,36,0.5)]
                    hover:scale-105 transition-all duration-300
                  "
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/30 opacity-0 hover:opacity-100 transition duration-700" />
                  <span className="w-1.5 h-1.5 bg-black rounded-full relative z-10" />
                  <span className="relative z-10">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px]">

              <div className="absolute -inset-10 bg-gradient-to-tr from-blue-300/40 via-indigo-200/30 to-transparent blur-3xl opacity-60" />

              {/* MAIN */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/40 shadow-[0_40px_100px_rgba(0,0,0,0.12)]"
              >
                <img src="/assets/pks-main.webp" className="w-full h-[300px] object-cover" />
              </motion.div>

              {/* FLOAT LEFT */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-6 -left-8 w-[46%] z-20 bg-white/90 rounded-xl overflow-hidden shadow-lg"
              >
                <img src="/assets/pks-1.webp" className="h-40 w-full object-cover" />
              </motion.div>

              {/* FLOAT RIGHT */}
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 7, delay: 1, repeat: Infinity }}
                className="absolute -bottom-6 -right-8 w-[46%] z-20 bg-white/90 rounded-xl overflow-hidden shadow-lg"
              >
                <img src="/assets/pks-2.webp" className="h-40 w-full object-cover" />
              </motion.div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}