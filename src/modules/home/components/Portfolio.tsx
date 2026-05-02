"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Portfolio() {
  const t = useTranslations("Portfolio");

  const projects = [
    {
      title: t("p1Title"),
      desc: t("p1Desc"),
      result: t("p1Result"),
      image: "/assets/ephostech.jpeg",
      tags: [t("tagInfra"), t("tagNetwork")],
      featured: true,
    },
    {
      title: t("p2Title"),
      desc: t("p2Desc"),
      result: t("p2Result"),
      image: "/assets/premium_photo-1682146029185-198922bd8350.avif",
      tags: [t("tagCloud"), t("tagDevops")],
    },
    {
      title: t("p3Title"),
      desc: t("p3Desc"),
      result: t("p3Result"),
      image: "/assets/ephostech-1.jpeg",
      tags: [t("tagERP"), t("tagAutomation")],
    },
  ];

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* BACKGROUND PREMIUM */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.10),transparent_60%)]" />

      <Container>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="
            inline-block px-4 py-1 text-xs rounded-full
            bg-[var(--accent-soft)]
            text-[var(--primary)]
            font-medium mb-4
          ">
            {t("badge")}
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] leading-tight">
            {t("title1")}
            <span className="block text-[var(--primary)]">
              {t("title2")}
            </span>
          </h2>

          <p className="mt-4 text-[var(--text-muted)]">
            {t("desc")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-6">

          {projects.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`
                group relative overflow-hidden rounded-2xl
                border border-[var(--border)]
                ${item.featured ? "lg:col-span-2 lg:row-span-2" : ""}
              `}
            >

              {/* IMAGE */}
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY DARK */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* GLOW ROOT */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100 transition
                bg-gradient-to-br from-[var(--primary)]/30 via-transparent to-transparent
              " />

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 right-6 text-white">

                {/* TAG */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="
                        text-xs px-3 py-1 rounded-full
                        bg-white/10 backdrop-blur
                        border border-white/20
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-white/70 mt-2">
                  {item.desc}
                </p>

                {/* RESULT */}
                <div className="
                  mt-4 inline-block px-3 py-1 text-xs rounded-full
                  bg-[var(--primary)]/20
                  border border-[var(--primary)]/30
                  text-white
                ">
                  {item.result}
                </div>

                {/* CTA */}
                <p className="mt-4 text-sm opacity-0 group-hover:opacity-100 transition">
                  {t("cta")} →
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="
            px-7 py-3 rounded-xl
            bg-gradient-to-r from-[var(--primary)] to-blue-600
            text-white font-medium
            shadow-[0_10px_30px_rgba(59,130,246,0.3)]
            hover:scale-[1.05]
            transition
          ">
            {t("ctaAll")} →
          </button>
        </div>

      </Container>
    </section>
  );
}