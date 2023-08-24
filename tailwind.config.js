/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        openSans: "Open Sans",
      },
      backgroundImage: {
        banner: "url('/images/banner.jpg')",
      },
      colors: {
        customBtnColor: "#f2cd5d",
      },
    },
  },
  plugins: [],
};
