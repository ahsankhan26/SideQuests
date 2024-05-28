/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    require('daisyui'),
    require('tailwind-class-extend'),
    require('@tailwindcss/typography'),
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '16px' },
      });
    }),
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-raleway)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          accent: '#14857A',
        },
      },
    ],
  },
};
