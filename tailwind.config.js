/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'outfit-semibold':['outfit-semibold','sanf-serif'],
        'outfit-bold':['outfit-bold','sanf-serif'],
        'outfit-extrabold':['outfit-extrabold','sanf-serif'],
        'outfit-regular':['outfit-regular','sanf-serif'],
      },
    },
  },
  plugins: [],
}

