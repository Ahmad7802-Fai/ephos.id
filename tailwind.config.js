/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      /* =========================
         COLORS (PAKAI CSS VAR)
      ========================= */
      colors: {
        bg: "var(--bg)",
        card: "var(--card)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--text-muted)",
      },

      /* =========================
         TYPOGRAPHY SCALE
      ========================= */
      fontSize: {
        display: ["var(--fs-display)", "var(--lh-tight)"],
        h1: ["var(--fs-h1)", "var(--lh-tight)"],
        h2: ["var(--fs-h2)", "var(--lh-tight)"],
        h3: ["var(--fs-h3)", "var(--lh-normal)"],
        body: ["var(--fs-body)", "var(--lh-normal)"],
        small: ["var(--fs-small)", "var(--lh-normal)"],
        xs: ["var(--fs-xs)", "var(--lh-normal)"],
      },

      /* =========================
         BORDER RADIUS
      ========================= */
      borderRadius: {
        DEFAULT: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },

      /* =========================
         SHADOW (SOFT SAAS)
      ========================= */
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        medium: "0 10px 30px rgba(0,0,0,0.08)",
        strong: "0 20px 60px rgba(0,0,0,0.12)",
        glow: "0 0 40px rgba(59,130,246,0.25)",
      },

      /* =========================
         BACKDROP BLUR
      ========================= */
      backdropBlur: {
        xs: "2px",
      },

      /* =========================
         SPACING SYSTEM (OPTIONAL)
      ========================= */
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },

  plugins: [],
};