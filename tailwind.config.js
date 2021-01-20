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
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1607323879/we-are-mini-golf/01_-_Home_screen_2x_os2ukt.png")',
        players:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1607324529/we-are-mini-golf/03_-_Players_name_screen_2x_zcev21.png")',
        selection:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1607324266/we-are-mini-golf/02_-_Select_players_screen_2x_emlwqy.png")',
        scores:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1610794781/we-are-mini-golf/06_-_Enter_scores_screen_-_bg_wo_hand_seajno.png")',
        total:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1607328310/we-are-mini-golf/WAMG_Background_-_Screen_7_2x_xwkyif.png")',
        newHole:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1607324938/we-are-mini-golf/WAMG_Background_-_Screen_5_par_2x_dlevlu.png")',
        awards:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1607328465/we-are-mini-golf/08_-_Reward_animation_-_green_banner_2x_wenrge.png")',
        rankings:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1607328466/we-are-mini-golf/WAMG_Background_-_Screen_9_2x_rxnyem.png")',
        lastHole:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1607328466/we-are-mini-golf/WAMG_Background_-_Screen_6_last_hole_par_2x_abjdkq.png")',
        scoreHandBox:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1610794826/we-are-mini-golf/06_-_Enter_scores_screen_-_transparent_bg_-_cropped_rjtuzq.png")'
      }),
      container: {
        center: true
      }
    },

    variants: {},
    plugins: []
  }
};
