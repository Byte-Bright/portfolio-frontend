/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        tron: '0 0 15px rgba(239,68,68,0.5), 0 0 30px rgba(239,68,68,0.2)',
      },
      keyframes: {
        tronpulse: {
          '0%, 100%': { boxShadow: '0 0 10px #ef4444, 0 0 20px #ef4444' },
          '50%': { boxShadow: '0 0 5px #ef4444, 0 0 10px #ef4444' },
        },
      },
      animation: {
        tronpulse: 'tronpulse 2s infinite ease-in-out',
      },
      keyframes: {
        tronrotate: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '400% 50%' },
        },
      },
      animation: {
        tronrotate: 'tronrotate 4s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("neon", ".neon &"); 
      addVariant("tron", ".tron &"); // ✅ Add tron variant
    }
  ],
  safelist: [
    {
      pattern: /(text|bg|border)-(stone|rose|teal|amber|lime|red|white)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'dark', 'neon', 'tron', 'group-hover'],
    },
    {
      pattern: /(hover|focus|group-hover):\[&_h(1|2)\]:text-(stone|rose|teal|amber|lime|red|white)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
}
