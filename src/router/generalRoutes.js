export const generalRoutes = [
  {
    path: '/',
    name: 'Splash',
    component: () => import('@/views/Splash.vue'),
    meta: {
      layout: () => import('@/layouts/FullScreenLayout.vue')
    }
  },
  {
    path: '/course/:slug',
    name: 'Splash',
    component: () => import('@/views/Splash.vue'),
    params: true,
    meta: {
      layout: () => import('@/layouts/FullScreenLayout.vue')
    }
  },
  {
    path: '/select-players',
    name: 'SelectPlayers',
    component: () => import('@/views/SelectPlayers.vue'),
    meta: {
      layout: () => import('@/layouts/FullScreenLayout.vue')
    }
  },
  {
    path: '/player-names',
    name: 'NamePlayers',
    component: () => import('@/views/NamePlayers.vue'),
    meta: {
      layout: () => import('@/layouts/FullScreenLayout.vue')
    }
  },
  {
    path: '/game-course',
    name: 'GameCourse',
    component: () => import('@/views/GameCourse.vue'),
    meta: {
      layout: () => import('@/layouts/BottomNavLayout.vue')
    }
  },
  {
    path: '/:mode/:holeNo',
    name: 'GameScores',
    props: route => {
      const holeNo = Number.parseInt(route.params.holeNo);
      if (Number.isNaN(holeNo)) {
        return 0;
      }
      return { holeNo, mode: route.params.mode };
    },
    component: () => import('@/views/GameScores.vue'),
    meta: {
      layout: () => import('@/layouts/BottomNavLayout.vue')
    }
  },
  {
    path: '/current-total',
    name: 'CurrentTotal',
    props: true,
    component: () => import('@/views/CurrentTotal.vue'),
    meta: {
      layout: () => import('@/layouts/BottomNavLayout.vue')
    }
  },
  {
    path: '/hole/:holeNo',
    name: 'NewHole',
    props: true,
    component: () => import('@/views/NewHole.vue'),
    meta: {
      layout: () => import('@/layouts/FullScreenLayout.vue')
    }
  },
  {
    path: '/awards',
    name: 'Awards',
    component: () => import('@/views/Awards.vue'),
    meta: {
      layout: () => import('@/layouts/FullScreenLayout.vue')
    }
  },
  {
    path: '/current-totals',
    name: 'CurrentTotals',
    component: () => import('@/views/CurrentTotal.vue'),
    meta: {
      layout: () => import('@/layouts/BottomNavLayout.vue')
    }
  },
  {
    path: '/final-ranking',
    name: 'FinalRanking',
    component: () => import('@/views/FinalRanking.vue'),
    meta: {
      // layout: () => import('@/layouts/FullScreenLayout.vue')
    }
  },
  {
    path: '/rules',
    name: 'RulesScreen',
    component: () => import('@/components/rules/RulesScreen.vue')
  },
  {
    path: '/last-chance',
    name: 'LastHoleWarning',
    component: () => import('@/views/LastHoleWarning.vue'),
    meta: {
      layout: () => import('@/layouts/FullScreenLayout.vue')
    }
  }
];
