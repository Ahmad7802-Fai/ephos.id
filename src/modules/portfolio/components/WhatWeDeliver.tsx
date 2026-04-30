"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Layers,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    title: "Infrastructure Design",
    desc: "Arsitektur jaringan dan server yang stabil, scalable, dan siap berkembang.",
    icon: Server,
  },
  {
    title: "Cloud Deployment",
    desc: "Implementasi cloud modern untuk fleksibilitas dan efisiensi operasional.",
    icon: Cloud,
  },
  {
    title: "System Integration",
    desc: "Integrasi sistem bisnis agar berjalan otomatis dan terhubung.",
    icon: Layers,
  },
  {
    title: "Security Implementation",
    desc: "Keamanan sistem dan data dengan standar enterprise.",
    icon: ShieldCheck,
  },
];

export default function WhatWeDeliver() {
  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.06),transparent_60%)]" />

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              What We Deliver
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Solusi end-to-end yang dirancang untuk meningkatkan performa,
              keamanan, dan efisiensi operasional bisnis Anda.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {items.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    group relative p-6 rounded-2xl
                    bg-white border border-gray-200
                    hover:shadow-xl
                    transition-all duration-300
                  "
                >

                  {/* glow hover */}
                  <div className="
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition
                    bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent)]
                    rounded-2xl
                  " />

                  {/* ICON */}
                  <div className="
                    relative z-10 w-12 h-12 rounded-xl
                    bg-blue-50 border border-blue-100
                    flex items-center justify-center mb-4
                    group-hover:bg-blue-100 transition
                  ">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>

                  {/* TITLE */}
                  <h3 className="relative z-10 font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="relative z-10 text-sm text-gray-600 mt-2 leading-relaxed">
                    {item.desc}
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