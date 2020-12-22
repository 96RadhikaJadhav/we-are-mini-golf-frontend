import Vue from 'vue';
import Vuex from 'vuex';
import gameInfo from './modules/gameInfo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { gameInfo }
});
