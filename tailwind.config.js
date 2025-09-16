/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/home/cybermambo/Documents/harold-portfolio/index.html",
    "/home/cybermambo/Documents/harold-portfolio/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "352px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#303745",
      lightBrown: "#56637B", 
      darkBrown: "#1F242D",
      black: "#0A0C0F",
      white: "#ffffff",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#7CF03D",
      lightOrange: "#5FED12",
      darkOrange: "#4EC20F",
      grey: "#63605d",
      lightGrey: "#bdbbb9",
      darkGrey: "#474747"

    },
    extend: { 
      boxShadow: {
        'cyanShadow': '0px 0px 20px 0px rgba(94, 206, 220, 0.5)',
        'cyanMediumShadow': '10px 10px 200px 150px rgba(60, 253, 197, 0.8)',
        'orangeMediumShadow': '10px 10px 200px 150px rgba(84, 248, 2, 0.8)',
        'orangeShadow': '1px 1px 20px 1px rgba(84, 248, 2, 0.8)',
      }
    },
    fontFamily : {body: ["Fira Sans"], 
      special: ["Roboto"],
    },
  },
  plugins: [],
}
