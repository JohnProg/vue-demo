import products from './products';
import cart from './cart';

// getters
const getters = {
  cartProducts: state => state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(record => record.id === id);

    return {
      id,
      title: product.title,
      price: product.price,
      quantity,
    };
  }),
};

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
  getters,
  actions,
  modules: {
    products,
    cart,
  },
};
