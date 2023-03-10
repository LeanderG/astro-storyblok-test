const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#50b0ae",
        secondary: "#1c243d",
        gelb: "#fff500",
        orange: "#ffe100",
        petrol: "#0b1e25",
        gruen: "#097c24",
        "grau-2": "#eee",
        "grau-3": "#ddd",
        "grau-4": "#878E91",
      },
      boxShadow: {
        fokus: "0 0 10px rgba(0, 0, 0, 0.8)",
      },
      fontFamily: {
        sans: ["Mark", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
