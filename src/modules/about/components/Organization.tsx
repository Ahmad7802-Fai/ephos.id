"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export default function Organization() {
  const t = useTranslations("Organization");

  const [active, setActive] = useState(0);
  const isPaused = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 🔥 DATA
  const team = [
    {
      name: t("ceoName"),
      role: t("ceoRole"),
      image: "/assets/team/ceo.webp",
      desc: t("ceoDesc"),
    },
    {
      name: t("dirName"),
      role: t("dirRole"),
      image: "/assets/team/director.webp",
      desc: t("dirDesc"),
    },
    {
      name: t("cfoName"),
      role: t("cfoRole"),
      image: "/assets/team/cfo.webp",
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

  // 🔥 AUTO CENTER ACTIVE CARD (MOBILE)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const child = container.children[active] as HTMLElement;
    if (!child) return;

    const containerCenter = container.offsetWidth / 2;
    const childCenter = child.offsetLeft + child.offsetWidth / 2;

    const scrollTo = childCenter - containerCenter;

    container.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  }, [active]);

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

          {/* 🔥 COVERFLOW / CAROUSEL */}
          <div
            className="relative"
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
          >

            <div
              ref={scrollRef}
              className="
                flex gap-6 overflow-x-auto px-6
                snap-x snap-mandatory
                scroll-smooth
                scrollbar-hide
                md:justify-center md:overflow-visible
              "
            >
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
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.5,
                      y: isActive ? 0 : 30,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`
                      snap-center shrink-0
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