"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full max-w-[520px]">

        {/* MAIN IMAGE */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [0, -12, 0], opacity: 1 }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ y: -6, scale: 1.015 }}
          className="relative"
        >
          <Image
            src="/assets/premium_photo-1682146029185-198922bd8350.avif"
            alt="Network Infrastructure"
            width={600}
            height={400}
            className="rounded-2xl border border-white/10 object-cover
                       shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
          />

          {/* DARK CINEMATIC OVERLAY */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl
                          bg-[linear-gradient(to_top,rgba(0,0,0,0.75),rgba(0,0,0,0.25),transparent)]" />

          {/* LIGHT STREAK (premium touch 🔥) */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl
                          bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]" />
        </motion.div>

        {/* GLASS CARD */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{ duration: 8, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute bottom-5 left-5 right-5
                     md:bottom-6 md:left-6 md:right-6
                     bg-white/10 backdrop-blur-2xl border border-white/20
                     rounded-xl p-5
                     shadow-[0_15px_50px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-white/70">Network Status</p>
            <span className="text-xs text-green-400 font-medium">● Online</span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white/50">Bandwidth</p>
              <p className="text-white font-semibold text-base">120 Mbps</p>
            </div>
            <div>
              <p className="text-white/50">Users</p>
              <p className="text-white font-semibold text-base">300 Active</p>
            </div>
          </div>
        </motion.div>

        {/* FLOATING MINI CARD */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: [0, -14, 0], opacity: 1 }}
          transition={{ duration: 6, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none hidden sm:block
                     absolute -bottom-8 -left-8
                     bg-white/10 backdrop-blur-xl border border-white/20
                     rounded-xl px-5 py-4
                     shadow-[0_15px_60px_rgba(0,0,0,0.7)]"
        >
          <p className="text-xs text-white/60">Latency</p>
          <p className="text-lg text-white font-semibold">12 ms</p>
        </motion.div>

        {/* TOP FLOATING INDICATOR (NEW 🔥) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-5 left-6
                     bg-blue-500/20 backdrop-blur-md border border-blue-400/30
                     rounded-lg px-3 py-1 text-xs text-blue-200"
        >
          System Stable
        </motion.div>

        {/* GLOW BACKGROUND */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-14 -right-14
                     w-60 h-60 bg-blue-500/20 blur-[140px] rounded-full"
        />

        {/* EXTRA DEPTH SHADOW */}
        <div className="absolute inset-0 -z-10 blur-3xl bg-blue-500/10 rounded-full" />

      </div>
    </div>
  );
}