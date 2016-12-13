// initial state
const state = {
  count: 0,
};

// getters
const getters = {};

// actions
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
};

// mutations
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
