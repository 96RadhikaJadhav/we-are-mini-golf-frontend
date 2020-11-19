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
      layout: () => import('@/layouts/FullScreenLayout.vue')
    }
  },
  {
    path: '/game-scores',
    name: 'GameScores',
    component: () => import('@/views/GameScores.vue'),
    meta: {
      layout: () => import('@/layouts/FullScreenLayout.vue')
    }
  }
];
