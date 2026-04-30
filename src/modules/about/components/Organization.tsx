"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const team = [
  {
    name: "BILL AFRIYANTO",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300",
    desc: "Memimpin arah strategis perusahaan dan memastikan pertumbuhan bisnis berkelanjutan.",
  },
  {
    name: "ARIS PRIO SUDARWO",
    role: "Director",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300",
    desc: "Mengelola operasional dan memastikan eksekusi strategi berjalan optimal.",
  },
  {
    name: "GREGORIUS YUDHISTIRA",
    role: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=300",
    desc: "Mengelola strategi keuangan dan stabilitas pertumbuhan perusahaan.",
  },
];

export default function Organization() {
  const [active, setActive] = useState(0);
  const isPaused = useRef(false);

  // 🔥 AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused.current) {
        setActive((prev) => (prev + 1) % team.length);
      }
    }, 3500); // smooth timing

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.06),transparent_60%)]" />

      <Container>
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
              Leadership
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Tim Kepemimpinan
              <span className="block text-blue-600">
                Perusahaan
              </span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Dipimpin oleh profesional berpengalaman dengan visi strategis
              dan eksekusi yang kuat.
            </p>
          </div>

          {/* 🔥 COVERFLOW */}
          <div
            className="relative flex justify-center items-center"
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
          >
            <div className="flex items-center justify-center gap-6">

              {team.map((item, i) => {
                const isActive = i === active;

                return (
                  <motion.div
                    key={i}
                    onClick={() => {
                      setActive(i);
                      isPaused.current = true; // pause setelah klik
                    }}
                    animate={{
                      scale: isActive ? 1 : 0.82,
                      opacity: isActive ? 1 : 0.4,
                      y: isActive ? 0 : 30,
                    }}
                    transition={{ duration: 0.45 }}
                    className={`
                      relative cursor-pointer
                      rounded-2xl p-6 w-[260px]
                      text-center transition-all
                      ${isActive
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_30px_80px_rgba(37,99,235,0.4)] z-10"
                        : "bg-gray-50 border border-gray-200"
                      }
                    `}
                  >

                    {/* IMAGE */}
                    <div className="relative mb-5">
                      <img
                        src={item.image}
                        className="w-24 h-24 mx-auto rounded-xl object-cover shadow"
                      />

                      {isActive && (
                        <div className="absolute inset-0 rounded-xl bg-blue-400/20 blur-xl" />
                      )}
                    </div>

                    {/* NAME */}
                    <h3 className={`font-semibold ${
                      isActive ? "text-white" : "text-gray-900"
                    }`}>
                      {item.name}
                    </h3>

                    {/* ROLE */}
                    <p className={`text-xs mt-1 ${
                      isActive ? "text-white/70" : "text-gray-500"
                    }`}>
                      {item.role}
                    </p>

                    {/* DESC */}
                    {isActive && (
                      <p className="text-sm mt-4 text-white/80 leading-relaxed">
                        {item.desc}
                      </p>
                    )}

                  </motion.div>
                );
              })}

            </div>
          </div>

          {/* DOT */}
          <div className="flex justify-center gap-2 mt-8">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActive(i);
                  isPaused.current = true;
                }}
                className={`
                  h-2.5 rounded-full transition-all duration-300
                  ${active === i ? "bg-blue-600 w-6" : "bg-gray-300 w-2.5"}
                `}
              />
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}