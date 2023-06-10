/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'oswald': ['Oswald', 'sans-serif'],
      'zilla-slab': ['Zilla Slab', 'serif'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'commerce-blue': '#22577A',
        'commerce-teal': '#2b7e80',
        'commerce-teal-2': '#38a3a5',
        'commerce-green': '#57CC99',
        'commerce-mint': '#80ED99',
        'commerce-mint-2': '#c7f9cc',
      },
    },
  },
  plugins: [],
}
