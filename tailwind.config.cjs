module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'deep-purple': '#320c35',
        'cream-beige': '#f2eebf',
      },
      fontFamily: {
        'brutalist': ['Space Grotesk', 'sans-serif'],
        'glitch': ['Rubik Glitch', 'cursive'],
      },
      backgroundImage: {
        'meow': "url('/meow-bg.png')",
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-right': 'slideInRight 0.5s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(1rem)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideInLeft: {
          'from': { 
            opacity: '0',
            transform: 'translateX(-2rem)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInRight: {
          'from': { 
            opacity: '0',
            transform: 'translateX(2rem)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {
      scale: ['hover', 'group-hover'],
      transform: ['hover', 'group-hover'],
      opacity: ['hover', 'group-hover'],
      translate: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}