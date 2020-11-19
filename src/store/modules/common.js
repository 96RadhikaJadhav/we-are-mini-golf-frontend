import { firebaseAction } from 'vuexfire';

const state = {
  info: {}
};

const getters = {
  getNumOfPlayers: state => {
    return state.info.numOfPlayers;
  }
};

const actions = {
  setCommonRef: firebaseAction((context, ref) => {
    context.bindFirebaseRef('info', ref);
  })
};

export default {
  namespaced: true,
  state,
  getters,
  actions
};
