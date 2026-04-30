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
    <section className="relative py-28 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/assets/premium_photo-1764695549917-da546c7254a2.avif"
        alt="IT Infrastructure"
        fill
        priority
        className="object-cover opacity-25 scale-105"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#0B0F14]/70" />

      {/* BLUE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.25),transparent_50%)]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* BADGE (UPGRADED) */}
            <span className="
              inline-flex items-center gap-2
              px-4 py-1.5 text-xs font-medium
              rounded-full
              bg-blue-500/15
              border border-blue-400/30
              text-blue-200
              backdrop-blur-md
              shadow-[0_4px_20px_rgba(37,99,235,0.25)]
              mb-5
            ">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Enterprise IT Solution
            </span>

            {/* 🔥 HEADLINE (FIXED) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight">
              Bangun Infrastruktur & Sistem IT
              <span className="block bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                yang Stabil, Scalable, dan Siap Tumbuh
              </span>
            </h1>

            {/* DESC */}
            <p className="mt-5 text-white/60 max-w-md leading-relaxed">
              Kami membantu bisnis meningkatkan performa operasional dengan solusi IT end-to-end — dari infrastruktur, cloud, hingga sistem enterprise.
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-8 space-y-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>

                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA (UPGRADED) */}
            <div className="mt-8 flex gap-4">
              <button className="
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-500 to-blue-600
                text-white font-medium
                shadow-[0_10px_30px_rgba(37,99,235,0.4)]
                hover:scale-[1.04]
                hover:shadow-[0_20px_50px_rgba(37,99,235,0.5)]
                transition-all duration-300
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

            {/* TRUST */}
            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "100+ Client",
                "99.9% Uptime",
                "24/7 Support",
              ].map((item, i) => (
                <span
                  key={i}
                  className="
                    flex items-center gap-2

                    px-4 py-2
                    rounded-full
                    text-xs font-semibold

                    bg-gradient-to-r from-yellow-400 to-amber-500
                    text-black

                    shadow-[0_8px_25px_rgba(251,191,36,0.6)]

                    border border-white/30

                    backdrop-blur-md

                    hover:scale-[1.07]
                    transition-all duration-300
                  "
                >
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  {item}
                </span>
              ))}

            </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-end">

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative w-[500px]"
            >

              {/* IMAGE */}
              <img
                src="/assets/premium_photo-1682146029185-198922bd8350.avif"
                className="rounded-2xl object-cover shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* MAIN CARD */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-6 left-6 right-6
                           bg-white/10 backdrop-blur-xl border border-white/10
                           rounded-xl p-5"
              >
                <p className="text-sm text-white/70 mb-2">
                  Infrastruktur Aktif
                </p>

                <div className="flex justify-between text-white text-sm">
                  <span>120 Mbps</span>
                  <span>300+ Users</span>
                </div>
              </motion.div>

              {/* FLOAT */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 left-0
                           bg-white/10 backdrop-blur-md border border-white/10
                           px-4 py-3 rounded-xl"
              >
                <p className="text-xs text-white/60">Latency</p>
                <p className="text-white font-semibold">12 ms</p>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
}