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
      },
      boxShadow: {
        fokus: "0 0 10px rgba(0, 0, 0, 0.8)",
      },
    },
  },
};
