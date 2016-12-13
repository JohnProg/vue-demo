import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';
import counter from './modules/counter';
import todos from './modules/todos';
import shopping from './modules/shopping';

Vue.use(Vuex);

const state = {
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    counter,
    todos,
    shopping,
  },
  strict: true,
  plugins: [],
});

export default store;
