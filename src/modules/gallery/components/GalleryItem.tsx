"use client";

import { motion } from "framer-motion";

export default function GalleryItem({ item }: any) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        group relative overflow-hidden rounded-xl
        border border-[var(--border)]
        bg-[var(--card)]
        shadow-soft
      "
    >
      {/* IMAGE */}
      <img
        src={item.image}
        className="
          w-full h-[220px] object-cover
          transition duration-500
          group-hover:scale-105
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
          opacity-0 group-hover:opacity-100
          transition duration-300
          flex items-end p-4
        "
      >
        <div className="text-white w-full">

          {/* TITLE */}
          <p className="font-medium text-sm">
            {item.title}
          </p>

          {/* LOCATION + YEAR */}
          <p className="text-white/70 text-xs mt-1">
            📍 {item.location} • {item.year}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-1 mt-2">
            {item.tags?.slice(0, 2).map((tag: string, i: number) => (
              <span
                key={i}
                className="
                  text-[10px] px-2 py-0.5 rounded-full
                  bg-white/20 backdrop-blur
                "
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
}