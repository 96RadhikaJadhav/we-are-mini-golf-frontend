import Vue from 'vue';
import App from './App.vue';
import './styles/tailwind.css';
import './registerServiceWorker';
import VueGtm from 'vue-gtm';
import VueMeta from 'vue-meta'
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

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

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});