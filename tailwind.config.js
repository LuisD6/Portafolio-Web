/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        primary: "#0D0B1E",
        secondary: "#1E1B36",
        accent: "#A084DC",
        highlight: "#E8D5FF",
      },
      backgroundImage: {
        darkTheme: "linear-gradient(135deg, #0D0B1E, #1E1B36, #3A2A59, #613D77, #A084DC, #3A2A59)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
        glow: "0 0 15px rgba(160, 132, 220, 0.6)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
