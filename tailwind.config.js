/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgray: "#d9d9d9",
        gray: "#9c9c9c",
        orange: "#f48915",
        darkGray: "#464d53",
        caloryCard: "#656565",
        planCard: "linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",
        appColor: "#3c3f45",
        mildgray: "#ccc",
      },
    },
  },
  plugins: [],
};
