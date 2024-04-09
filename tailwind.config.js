/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "300px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'outfit-semibold':['outfit-semibold','sanf-serif'],
        'outfit-bold':['outfit-bold','sanf-serif'],
        'outfit-extrabold':['outfit-extrabold','sanf-serif'],
        'outfit-regular':['outfit-regular','sanf-serif'],
        'outfit-light':['outfit-light','sanf-serif'],
      },
    },
  },
  plugins: [],
}

