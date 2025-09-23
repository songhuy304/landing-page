/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1E50A2",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5E6E0",
          foreground: "#2C4F3E",
        },
        accent: {
          DEFAULT: "#D4A373",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#FAF6F3",
          foreground: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.25rem" }], // 14px (tăng từ 12px)
        sm: ["1rem", { lineHeight: "1.5rem" }], // 16px (tăng từ 14px)
        base: ["1.125rem", { lineHeight: "1.75rem" }], // 18px (tăng từ 16px)
        lg: ["1.25rem", { lineHeight: "1.75rem" }], // 20px (tăng từ 18px)
        xl: ["1.375rem", { lineHeight: "2rem" }], // 22px (tăng từ 20px)
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px (tăng từ 22px)
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px (tăng từ 24px)
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px (tăng từ 30px)
        "5xl": ["3rem", { lineHeight: "1" }], // 48px (tăng từ 36px)
        "6xl": ["3.75rem", { lineHeight: "1" }], // 60px (tăng từ 48px)
        "7xl": ["4.5rem", { lineHeight: "1" }], // 72px (tăng từ 60px)
        "8xl": ["6rem", { lineHeight: "1" }], // 96px (tăng từ 72px)
        "9xl": ["8rem", { lineHeight: "1" }], // 128px (tăng từ 96px)
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
    },
  },
};
