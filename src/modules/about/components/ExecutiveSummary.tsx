"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

export default function ExecutiveSummary() {
  return (
    <section className="relative py-28 bg-[#F8FAFC] overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.06),transparent_60%)]" />

      <Container>
        <div className="max-w-5xl mx-auto">

          {/* 🔥 HEADER (UPGRADED) */}
          <div className="mb-20">
            <p className="text-sm text-blue-600 font-medium mb-3">
              Company Overview
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
              Executive Summary
            </h1>

            <p className="mt-4 text-gray-600 max-w-xl">
              Fondasi strategi dan arah perusahaan dalam menghadirkan solusi teknologi
              yang berdampak nyata bagi bisnis.
            </p>
          </div>

          {/* 🔥 VISI MISI WRAPPER */}
          <div className="relative mb-20">

            {/* gradient accent */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-600 to-blue-300 rounded-full" />

            <div className="pl-8 space-y-10">

              {/* VISI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="
                  p-6 rounded-xl
                  bg-white/70 backdrop-blur-sm
                  border border-gray-200
                  shadow-sm
                "
              >
                <h3 className="text-blue-600 font-semibold text-xs tracking-widest mb-3">
                  VISI
                </h3>

                <p className="text-gray-700 leading-relaxed text-[15px]">
                  Menjadi perusahaan teknologi terkemuka di Indonesia yang menyediakan solusi IT dan enterprise
                  end-to-end, mendorong transformasi digital, meningkatkan produktivitas organisasi,
                  serta menciptakan nilai tambah bagi klien dan masyarakat.
                </p>
              </motion.div>

              {/* MISI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="
                  p-6 rounded-xl
                  bg-white/70 backdrop-blur-sm
                  border border-gray-200
                  shadow-sm
                "
              >
                <h3 className="text-blue-600 font-semibold text-xs tracking-widest mb-3">
                  MISI
                </h3>

                <ul className="text-gray-700 text-[14px] space-y-2 leading-relaxed">
                  <li>• Menyediakan solusi IT end-to-end yang handal dan scalable.</li>
                  <li>• Meningkatkan produktivitas dan efisiensi operasional klien.</li>
                  <li>• Mengutamakan pendekatan human-centric dalam setiap layanan.</li>
                  <li>• Menjamin keamanan, keandalan, dan konsistensi operasional.</li>
                  <li>• Mendukung pertumbuhan bisnis berkelanjutan melalui inovasi teknologi.</li>
                </ul>
              </motion.div>

            </div>
          </div>

          {/* 🔥 CORE VALUES (UPGRADED HARD) */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-blue-600 tracking-wide mb-6">
              CORE VALUES — E.P.H.O.S
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                letter: "E",
                title: "End-to-End",
                desc: "Kami berkomitmen untuk memberikan layanan dan solusi teknologi secara menyeluruh, mulai dari perencanaan, implementasi, hingga pengelolaan operasional, dengan presisi dan profesionalisme yang konsisten.",
              },
              {
                letter: "P",
                title: "Productivity",
                desc: "Kami menghadirkan inovasi dan solusi yang meningkatkan efisiensi operasional, mendukung pertumbuhan bisnis, dan memaksimalkan hasil kerja organisasi.",
              },
              {
                letter: "H",
                title: "Human-Centric-Approach",
                desc: "Kami menempatkan manusia sebagai pusat setiap inovasi, memastikan solusi kami mudah digunakan, relevan, dan berdampak positif bagi pengguna serta organisasi.",
              },
              {
                letter: "O",
                title: "Operational Integrity",
                desc: "Kami menjaga keandalan, keamanan, dan konsistensi operasional sebagai prinsip utama dalam seluruh layanan dan solusi IT yang kami sediakan.",
              },
              {
                letter: "S",
                title: "Scalability & Sustainability",
                desc: "Kami merancang solusi yang fleksibel dan dapat berkembang seiring pertumbuhan bisnis, sekaligus berfokus pada keberlanjutan jangka panjang.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="
                  group relative
                  p-6 rounded-2xl
                  bg-white border border-gray-200
                  shadow-sm hover:shadow-lg
                  transition-all duration-300
                "
              >

                {/* glow hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent)]" />

                {/* LETTER */}
                <div className="
                  absolute -top-4 left-6
                  w-10 h-10 rounded-lg
                  bg-gradient-to-br from-blue-600 to-blue-700
                  text-white flex items-center justify-center
                  text-sm font-semibold shadow
                ">
                  {item.letter}
                </div>

                <div className="mt-4 relative z-10">
                  <h4 className="text-gray-900 font-semibold text-sm mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}