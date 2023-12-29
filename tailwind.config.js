
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f8f8ff",
        secondary: "#2C74B3",
        third: "#205295",
        forth: "#6b61ff",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "375px",
        sm: "450px",
        'tablet': '640px',
        'cap': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      backgroundImage: {
        "bg": "url('/src/assets/placeholders/blob.svg')",
        "bg-2": "url('/src/assets/bg-2.jpg')",
      },
    },
  },
  plugins: [],
};