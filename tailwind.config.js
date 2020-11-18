module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        '005D63': '#005D63',
        'ff6350': '#FF6350',
        'acdb58': '#ACDB58',
        '78d03a': '#78D03A',
        '3b9d11': '#3B9D11',
        'ffbb00': '#FFBB00',
        'ea9864': '#EA9864',
        'aeb49a': '#AEB49A',
        'ff6350': '#FF6350',
        'ff8e67': '#FF8E67',
        'f5e3c8': '#F5E3C8',
        '005d63': '#005D63',
        'fff6eb': '#FFF6EB',        
      },
      fontFamily: {
        kalam: ['Kalam'],
        capriola: ['Capriola']
      },
      spacing: {
        'routerCourse': '6.7rem'
      },
      backgroundImage: theme => ({
        'course-bg': "url('../assets/WAMG_Background@2x.png')",
        'players-bg': "url('../assets/background-players@2x.png')",
        'selection-bg': "url('../assets/background-selection@2x.png')",
      })
        
  },

  variants: {},
  plugins: [],
}
}