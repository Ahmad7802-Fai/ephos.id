"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { Server, Cloud, ShieldCheck, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

const WHATSAPP_NUMBER = "6285285579492";

export default function ServiceDetail() {
  const t = useTranslations("ServiceDetail");

  const message = encodeURIComponent(t("waMessage"));
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  const services = [
    {
      title: t("infraTitle"),
      desc: t("infraDesc"),
      icon: Server,
      points: [t("infraPoints1"), t("infraPoints2"), t("infraPoints3")],
    },
    {
      title: t("cloudTitle"),
      desc: t("cloudDesc"),
      icon: Cloud,
      points: [t("cloudPoints1"), t("cloudPoints2"), t("cloudPoints3")],
    },
    {
      title: t("securityTitle"),
      desc: t("securityDesc"),
      icon: ShieldCheck,
      points: [t("securityPoints1"), t("securityPoints2"), t("securityPoints3")],
    },
    {
      title: t("optTitle"),
      desc: t("optDesc"),
      icon: Zap,
      points: [t("optPoints1"), t("optPoints2"), t("optPoints3")],
    },
  ];

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]" />

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)]">
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
          <div className="grid md:grid-cols-2 gap-8">

            {services.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    group relative
                    p-8 rounded-2xl
                    bg-[var(--card)] backdrop-blur-xl
                    border border-[var(--border)]
                    hover:shadow-[0_25px_60px_rgba(59,130,246,0.2)]
                    transition-all duration-300
                    overflow-hidden
                  "
                >

                  {/* GLOW */}
                  <div className="
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition
                    bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent
                  " />

                  {/* ICON */}
                  <div className="
                    relative z-10
                    w-12 h-12 rounded-xl
                    bg-gradient-to-br from-blue-500 to-indigo-500
                    text-white flex items-center justify-center
                    mb-5
                    shadow-[0_10px_25px_rgba(59,130,246,0.4)]
                    group-hover:scale-110
                    transition
                  ">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-[var(--text-muted)] mt-3 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* POINTS */}
                  <ul className="mt-5 space-y-2 text-sm text-[var(--text-muted)]">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={waLink}
                    target="_blank"
                    className="
                      inline-block mt-6 text-sm font-medium
                      text-[var(--primary)]
                      opacity-0 group-hover:opacity-100 transition
                    "
                  >
                    {t("cta")}
                  </a>

                </motion.div>
              );
            })}

          </div>

        </div>
      </Container>
    </section>
  );
}