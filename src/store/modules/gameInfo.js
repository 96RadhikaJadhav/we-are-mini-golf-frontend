import axios from 'axios';

const state = {
  gameInfo: {},
  counter: 0,
  coursePar: []
};

const getters = {
  getGameInfo: state => {
    return state.gameInfo;
  },
  counter: state => {
    return state.counter;
  },
  getPar: state => {
    return state.coursePar;
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

  updatePar({ commit }) {
    let course = JSON.parse(localStorage.getItem('course-grid'));
    let coursePar = course.squareInfo
      .filter(el => el.holeNo != null)
      .sort((a, b) => {
        return a.holeNo - b.holeNo;
      })
      .map(el => el.par);
    commit('updatePar', coursePar);
  },
  // COUNTER USED FOR LOOPING THROUGH PLAYERS FOR OUTPUTTING QUOTES
  increaseCounter: ({ commit }) => {
    if (state.counter < state.gameInfo.playersInfo.length - 1) {
      commit('increaseCounter');
    } else {
      commit('resetCounter');
    }
  }
};

const mutations = {
  updatePar(state, payload) {
    state.coursePar = payload;
  },
  updateGameInfo(state, payload) {
    state.gameInfo = payload;
  },
  increaseCounter(state) {
    state.counter += 1;
  },
  resetCounter(state) {
    state.counter = 0;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
