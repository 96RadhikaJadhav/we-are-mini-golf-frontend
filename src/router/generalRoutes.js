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
  }
];
