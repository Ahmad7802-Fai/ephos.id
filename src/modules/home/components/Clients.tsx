"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

const logos = [
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200",
  "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=200",
  "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=200",
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200",
];

export default function Clients() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_60%)]" />

      <Container>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
            Trusted by Businesses
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Dipercaya oleh Perusahaan
            <span className="block text-blue-600">
              yang Serius Bertumbuh
            </span>
          </h2>

          <p className="mt-4 text-gray-600">
            Infrastruktur dan sistem IT yang kami bangun digunakan oleh bisnis
            dengan kebutuhan tinggi akan stabilitas dan performa.
          </p>
        </div>

        {/* 🔥 TRUST LINE */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500">
            Digunakan oleh tim IT, startup, hingga perusahaan enterprise
          </p>
        </div>

        {/* 🔥 FLOATING LOGOS (UPGRADE) */}
        <div className="relative mb-20">

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="flex flex-wrap justify-center gap-8"
          >
            {logos.map((logo, i) => (
              <div
                key={i}
                className="
                  w-32 h-16
                  flex items-center justify-center
                  opacity-60 hover:opacity-100
                  transition
                "
              >
                <img
                  src={logo}
                  className="max-h-10 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </motion.div>

        </div>

        {/* 🔥 STATS (DARK CONTRAST BIAR NAIK) */}
        <div className="bg-[#0B0F14] rounded-3xl p-10 mb-20">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            {[
              { value: "100+", label: "Clients" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="text-white/50 text-sm mt-1">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* 🔥 TESTIMONIAL (CENTER HERO) */}
        <div className="max-w-3xl mx-auto text-center">

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="
              relative
              rounded-3xl
              bg-gradient-to-br from-blue-600 to-blue-700
              p-10
              text-white
              shadow-[0_30px_100px_rgba(37,99,235,0.4)]
            "
          >

            {/* quote */}
            <p className="text-lg leading-relaxed">
              “Ephos membantu kami meningkatkan stabilitas sistem secara signifikan.
              Downtime hampir tidak ada, dan timnya sangat responsif.”
            </p>

            {/* user */}
            <div className="mt-8 flex items-center justify-center gap-4">

              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100"
                className="w-12 h-12 rounded-full object-cover border border-white/30"
              />

              <div className="text-left">
                <p className="text-sm font-medium">
                  Budi Santoso
                </p>
                <p className="text-xs text-white/70">
                  IT Manager, Enterprise Company
                </p>
              </div>

            </div>

            {/* glow */}
            <div className="absolute inset-0 rounded-3xl bg-white/10 blur-2xl opacity-20" />

          </motion.div>

        </div>

      </Container>
    </section>
  );
}