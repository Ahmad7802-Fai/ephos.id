"use client";

import { Container } from "@/components";

const WHATSAPP_NUMBER = "6285285579492";

export default function ContactCTA() {
  return (
    <section className="relative py-28 bg-[#020617] text-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.25),transparent_60%)]" />

      {/* 🔥 EXTRA DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <Container>
        <div className="relative z-10 text-center max-w-3xl mx-auto">

          {/* BADGE */}
          <span className="
            inline-flex items-center gap-2
            px-4 py-1.5 text-xs font-medium
            rounded-full
            bg-blue-500/10 border border-blue-400/20
            text-blue-300
            mb-6
          ">
            🚀 Konsultasi IT Gratis
          </span>

          {/* HEADLINE (SEO STRONG) */}
          <h2 className="
            text-3xl md:text-4xl lg:text-5xl
            font-semibold leading-tight tracking-tight
          ">
            Tingkatkan Bisnis Anda dengan
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Solusi IT & Infrastruktur Digital Terbaik
            </span>
          </h2>

          {/* DESC (SEO KEYWORDS MASUK HALUS) */}
          <p className="
            mt-6 text-white/60
            text-base md:text-lg
            leading-relaxed
          ">
            Ephos Tech menyediakan layanan{" "}
            <span className="text-white/80">IT infrastructure</span>,{" "}
            <span className="text-white/80">cloud services</span>, dan{" "}
            <span className="text-white/80">enterprise system</span> untuk membantu bisnis Anda lebih efisien, scalable, dan siap berkembang di era digital.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            {/* PRIMARY CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              className="
                px-8 py-4 rounded-xl
                bg-gradient-to-r from-green-500 to-green-600
                text-white font-medium
                shadow-[0_15px_40px_rgba(34,197,94,0.4)]
                hover:scale-[1.05]
                hover:shadow-[0_25px_60px_rgba(34,197,94,0.5)]
                transition-all duration-300
              "
            >
              Konsultasi via WhatsApp →
            </a>

            {/* SECONDARY CTA */}
            <a
              href="/contact"
              className="
                px-8 py-4 rounded-xl
                border border-white/20
                text-white/80
                hover:bg-white/10
                transition
              "
            >
              Hubungi Kami
            </a>

          </div>

          {/* TRUST BADGES */}
          <div className="mt-10 flex justify-center flex-wrap gap-3">

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
                  shadow-[0_8px_25px_rgba(251,191,36,0.5)]
                  hover:scale-[1.05]
                  transition
                "
              >
                {item}
              </span>
            ))}

          </div>

          {/* 🔥 MICRO COPY (TRUST BOOST) */}
          <p className="mt-6 text-xs text-white/40">
            Respon cepat • Konsultasi gratis • Tanpa komitmen
          </p>

        </div>
      </Container>
    </section>
  );
}