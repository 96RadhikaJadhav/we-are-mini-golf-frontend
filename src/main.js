import Vue from 'vue';
import App from './App.vue';
import './styles/tailwind.css';
import './registerServiceWorker';
import { rtdbPlugin } from 'vuefire';
import router from './router';
import store from './store';

import BaseButton from './components/utilities/BaseButton';
import BaseCard from './components/utilities/BaseCard';
import NavMenu from './components/NavMenu';

Vue.config.productionTip = false;

Vue.use(rtdbPlugin);

Vue.component('base-button', BaseButton);
Vue.component('base-card', BaseCard);
Vue.component('nav-menu', NavMenu);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
