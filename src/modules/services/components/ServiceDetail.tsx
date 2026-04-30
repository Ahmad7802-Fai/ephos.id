"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { Server, Cloud, ShieldCheck, Zap } from "lucide-react";

const WHATSAPP_NUMBER = "6285285579492";

const services = [
  {
    title: "IT Infrastructure",
    icon: Server,
    desc: "Kami membangun sistem jaringan dan server yang stabil, scalable, dan siap mendukung pertumbuhan bisnis.",
    points: [
      "Design & setup network enterprise",
      "Server & virtualization",
      "High availability & redundancy",
    ],
  },
  {
    title: "Cloud & Managed Service",
    icon: Cloud,
    desc: "Monitoring 24/7, maintenance, dan optimasi performa sistem cloud untuk bisnis Anda.",
    points: [
      "Cloud deployment (AWS, GCP, Azure)",
      "Monitoring & alert system",
      "Auto scaling & cost optimization",
    ],
  },
  {
    title: "Security & Compliance",
    icon: ShieldCheck,
    desc: "Keamanan sistem menjadi prioritas utama untuk melindungi data dan operasional bisnis.",
    points: [
      "Firewall & network security",
      "Backup & disaster recovery",
      "Security audit & hardening",
    ],
  },
  {
    title: "System Optimization",
    icon: Zap,
    desc: "Meningkatkan performa sistem dan efisiensi operasional dengan teknologi yang tepat.",
    points: [
      "Performance tuning",
      "Automation system",
      "Infrastructure scaling",
    ],
  },
];

export default function ServiceDetail() {
  const message = encodeURIComponent(
    "Halo Ephos Tech, saya ingin konsultasi terkait layanan IT."
  );

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.06),transparent_60%)]" />

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Detail Layanan
              <span className="block text-blue-600">
                yang Kami Tawarkan
              </span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Solusi lengkap untuk memastikan sistem IT Anda berjalan optimal,
              aman, dan siap berkembang.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-8">

            {services.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    group
                    p-8 rounded-2xl
                    bg-white
                    border border-gray-200
                    shadow-sm
                    hover:shadow-xl
                    transition-all duration-300
                  "
                >

                  {/* ICON */}
                  <div className="
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* POINTS */}
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={waLink}
                    target="_blank"
                    className="
                      inline-block mt-6 text-sm font-medium text-blue-600
                      hover:underline
                    "
                  >
                    Konsultasi →
                  </a>

                </motion.div>
              );
            })}

          </div>

        </div>
      </Container>
    </section>
  );
}