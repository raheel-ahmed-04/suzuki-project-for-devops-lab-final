/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enables toggling dark mode with the 'dark' class
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        sacramento: ['"Sacramento"', "cursive"],
      },
      colors: {
        primaryLight: "#ffffff", // Light mode background color
        primaryDark: "#1e293b", // Dark mode background color
        textLight: "#0f172a", // Text color for light mode
        textDark: "#e2e8f0", // Text color for dark mode
        accentLight: "#38bdf8", // Accent color for light mode
        accentDark: "#6366f1", // Accent color for dark mode
        customBlue: "#04214B",
        customViolet: "#013299",
        customRed: "#bf1f1f",
      },
      screens: {
        "3xl": "1840px",
      },
    },
  },
  plugins: [],
};
