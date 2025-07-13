module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#00010D",
          primary: "#010326",
          secondary: "#2D0140",
          light: "#DEF2F1",
          white: "#FEFFFF",
          c1: "#660273",
          c2: "#A305A6"
        }
      },
      fontFamily: {
        alex: ['"Alex Brush"', 'cursive'],
      },
      animation: {
        'text-glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': {
            textShadow: '0 0 5px #A305A6, 0 0 10px #A305A6, 0 0 15px #660273',
          },
          '100%': {
            textShadow: '0 0 10px #FEFFFF, 0 0 20px #2D0140, 0 0 30px #A305A6',
          },
        },
      },
      
    }
      },
  plugins: [],
}
