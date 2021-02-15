import Vue from 'vue';
import Vuex from 'vuex';
import gameInfo from './modules/gameInfo';
import course from './modules/course';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { gameInfo, course }
});
