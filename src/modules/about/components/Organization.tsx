"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export default function Organization() {
  const t = useTranslations("Organization");

  const [active, setActive] = useState(0);
  const isPaused = useRef(false);

  // 🔥 DATA (SUDAH MULTI LANG)
  const team = [
    {
      name: t("ceoName"),
      role: t("ceoRole"),
      image: "/assets/team/ceo.jpg", // nanti tinggal ganti asset
      desc: t("ceoDesc"),
    },
    {
      name: t("dirName"),
      role: t("dirRole"),
      image: "/assets/team/director.jpg",
      desc: t("dirDesc"),
    },
    {
      name: t("cfoName"),
      role: t("cfoRole"),
      image: "/assets/team/cfo.jpg",
      desc: t("cfoDesc"),
    },
  ];

  // 🔥 AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused.current) {
        setActive((prev) => (prev + 1) % team.length);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [team.length]);

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]" />

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1 text-xs rounded-full bg-[var(--accent-soft)] text-[var(--primary)] font-medium mb-4">
              {t("badge")}
            </span>

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

          {/* COVERFLOW */}
          <div
            className="relative flex justify-center items-center"
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
          >
            <div className="flex items-center justify-center gap-6">

              {team.map((item, i) => {
                const isActive = i === active;

                return (
                  <motion.div
                    key={i}
                    onClick={() => {
                      setActive(i);
                      isPaused.current = true;
                    }}
                    animate={{
                      scale: isActive ? 1 : 0.82,
                      opacity: isActive ? 1 : 0.4,
                      y: isActive ? 0 : 30,
                    }}
                    transition={{ duration: 0.45 }}
                    className={`
                      relative cursor-pointer
                      rounded-2xl p-6 w-[260px]
                      text-center transition-all
                      ${isActive
                        ? "bg-gradient-to-br from-[var(--primary)] to-blue-600 text-white shadow-[0_30px_80px_rgba(59,130,246,0.4)] z-10"
                        : "bg-[var(--card)] border border-[var(--border)]"
                      }
                    `}
                  >

                    {/* IMAGE */}
                    <div className="relative mb-5">
                      <img
                        src={item.image}
                        className="w-24 h-24 mx-auto rounded-xl object-cover shadow"
                      />

                      {isActive && (
                        <div className="absolute inset-0 rounded-xl bg-blue-400/20 blur-xl" />
                      )}
                    </div>

                    {/* NAME */}
                    <h3 className={`font-semibold ${
                      isActive ? "text-white" : "text-[var(--text)]"
                    }`}>
                      {item.name}
                    </h3>

                    {/* ROLE */}
                    <p className={`text-xs mt-1 ${
                      isActive ? "text-white/70" : "text-[var(--text-muted)]"
                    }`}>
                      {item.role}
                    </p>

                    {/* DESC */}
                    {isActive && (
                      <p className="text-sm mt-4 text-white/80 leading-relaxed">
                        {item.desc}
                      </p>
                    )}

                  </motion.div>
                );
              })}

            </div>
          </div>

          {/* DOT NAV */}
          <div className="flex justify-center gap-2 mt-8">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActive(i);
                  isPaused.current = true;
                }}
                className={`
                  h-2.5 rounded-full transition-all duration-300
                  ${active === i
                    ? "bg-[var(--primary)] w-6"
                    : "bg-[var(--border)] w-2.5"
                  }
                `}
              />
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}