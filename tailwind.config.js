module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      colors: {
        PrimaryDarkBlue: 'hsl(233, 26%, 24%)',
        PrimaryLimeGreen: 'hsl(136, 65%, 51%)',
        PrimaryBrightCyan: 'hsl(192, 70%, 51%)',
        NeutralGrayishBlue: 'hsl(233, 8%, 62%)',
        NeutralLightGrayishBlue: 'hsl(220, 16%, 96%)',
        NeutralVeryLightGray: 'hsl(0, 0%, 98%)',
        NeutralWhite: 'hsl(0, 0%, 100%)'
      },

      fontFamily: {
        PublicSans: ['"Public San", "sans-serif"']
      }
    },
  },
  plugins: [],
}

