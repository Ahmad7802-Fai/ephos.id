"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise Network Infrastructure",
    desc: "Implementasi jaringan high-availability untuk perusahaan skala besar.",
    image: "/assets/premium_photo-1682146029185-198922bd8350.avif",
    tags: ["Infrastructure", "Networking"],
    featured: true,
  },
  {
    title: "Cloud Migration System",
    desc: "Migrasi sistem bisnis ke cloud dengan zero downtime.",
    image: "/assets/premium_photo-1764695549917-da546c7254a2.avif",
    tags: ["Cloud", "DevOps"],
  },
  {
    title: "ERP Automation System",
    desc: "Automasi proses bisnis menggunakan sistem ERP terintegrasi.",
    image: "/assets/premium_photo-1682146029185-198922bd8350.avif",
    tags: ["ERP", "Automation"],
  },
];

export default function Portfolio() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      <Container>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
            Portfolio
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Project Nyata yang
            <span className="block text-blue-600">
              Memberikan Dampak
            </span>
          </h2>

          <p className="mt-4 text-gray-600">
            Kami membantu berbagai bisnis membangun sistem yang stabil, scalable,
            dan siap berkembang.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-6">

          {projects.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`
                group relative overflow-hidden rounded-2xl
                ${item.featured ? "lg:col-span-2 lg:row-span-2" : ""}
              `}
            >

              {/* IMAGE */}
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 right-6 text-white">

                {/* TAG */}
                <div className="flex gap-2 mb-3">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-white/70 mt-2">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="
            px-6 py-3 rounded-xl
            bg-blue-600 text-white font-medium
            hover:bg-blue-700 transition
          ">
            Lihat Semua Portfolio →
          </button>
        </div>

      </Container>
    </section>
  );
}