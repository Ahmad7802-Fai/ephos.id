"use client";

import { Container } from "@/components";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#F8FAFC] overflow-hidden">

      {/* subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.08),transparent_50%)]" />

      <Container>

        <div className="max-w-4xl">

          {/* LABEL */}
          <span className="
            inline-flex items-center gap-2
            px-4 py-1.5
            text-xs font-medium
            rounded-full
            bg-blue-50
            text-blue-600
            mb-6
          ">
            About Ephostech.id
          </span>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl md:text-5xl font-semibold
              text-gray-900 leading-tight tracking-tight
            "
          >
            Membangun Solusi IT yang
            <span className="block text-blue-600">
              Stabil, Scalable, dan Terpercaya
            </span>
          </motion.h1>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-gray-600 max-w-xl leading-relaxed"
          >
            Ephostech.id menghadirkan solusi teknologi end-to-end yang membantu bisnis
            berkembang melalui infrastruktur IT, cloud, dan sistem enterprise
            yang efisien dan berkelanjutan.
          </motion.p>

          {/* STATS MINI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
            >
            {[
                "100+ Client",
                "99.9% Uptime",
                "24/7 Support",
            ].map((item, i) => (
                <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="
                    relative inline-flex items-center gap-2
                    px-4 py-2 rounded-full text-xs font-semibold
                    bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500
                    text-black
                    shadow-[0_8px_25px_rgba(251,191,36,0.5)]
                    hover:scale-[1.08]
                    transition-all duration-300
                "
                >
                {/* glow layer */}
                <span className="absolute inset-0 rounded-full bg-yellow-400/30 blur-md opacity-0 hover:opacity-100 transition" />

                {/* dot */}
                <span className="relative w-1.5 h-1.5 bg-black rounded-full" />

                {/* text */}
                <span className="relative">{item}</span>
                </motion.span>
            ))}
            </motion.div>

        </div>

      </Container>
    </section>
  );
}