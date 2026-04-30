"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Clock,
  Layers,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Keamanan Berstandar Enterprise",
    desc: "Firewall, monitoring, dan kontrol akses dengan praktik terbaik industri.",
  },
  {
    icon: Zap,
    title: "Performa Tinggi & Scalable",
    desc: "Arsitektur dioptimalkan untuk traffic tinggi tanpa bottleneck.",
  },
  {
    icon: Clock,
    title: "Support Cepat & Responsif",
    desc: "Tim teknis siap membantu dengan response time terukur.",
  },
  {
    icon: Layers,
    title: "End-to-End Solution",
    desc: "Dari infrastruktur hingga sistem, semua dalam satu partner.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-[#0B0F14] overflow-hidden">

      {/* BACKGROUND DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(37,99,235,0.2),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(37,99,235,0.15),transparent_50%)]" />

      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            {/* BADGE */}
            <span className="
              inline-flex items-center gap-2
              px-4 py-1.5 text-xs font-medium rounded-full
              bg-blue-500/15 border border-blue-400/30 text-blue-200
              mb-5
            ">
              Why Choose Us
            </span>

            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Partner Teknologi yang
              <span className="block text-blue-400">
                Deliver Hasil Nyata
              </span>
            </h2>

            {/* DESC */}
            <p className="mt-5 text-white/60 max-w-md leading-relaxed">
              Bukan sekadar implementasi IT. Kami fokus pada hasil bisnis:
              stabilitas sistem, efisiensi biaya, dan skalabilitas jangka panjang.
            </p>

            {/* 🔥 PROOF CHIPS (NEW) */}
            <div className="mt-6 flex flex-wrap gap-3 text-[11px]">
              {[
                "SLA jelas & terukur",
                "Response < 5 menit",
                "Monitoring real-time",
              ].map((item, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 rounded-full
                    bg-white/5 border border-white/10
                    text-white/60
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* LIST */}
            <div className="mt-10 space-y-5">
              {reasons.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div key={i} className="flex items-start gap-4 group">

                    {/* ICON */}
                    <div className="
                      w-11 h-11 rounded-xl
                      bg-white/5 border border-white/10
                      flex items-center justify-center
                      group-hover:bg-blue-500/10
                      transition
                    ">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-white font-medium">
                        {item.title}
                      </p>
                      <p className="text-white/50 text-sm">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* CTA (NEW) */}
            <button className="
              mt-10 px-6 py-3 rounded-xl
              bg-gradient-to-r from-blue-500 to-blue-600
              text-white text-sm font-medium
              shadow-[0_10px_30px_rgba(37,99,235,0.4)]
              hover:scale-[1.04]
              transition
            ">
              Konsultasi Infrastruktur →
            </button>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="
                relative w-full max-w-[460px]
                rounded-2xl
                border border-white/10
                bg-gradient-to-b from-white/10 to-white/5
                backdrop-blur-2xl
                p-8
                shadow-[0_30px_100px_rgba(0,0,0,0.8)]
              "
            >

              {/* TITLE */}
              <p className="text-sm text-white/60 mb-6">
                Performance Overview
              </p>

              {/* BIG METRIC */}
              <div className="mb-8">
                <p className="text-4xl font-semibold text-white">
                  99.9%
                </p>
                <p className="text-white/50 text-sm">
                  Uptime Guarantee
                </p>
              </div>

              {/* PROGRESS BARS (NEW) */}
              <div className="space-y-4 text-xs">

                {[
                  { label: "System Stability", value: "99%" },
                  { label: "Response Speed", value: "95%" },
                  { label: "Client Satisfaction", value: "92%" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-white/70 mb-1">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-[90%]" />
                    </div>
                  </div>
                ))}

              </div>

              {/* MINI FLOAT */}
              <div className="
                absolute -bottom-6 -right-6
                bg-white/10 backdrop-blur-md
                border border-white/10
                px-4 py-3 rounded-xl
              ">
                <p className="text-xs text-white/60">Support</p>
                <p className="text-white font-semibold text-sm">
                  24/7 Active
                </p>
              </div>

            </motion.div>

          </div>

        </div>

      </Container>
    </section>
  );
}