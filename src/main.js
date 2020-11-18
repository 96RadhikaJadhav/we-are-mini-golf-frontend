import Vue from 'vue';
import App from './App.vue';
import './styles/tailwind.css';
import './registerServiceWorker';
import { rtdbPlugin } from 'vuefire';
import router from './router';
import store from './store';

Vue.use(rtdbPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
