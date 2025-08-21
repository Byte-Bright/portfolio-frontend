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
      // Base text/bg/border colors
      pattern: /(text|bg|border)-(stone|rose|teal|amber|lime)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'dark', 'group-hover'],
    },
    {
      // Arbitrary selectors like dark:[&_h1]:text-rose-300
      pattern: /dark:\[&_h(1|2)\]:text-(stone|rose|teal|amber|lime)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      // Arbitrary selectors for hover/focus/group-hover with h1/h2
      pattern: /(hover|focus|group-hover):\[&_h(1|2)\]:text-(stone|rose|teal|amber|lime)-(100|200|300|400|500|600|700|800|900)/,
    }
  ],
}

