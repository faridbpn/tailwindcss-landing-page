/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    backgroundImage: {
      services: 'url(../../assets/img/services/bg.svg)',
      testimonials: 'url(../../assets/img/testimonials/bg.svg)',
      departements: 'url(../../assets/img/departments/bg.svg)',
      quoteleft: 'url(../../assets/img/testimonials/quote-left.svg)',
      quoteright: 'url(../../assets/img/testimonials/quote-right.svg)',
    }
  },
  plugins: [],
}

