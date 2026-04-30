"use client";

import { Container } from "@/components";

export default function ExecutiveSummary() {
  return (
    <section className="py-28 bg-[#F8FAFC]">
      <Container>

        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
              Executive Summary
            </h1>
          </div>

          {/* CONTENT WRAPPER */}
          <div className="relative">

            {/* LEFT ACCENT BAR */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600 rounded-full" />

            <div className="pl-8">

              {/* VISI */}
              <div className="mb-10">
                <h3 className="text-blue-600 font-semibold text-sm tracking-wide mb-3">
                  VISI
                </h3>

                <p className="text-gray-700 leading-relaxed text-[15px]">
                  Menjadi perusahaan teknologi terkemuka di Indonesia yang menyediakan solusi IT dan enterprise
                  end-to-end, mendorong transformasi digital, meningkatkan produktivitas organisasi,
                  serta menciptakan nilai tambah bagi klien dan masyarakat.
                </p>
              </div>

              {/* MISI */}
              <div className="mb-12">
                <h3 className="text-blue-600 font-semibold text-sm tracking-wide mb-3">
                  MISI
                </h3>

                <ul className="text-gray-700 text-[15px] space-y-2 leading-relaxed">
                  <li>• Menyediakan solusi IT end-to-end yang handal dan scalable.</li>
                  <li>• Meningkatkan produktivitas dan efisiensi operasional klien.</li>
                  <li>• Mengutamakan pendekatan human-centric dalam setiap layanan.</li>
                  <li>• Menjamin keamanan, keandalan, dan konsistensi operasional.</li>
                  <li>• Mendukung pertumbuhan bisnis berkelanjutan melalui inovasi teknologi.</li>
                </ul>
              </div>

            </div>

          </div>

          {/* 🔥 CORE VALUES SECTION (E.P.H.O.S) */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">

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
                title: "Human-Centric Approach",
                desc: "Kami menempatkan manusia sebagai pusat setiap inovasi, memastikan solusi kami mudah digunakan, relevan, dan berdampak positif bagi pengguna serta organisasi.",
              },
              {
                letter: "O",
                title: "Operational Integrity",
                desc: "Kami menjaga keandalan, keamanan, dan konsistensi operasional sebagai prinsip utama dalam seluruh layanan dan solusi IT yang kami sediakan",
              },
              {
                letter: "S",
                title: "Scalability & Sustainability",
                desc: "Kami merancang solusi yang fleksibel dan dapat berkembang seiring pertumbuhan bisnis, sekaligus berfokus pada keberlanjutan jangka panjang",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  relative
                  p-6 rounded-xl
                  bg-white
                  border border-gray-200
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >

                {/* LETTER */}
                <div className="
                  absolute -top-4 left-6
                  w-10 h-10 rounded-lg
                  bg-blue-600 text-white
                  flex items-center justify-center
                  text-sm font-semibold
                  shadow-md
                ">
                  {item.letter}
                </div>

                <div className="mt-4">
                  <h4 className="text-gray-900 font-semibold text-sm mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}