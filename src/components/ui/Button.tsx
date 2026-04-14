import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

export default function Button({
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  // 🎯 SIZE RESPONSIVE
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2 text-sm md:text-base",
    lg: "px-6 py-3 text-base md:text-lg",
  };

  // 🎯 VARIANT
  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg shadow-blue-500/20",
    outline:
      "border border-white/40 text-white hover:bg-white/10 backdrop-blur",
  };

  return (
    <button
      {...props}
      className={`
        ${base}
        ${sizes[size]}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    />
  );
}