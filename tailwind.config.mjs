/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#e0d8cd",
        accentuate: "#b69b74",
        darkAccentuate: "#ad956e",
        textColor: "#5d646d",
        contact1: "#a3856c",
        contact2: "#7d6051",
        contact3: "#e0d8cd",
        verde: "#22a88a",
        rojo: "#c04138",
        amarillo: "#fdc619",
        naranja: "#ea7228",
        form: "#2f4858",
      },
      backgroundImage: {
        homeBanner:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url('/src/assets/img/ejemplo/Para.avif')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
