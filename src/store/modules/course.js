import axios from 'axios';

const state = {
  course: {}
};

const getters = {};

const actions = {
  getCourseDetails() {
    return new Promise((resolve, reject) => {
      let slug = JSON.parse(localStorage.getItem('game-details')).slug;
      axios
        .get(`${process.env.VUE_APP_API_URL}/courses?slug=${slug}`)
        .then(response => {
          resolve(response.data[0]);
        })
        .catch(e => reject(e));
    });
  }
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
