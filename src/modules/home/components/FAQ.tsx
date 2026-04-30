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
    a: "Ya, semua solusi kami bersifat fleksibel dan dapat disesuaikan dengan kebutuhan bisnis Anda.",
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
    <section className="relative py-32 bg-white">

      <Container>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
            FAQ
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Pertanyaan yang Sering Ditanyakan
          </h2>

          <p className="mt-4 text-gray-600">
            Temukan jawaban untuk pertanyaan umum sebelum memulai project bersama kami.
          </p>
        </div>

        {/* LIST */}
        <div className="max-w-2xl mx-auto space-y-4">

          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-gray-900 font-medium text-sm">
                  {item.q}
                </span>

                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition ${
                    active === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ANSWER */}
              {active === i && (
                <div className="px-5 pb-4 text-sm text-gray-600">
                  {item.a}
                </div>
              )}
            </motion.div>
          ))}

        </div>

        {/* 🔥 MINI CTA (PENTING) */}
        <div className="mt-16 text-center">

          <p className="text-gray-700 mb-4">
            Masih punya pertanyaan?
          </p>

          <button className="
            px-6 py-3 rounded-xl
            bg-blue-600 text-white font-medium
            hover:bg-blue-700 transition
          ">
            Konsultasi Gratis →
          </button>

        </div>

      </Container>
    </section>
  );
}