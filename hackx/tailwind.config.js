/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "text-1": "var(--text-1-font-family)",
      },
      boxShadow: {
        "drop-shadow": "var(--drop-shadow)",
      },
    },
  },
  plugins: [],
};
