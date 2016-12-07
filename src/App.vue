<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <counter :value="$store.state.count"></counter>
    <todo-list></todo-list>
  </div>
</template>

<script>
import Counter from './components/Counter';
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    Counter,
    TodoList,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
