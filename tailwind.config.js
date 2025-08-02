module.exports = {
    darkMode: 'class', // This enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'acm-blue': '#0a192f',
        'acm-teal': '#64ffda',
      },
      fontFamily: {
        sans: ['Calibre', 'Inter', 'sans-serif'],
      },
            animation: {
        'pulse-slow': 'pulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
