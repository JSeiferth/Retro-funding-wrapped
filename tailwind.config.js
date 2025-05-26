export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'grow': 'grow 1s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          grow: {
            '0%': { transform: 'scaleY(0)' },
            '100%': { transform: 'scaleY(1)' },
          }
        }
      },
    },
    plugins: [],
  }