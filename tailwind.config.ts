import type { Config } from "tailwindcss";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        md: "1.25rem",
        lg: "4rem",
        "2xl": "4rem",
      },
      screens: {
        "2xl": "1330px",
        xl: "1200px",
        lg: "992px",
        md: "768px",
        sm: "576px",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        "light-gray": "#E5E5E5",
        gray: "#C3C3C3",
        "dark-gray": "#7E7E7E",
        black: "#1D1D1D",
        green: "#2D5C43",
        purple: "#393158",
        ocean: "#2A5259",
        olive: "#706947",
      },
      fontFamily: {
        chillax: ["Chillax", "sans-serif"],
        archivo: ["Archivo", "serif"],
      },
      fontSize: {
        "xs-custom": [
          "10px",
          {
            lineHeight: "12px",
          },
        ],
        "2xxl": [
          "28px",
          {
            lineHeight: "36px",
          },
        ],
        "4xxl": [
          "42px",
          {
            lineHeight: "46px",
          },
        ],
      },
      borderRadius: {
        "4xl": "32px",
      },
      padding: {
        29: "124px",
      },
      screens: {
        xs: "374px",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
