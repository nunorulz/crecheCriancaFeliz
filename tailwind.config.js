/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        roxo: '#622363',
        rosaLeve: '#E8B1D1',
        rosa: '#C73C82',
        rosaHover: '#9F1D60',
        verde: '#71DD3F',
        verdeHover: '#47A01D',
        cinzaNuvem: '#f6f6f6',
        turqueza: '#236687',
        ciano: '#5DDCE3',
        amarelo: '#FAC500',
      },
    },
    fontFamily: {
      Nunito: ['Nunito'],
    },
  },
  plugins: [],
};
