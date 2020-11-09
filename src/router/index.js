import Vue from 'vue';
import VueRouter from 'vue-router';
import { generalRoutes } from './generalRoutes';

Vue.use(VueRouter);

const routes = [
  ...generalRoutes,
  {
    path: '/*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router;
