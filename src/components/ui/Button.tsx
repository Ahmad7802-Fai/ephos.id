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

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2 text-sm md:text-base",
    lg: "px-6 py-3 text-base md:text-lg",
  };

  const variants = {
    primary:
      "text-white bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] shadow-md hover:shadow-[0_10px_40px_rgba(37,99,235,0.5)] hover:scale-[1.03]",
    outline:
      "border border-white/20 text-white hover:bg-white/10 backdrop-blur",
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