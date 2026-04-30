"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

export default function ValuesSplit() {
  const values = [
    { title: "End-to-End", desc: "Solusi menyeluruh dari awal hingga operasional." },
    { title: "Productivity", desc: "Meningkatkan efisiensi bisnis secara nyata." },
    { title: "Human-Centric", desc: "Fokus pada pengalaman pengguna." },
    { title: "Operational Integrity", desc: "Keamanan & stabilitas sistem." },
    { title: "Scalability", desc: "Solusi siap berkembang." },
  ];

  return (
    <section className="py-28 bg-[#F8FAFC]">
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT BIG TEXT */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
              Nilai yang
              <span className="block text-blue-600">
                Membangun Ephos
              </span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-md">
              Setiap solusi yang kami bangun selalu berlandaskan nilai fundamental yang kuat.
            </p>
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-6">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 bg-white rounded-xl border border-gray-200"
              >
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}