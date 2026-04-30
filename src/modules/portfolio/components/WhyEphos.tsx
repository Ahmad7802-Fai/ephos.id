"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Rocket,
  Users,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    desc: "Sistem IT dengan standar keamanan tinggi dan stabilitas enterprise.",
  },
  {
    icon: Cpu,
    title: "Scalable Architecture",
    desc: "Dirancang untuk tumbuh bersama bisnis Anda tanpa bottleneck.",
  },
  {
    icon: Rocket,
    title: "Fast Implementation",
    desc: "Deploy cepat dengan metode terstruktur dan minim risiko.",
  },
  {
    icon: Users,
    title: "Business-Oriented",
    desc: "Kami tidak hanya fokus teknologi, tapi juga dampak bisnis.",
  },
];

export default function WhyEphos() {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.06),transparent_60%)]" />

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Why Ephos?
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Kami menghadirkan solusi{" "}
              <span className="text-blue-600 font-medium">
                IT Infrastructure, Cloud, dan Enterprise System
              </span>{" "}
              yang tidak hanya berjalan, tapi benar-benar memberikan dampak.
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

          {/* 🔥 TRUST LINE */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
              Dipercaya oleh berbagai perusahaan untuk membangun sistem IT yang stabil,
              aman, dan scalable.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}