"use client";

import { Container } from "@/components";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const numeric = parseFloat(value.replace(/[^\d.]/g, ""));
    let start = 0;

    const duration = 1200;
    const step = numeric / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= numeric) {
        start = numeric;
        clearInterval(interval);
      }
      setDisplay(start);
    }, 16);

    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {value.includes("%")
        ? display.toFixed(1) + "%"
        : value.includes("+")
        ? Math.floor(display) + "+"
        : value.includes("/")
        ? "24/7"
        : Math.floor(display)}
    </span>
  );
}

export default function Impact() {
  const t = useTranslations("Impact");

  const stats = [
    { value: "99%", label: t("s1") },
    { value: "100+", label: t("s2") },
    { value: "24/7", label: t("s3") },
  ];

  return (
    <section className="relative py-32 bg-[var(--bg)] overflow-hidden">

      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* glow tengah */}
        <div className="
          absolute top-[-120px] left-1/2 -translate-x-1/2
          w-[600px] h-[600px]
          bg-[var(--primary)]/20
          blur-[140px] rounded-full
        " />

        {/* glow kanan */}
        <div className="
          absolute bottom-[-150px] right-[-100px]
          w-[400px] h-[400px]
          bg-indigo-500/10
          blur-[120px] rounded-full
        " />

      </div>

      <Container>
        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-semibold text-[var(--text)]"
          >
            {t("title")}
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto"
          >
            {t("desc")}
          </motion.p>

          {/* STATS */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">

            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  group relative p-8 rounded-2xl
                  bg-[var(--card)]
                  border border-[var(--border)]
                  backdrop-blur-xl
                  overflow-hidden
                  hover:scale-[1.05]
                  hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]
                  transition-all duration-300
                "
              >

                {/* 🔥 HOVER GLOW */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition
                  bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent)]
                " />

                {/* VALUE */}
                <h3 className="
                  relative z-10 text-4xl md:text-5xl font-bold
                  bg-gradient-to-r from-blue-400 to-indigo-500
                  bg-clip-text text-transparent
                ">
                  <Counter value={item.value} />
                </h3>

                {/* LABEL */}
                <p className="relative z-10 mt-3 text-[var(--text-muted)] text-sm">
                  {item.label}
                </p>

                {/* subtle divider */}
                <div className="
                  mt-6 h-[1px]
                  bg-gradient-to-r from-transparent via-[var(--border)] to-transparent
                " />

              </motion.div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}