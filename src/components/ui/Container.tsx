import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const sizes = {
    default: "max-w-[1280px]",
    wide: "max-w-[1440px]",
    narrow: "max-w-[900px]",
  };

  return (
    <div
      className={`
        w-full
        ${sizes[size]}
        mx-auto
        
        px-4
        sm:px-6
        lg:px-8
        xl:px-10

        ${className}
      `}
    >
      {children}
    </div>
  );
}