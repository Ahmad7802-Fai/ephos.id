"use client";

import Image from "next/image";
import { Container } from "@/components";
import { motion } from "framer-motion";
import { Server, Cloud, Layers } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "IT Infrastructure",
    desc: "Jaringan stabil, cepat, dan scalable",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    desc: "Operasional lebih fleksibel & efisien",
  },
  {
    icon: Layers,
    title: "Enterprise System",
    desc: "ERP & automation terintegrasi",
  },
];

export default function Hero() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/assets/premium_photo-1764705618971-bf125023ac6e.avif"
        alt="IT Infrastructure"
        fill
        priority
        className="object-cover opacity-70 scale-105"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#0B0F14]/80" />

      {/* BLUE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.25),transparent_50%)]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT ================= */}
          <div className="max-w-[560px] mx-auto lg:mx-0">

            {/* BADGE */}
            <motion.span
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="
                inline-flex items-center gap-2
                px-4 py-1.5 text-xs font-medium
                rounded-full
                bg-blue-500/15 border border-blue-400/30
                text-blue-200
                backdrop-blur-md
                mb-5
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Enterprise IT Solution
            </motion.span>

            {/* HEADLINE */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="
                text-3xl md:text-4xl lg:text-5xl
                font-semibold text-white
                leading-[1.2] tracking-tight
              "
            >
              Bangun Infrastruktur & Sistem IT

              <span className="block">
                yang Stabil, Scalable,
              </span>

              <span className="
                block
                bg-gradient-to-r from-blue-300 to-blue-500
                bg-clip-text text-transparent
              ">
                dan Siap Tumbuh
              </span>
            </motion.h1>

            {/* DESC */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="
                mt-5 text-white/60 text-[14px] md:text-[15px]
                leading-relaxed max-w-[480px]
              "
            >
              Kami membantu bisnis meningkatkan performa operasional dengan solusi IT end-to-end — dari infrastruktur, cloud, hingga sistem enterprise.
            </motion.p>

            {/* HIGHLIGHTS */}
            <div className="mt-8 space-y-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>

                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <button className="
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-500 to-blue-600
                text-white font-medium
                shadow-[0_10px_30px_rgba(37,99,235,0.4)]
                hover:scale-[1.05]
                transition
              ">
                Konsultasi Gratis →
              </button>

              <button className="
                px-6 py-3 rounded-xl
                border border-white/15
                text-white/80
                hover:bg-white/10
                transition
              ">
                Lihat Portfolio
              </button>

            </div>

            {/* TRUST BADGE */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["100+ Client", "99.9% Uptime", "24/7 Support"].map((item, i) => (
                <span
                  key={i}
                  className="
                    flex items-center gap-2
                    px-4 py-2 rounded-full text-xs font-semibold
                    bg-gradient-to-r from-yellow-400 to-amber-500
                    text-black
                    shadow-[0_8px_20px_rgba(251,191,36,0.5)]
                  "
                >
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  {item}
                </span>
              ))}
            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative w-full max-w-[420px] lg:max-w-[520px]"
            >

              {/* IMAGE */}
              <img
                src="/assets/premium_photo-1682146029185-198922bd8350.avif"
                className="w-full rounded-2xl object-cover shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* MAIN CARD */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="
                  absolute bottom-4 left-4 right-4
                  bg-white/10 backdrop-blur-xl
                  border border-white/10
                  rounded-xl p-4
                "
              >
                <p className="text-xs text-white/70 mb-1">
                  Infrastruktur Aktif
                </p>

                <div className="flex justify-between text-white text-sm">
                  <span>120 Mbps</span>
                  <span>300+ Users</span>
                </div>
              </motion.div>

              {/* FLOAT MOBILE */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="
                  absolute -bottom-6 left-2
                  bg-white/10 backdrop-blur-md
                  border border-white/10
                  px-3 py-2 rounded-xl
                "
              >
                <p className="text-[10px] text-white/60">Latency</p>
                <p className="text-white text-sm font-semibold">12 ms</p>
              </motion.div>

              {/* FLOAT DESKTOP ONLY */}
              <div className="hidden lg:block">

                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl"
                >
                  <p className="text-xs text-white/60">Uptime</p>
                  <p className="text-white font-semibold">99.9%</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5 }}
                  className="absolute top-1/2 -right-8 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl"
                >
                  <p className="text-xs text-white/60">Traffic</p>
                  <p className="text-white font-semibold">+45%</p>
                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
}