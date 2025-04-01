/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amber: "#FF9F00",
        slateBlue: "#2F3A62",
        breweryGreen: "#6F8A34",
        lightCream: "#F3E5AB",
        darkCharcoal: "#333333",
      },
    },
  },
  plugins: [],
};
