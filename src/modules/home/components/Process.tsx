"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Rocket,
  Activity,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Consultation",
    desc: "Kami memahami kebutuhan bisnis dan tantangan yang dihadapi.",
  },
  {
    icon: Lightbulb,
    title: "Planning",
    desc: "Menyusun solusi IT yang tepat dan scalable sesuai kebutuhan.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    desc: "Membangun dan mengimplementasikan sistem dengan standar tinggi.",
  },
  {
    icon: Activity,
    title: "Monitoring & Support",
    desc: "Pemantauan sistem dan dukungan penuh 24/7.",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 bg-[#0B0F14] overflow-hidden">

      {/* BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.2),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.12),transparent_50%)]" />

      <Container>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs rounded-full bg-white/10 border border-white/20 text-white/70 mb-4">
            How We Work
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Proses Kerja yang
            <span className="block bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              Terstruktur & Terbukti
            </span>
          </h2>

          <p className="mt-4 text-white/60">
            Setiap project kami jalankan dengan pendekatan sistematis
            untuk memastikan hasil maksimal dan minim risiko.
          </p>
        </div>

        {/* FLOW */}
        <div className="relative">

          {/* CONNECTOR LINE */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-4 gap-10">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="relative group text-center"
                >

                  {/* GLOW DOT (CONNECTOR) */}
                  <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.9)]" />

                  {/* STEP NUMBER */}
                  <div className="mb-6 flex justify-center">
                    <div className="
                      w-14 h-14
                      rounded-full
                      flex items-center justify-center
                      text-white font-semibold

                      bg-gradient-to-br from-blue-500 to-blue-600
                      shadow-[0_10px_40px_rgba(37,99,235,0.5)]

                      group-hover:scale-110
                      transition
                    ">
                      {i + 1}
                    </div>
                  </div>

                  {/* CARD */}
                  <div className="
                    relative
                    p-6 rounded-2xl
                    bg-white/5 backdrop-blur-xl
                    border border-white/10

                    group-hover:bg-blue-500/10
                    group-hover:border-blue-400/20
                    transition-all duration-300
                  ">

                    {/* ICON */}
                    <div className="mb-4 flex justify-center">
                      <div className="
                        w-12 h-12 rounded-xl
                        bg-white/5 border border-white/10
                        flex items-center justify-center
                        group-hover:bg-blue-500/20
                        transition
                      ">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-white font-semibold">
                      {step.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-white/50 text-sm mt-2 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* subtle glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
}