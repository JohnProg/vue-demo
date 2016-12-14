// initial state
const state = {
  added: [],
  checkoutStatus: null,
};

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,
};

// actions
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.added];
    commit('checkoutRequest');
    commit('checkoutSuccess');
  },
};

// mutations
const mutations = {
  addToCart(state, { id }) {
    const product = state.added.find(record => record.id === id);

    if (!product) {
      state.added.push({
        id,
        quantity: 1,
      });
    } else {
      product.quantity += 1;
    }
  },
  checkoutRequest(state) {
    // clear cart
    state.added = [];
    state.checkoutStatus = null;
  },
  checkoutSuccess(state) {
    state.checkoutStatus = 'successful';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
