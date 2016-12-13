import products from './products';

// actions
const actions = {
  addToCart: ({ commit }, product) => {
    if (product.inventory > 0) {
      commit('addToCart', {
        id: product.id,
      });
    }
  },
};

export default {
  actions,
  modules: {
    products,
  },
};
