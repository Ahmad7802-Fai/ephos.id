"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

export default function OrganizationStructure() {
  return (
    <section className="py-28 bg-white">
      <Container>

        <div className="max-w-5xl mx-auto text-center">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-wide text-blue-600 mb-10"
          >
            ORGANIZATION STRUCTURE
          </motion.h2>

          {/* CARD WRAPPER */}
          <div className="
            relative
            rounded-2xl
            border border-gray-200
            bg-gray-50
            p-10
            shadow-sm
          ">

            {/* CEO */}
            <div className="flex justify-center mb-10">
              <div className="
                px-6 py-3
                rounded-xl
                bg-blue-600 text-white
                text-sm font-medium
                shadow-[0_8px_25px_rgba(37,99,235,0.3)]
              ">
                CEO
              </div>
            </div>

            {/* LINE */}
            <div className="relative mb-10">
              <div className="h-[2px] bg-gray-200 w-full" />
            </div>

            {/* DEPARTMENTS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {[
                "Technology",
                "Operations",
                "Finance",
                "Business Development",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="
                    px-5 py-4
                    rounded-xl
                    bg-white
                    border border-gray-200
                    text-sm text-gray-700
                    shadow-sm
                    hover:shadow-md
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  {item}
                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}