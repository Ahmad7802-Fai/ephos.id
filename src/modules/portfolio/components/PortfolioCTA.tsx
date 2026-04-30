"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

const WA = "6285285579492";

export default function PortfolioCTA() {
  const message = encodeURIComponent(
    "Halo Ephos Tech, saya ingin konsultasi terkait IT Infrastructure, Cloud, dan Enterprise System."
  );

  return (
    <section className="relative py-32 bg-[#020617] text-white overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617] to-black" />

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.25),transparent_60%)]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full top-[-120px] left-[-120px]" />

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-semibold leading-tight"
          >
            Siap Upgrade
            <span className="block bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              Infrastruktur IT Anda?
            </span>
          </motion.h2>

          {/* DESC (SEO KEYWORDS MASUK) */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-white/60 text-base md:text-lg leading-relaxed"
          >
            Konsultasikan kebutuhan{" "}
            <span className="text-blue-400">
              IT Infrastructure, Cloud Computing, Network System, dan Enterprise Solution
            </span>{" "}
            untuk meningkatkan performa, keamanan, dan skalabilitas bisnis Anda.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <a
              href={`https://wa.me/${WA}?text=${message}`}
              target="_blank"
              className="
                inline-flex items-center gap-2
                px-8 py-4 rounded-xl
                bg-gradient-to-r from-green-500 to-green-600
                text-white font-semibold text-sm
                shadow-[0_10px_30px_rgba(34,197,94,0.4)]
                hover:scale-[1.05]
                hover:shadow-[0_20px_50px_rgba(34,197,94,0.5)]
                transition-all duration-300
              "
            >
              Konsultasi Gratis via WhatsApp →
            </a>
          </motion.div>

          {/* TRUST BADGE */}
          <div className="mt-8 flex justify-center flex-wrap gap-3">
            {[
              "100+ Project",
              "99.9% Uptime",
              "Enterprise Ready",
            ].map((item, i) => (
              <span
                key={i}
                className="
                  px-4 py-2 rounded-full text-xs font-semibold
                  bg-gradient-to-r from-yellow-400 to-amber-500
                  text-black
                  shadow-[0_6px_20px_rgba(251,191,36,0.5)]
                "
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}