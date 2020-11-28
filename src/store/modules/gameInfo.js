import { firebaseAction } from 'vuexfire';

const state = {
  ganeInfo: {}
};

const getters = {
  getNumOfPlayers: state => {
    return state.info.numOfPlayers;
  }
};

const actions = {
  setGameInfoRef: firebaseAction((context, ref) => {
    context.bindFirebaseRef('gameInfo', ref);
  })
};

export default {
  namespaced: true,
  state,
  getters,
  actions
};
