import { firebaseAction } from 'vuexfire';

const state = {
  playersInfo: []
};

const getters = {};

const actions = {
  setPlayersInfoRef: firebaseAction((context, ref) => {
    context.bindFirebaseRef('playersInfo', ref);
  })
};

export default {
  namespaced: true,
  state,
  getters,
  actions
};
