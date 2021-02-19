import Vue from 'vue';
import App from './App.vue';
import './styles/tailwind.css';
import './registerServiceWorker';
import VueGtm from 'vue-gtm';
import VueMeta from 'vue-meta';
import vClickOutside from 'v-click-outside';
import router from './router';
import store from './store';
import VueClipboard from 'vue-clipboard2';
import Vue2TouchEvents from 'vue2-touch-events';

Vue.config.productionTip = false;

Vue.use(vClickOutside);

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});

Vue.use(VueClipboard);
Vue.use(Vue2TouchEvents, {
  disableClick: true
});

Vue.use(VueGtm, {
  id: ['GTM-59PVXGQ'],
  defer: false,
  enabled: true, // Ex: enabled: !!GDPR_Cookie (optional)
  debug: process.env.CONTEXT !== 'production', // Whether or not display console logs debugs (optional)
  loadScript: true,
  vueRouter: router,
  ignoredViews: ['PanelRedirector']
  // trackOnNextTick: false
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
