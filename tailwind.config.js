const colors = require('./src/styles/colors');

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        kalam: ['Kalam'],
        capriola: ['Capriola']
      },
      spacing: {
        routerCourse: '6.7rem',
        'nav-icon': '30px',
        '125': '125px',
        '500': '500px'
      },
      backgroundImage: () => ({
        splash:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1612522855/we-are-mini-golf-prod/Last%20Optimized%20assets/01-Home-screen-with-logo_fae6hq.jpg")',
        players:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1612522854/we-are-mini-golf-prod/Last%20Optimized%20assets/03-Players-name-screen_spodbd.jpg")',
        selection:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1612149424/we-are-mini-golf/large_PLAYERS_4b89e7e130_optimized_pjrvnc.jpg")',
        scores:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1612523315/we-are-mini-golf-prod/Last%20Optimized%20assets/06-Enter-scores-screen-bg-only_der41k.jpg")',
        total:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1607328310/we-are-mini-golf/WAMG_Background_-_Screen_7_2x_xwkyif.png")',
        newHole:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1613001512/we-are-mini-golf/We_are_mini_golf_score_card_transition_screen_yiwo83.jpg")',
        awards:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1607328465/we-are-mini-golf/08_-_Reward_animation_-_green_banner_2x_wenrge.png")',
        rankings:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1613621391/we-are-mini-golf-prod/Last%20Optimized%20assets/09-Final-ranking-bg_1_tkqxhx.jpg")',
        lastHole:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1612778570/we-are-mini-golf-prod/Last%20Optimized%20assets/05-Last-par-transition-screen-bg-only_qmzzyv_v7ty99.jpg")',
        scoreHandBox:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1612777735/we-are-mini-golf-prod/Last%20Optimized%20assets/06-Enter-scores-screen-hand-only_adap7v_jvfh6x_vi99qy.png")',
        unfinishedHoles:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1613626744/we-are-mini-golf/Last-hole-warning-screen_1_pm3nvk.jpg")',
        newHoleBox:
          'url("https://res.cloudinary.com/doblhgoan/image/upload/v1612522854/we-are-mini-golf-prod/Last%20Optimized%20assets/05-Par-transition-screen-hand-only_anxfw3.png")',
        rules: "url('../assets/rules/rules-min.jpg')"
      }),
      container: {
        center: true
      }
    },

    variants: {},
    plugins: []
  }
};
