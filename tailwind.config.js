/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
      },
    },
  },
  plugins: [
    // Adding default values for CSS variables in :root
    ({ addBase }) => {
      addBase({
        ':root': {
          '--color-primary': '0, 0, 0', // Default value
          '--color-secondary': '100, 100, 100',
        },
      });
    },
  ],
};
