/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#25AE9C",
        secondary: "#2E384D",
      },
      maxWidth: {
        primary: "1280px",
      },
    },
    daisyui: {
      themes: ["light"],
    },
  },
  plugins: [require("daisyui")],
};
