module.exports = {
  content: ["./**/*.html", "./src/**/*.{js}"],
  theme: {
    extend: {
      colors: {
        brand: '#F2F0F1',
        product: '#F0EEED',
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Set Roboto as the default sans font
        satoshi: ["Satoshi", "sans-serif"], // Set Satoshi as the default sans font
      },
    },
  },
  plugins: [],
};
