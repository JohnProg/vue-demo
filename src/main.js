import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App';
import store from './store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // template: '<App />',
  components: { App },
  render: h => h(App),
});
