import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';
import counter from './modules/counter';
import todos from './modules/todos';

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
  },
  strict: true,
  plugins: [],
});

export default store;
