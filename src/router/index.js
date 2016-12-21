import Vue from 'vue';
import VueRouter from 'vue-router';

import CounterView from '../views/CounterView';
import TodoView from '../views/TodoView';
import ShoppingCartView from '../views/ShoppingCartView';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'counter',
      path: '/counter',
      component: CounterView,
    },
    {
      name: 'todo',
      path: '/todo',
      component: TodoView,
    },
    {
      name: 'cart',
      path: '/shopping-cart',
      component: ShoppingCartView,
    },
  ],
});
