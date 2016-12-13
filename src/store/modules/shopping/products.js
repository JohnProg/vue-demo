// initial state
const state = {
  all: [
    {
      id: 1,
      title: 'iPad 4 Mini',
      price: 499,
      inventory: 3,
    },
    {
      id: 2,
      title: 'Surface Pro 4',
      price: '1299',
      inventory: 2,
    },
  ],
};

// getters
const getters = {
  products: state => state.all,
};

// actions
const actions = {
};

// mutations
const mutations = {
  addToCart(state, { id }) {
    const product = state.all.find(record => record.id === id);
    product.inventory -= 1;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
