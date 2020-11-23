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
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1605978641/we-are-mini-golf/WAMG_Background_-_Screen_2_ke1t04.png")',
        scores:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1606110468/we-are-mini-golf/WAMG_Background_-_Screen_6_jqgyim.png")',
        newHole:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1606113279/we-are-mini-golf/WAMG_Background_-_Screen_5_par_omfrqj.png")',
      }),
      container: {
        center: true
      }
    },

    variants: {},
    plugins: []
  }
};
