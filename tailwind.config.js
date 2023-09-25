/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
      },
    },
  },
  plugins: [],
};
