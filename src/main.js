import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import App from './views/App';
import Counter from './views/Counter';
import Todo from './views/Todo';
import ShoppingCart from './views/ShoppingCart';

Vue.use(VueRouter);

const routes = [
  {
    name: 'counter',
    path: '/counter',
    component: Counter,
  },
  {
    name: 'todo',
    path: '/todo',
    component: Todo,
  },
  {
    name: 'cart',
    path: '/shopping-cart',
    component: ShoppingCart,
  },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // template: '<App />',
  components: { App },
  render: h => h(App),
});
