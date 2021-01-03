import axios from 'axios';

const state = {
  gameInfo: {},
  counter: 0
};

const getters = {
  getGameInfo: state => {
    return state.gameInfo;
  },
  counter: state => {
    return state.counter;
  }
};

const actions = {
  getGameDetails({ commit }) {
    return new Promise((resolve, reject) => {
      let gameDetails = JSON.parse(localStorage.getItem('game-details'));
      axios
        .get(
          `${process.env.VUE_APP_API_URL}/game-informations/${gameDetails.id}`
        )
        .then(response => {
          commit('updateGameInfo', response.data);
          resolve(response.data);
        })
        .catch(e => reject(e));
    });
  },
  updateGameDetails({ commit }, payload) {
    let gameDetails = JSON.parse(localStorage.getItem('game-details'));
    return new Promise((resolve, reject) => {
      axios
        .put(
          `${process.env.VUE_APP_API_URL}/game-informations/${gameDetails.id}`,
          payload
        )
        .then(response => {
          console.log(response.data);
          commit('updateGameInfo', response.data);
          resolve(response.data);
        })
        .catch(e => reject(e));
    });
  },
  increaseCounter: ({ commit }) => {
    commit('increaseCounter');
  }
};

const mutations = {
  updateGameInfo(state, payload) {
    state.gameInfo = payload;
  },
  increaseCounter(state) {
    if (state.counter < state.gameInfo.playersInfo.length - 1) {
      console.log(state.counter);
      return state.counter++;
    } else {
      console.log(state.counter);
      return (state.counter = 0);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
