import React from "react";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        group relative
        p-5 md:p-6 lg:p-7
        rounded-2xl

        /* Gradient border wrapper */
        bg-[linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))]
        p-[1px]

        transition-all duration-300
        hover:-translate-y-1.5

        ${className}
      `}
    >
      {/* Inner Card */}
      <div
        className="
          relative rounded-2xl h-full

          bg-white/70 dark:bg-[#0B0F14]/70
          backdrop-blur-xl

          border border-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.15)]

          transition-all duration-300
          group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >
        {/* Light reflection (premium touch) */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl
                        bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]
                        opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* Glow effect (subtle) */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl
                        bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent)]
                        opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* Content */}
        <div className="relative z-10 p-5 md:p-6 lg:p-7">
          {children}
        </div>
      </div>
    </div>
  );
}