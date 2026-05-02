"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ================= COUNT UP =================
function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        start = target;
        clearInterval(timer);
      }

      setValue(start);
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return value;
}

// ================= COMPONENT =================
export default function WhyDashboard({ t }: any) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const glowX = useTransform(smoothX, (v) => `${v}px`);
  const glowY = useTransform(smoothY, (v) => `${v}px`);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) return;

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

  const uptime = useCountUp(99);

  return (
    <div className="relative flex justify-center lg:justify-end">

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="
          relative w-full max-w-[420px]
          rounded-3xl
          border border-[var(--border)]
          bg-[var(--card)]
          backdrop-blur-xl
          p-8
          shadow-[0_40px_120px_rgba(0,0,0,0.5)]
        "
      >

        {/* 🔥 CURSOR GLOW (DESKTOP ONLY) */}
        <motion.div
          className="
            hidden md:block
            pointer-events-none
            absolute w-[280px] h-[280px]
            bg-blue-500/20 rounded-full blur-3xl
          "
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
          <p className="text-4xl md:text-5xl font-semibold text-[var(--text)]">
            {Number.isInteger(uptime) ? uptime : uptime.toFixed(1)}%
          </p>
          <p className="text-[var(--text-muted)] text-sm">
            {t("uptime")}
          </p>
        </div>

        {/* PROGRESS */}
        <div className="space-y-5 text-xs relative z-10">
          {progress.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-[var(--text-muted)] mb-1">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>

              <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.2 }}
                  className="
                    h-full rounded-full
                    bg-gradient-to-r from-blue-500 to-indigo-500
                    shadow-[0_0_15px_rgba(59,130,246,0.5)]
                  "
                />
              </div>
            </div>
          ))}
        </div>

        {/* FLOAT CARD */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="
            absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6
            z-20
            bg-[var(--card)]
            border border-[var(--border)]
            px-4 py-3 rounded-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          "
        >
          <p className="text-xs text-[var(--text-muted)]">
            {t("support")}
          </p>
          <p className="text-[var(--text)] font-semibold text-sm">
            {t("active")}
          </p>
        </motion.div>

      </motion.div>

    </div>
  );
}