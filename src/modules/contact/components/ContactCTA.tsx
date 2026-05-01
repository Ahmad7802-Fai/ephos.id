"use client";

import { Container } from "@/components";
import { useTranslations } from "next-intl";

const WHATSAPP_NUMBER = "6285285579492";

export default function ContactCTA() {
  const t = useTranslations("ContactCTA");

  return (
    <section className="relative py-28 bg-[var(--bg)] text-[var(--text)] overflow-hidden">

      {/* 🔥 BACKGROUND (SAFE) */}
      <div className="
        absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)]
      " />

      {/* 🔥 DEPTH LAYER */}
      <div className="
        absolute inset-0 pointer-events-none
        bg-gradient-to-b
        from-transparent
        via-black/20
        to-black/40
      " />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">

          {/* BADGE */}
          <span className="
            inline-flex items-center gap-2
            px-4 py-1.5 text-xs font-medium
            rounded-full
            bg-[var(--accent-soft)]
            text-[var(--primary)]
            mb-6
          ">
            🚀 {t("badge")}
          </span>

          {/* TITLE */}
          <h2 className="
            text-3xl md:text-4xl lg:text-5xl
            font-semibold leading-tight tracking-tight
          ">
            {t("title1")}

            <span className="
              block
              bg-gradient-to-r from-blue-400 to-indigo-500
              bg-clip-text text-transparent
            ">
              {t("title2")}
            </span>
          </h2>

          {/* DESC */}
          <p className="
            mt-6 text-[var(--text-muted)]
            text-base md:text-lg
            leading-relaxed
          ">
            {t("desc")}
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            {/* PRIMARY */}
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
              {t("ctaPrimary")} →
            </a>

            {/* SECONDARY */}
            <a
              href="/contact"
              className="
                px-8 py-4 rounded-xl
                border border-[var(--border)]
                text-[var(--text)]
                hover:bg-[var(--accent-soft)]
                transition
              "
            >
              {t("ctaSecondary")}
            </a>

          </div>

          {/* TRUST BADGES */}
          <div className="mt-10 flex justify-center flex-wrap gap-3">
            {[t("stat1"), t("stat2"), t("stat3"), t("stat4")].map((item, i) => (
              <span
                key={i}
                className="
                  px-4 py-2 rounded-full text-xs font-semibold
                  bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500
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

          {/* MICRO COPY */}
          <p className="mt-6 text-xs text-[var(--text-muted)]">
            {t("micro")}
          </p>

        </div>
      </Container>
    </section>
  );
}