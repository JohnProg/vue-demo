<template>
  <div id="app">
    <img src="../assets/logo.png" />
    <p>
      <router-link to="/counter">Counter</router-link>
      <router-link to="/todo">Todo</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
};
</script>
