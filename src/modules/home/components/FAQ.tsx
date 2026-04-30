"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Berapa biaya layanan IT di Ephos?",
    a: "Biaya tergantung kebutuhan dan kompleksitas sistem. Kami menyediakan konsultasi gratis untuk menentukan solusi terbaik.",
  },
  {
    q: "Apakah bisa custom sesuai kebutuhan bisnis?",
    a: "Ya, semua solusi kami fleksibel dan dapat disesuaikan dengan kebutuhan bisnis Anda.",
  },
  {
    q: "Apakah tersedia support setelah project selesai?",
    a: "Tentu, kami menyediakan support 24/7 untuk memastikan sistem tetap berjalan optimal.",
  },
  {
    q: "Berapa lama proses pengerjaan?",
    a: "Durasi tergantung skala project, mulai dari beberapa minggu hingga beberapa bulan.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* 🔥 BACKGROUND (FIX CLICK ISSUE) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_50%)]" />

      <Container className="relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center px-4 py-1.5 text-xs rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
            FAQ
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Pertanyaan yang
            <span className="block text-blue-600">
              Sering Ditanyakan
            </span>
          </h2>

          <p className="mt-4 text-gray-600">
            Temukan jawaban untuk pertanyaan umum sebelum memulai project bersama kami.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="max-w-3xl mx-auto space-y-4">

          {faqs.map((item, i) => {
            const isActive = active === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`
                  group rounded-2xl overflow-hidden
                  border transition-all duration-300

                  ${
                    isActive
                      ? "border-blue-300 bg-blue-50/70 shadow-lg"
                      : "border-gray-200 bg-white hover:shadow-md"
                  }
                `}
              >

                {/* QUESTION */}
                <button
                  onClick={() => setActive(isActive ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`
                    font-medium text-sm md:text-base
                    ${isActive ? "text-blue-700" : "text-gray-900"}
                  `}>
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`
                      w-5 h-5 transition-all duration-300
                      ${isActive ? "rotate-180 text-blue-600" : "text-gray-400"}
                    `}
                  />
                </button>

                {/* ANSWER */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>

              </motion.div>
            );
          })}

        </div>

        {/* 🔥 PREMIUM CTA */}
        <div className="mt-24 text-center">

          <p className="text-gray-700 mb-6 text-lg">
            Masih punya pertanyaan atau ingin konsultasi langsung?
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            {/* PRIMARY */}
            <button className="
              px-7 py-3 rounded-xl
              bg-gradient-to-r from-blue-500 to-blue-600
              text-white font-medium
              shadow-[0_10px_30px_rgba(37,99,235,0.4)]
              hover:scale-[1.05]
              hover:shadow-[0_20px_50px_rgba(37,99,235,0.5)]
              transition-all duration-300
            ">
              Konsultasi Gratis →
            </button>

            {/* SECONDARY */}
            <button className="
              px-7 py-3 rounded-xl
              border border-gray-300
              text-gray-700
              hover:bg-gray-100
              transition
            ">
              Hubungi Kami
            </button>

          </div>

        </div>

      </Container>
    </section>
  );
}