module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}', // if you use Tailwind in shared components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
