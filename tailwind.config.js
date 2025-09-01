/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{html,js}", // Include public folder if necessary
  ],
  theme: {
    screens: {
      sm: { max: "768px" }, // Correct use of max-width for 'sm'
      md: "768px", // This should define min-width
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      listStyleType: {
        dash: "'-'", // Fixed: add single quotes to indicate it's a string (for dash)
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"], // Added Inter here
        sans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        schoolbook: ['"Century Schoolbook"', "serif"],
      },
      colors: {
        primaryYellow: "#E6BD1C",
        sosfCyan: "#089F8D",
        pink200: "#f7d3e5",
        cyan300: "#95fae3",
        cyan50: "#effefa",
        sosfyPink: "#C7336E",
        pink: "#f00c93",
        cyan: "#55BDB5",
        yellow: "#ffc40c",
        primary_blue: "#0047AB",
        white: "#ffffff",
        milk: "#fafafa",
        grey: "#d3d3d3",
        blue: "#3F5CA8",
        secondary_blue: "#B7C8F4",
        black: "#000000",
        light_blue: "#239ddb",
        dark_blue: "#142850",
      },
      backgroundColor: {
        milk: "#fafafa",
        grey: "#d3d3d3",
        white: "#ffffff",
        blue: "#0284c7",
        secondary_blue: "#B7C8F4",
        primary_blue: "#0047AB",
        black: "#000000",
        cyan: "#acfffc",
        primaryYellow: "#E5CC34",
        cyan300: "#95fae3",
        pink200: "#f7d3e5",
        sosfCyan: "#089F8D",
        sosfyPink: "#EC549F",
        bgVariant: "rgb(8 159 141 / 0.05)",
        cyan950: "#02312f",
        cyan900: "#11504a",
        cyan800: "#0e6159",
        cyan700: "#0b7a6e",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
