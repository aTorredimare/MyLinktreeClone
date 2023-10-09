/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "16px 16px 32px 0px rgba(0,0,0,0.7)",
        pic: "8px 8px 32px -4px rgba(0,0,0,0.6)",
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio")
  ],
}

