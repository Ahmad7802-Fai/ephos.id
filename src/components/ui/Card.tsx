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
        border border-white/10
        bg-white/70 dark:bg-white/5
        backdrop-blur
        shadow-sm
        transition-all duration-300

        hover:-translate-y-1.5
        hover:shadow-xl
        hover:shadow-blue-500/10
        hover:border-blue-400/40

        ${className}
      `}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}