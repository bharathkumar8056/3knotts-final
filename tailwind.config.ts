import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#323232", // Dark grey
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#DDD0C8", // Beige
          foreground: "#323232",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F5F1ED",
          foreground: "#6B6B6B",
        },
        accent: {
          DEFAULT: "#E8DDD4",
          foreground: "#323232",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Exact colors from the image
        beige: {
          DEFAULT: "#DDD0C8", // Main beige color
          50: "#FAF8F5",
          100: "#F5F1ED",
          200: "#E8DDD4",
          300: "#DDD0C8", // Main beige
          400: "#D4C3B8",
          500: "#C9B8A8",
          600: "#B5A088",
          700: "#9A8468",
          800: "#7A6748",
          900: "#5A4A28",
        },
        grey: {
          DEFAULT: "#323232", // Main dark grey color
          50: "#F8F8F8",
          100: "#E8E8E8",
          200: "#D8D8D8",
          300: "#C8C8C8",
          400: "#B8B8B8",
          500: "#A8A8A8",
          600: "#888888",
          700: "#686868",
          800: "#484848",
          900: "#323232", // Main dark grey
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
