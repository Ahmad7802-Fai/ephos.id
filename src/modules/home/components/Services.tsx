"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Layers,
  ShieldCheck,
  Users,
  Settings,
} from "lucide-react";

const mainServices = [
  {
    icon: Server,
    title: "IT Infrastructure",
    desc: "Bangun jaringan stabil & scalable untuk operasional bisnis tanpa downtime.",
    impact: "99.9% uptime • Zero bottleneck",
    featured: true,
  },
  {
    icon: Cloud,
    title: "Cloud & Managed Services",
    desc: "Optimasi cloud dengan monitoring & management penuh.",
    impact: "Lebih hemat biaya hingga 40%",
  },
  {
    icon: Layers,
    title: "Enterprise System",
    desc: "ERP, CRM, dan automation untuk efisiensi bisnis.",
    impact: "Operasional lebih cepat & terstruktur",
  },
];

const secondaryServices = [
  { icon: ShieldCheck, title: "Security & Compliance" },
  { icon: Users, title: "Collaboration Tools" },
  { icon: Settings, title: "IT Consulting" },
];

export default function Services() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_50%)]" />

      <Container>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Solusi End-to-End untuk
            <span className="block text-blue-600">
              Infrastruktur & Sistem Bisnis
            </span>
          </h2>

          <p className="mt-4 text-gray-600">
            Dari infrastruktur hingga sistem enterprise, kami membantu bisnis berkembang
            lebih cepat, efisien, dan scalable.
          </p>
        </div>

        {/* 🔥 SERVICES */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">

          {mainServices.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative rounded-3xl p-7 transition-all duration-500
                ${item.featured
                  ? "lg:col-span-2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-[0_30px_80px_rgba(37,99,235,0.5)]"
                  : "bg-white border border-gray-200 shadow-sm hover:shadow-xl"
                }`}
              >

                {/* GLOW */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition
                                bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.15),transparent)]" />

                <div className="relative z-10">

                  {/* ICON */}
                  <div className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center
                    ${item.featured
                      ? "bg-white/20"
                      : "bg-blue-50"
                    }`}>
                    <Icon className={`w-6 h-6 ${
                      item.featured ? "text-white" : "text-blue-600"
                    }`} />
                  </div>

                  {/* TITLE */}
                  <h3 className={`text-xl font-semibold ${
                    item.featured ? "text-white" : "text-gray-900"
                  }`}>
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className={`mt-3 text-sm leading-relaxed ${
                    item.featured ? "text-white/80" : "text-gray-600"
                  }`}>
                    {item.desc}
                  </p>

                  {/* 🔥 IMPACT (NEW) */}
                  <div className={`mt-5 inline-block px-3 py-1 text-xs rounded-full font-medium
                    ${item.featured
                      ? "bg-white/20 text-white"
                      : "bg-blue-50 text-blue-600"
                    }`}>
                    {item.impact}
                  </div>

                  {/* CTA */}
                  <p className={`mt-6 text-sm font-medium opacity-0 group-hover:opacity-100 transition ${
                    item.featured ? "text-white" : "text-blue-600"
                  }`}>
                    Pelajari lebih lanjut →
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* ➕ SECONDARY */}
        <div className="flex flex-wrap justify-center gap-4">
          {secondaryServices.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group flex items-center gap-3 px-5 py-3 rounded-full
                           bg-gray-100 border border-gray-200
                           hover:bg-white hover:shadow-md transition"
              >
                <Icon className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition" />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  {item.title}
                </span>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}