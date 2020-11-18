import { vuexfireMutations, firebaseAction } from 'vuexfire';
import { db } from '../../db.js';

const state = {
  numOfPlayers: 0
};

const getters = {
  getNumOfPlayers: state => {
    return state.numOfPlayers;
  }
};

const actions = {
  setNumOfPlayers: firebaseAction((context, { payload }) => {
    console.log(context);
    return db.ref('common').update({ numOfPlayers: payload.numOfPlayers });
  })
};

const mutations = {
  ...vuexfireMutations
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
