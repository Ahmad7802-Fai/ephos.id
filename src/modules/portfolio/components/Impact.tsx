"use client";

import { Container } from "@/components";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const stats = [
    { value: "99.9%", label: "System Uptime" },
    { value: "100+", label: "Clients Served" },
    { value: "24/7", label: "Monitoring & Support" },
  ];

  return (
    <section className="relative py-32 bg-[#0B0F14] text-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.2),transparent_60%)]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full top-[-120px] right-[-120px]" />

      <Container>
        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-semibold"
          >
            Impact & Results
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/60 max-w-xl mx-auto"
          >
            Hasil nyata dari implementasi solusi IT kami terhadap performa
            dan efisiensi bisnis klien.
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
                  relative group p-8 rounded-2xl
                  bg-white/5 border border-white/10
                  backdrop-blur
                  hover:scale-[1.05]
                  transition-all duration-300
                "
              >

                {/* glow hover */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition
                  bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.2),transparent)]
                  rounded-2xl
                " />

                {/* VALUE */}
                <h3 className="
                  relative z-10 text-4xl md:text-5xl font-bold
                  bg-gradient-to-r from-blue-300 to-blue-500
                  bg-clip-text text-transparent
                ">
                  <Counter value={item.value} />
                </h3>

                {/* LABEL */}
                <p className="relative z-10 mt-3 text-white/60 text-sm">
                  {item.label}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}