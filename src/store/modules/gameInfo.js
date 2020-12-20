import axios from 'axios';

const state = {
  gameInfo: {}
};

const getters = {
  getGameInfo: state => {
    return state.gameInfo;
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
          console.log(response);
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
          commit('updateGameInfo', response.data);
          resolve(response.data);
        })
        .catch(e => reject(e));
    });
  }
};

const mutations = {
  updateGameInfo(state, payload) {
    state.gameInfo = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
