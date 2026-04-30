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

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.15),transparent_50%)]" />

      <Container>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white/70 mb-4">
            How We Work
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Proses Kerja yang
            <span className="block text-blue-400">
              Terstruktur & Terbukti
            </span>
          </h2>

          <p className="mt-4 text-white/60">
            Kami memastikan setiap project berjalan dengan sistematis,
            transparan, dan menghasilkan solusi terbaik.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/10" />

          <div className="grid md:grid-cols-4 gap-8">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center group"
                >

                  {/* STEP NUMBER */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold shadow-lg">
                      {i + 1}
                    </div>
                  </div>

                  {/* ICON */}
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-white font-semibold">
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-white/50 text-sm mt-2">
                    {step.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
}