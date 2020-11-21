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
      // backgroundImage: theme => ({
      //   'course-bg': "url('../assets/background-course@2x.png')",
      //   'players-bg': "url('../assets/background-players@2x.png')",
      //   'selection-bg': "url('../assets/background-selection@2x.png')",
      // }),
      container: {
        center: true
      }
    },

    variants: {},
    plugins: []
  }
};
