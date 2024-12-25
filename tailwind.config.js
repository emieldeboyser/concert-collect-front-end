/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#024D8A",
        lightblue: "#1985E7",
      },
      fontSize: {
        header: "2.5rem",
        name: "1.25rem",
      },
      fontFamily: {
        body: ["Montserrat"],
      },
      borderRadius: {
        standardT: "1.25rem",
      },
    },
  },
  plugins: [],
};
