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
        // Modo día
        glassWhite: "rgba(255, 255, 255, 0.6)", // Para fondo tipo glass
        lightBase: "#f9f9fb",                  // Base blanca elegante
        lightSurface: "#ffffff",               // Superficie elevada
        lightBorder: "#e0e0e0",                // Borde suave futurista
        lightAccent: "#c2d1ff",                // Azul suave para acento
        lightTextPrimary: "#111111",           // Texto elegante
        lightTextSecondary: "#5f6368",         // Texto secundario

        // Ya definidos previamente
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        primary: "#0D0B1E",
        secondary: "#1E1B36",
        accent: "#A084DC",
        highlight: "#E8D5FF",
        neonGreen: "#00FFCC",
        neonMagenta: "#FF00FF",
        textLight: "#000000",
        textSecondaryLight: "#4B5563",
        textDark: "#ffffff",
        textSecondaryDark: "#A084DC",
      },
      backgroundImage: {
        // darkTheme: "linear-gradient(135deg, #0D0B1E, #1E1B36, #3A2A59, #613D77, #A084DC, #3A2A59)",
        glass: "linear-gradient(145deg, rgba(255,255,255,0.65), rgba(255,255,255,0.3))",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        // Estilo neumórfico / Apple-like
        neumorphic: "6px 6px 16px #d1d9e6, -6px -6px 16px #ffffff",
        glassLight: "0 8px 32px 0 rgba(31, 38, 135, 0.05)",

        // Ya existentes
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
        glow: "0 0 15px rgba(160, 132, 220, 0.6)",
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        neon: "0 0 10px #A084DC, 0 0 20px #A084DC",
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '2xl': '1rem',
        'glass': '1.25rem',
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
