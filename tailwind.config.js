/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
  {
    pattern: /(text|bg|border)-(stone|rose|teal|amber)-(100|300|400|500|600|900)/,
  },
],

}

