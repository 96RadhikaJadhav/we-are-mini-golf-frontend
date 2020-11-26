import Vue from 'vue';
import App from './App.vue';
import './styles/tailwind.css';
import './registerServiceWorker';
import './db.js';
import { rtdbPlugin } from 'vuefire';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(rtdbPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
