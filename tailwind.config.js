/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        background: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        background: "background 10s ease-in-out infinite",
      },
    },
    colors: {
      transparent: "transparent",
      black: "#171313",
      white: "#f5f5f5",
      turquoise: {
        50: "#effefb",
        100: "#c8fff2",
        200: "#91fee7",
        300: "#52f6da",
        400: "#37e6cd",
        500: "#05c7ae",
        600: "#01a08f",
        700: "#067f74",
        800: "#0a655d",
        900: "#0e534e",
        950: "#003331",
      },

      lavender: {
        50: "#f5f4fe",
        100: "#edeafd",
        200: "#ddd8fc",
        300: "#c4b8fa",
        400: "#ae99f6",
        500: "#8a63ef",
        600: "#7a42e5",
        700: "#6b30d1",
        800: "#5827b0",
        900: "#4a2290",
        950: "#2d1461",
      },

      rose: {
        50: "#fdf2fa",
        100: "#fce7f7",
        200: "#fbcff0",
        300: "#f795dc",
        400: "#f373cd",
        500: "#eb49b6",
        600: "#da2897",
        700: "#bd197b",
        800: "#9c1865",
        900: "#821956",
        950: "#500731",
      },

      asphalt: {
        50: "#f4f3f2",
        100: "#e3e0de",
        200: "#c9c4bf",
        300: "#a9a19b",
        400: "#91857e",
        500: "#827670",
        600: "#6f635f",
        700: "#5a504e",
        800: "#4e4645",
        900: "#453e3e",
        950: "#201c1c",
      },
    },
  },
  plugins: [],
};
