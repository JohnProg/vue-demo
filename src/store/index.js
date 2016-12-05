import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
  count: 0,
};

const store = new Vuex.Store({
  strict: true,
  state,
  getters: {

  },
  actions,
  mutations,
  plugins: [],
});

export default store;
