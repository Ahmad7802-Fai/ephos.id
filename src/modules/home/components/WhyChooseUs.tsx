"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Clock,
  Layers,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    desc: "Infrastruktur stabil dengan standar keamanan enterprise.",
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Optimasi sistem untuk performa maksimal dan scalable.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Tim support siap membantu kapan saja tanpa downtime.",
  },
  {
    icon: Layers,
    title: "End-to-End Solution",
    desc: "Semua kebutuhan IT dalam satu partner terpercaya.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-[#0B0F14] overflow-hidden">

      {/* 🌌 BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.18),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.12),transparent_50%)]" />

      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            {/* BADGE */}
            <span className="
              inline-flex items-center gap-2
              px-4 py-1.5
              text-xs font-medium
              rounded-full
              bg-blue-500/10
              border border-blue-400/20
              text-blue-300
              mb-5
            ">
              Why Choose Us
            </span>

            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Partner Teknologi yang
              <span className="block text-blue-400">
                Bisa Anda Andalkan
              </span>
            </h2>

            {/* DESC */}
            <p className="mt-5 text-white/60 max-w-md leading-relaxed">
              Kami membantu bisnis berkembang dengan solusi IT yang stabil,
              aman, dan scalable. Fokus kami bukan hanya teknologi,
              tapi hasil nyata untuk bisnis Anda.
            </p>

            {/* LIST */}
            <div className="mt-10 space-y-5">
              {reasons.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div key={i} className="flex items-start gap-4 group">
                    
                    {/* ICON */}
                    <div className="
                      w-11 h-11 rounded-xl
                      bg-white/5 border border-white/10
                      flex items-center justify-center
                      group-hover:bg-blue-500/10
                      transition
                    ">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-white font-medium">
                        {item.title}
                      </p>
                      <p className="text-white/50 text-sm">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT (TRUST VISUAL) */}
          <div className="relative flex justify-center">

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="
                relative w-full max-w-[460px]
                rounded-2xl
                border border-white/10
                bg-gradient-to-b from-white/10 to-white/5
                backdrop-blur-2xl
                p-8
                shadow-[0_30px_100px_rgba(0,0,0,0.8)]
              "
            >

              {/* TITLE */}
              <p className="text-sm text-white/60 mb-6">
                Trusted Performance
              </p>

              {/* BIG METRIC */}
              <div className="mb-8">
                <p className="text-4xl font-semibold text-white">
                  99.9%
                </p>
                <p className="text-white/50 text-sm">
                  System Uptime Guarantee
                </p>
              </div>

              {/* GRID METRICS */}
              <div className="grid grid-cols-2 gap-6 text-sm">

                <div>
                  <p className="text-white font-medium">100+</p>
                  <p className="text-white/50 text-xs">Clients</p>
                </div>

                <div>
                  <p className="text-white font-medium">24/7</p>
                  <p className="text-white/50 text-xs">Support</p>
                </div>

                <div>
                  <p className="text-white font-medium">Fast</p>
                  <p className="text-white/50 text-xs">Response Time</p>
                </div>

                <div>
                  <p className="text-white font-medium">Secure</p>
                  <p className="text-white/50 text-xs">Infrastructure</p>
                </div>

              </div>

              {/* FLOAT BADGE */}
              <div className="
                absolute -bottom-6 -right-6
                bg-blue-500/10
                border border-blue-400/20
                backdrop-blur-md
                px-4 py-3 rounded-xl
              ">
                <p className="text-xs text-blue-300">Support</p>
                <p className="text-white font-semibold text-sm">
                  24/7 Active
                </p>
              </div>

            </motion.div>

          </div>

        </div>

      </Container>
    </section>
  );
}