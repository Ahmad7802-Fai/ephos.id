"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function useCountUp(target: number, duration = 1200) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      if (ref.current) {
        ref.current.textContent = Math.floor(start).toString();
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return ref;
}

export default function WhyDashboard({ t }: any) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const glowX = useTransform(smoothX, (v) => `${v}px`);
  const glowY = useTransform(smoothY, (v) => `${v}px`);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const progress = [
    { label: t("p1"), value: 99 },
    { label: t("p2"), value: 95 },
    { label: t("p3"), value: 92 },
  ];

  const uptimeRef = useCountUp(99);

  return (
    <div className="relative flex justify-center">

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="
          relative w-full max-w-[460px]
          rounded-2xl
          border border-[var(--border)]
          bg-[var(--card)]
          backdrop-blur-xl
          p-8
          shadow-[0_30px_100px_rgba(0,0,0,0.4)]
          overflow-hidden
        "
      >

        {/* 🔥 CURSOR GLOW */}
        <motion.div
          className="pointer-events-none absolute w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl"
          style={{
            left: glowX,
            top: glowY,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* HEADER */}
        <p className="text-sm text-[var(--text-muted)] mb-6 relative z-10">
          {t("perf")}
        </p>

        {/* BIG METRIC */}
        <div className="mb-8 relative z-10">
          <p className="text-4xl font-semibold text-[var(--text)]">
            <span ref={uptimeRef}>0</span>.%
          </p>
          <p className="text-[var(--text-muted)] text-sm">
            {t("uptime")}
          </p>
        </div>

        {/* PROGRESS */}
        <div className="space-y-5 text-xs relative z-10">

          {progress.map((item, i) => {
            const width = `${item.value}%`;

            return (
              <div key={i}>
                <div className="flex justify-between text-[var(--text-muted)] mb-1">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>

                <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width }}
                    transition={{ duration: 1.2, delay: i * 0.2 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                  />

                </div>
              </div>
            );
          })}

        </div>

        {/* FLOAT CARD */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="
            absolute -bottom-6 -right-6
            bg-[var(--card)]
            border border-[var(--border)]
            px-4 py-3 rounded-xl
            shadow-lg
          "
        >
          <p className="text-xs text-[var(--text-muted)]">{t("support")}</p>
          <p className="text-[var(--text)] font-semibold text-sm">
            {t("active")}
          </p>
        </motion.div>

      </motion.div>

    </div>
  );
}