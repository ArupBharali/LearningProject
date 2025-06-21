// tailwind.config.js
module.exports = {
  content: [
    '.src/app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    '.src/app/components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}', // <- Add this if you're using /src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
