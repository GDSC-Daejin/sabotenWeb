/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        'saboten' : '#46A92D',
      },
      backgroundImage:{
        'category_love': "url('/banner/banner1.png')",
        'category_food': "url('/banner/banner1.png')",
        'category_mbti': "url('/banner/banner1.png')",
        'category_worry': "url('/banner/banner1.png')",
        'category_fashion': "url('/banner/banner1.png')",
        'category_job': "url('/banner/banner1.png')",
        'category_finance': "url('/banner/banner1.png')",
        'category_child': "url('/banner/banner1.png')",
      }
    },
  },
  plugins: [],
}
