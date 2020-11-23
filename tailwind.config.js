const boxShadow = require('./src/styles/boxShadow');
const colors = require('./src/styles/colors');

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      boxShadow,
      colors,
      fontFamily: {
        kalam: ['Kalam'],
        capriola: ['Capriola']
      },
      spacing: {
        routerCourse: '6.7rem',
        '125': '125px'
      },
      backgroundImage: () => ({
        splash:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1606030228/we-are-mini-golf/WAMG_Background_-_Screen_1_xyewsj.png")',
        'course-bg': 'url("../assets/background-course@2x.png")',
        players:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1605962212/we-are-mini-golf/WAMG_Background_-_Screen_3_x8oklr.png")',
        selection:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1605978641/we-are-mini-golf/WAMG_Background_-_Screen_2_ke1t04.png")'
      }),
      container: {
        center: true
      }
    },

    variants: {},
    plugins: []
  }
};
