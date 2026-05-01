"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const logos = [
  "/assets/clients/aihcm.png",
  "/assets/clients/claws.jpeg",
  "/assets/clients/perumnas.png",
  "/assets/clients/coffe.png",
];

export default function Clients() {
  const t = useTranslations("Clients");

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="
        absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]
      " />

      <div className="
        absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_50%)]
      " />

      <Container className="relative z-10">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <span className="
            px-4 py-1 text-xs rounded-full
            bg-[var(--accent-soft)]
            text-[var(--primary)]
          ">
            {t("badge")}
          </span>

          <h2 className="
            mt-4 text-4xl font-semibold
            text-[var(--text)] leading-tight
          ">
            {t("title1")}
            <span className="
              block
              bg-gradient-to-r from-blue-500 to-indigo-500
              bg-clip-text text-transparent
            ">
              {t("title2")}
            </span>
          </h2>

          <p className="mt-4 text-[var(--text-muted)]">
            {t("desc")}
          </p>

        </div>

        {/* ================= LOGO MARQUEE ================= */}
        <div className="relative overflow-hidden mb-24">

          {/* blur kiri */}
          <div className="
            absolute left-0 top-0 h-full w-32
            bg-gradient-to-r from-[var(--bg)] to-transparent
            z-10 pointer-events-none
          " />

          {/* blur kanan */}
          <div className="
            absolute right-0 top-0 h-full w-32
            bg-gradient-to-l from-[var(--bg)] to-transparent
            z-10 pointer-events-none
          " />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 w-max will-change-transform"
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="
                  px-6 py-3 rounded-xl
                  bg-[var(--card)]
                  border border-[var(--border)]
                  backdrop-blur
                  hover:bg-[var(--accent-soft)]
                  hover:shadow-lg
                  transition-all duration-300
                "
              >
                <img
                  src={logo}
                  alt="client logo"
                  className="
                    h-8 object-contain
                    brightness-95 contrast-110
                    hover:brightness-110 hover:scale-105
                    transition-all duration-300
                  "
                />
              </div>
            ))}
          </motion.div>

        </div>

        {/* ================= STATS ================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">

          {[
            { value: "100+", label: t("stat1") },
            { value: "99%", label: t("stat2") },
            { value: "24/7", label: t("stat3") },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="
                relative p-8 rounded-2xl text-center
                bg-[var(--card)]
                border border-[var(--border)]
                backdrop-blur-xl
                overflow-hidden
                transition
              "
            >

              {/* glow hover */}
              <div className="
                absolute inset-0 opacity-0 hover:opacity-100 transition
                bg-gradient-to-br from-blue-500/20 to-indigo-500/10 blur-xl
              " />

              <p className="relative text-3xl font-semibold text-[var(--text)]">
                {item.value}
              </p>

              <p className="relative text-sm text-[var(--text-muted)] mt-1">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

        {/* ================= TESTIMONIAL ================= */}
        <div className="relative max-w-4xl mx-auto">

          {/* glow */}
          <div className="
            absolute inset-0 pointer-events-none
            bg-blue-500/20 blur-[120px] opacity-40
          " />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="
              relative z-10
              p-12 rounded-3xl
              bg-gradient-to-br from-blue-600 to-indigo-600
              text-white
              shadow-[0_40px_120px_rgba(59,130,246,0.5)]
            "
          >

            <p className="text-xl leading-relaxed text-white/90 text-center">
              {t("testimonial")}
            </p>

            <div className="mt-8 flex items-center gap-4 justify-center">

              <img
                src="/assets/avatar.jpg"
                className="
                  w-14 h-14 rounded-full object-cover
                  border-2 border-white/30
                "
              />

              <div className="text-center">
                <p className="font-medium">{t("name")}</p>
                <p className="text-sm text-white/70">{t("role")}</p>
              </div>

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}