module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        navbg: '#ffffff',
        darkblue:'#2d314d',
        limegreen:'#31d35c',
        brightcyan:'#2bb7da',
        grayishblue:'#9698a6',
        lightgraysh:'#f3f4f6',
        verylightgray:'#fafafa',
        whitetext: '#ffffff',
      },
    },
  },
  variants: {
    extend: {fill: ['hover', 'focus'], },
  },
  plugins: [],
}
