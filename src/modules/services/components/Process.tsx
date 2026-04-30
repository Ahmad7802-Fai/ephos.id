"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Rocket,
  Activity,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Assessment",
    desc: "Kami menganalisa kebutuhan bisnis dan kondisi infrastruktur saat ini.",
  },
  {
    icon: Lightbulb,
    title: "Planning",
    desc: "Menyusun solusi IT yang tepat, scalable, dan sesuai kebutuhan bisnis.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    desc: "Eksekusi sistem dengan standar tinggi dan minim risiko downtime.",
  },
  {
    icon: Activity,
    title: "Monitoring",
    desc: "Pemantauan performa sistem secara real-time untuk menjaga stabilitas.",
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    desc: "Optimasi berkelanjutan untuk meningkatkan efisiensi dan performa.",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 bg-[#0B0F14] overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.15),transparent_60%)]" />

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white/70 mb-4">
              Process
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              Proses Kerja yang
              <span className="block text-blue-400">
                Terstruktur & Terbukti
              </span>
            </h2>

            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              Kami memastikan setiap project berjalan dengan sistematis,
              transparan, dan menghasilkan solusi terbaik.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">

            {/* LINE */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/10" />

            <div className="grid md:grid-cols-5 gap-8">

              {steps.map((step, i) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative text-center group"
                  >

                    {/* STEP NUMBER */}
                    <div className="mb-6 flex justify-center">
                      <div className="
                        w-12 h-12 rounded-full
                        bg-blue-600 text-white
                        flex items-center justify-center
                        font-semibold
                        shadow-[0_10px_30px_rgba(37,99,235,0.5)]
                      ">
                        {i + 1}
                      </div>
                    </div>

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
                    <h3 className="text-white font-medium">
                      {step.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-white/50 text-sm mt-2 leading-relaxed">
                      {step.desc}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}