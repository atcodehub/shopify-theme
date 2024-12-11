module.exports = {
  content: ["./**/*.html", "./src/**/*.{js}"],
  theme: {
    extend: {
      colors: {
        brand: '#F2F0F1',
        product: '#F0EEED',
        secondary: '#00000099',
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Set Roboto as the default sans font
        satoshi: ["Satoshi", "sans-serif"], // Set Satoshi font
        integral: ["Integral", "sans-serif"], // Set Satoshi font
      },
      maxWidth: {
        '8xl': '96rem',
      }
    },
  },
  plugins: [],
};
