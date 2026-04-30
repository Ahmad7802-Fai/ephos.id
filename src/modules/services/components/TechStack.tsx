"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Shield,
  Cpu,
} from "lucide-react";

const stacks = [
  {
    title: "Cloud Platform",
    icon: Cloud,
    items: ["AWS", "Google Cloud", "Azure"],
  },
  {
    title: "Networking",
    icon: Server,
    items: ["MikroTik", "Cisco", "Ubiquiti"],
  },
  {
    title: "System & DevOps",
    icon: Cpu,
    items: ["Linux", "Docker", "Kubernetes"],
  },
  {
    title: "Security",
    icon: Shield,
    items: ["Firewall", "VPN", "Monitoring"],
  },
];

export default function TechStack() {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.06),transparent_60%)]" />

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Technology Stack
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Kami menggunakan teknologi terbaik untuk memastikan sistem
              Anda stabil, aman, dan scalable.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {stacks.map((stack, i) => {
              const Icon = stack.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    group p-6 rounded-2xl
                    bg-white border border-gray-200
                    shadow-sm hover:shadow-xl
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
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {stack.title}
                  </h3>

                  {/* ITEMS */}
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="
                          px-3 py-1 text-xs rounded-full
                          bg-gray-100 text-gray-700
                          border border-gray-200
                        "
                      >
                        {item}
                      </span>
                    ))}
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