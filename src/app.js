import 'babel-polyfill';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css';

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

const app = new Vue({
  router,
  store,
  ...App,
});

export {
  app,
  router,
  store,
};
