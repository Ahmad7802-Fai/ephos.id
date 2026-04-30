"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "6285285579492";

const projects = [
  {
    title: "Enterprise Network Infrastructure",
    problem: "Jaringan lambat, sering downtime, dan tidak scalable.",
    solution: "Implementasi high-availability network dengan load balancing dan monitoring.",
    result: "Uptime 99.9% dan peningkatan performa hingga 3x lebih cepat.",
    tag: "Infrastructure",
  },
  {
    title: "Cloud Migration System",
    problem: "Server lokal terbatas dan tidak fleksibel.",
    solution: "Migrasi ke cloud dengan arsitektur scalable dan auto-scaling.",
    result: "Efisiensi biaya hingga 40% dan sistem lebih fleksibel.",
    tag: "Cloud",
  },
];

export default function CaseStudies() {
  const message = encodeURIComponent(
    "Halo Ephos Tech, saya tertarik dengan solusi seperti di portfolio Anda."
  );

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_60%)]" />

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Selected Case Studies
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Studi kasus nyata bagaimana kami membantu bisnis meningkatkan
              performa, stabilitas, dan efisiensi sistem IT mereka.
            </p>
          </div>

          {/* LIST */}
          <div className="space-y-10">

            {projects.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  group relative rounded-3xl
                  border border-gray-200
                  bg-white
                  overflow-hidden
                  hover:shadow-xl
                  transition-all duration-300
                "
              >

                {/* glow hover */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition
                  bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent)]
                " />

                <div className="relative z-10 grid md:grid-cols-2 gap-10 p-8 md:p-10">

                  {/* LEFT */}
                  <div>

                    {/* TAG */}
                    <span className="
                      inline-block text-xs px-3 py-1 rounded-full
                      bg-blue-50 text-blue-600 mb-4
                    ">
                      {item.tag}
                    </span>

                    {/* TITLE */}
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    {/* CTA */}
                    <a
                      href={waLink}
                      target="_blank"
                      className="
                        inline-flex items-center gap-2
                        text-sm text-blue-600 font-medium
                        mt-4 hover:gap-3 transition-all
                      "
                    >
                      Konsultasi solusi serupa
                      <ArrowRight className="w-4 h-4" />
                    </a>

                  </div>

                  {/* RIGHT */}
                  <div className="space-y-4 text-sm">

                    {/* PROBLEM */}
                    <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                      <p className="font-semibold text-red-600 mb-1">
                        Problem
                      </p>
                      <p className="text-gray-700">
                        {item.problem}
                      </p>
                    </div>

                    {/* SOLUTION */}
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                      <p className="font-semibold text-blue-600 mb-1">
                        Solution
                      </p>
                      <p className="text-gray-700">
                        {item.solution}
                      </p>
                    </div>

                    {/* RESULT */}
                    <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                      <p className="font-semibold text-green-600 mb-1">
                        Result
                      </p>
                      <p className="text-gray-700">
                        {item.result}
                      </p>
                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}