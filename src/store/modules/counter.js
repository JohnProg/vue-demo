const state = {
  count: 0,
};

const getters = {};

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
};

const mutations = {
  increment: (state) => {
    state.count += 1;
  },
  decrement: (state) => {
    state.count -= 1;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
