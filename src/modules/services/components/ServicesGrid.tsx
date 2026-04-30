"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { Server, Cloud, Layers, Shield } from "lucide-react";

const WHATSAPP_NUMBER = "6285285579492";

const services = [
  {
    title: "IT Infrastructure",
    desc: "Jaringan, server, dan sistem IT yang stabil dan scalable.",
    icon: Server,
  },
  {
    title: "Cloud & Managed Service",
    desc: "Monitoring, maintenance, dan cloud infrastructure.",
    icon: Cloud,
  },
  {
    title: "Enterprise System",
    desc: "ERP, automation, dan sistem terintegrasi.",
    icon: Layers,
  },
  {
    title: "IT Security",
    desc: "Keamanan data dan sistem perusahaan.",
    icon: Shield,
  },
];

export default function ServicesGrid() {
  const message = encodeURIComponent(
    "Halo Ephos Tech, saya tertarik dengan layanan IT Anda."
  );

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_60%)]" />

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Layanan Kami
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Solusi IT lengkap untuk mendukung transformasi digital bisnis Anda.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={i}
                  href={waLink}
                  target="_blank"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    group relative p-6 rounded-2xl
                    border border-gray-200
                    bg-white
                    hover:shadow-xl
                    transition-all duration-300
                    overflow-hidden
                  "
                >

                  {/* hover glow */}
                  <div className="
                    absolute inset-0
                    bg-gradient-to-br from-blue-600/0 to-blue-600/0
                    group-hover:from-blue-600/5 group-hover:to-blue-600/10
                    transition
                  " />

                  {/* ICON */}
                  <div className="
                    relative z-10
                    w-12 h-12 rounded-xl
                    bg-blue-600 text-white
                    flex items-center justify-center
                    mb-5
                    shadow-md
                    group-hover:scale-110
                    transition
                  ">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* TITLE */}
                  <h3 className="relative z-10 font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="relative z-10 text-sm text-gray-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* CTA MINI */}
                  <span className="
                    relative z-10 inline-block mt-4 text-sm font-medium text-blue-600
                    opacity-0 group-hover:opacity-100 transition
                  ">
                    Konsultasi →
                  </span>

                </motion.a>
              );
            })}

          </div>

        </div>
      </Container>
    </section>
  );
}