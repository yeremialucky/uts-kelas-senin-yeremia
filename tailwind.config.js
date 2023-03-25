/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   lobby: "url('../src/assets/img/background.png')",
      // },

      colors: {
        primary: "#C93D8D",
        secondary: "#DADADA4D",
        hijau: "#22EE98",
        merah: "#FF1515",
        bgdark: "#120227",
        bglight: "#1F0443",
        white80: "#FFFFFFCC",
        white50: "#FFFFFF80",
      },

      fontFamily: {
        poppinsMedium: ["PoppinsMedium", "sans-serif"],
        poppinsSemibold: ["PoppinsSemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
