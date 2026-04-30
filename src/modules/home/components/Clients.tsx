"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

const logos = [
  "/assets/client1.png",
  "/assets/client2.png",
  "/assets/client3.png",
  "/assets/client4.png",
  "/assets/client5.png",
  "/assets/client6.png",
];

export default function Clients() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      <Container>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
            Trusted by Businesses
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Dipercaya oleh Berbagai
            <span className="block text-blue-600">
              Perusahaan & Organisasi
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Kami telah membantu berbagai bisnis dalam membangun sistem IT yang stabil,
            aman, dan scalable.
          </p>
        </div>

        {/* LOGO MARQUEE */}
        <div className="relative overflow-hidden">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-12 w-max"
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition"
              >
                <img
                  src={logo}
                  className="max-h-10 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </motion.div>

          {/* gradient mask kiri kanan */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-3 gap-6 text-center">

          <div>
            <p className="text-2xl font-semibold text-gray-900">100+</p>
            <p className="text-gray-500 text-sm">Clients</p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-gray-900">99.9%</p>
            <p className="text-gray-500 text-sm">Uptime</p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-gray-900">24/7</p>
            <p className="text-gray-500 text-sm">Support</p>
          </div>

        </div>

        {/* OPTIONAL TESTIMONIAL */}
        <div className="mt-16 max-w-xl mx-auto text-center">
          <p className="text-gray-700 italic">
            “Ephos membantu kami membangun sistem IT yang stabil dan scalable.
            Timnya profesional dan responsif.”
          </p>

          <p className="mt-4 text-sm text-gray-500">
            — Client Enterprise
          </p>
        </div>

      </Container>
    </section>
  );
}