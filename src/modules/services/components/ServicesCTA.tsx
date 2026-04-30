"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "6285285579492";

export default function ServicesCTA() {
  const message = encodeURIComponent(
    "Halo EphosTech, saya ingin konsultasi terkait layanan IT Infrastructure, Cloud, dan System."
  );

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <section className="relative py-32 bg-[#0B0F14] text-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.2),transparent_60%)]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full top-[-100px] left-[-100px]" />

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-semibold leading-tight"
          >
            Siap Upgrade Infrastruktur IT Bisnis Anda?
          </motion.h2>

          {/* DESC (SEO KEYWORD MASUK DI SINI) */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-white/60 text-base md:text-lg leading-relaxed"
          >
            Konsultasikan kebutuhan{" "}
            <span className="text-blue-400">
              IT Infrastructure, Cloud Computing, dan Enterprise System
            </span>{" "}
            Anda bersama tim kami. Kami siap membantu meningkatkan performa,
            keamanan, dan skalabilitas bisnis Anda.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            <a
              href={waLink}
              target="_blank"
              className="
                px-7 py-3 rounded-xl
                bg-gradient-to-r from-green-500 to-green-600
                text-white font-medium
                shadow-[0_10px_30px_rgba(34,197,94,0.4)]
                hover:scale-[1.05]
                transition
              "
            >
              Konsultasi via WhatsApp →
            </a>
          </motion.div>

          {/* TRUST BADGE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-center flex-wrap gap-3"
          >
            {[
              "100+ Client",
              "99.9% Uptime",
              "24/7 Support",
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
          </motion.div>

        </div>
      </Container>
    </section>
  );
}