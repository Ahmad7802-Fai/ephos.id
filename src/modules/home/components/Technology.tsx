"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

const stacks = [
  {
    title: "Infrastructure",
    items: ["Cisco", "Mikrotik", "Fiber Optic", "Load Balancer"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    title: "System & Development",
    items: ["Next.js", "Laravel", "PostgreSQL", "API Integration"],
  },
];

export default function Technology() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      <Container>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
            Technology Stack
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Teknologi yang Kami Gunakan
            <span className="block text-blue-600">
              untuk Membangun Sistem Anda
            </span>
          </h2>

          <p className="mt-4 text-gray-600">
            Kami menggunakan teknologi modern dan teruji untuk memastikan sistem
            yang stabil, aman, dan scalable.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {stacks.map((group, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-7 rounded-2xl border border-gray-200 bg-white
                         hover:shadow-xl transition-all duration-300"
            >

              {/* subtle gradient hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
                              bg-gradient-to-br from-blue-50 via-transparent to-transparent rounded-2xl" />

              <div className="relative z-10">

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {group.title}
                </h3>

                {/* ITEMS */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200
                                 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* TRUST NOTE */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-gray-600 text-sm">
            Kami selalu memilih teknologi yang tepat sesuai kebutuhan bisnis,
            bukan sekadar mengikuti tren.
          </p>
        </div>

      </Container>
    </section>
  );
}